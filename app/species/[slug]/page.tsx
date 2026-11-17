import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArtFigure, Plate } from "@/components/Art";
import { Crumbs, CtaPanel } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { Tbc } from "@/components/Tbc";
import { artSrc } from "@/lib/artwork";
import { species, speciesBySlug } from "@/lib/species";
import { vars } from "@/lib/site";

export function generateStaticParams() {
  return species.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = speciesBySlug(slug);
  if (!s) return {};
  return {
    title: `${s.name} Fursona Ref Sheet and Art Commissions`,
    description: `Commission ${s.name.toLowerCase()} fursona art from an artist who knows the species. Ref sheets, icons and sticker packs. SFW only, no AI.`,
    alternates: { canonical: `/species/${s.slug}` },
    robots: s.noWorkYet ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "website",
      title: `${s.name} Fursona Ref Sheet and Art Commissions`,
      description: s.intro,
      url: `/species/${s.slug}`,
      images: [artSrc(s.sheet)],
    },
  };
}

const tiers = [
  {
    title: "Ref sheet",
    price: vars.price_sheet_simple,
    href: "/furry-ref-sheet-commission",
    cta: "See ref sheets",
    items: ["Front and back view", "Color palette with hex codes", "Expressions and callouts"],
  },
  {
    title: "Icon",
    price: vars.price_icon_flat,
    href: "/furry-icon-commission",
    cta: "See icons",
    items: ["Headshot, flat or shaded", "Square and round crops", "Transparent version"],
  },
  {
    title: "Sticker pack",
    price: vars.price_stickers_6,
    href: "/furry-telegram-sticker-commission",
    cta: "See sticker packs",
    items: ["Six expressions you choose", "512px transparent PNGs", "Discord emote sizes"],
  },
];

export default async function SpeciesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = speciesBySlug(slug);
  if (!s) notFound();

  return (
    <>
      <section className="pagehead atmosphere">
        <div className="wrap">
          <Crumbs
            trail={[
              { label: "Home", href: "/" },
              { label: "What we draw", href: "/commissions" },
              { label: s.name },
            ]}
          />
          <p className="eyebrow">{s.eyebrow}</p>
          <h1 className="h-hero" style={{ fontSize: "clamp(2.3rem,4.4vw,3.4rem)" }}>
            {s.title}
          </h1>
          <p className="lead">{s.intro}</p>
          <div className="btn-row">
            <Link className="btn btn-primary" href="/start?product=ref-sheet">
              Start a commission
            </Link>
            <Link className="btn btn-ghost" href="/furry-ref-sheet-commission">
              See ref sheet prices
            </Link>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="wrap">
          <div className="split">
            <div>
              <h2 className="h-section">What to tell your artist</h2>
              <ul className="prose" style={{ paddingLeft: "1.2em" }}>
                {s.tell.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <p style={{ marginTop: 20 }}>{s.tellNote}</p>
            </div>
            <div className="split-art">
              <Plate art={s.sheet} ratio="4x3" />
            </div>
          </div>

          {s.noWorkYet && (
            <p
              style={{
                marginTop: 26,
                fontSize: "14.5px",
                color: "var(--ink-faint)",
                maxWidth: "72ch",
              }}
            >
              {s.noWorkYet}
            </p>
          )}
        </div>
      </section>

      <section className="section section-paper">
        <div className="wrap">
          <div className="split split-flip">
            <div className="split-art">
              <Plate art={s.second.art} ratio="4x3" />
            </div>
            <div>
              <h2 className="h-section">{s.second.heading}</h2>
              {s.second.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {s.gallery && (
        <section className="section">
          <div className="wrap wrap-wide">
            <Reveal style={{ marginBottom: 40 }}>
              <p className="eyebrow eyebrow-mint">Examples</p>
              <h2 className="h-section">{s.name} art by our artists</h2>
            </Reveal>
            <Reveal className="art-grid" stagger>
              {s.gallery.map((g) => (
                <ArtFigure
                  key={g.art}
                  art={g.art}
                  ratio={g.wide ? "16x9" : "4x3"}
                  wide={g.wide}
                />
              ))}
            </Reveal>
          </div>
        </section>
      )}

      <section className="section section-paper">
        <div className="wrap">
          <div style={{ marginBottom: 40 }}>
            <p className="eyebrow eyebrow-blue">What you can order</p>
            <h2 className="h-section">Three ways to get your character drawn</h2>
          </div>
          <div className="grid grid-3">
            {tiers.map((t) => (
              <article className="card tier" key={t.title}>
                <h3 className="h-card">{t.title}</h3>
                <p className="price">
                  <Tbc>{`From $${t.price}`}</Tbc>
                </p>
                <ul>
                  {t.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <Link className="btn btn-ghost btn-sm btn-block" href={t.href}>
                  {t.cta}
                </Link>
              </article>
            ))}
          </div>
          <div className="chip-row" style={{ marginTop: 36 }}>
            {species.map((other) => (
              <Link className="chip" href={`/species/${other.slug}`} key={other.slug}>
                {other.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaPanel />
    </>
  );
}
