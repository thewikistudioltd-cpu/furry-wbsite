import type { Metadata } from "next";
import Link from "next/link";

import { Plate } from "@/components/Art";
import { Crumbs, CtaPanel, TrustRow } from "@/components/blocks";
import { JsonLd } from "@/components/JsonLd";
import { Tbc } from "@/components/Tbc";
import { pageMetadata } from "@/lib/metadata";
import { vars } from "@/lib/site";
import { serviceJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: "First Fursona Bundle: Ref Sheet, Icon, Stickers",
  description:
    "New to the fandom? Get a ref sheet, an icon and six stickers of your character from one named artist, in one consistent style.",
  path: "/first-fursona-bundle",
});

const parts = [
  {
    art: "refsheet-fox-winter",
    title: "A Standard ref sheet",
    copy: "Front and back view, palette and expressions.",
  },
  {
    art: "icon-bust-coyote",
    title: "A shaded icon",
    copy: "Cropped for every platform you use.",
  },
  {
    art: "sticker-coyote-grin",
    title: "A pack of six stickers",
    copy: "Your character’s six most-used moods.",
  },
];

const structuredData = serviceJsonLd({
  name: "First fursona bundle",
  description:
    "A coordinated fursona reference sheet, profile icon and six stickers drawn by one named human artist.",
  path: "/first-fursona-bundle/",
});

export default function BundlePage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <section className="pagehead atmosphere">
        <div className="wrap">
          <Crumbs
            trail={[
              { label: "Home", href: "/" },
              { label: "What we draw", href: "/commissions" },
              { label: "First fursona bundle" },
            ]}
          />
          <p className="eyebrow eyebrow-mint">First fursona bundle</p>
          <h1 className="h-hero" style={{ fontSize: "clamp(2.3rem,4.4vw,3.4rem)" }}>
            Your first fursona, all in one go
          </h1>
          <p className="lead">
            If you are new to the fandom, the first question is usually &ldquo;where do I
            start?&rdquo; Start here. One artist draws your character three ways, in one style,
            so it looks the same in every chat and on every profile.
          </p>
          <div className="btn-row">
            <Link className="btn btn-primary" href="/start?product=bundle">
              Start a bundle
            </Link>
            <Link className="btn btn-ghost" href="#price">
              See the price
            </Link>
          </div>
          <TrustRow />
        </div>
      </section>

      <section className="section-sm">
        <div className="wrap">
          <div style={{ marginBottom: 40 }}>
            <p className="eyebrow eyebrow-blue">Inside the bundle</p>
            <h2 className="h-section">What is in the bundle</h2>
          </div>
          <div className="grid grid-3">
            {parts.map((part) => (
              <article className="card" key={part.title}>
                <Plate art={part.art} ratio="4x3" credit={false} />
                <div className="card-body">
                  <h3 className="h-card">{part.title}</h3>
                  <p style={{ color: "var(--ink-soft)", fontSize: 15 }}>{part.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="wrap">
          <div className="split">
            <div className="split-art">
              <Plate art="refsheet-coyote" ratio="4x3" />
            </div>
            <div>
              <p className="eyebrow">Consistency</p>
              <h2 className="h-section">Why one artist matters</h2>
              <p>
                When three different artists draw the same character, the colors and
                proportions drift. With one artist, your icon matches your ref sheet and your
                stickers match both.
              </p>
              <p>
                You talk to that one artist for the whole order, by email, Telegram or Discord.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="price">
        <div className="wrap">
          <div className="grid grid-2">
            <div>
              <p className="eyebrow eyebrow-yellow">Price</p>
              <h2 className="h-section">What it costs</h2>
              <p
                className="price"
                style={{ fontSize: "2.4rem", display: "block", marginBottom: 8 }}
              >
                <Tbc>{`$${vars.price_bundle}`}</Tbc>
              </p>
              <p>
                <Tbc>
                  {`Ordered separately, the same three pieces cost $${vars.price_bundle_separate}.`}
                </Tbc>
              </p>
              <div className="btn-row">
                <Link className="btn btn-primary" href="/start?product=bundle">
                  Start a bundle
                </Link>
              </div>
            </div>
            <div>
              <p className="eyebrow eyebrow-mint">No design yet?</p>
              <h2 className="h-section">That is fine</h2>
              <p>
                Tell your artist the species, the colors you like and a little about the
                personality. They will sketch two or three directions before starting the ref
                sheet.
              </p>
              <div className="btn-row">
                <Link className="btn btn-ghost" href="/blog/describe-your-fursona">
                  How to describe your fursona
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaPanel />
    </>
  );
}
