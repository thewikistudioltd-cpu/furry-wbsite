import type { Metadata } from "next";
import Link from "next/link";

import { ArtFigure, Plate } from "@/components/Art";
import { Crumbs, CtaPanel, TrustRow } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { Tbc } from "@/components/Tbc";
import { vars } from "@/lib/site";

export const metadata: Metadata = {
  title: "Furry Icon and PFP Commissions",
  description: `Get a hand-drawn furry icon for Telegram, Discord and Bluesky. Flat or shaded, square and round crops. From $${vars.price_icon_flat}. Drawn by a named artist.`,
  alternates: { canonical: "/furry-icon-commission" },
};

const tiers = [
  {
    title: "Flat color",
    price: vars.price_icon_flat,
    featured: false,
    cta: "Order flat",
    items: ["Clean lines and flat color", "Best for small sizes", "Square and round crops"],
  },
  {
    title: "Shaded",
    price: vars.price_icon_shaded,
    featured: true,
    cta: "Order shaded",
    items: [
      "Everything in Flat color",
      "Light and shadow for more depth",
      "Transparent version included",
    ],
  },
  {
    title: "Matching pair",
    price: vars.price_icon_pair,
    featured: false,
    cta: "Order a pair",
    items: [
      "Two icons in one style",
      "For you and a friend or partner",
      "Drawn by the same artist",
    ],
  },
];

export default function IconPage() {
  return (
    <>
      <section className="pagehead atmosphere">
        <div className="wrap">
          <Crumbs
            trail={[
              { label: "Home", href: "/" },
              { label: "What we draw", href: "/commissions" },
              { label: "Icons" },
            ]}
          />
          <p className="eyebrow">Icons</p>
          <h1 className="h-hero" style={{ fontSize: "clamp(2.3rem,4.4vw,3.4rem)" }}>
            Furry icon commissions for every profile
          </h1>
          <p className="lead">
            Your icon is the first thing people see in a chat or a feed. A Refpaw artist draws
            your character as a clean headshot that still reads at thumbnail size.
          </p>
          <div className="btn-row">
            <Link className="btn btn-primary" href="/start?product=icon">
              Order an icon
            </Link>
            <Link className="btn btn-ghost" href="#examples">
              See examples
            </Link>
          </div>
          <TrustRow />
        </div>
      </section>

      <section className="section-sm">
        <div className="wrap">
          <div className="split">
            <div className="split-art">
              <Plate art="icon-bust-coyote" ratio="1x1" />
            </div>
            <div>
              <h2 className="h-section">What you get</h2>
              <ul className="prose" style={{ paddingLeft: "1.2em" }}>
                <li>One headshot, flat or shaded</li>
                <li>Square and round crops</li>
                <li>Sizes for Telegram, Discord, Bluesky, X and Fur Affinity</li>
                <li>A version with a transparent background</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="wrap">
          <div style={{ marginBottom: 44 }}>
            <p className="eyebrow eyebrow-blue">Options</p>
            <h2 className="h-section">Pick how much depth you want</h2>
          </div>
          <div className="grid grid-3">
            {tiers.map((tier) => (
              <article
                className={`card tier${tier.featured ? " tier-featured" : ""}`}
                key={tier.title}
              >
                {tier.featured && (
                  <span className="badge badge-pink" style={{ alignSelf: "flex-start" }}>
                    Most ordered
                  </span>
                )}
                <h3 className="h-card">{tier.title}</h3>
                <p className="price">
                  <Tbc>{`$${tier.price}`}</Tbc>
                </p>
                <ul>
                  {tier.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <Link
                  className={`btn btn-sm btn-block ${tier.featured ? "btn-primary" : "btn-ghost"}`}
                  href="/start?product=icon"
                >
                  {tier.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid grid-2">
            <div>
              <p className="eyebrow eyebrow-mint">Colors</p>
              <h2 className="h-section">Already have a ref sheet?</h2>
              <p>
                Send it and your artist will match the colors exactly. If you do not have one, a
                description and a few colors are enough for an icon.
              </p>
              <div className="btn-row">
                <Link className="btn btn-ghost" href="/furry-ref-sheet-commission">
                  Get a ref sheet too
                </Link>
              </div>
            </div>
            <div>
              <p className="eyebrow eyebrow-yellow">Timing</p>
              <h2 className="h-section">How long it takes</h2>
              <p>
                <Tbc>
                  {`Icons usually take ${vars.time_icon} from the approved sketch. Your artist confirms the date before you pay.`}
                </Tbc>
              </p>
              <div className="btn-row">
                <Link className="btn btn-ghost" href="/queue">
                  See the public queue
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-paper" id="examples">
        <div className="wrap wrap-wide">
          <Reveal style={{ marginBottom: 40 }}>
            <p className="eyebrow">Examples</p>
            <h2 className="h-section">Headshots by our artists</h2>
            <p className="lead measure">
              Icons are cropped from headshot work like this. Ask your artist to show you their
              icon crops before you order.
            </p>
          </Reveal>
          <Reveal className="art-grid" stagger>
            <ArtFigure art="icon-bust-coyote" ratio="1x1" />
            <ArtFigure art="icon-halloween-cat" ratio="1x1" />
            <ArtFigure art="art-samurai-fox" ratio="1x1" />
            <ArtFigure art="art-moon-badger" ratio="1x1" />
          </Reveal>
        </div>
      </section>

      <CtaPanel />
    </>
  );
}
