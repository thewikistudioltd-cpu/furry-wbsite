import type { Metadata } from "next";
import Link from "next/link";

import { ArtFigure, Plate } from "@/components/Art";
import { Crumbs, CtaPanel, TrustRow } from "@/components/blocks";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { Tbc } from "@/components/Tbc";
import { pageMetadata } from "@/lib/metadata";
import { species } from "@/lib/species";
import { vars } from "@/lib/site";
import { serviceJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: "Furry Ref Sheet Commissions by Real Artists",
  description:
    "Commission a fursona reference sheet from a named artist. Front and back view, color palette and expressions. SFW only, no AI.",
  path: "/furry-ref-sheet-commission",
});

const tiers = [
  {
    title: "Simple",
    price: vars.price_sheet_simple,
    featured: false,
    items: ["Flat color", "Front and back view", "Color palette with hex codes"],
  },
  {
    title: "Standard",
    price: vars.price_sheet_standard,
    featured: true,
    items: ["Everything in Simple", "Shading", "Two expressions", "Detail callouts"],
  },
  {
    title: "Fursuit-ready",
    price: vars.price_sheet_fursuit,
    featured: false,
    items: [
      "Everything in Standard",
      "Side view",
      "Paw and tail details",
      "Fabric color notes for your maker",
    ],
  },
];

const structuredData = serviceJsonLd({
  name: "Furry ref sheet commission",
  description:
    "A custom character reference sheet drawn by a named human artist, with character views, a color palette and expression details.",
  path: "/furry-ref-sheet-commission/",
});

export default function RefSheetPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <section className="pagehead atmosphere">
        <div className="wrap">
          <Crumbs
            trail={[
              { label: "Home", href: "/" },
              { label: "What we draw", href: "/commissions" },
              { label: "Ref sheets" },
            ]}
          />
          <p className="eyebrow eyebrow-blue">Ref sheets</p>
          <h1 className="h-hero" style={{ fontSize: "clamp(2.3rem,4.4vw,3.4rem)" }}>
            Furry ref sheet commissions, drawn by hand
          </h1>
          <p className="lead">
            A reference sheet is the one drawing that shows what your character looks like from
            every side. Artists, fursuit makers and friends all work from it, so it pays to get
            it right once. At Refpaw you choose the artist, and you see a sketch before any
            color goes down.
          </p>
          <div className="btn-row">
            <Link className="btn btn-primary" href="/start?product=ref-sheet">
              Order a ref sheet
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
              <Plate art="refsheet-coyote" ratio="4x3" />
            </div>
            <div>
              <h2 className="h-section">What your fursona reference sheet includes</h2>
              <ul className="prose" style={{ paddingLeft: "1.2em" }}>
                <li>Front and back view, full body</li>
                <li>Color palette with hex codes</li>
                <li>Two expressions</li>
                <li>Callouts for markings, scars, accessories and anything easy to miss</li>
                <li>Full-size PNG, plus a transparent version of each view</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="wrap">
          <div style={{ marginBottom: 44 }}>
            <p className="eyebrow">Pick the level of detail</p>
            <h2 className="h-section">Three tiers, one artist</h2>
            <p className="lead measure">
              <Tbc>
                {`Every tier includes ${vars.sketch_rounds_lc} rounds of changes at sketch stage and full-size files at the end.`}
              </Tbc>
            </p>
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
                  href="/start?product=ref-sheet"
                >
                  Order {tier.title}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="split split-flip">
            <div className="split-art">
              <Plate art="refsheet-fox-winter" ratio="4x3" />
            </div>
            <div>
              <h2 className="h-section">What to send your artist</h2>
              <p>
                You do not need a finished design. Send whatever you have: a written
                description, an old drawing, photos of the animal, a color you like. The more
                you send, the closer the first sketch will be.
              </p>
              <p>
                <Tbc>
                  {`No character yet? Your artist can sketch two or three directions for you to choose from. Character design from scratch adds $${vars.price_design_addon}.`}
                </Tbc>
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

      <section className="section section-paper">
        <div className="wrap">
          <div className="grid grid-2">
            <div>
              <p className="eyebrow eyebrow-mint">Species</p>
              <h2 className="h-section">Species we draw</h2>
              <p>
                Wolves, foxes, dragons, cats, dogs, protogens, sergals, avali, hybrids and
                original species. If yours is a closed species, tell us and we will follow the
                rules set by its creator.
              </p>
              <div className="chip-row" style={{ marginTop: 22 }}>
                {species.map((s) => (
                  <Link className="chip" href={`/species/${s.slug}`} key={s.slug}>
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow eyebrow-yellow">Timing</p>
              <h2 className="h-section">How long it takes</h2>
              <p>
                <Tbc>
                  {`Most ref sheets take ${vars.time_sheet} from the approved sketch. Your artist confirms the date before you pay, and the public queue shows your place.`}
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

      <section className="section" id="examples">
        <div className="wrap wrap-wide">
          <Reveal style={{ marginBottom: 40 }}>
            <p className="eyebrow">Examples</p>
            <h2 className="h-section">Ref sheets by our artists</h2>
          </Reveal>
          <Reveal className="art-grid" stagger>
            <ArtFigure art="refsheet-saarema" ratio="16x9" wide />
            <ArtFigure art="refsheet-coyote" />
            <ArtFigure art="refsheet-violet-hyena" />
            <ArtFigure art="refsheet-orca-canine" ratio="16x9" wide />
            <ArtFigure art="refsheet-grey-wolf" />
            <ArtFigure art="refsheet-crimson-lizard" />
            <ArtFigure art="refsheet-monochrome-wolf" ratio="16x9" wide />
            <ArtFigure art="refsheet-fox-winter" />
          </Reveal>
        </div>
      </section>

      <CtaPanel />
    </>
  );
}
