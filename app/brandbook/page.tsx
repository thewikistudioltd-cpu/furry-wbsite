import type { Metadata } from "next";

import { Plate } from "@/components/Art";
import { Note } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Brand Book",
  description:
    "Refpaw's palette, type scale, components and artwork rules, rendered from the same stylesheet the site uses.",
  robots: { index: false, follow: false },
};

const swatches = [
  { name: "Ink navy", hex: "#1B1F3B", light: false },
  { name: "Reference blue", hex: "#4AA3DF", light: false },
  { name: "Avatar pink", hex: "#FF7AA8", light: false },
  { name: "Sticker yellow", hex: "#FFC83D", light: false },
  { name: "Creative mint", hex: "#3ECFA3", light: false },
  { name: "Cool paper", hex: "#F7F9FD", light: true },
  { name: "Warm paper", hex: "#FFFAF3", light: true },
  { name: "Secondary ink", hex: "#5B6480", light: false },
];

export default function BrandbookPage() {
  return (
    <>
      <section className="pagehead atmosphere">
        <div className="wrap">
          <p className="eyebrow">Internal</p>
          <h1 className="h-hero" style={{ fontSize: "clamp(2.3rem,4.4vw,3.4rem)" }}>
            Refpaw brand book
          </h1>
          <p className="lead">
            Everything below is rendered from <code>app/globals.css</code>, so this page can
            never drift from the live site.
          </p>
        </div>
      </section>

      <section className="section-sm">
        <div className="wrap">
          <h2 className="h-section">Color</h2>
          <p className="lead measure">
            Navy carries text and the primary button. The four brand colors are wayfinding
            accents and artwork tints, never large competing blocks. The three ink tints exist
            because the bright versions do not reach 4.5:1 on white.
          </p>

          <div className="grid grid-4" style={{ margin: "32px 0 16px" }}>
            {swatches.map((s) => (
              <div className="card" style={{ padding: 0, overflow: "hidden" }} key={s.hex}>
                <div
                  style={{
                    height: 92,
                    background: s.hex,
                    borderBottom: s.light ? "1px solid var(--line)" : undefined,
                  }}
                />
                <div className="card-body" style={{ padding: 16 }}>
                  <strong>{s.name}</strong>
                  <br />
                  <code>{s.hex}</code>
                </div>
              </div>
            ))}
          </div>

          <p>
            Accent text tints, used for the highlighted word in a heading and for links:{" "}
            <span className="accent-blue">
              <strong>#2A7FB8</strong>
            </span>
            ,{" "}
            <span className="accent-pink">
              <strong>#D4426E</strong>
            </span>
            ,{" "}
            <span className="accent-mint">
              <strong>#178E68</strong>
            </span>
            .
          </p>
        </div>
      </section>

      <section className="section section-paper">
        <div className="wrap">
          <h2 className="h-section">Type</h2>
          <p className="lead measure">
            Fredoka for display, DM Sans for everything else, both loaded by next/font. No
            third family.
          </p>
          <div style={{ marginTop: 32 }}>
            <p className="eyebrow">Eyebrow &middot; DM Sans 700, 13px, .14em tracking</p>
            <p className="h-hero" style={{ marginBottom: ".5em" }}>
              Hero heading
            </p>
            <p
              className="h-section"
              style={{ fontFamily: "var(--display)", fontWeight: 600, marginBottom: ".5em" }}
            >
              Section heading
            </p>
            <p className="h-card" style={{ fontFamily: "var(--display)", fontWeight: 600 }}>
              Card heading
            </p>
            <p className="lead">
              Lead paragraph. Fursona art, drawn by hand, by artists you can name.
            </p>
            <p>
              Body copy. A reference sheet is the one drawing that shows what your character
              looks like from every side, so it pays to get it right once.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="h-section">Buttons and links</h2>
          <div className="btn-row">
            <span className="btn btn-primary">Primary</span>
            <span className="btn btn-ghost">Ghost</span>
            <span className="btn btn-sun">Sun</span>
            <span className="btn btn-primary btn-sm">Small primary</span>
          </div>

          <h2 className="h-section" style={{ marginTop: 56 }}>
            Badges
          </h2>
          <div className="chip-row">
            <span className="badge badge-mint badge-dot">Open</span>
            <span className="badge badge-sun badge-dot">2 slots left</span>
            <span className="badge badge-blue badge-dot">Coloring</span>
            <span className="badge badge-pink badge-dot">Delivered</span>
            <span className="badge">Closed</span>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="wrap wrap-wide">
          <h2 className="h-section">Artwork rules</h2>
          <p className="lead measure">
            Artwork sits in a tinted plate so mixed aspect ratios and mixed backgrounds still
            line up on a grid. Ref sheets use <code>contain</code> because the whole sheet is
            the product; character art uses <code>cover</code>. Every plate carries a credit
            tag.
          </p>
          <div className="grid grid-3" style={{ marginTop: 32 }}>
            <div>
              <Plate art="refsheet-coyote" ratio="4x3" />
              <p style={{ fontSize: 14, color: "var(--ink-faint)", marginTop: 10 }}>
                <code>contain</code> on a tinted plate &mdash; ref sheets
              </p>
            </div>
            <div>
              <Plate art="icon-bust-coyote" ratio="4x3" />
              <p style={{ fontSize: 14, color: "var(--ink-faint)", marginTop: 10 }}>
                <code>cover</code> &mdash; character art and icons
              </p>
            </div>
            <div>
              <Plate art="scene-portal-wolf" ratio="4x3" />
              <p style={{ fontSize: 14, color: "var(--ink-faint)", marginTop: 10 }}>
                Credit tag is never optional
              </p>
            </div>
          </div>

          <div style={{ marginTop: 32, maxWidth: "74ch" }}>
            <Note>
              <strong>No generated imagery.</strong> Refpaw promises no AI at any stage. Every
              image on the site must come from <code>lib/artwork.json</code>, with a named
              human artist in the credit field and permission to show it.
            </Note>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="h-section">Logo</h2>
          <div className="grid grid-3" style={{ marginTop: 28 }}>
            <div className="card" style={{ padding: 32, display: "grid", placeItems: "center" }}>
              <img
                src="/branding/refpaw-horizontal.svg"
                alt="Refpaw horizontal lockup"
                style={{ maxHeight: 60, width: "auto" }}
              />
            </div>
            <div className="card" style={{ padding: 32, display: "grid", placeItems: "center" }}>
              <img
                src="/branding/refpaw-stacked.svg"
                alt="Refpaw stacked lockup"
                style={{ maxHeight: 92, width: "auto" }}
              />
            </div>
            <div
              className="card"
              style={{
                padding: 32,
                display: "grid",
                placeItems: "center",
                background: "var(--navy)",
              }}
            >
              <img
                src="/branding/refpaw-icon-light.svg"
                alt="Refpaw paw mark for dark backgrounds"
                style={{ maxHeight: 60, width: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
