import type { Metadata } from "next";
import Link from "next/link";

import { Plate } from "@/components/Art";
import { Crumbs, CtaPanel } from "@/components/blocks";
import { pageMetadata } from "@/lib/metadata";
import { species } from "@/lib/species";

export const metadata: Metadata = pageMetadata({
  title: "Fursona Species Guides and Art Commissions",
  description:
    "Explore wolf, fox, dragon and protogen fursona guides, then commission a ref sheet, icon or sticker pack from a named human artist.",
  path: "/species",
});

export default function SpeciesIndexPage() {
  return (
    <>
      <section className="pagehead atmosphere">
        <div className="wrap">
          <Crumbs trail={[{ label: "Home", href: "/" }, { label: "Species guides" }]} />
          <p className="eyebrow eyebrow-mint">Species guides</p>
          <h1 className="h-hero" style={{ fontSize: "clamp(2.3rem,4.4vw,3.4rem)" }}>
            Fursona species guides and art commissions
          </h1>
          <p className="lead">
            Start with the details that make each species recognizable, then choose a named
            artist to draw your ref sheet, icon or sticker pack.
          </p>
        </div>
      </section>

      <section className="section-sm">
        <div className="wrap wrap-wide">
          <div className="grid grid-2">
            {species.map((item) => (
              <article className="card card-hover" key={item.slug}>
                <Plate art={item.sheet} ratio="16x9" credit={false} />
                <div className="card-body">
                  <p className="eyebrow">{item.eyebrow}</p>
                  <h2 className="h-card">{item.name} fursona guide</h2>
                  <p>{item.intro}</p>
                  {item.noWorkYet && (
                    <p style={{ color: "var(--ink-faint)", fontSize: 14 }}>
                      Matching Refpaw portfolio work is still pending.
                    </p>
                  )}
                  <Link className="tlink" href={`/species/${item.slug}`}>
                    Read the {item.name.toLowerCase()} guide
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaPanel />
    </>
  );
}
