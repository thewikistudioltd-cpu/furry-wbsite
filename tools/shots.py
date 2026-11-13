#!/usr/bin/env python3
"""Render pages of the exported site to PNG so the layout can be reviewed.

    npm run build          # writes out/
    python tools/shots.py                      # home, desktop + mobile
    python tools/shots.py work species/wolf    # named routes
    python tools/shots.py desktop blog         # one viewport only

Writes to docs/shots/<route>-<desktop|mobile>.png. Serves out/, so run it
after a build. Needs playwright: pip install playwright && playwright install
chromium
"""

from __future__ import annotations

import functools
import http.server
import socketserver
import sys
import threading
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
SITE = ROOT / "out"
OUT = ROOT / "docs" / "shots"
PORT = 8719

VIEWS = {
    "desktop": {"width": 1440, "height": 900},
    "mobile": {"width": 390, "height": 844},
}


def serve() -> socketserver.TCPServer:
    handler = functools.partial(
        http.server.SimpleHTTPRequestHandler, directory=str(SITE)
    )
    httpd = socketserver.TCPServer(("127.0.0.1", PORT), handler)
    httpd.allow_reuse_address = True
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    return httpd


def main() -> int:
    if not SITE.is_dir():
        print("out/ not found — run `npm run build` first")
        return 1

    args = sys.argv[1:]
    views = VIEWS
    if args and args[0] in VIEWS:
        views = {args[0]: VIEWS[args[0]]}
        args = args[1:]
    routes = args or [""]

    OUT.mkdir(parents=True, exist_ok=True)
    httpd = serve()
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch()
            for view, size in views.items():
                ctx = browser.new_context(viewport=size, device_scale_factor=1)
                page = ctx.new_page()
                for route in routes:
                    path = route.strip("/")
                    page.goto(
                        f"http://127.0.0.1:{PORT}/{path + '/' if path else ''}",
                        wait_until="networkidle",
                    )
                    page.wait_for_timeout(400)

                    # force every lazy image to load before the capture
                    page.evaluate(
                        "document.querySelectorAll('img[loading=lazy]')"
                        ".forEach(i => { i.loading = 'eager'; })"
                    )
                    page.evaluate(
                        "Promise.all([...document.images].filter(i => !i.complete)"
                        ".map(i => new Promise(r => { i.onload = i.onerror = r; })))"
                    )
                    page.wait_for_timeout(400)

                    # bring every reveal element in before the capture
                    page.evaluate(
                        "document.querySelectorAll('.reveal, .reveal-stagger')"
                        ".forEach(el => el.classList.add('is-in'))"
                    )

                    # walk the page so every image is decoded and painted;
                    # a full-page capture alone leaves off-screen art blank
                    page.evaluate(
                        """async () => {
                            const step = window.innerHeight;
                            for (let y = 0; y < document.body.scrollHeight; y += step) {
                                window.scrollTo(0, y);
                                await new Promise(r => setTimeout(r, 120));
                            }
                            window.scrollTo(0, 0);
                            await Promise.all(
                                [...document.images].map(i => i.decode().catch(() => {})),
                            );
                        }"""
                    )

                    # a sticky header is painted at its stuck offset in a
                    # full-page capture, which looks like it overlaps content
                    page.add_style_tag(
                        content=".site-header { position: static !important; }"
                    )
                    page.wait_for_timeout(400)

                    name = path.replace("/", "-") or "index"
                    target = OUT / f"{name}-{view}.png"
                    page.screenshot(path=str(target), full_page=True)
                    print(f"  {target.relative_to(ROOT)}")
                ctx.close()
            browser.close()
    finally:
        httpd.shutdown()
    return 0


if __name__ == "__main__":
    sys.exit(main())
