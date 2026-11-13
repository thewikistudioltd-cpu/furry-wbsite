"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    // next frame, not synchronously, so a page opened part-way down still
    // gets the border without a cascading render on mount
    const id = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (item: (typeof site.nav)[number]) =>
    item.match.some(
      (m) => pathname === `/${m}` || pathname === `/${m}/` || pathname.startsWith(`/${m}/`),
    );

  return (
    <header
      className={`site-header${stuck ? " is-stuck" : ""}${open ? " nav-open" : ""}`}
      id="site-header"
    >
      <div className="wrap wrap-wide header-inner">
        <Link className="brand" href="/">
          <img src="/branding/refpaw-icon.svg" alt="" width={34} height={34} />
          <b>
            refpaw<span>.</span>
          </b>
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span className="visually-hidden">Menu</span>
        </button>

        <nav className="nav" id="site-nav" aria-label="Main">
          {site.nav.map((item) => {
            const active = isActive(item);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "is-active" : undefined}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <span className="header-cta">
            <Link
              className="btn btn-primary btn-sm"
              href="/start"
              onClick={() => setOpen(false)}
            >
              Start a commission
            </Link>
          </span>
        </nav>
      </div>
    </header>
  );
}
