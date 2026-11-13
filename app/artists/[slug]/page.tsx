import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArtFigure, Plate } from "@/components/Art";
import { Crumbs } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { Tbc } from "@/components/Tbc";
import { art } from "@/lib/artwork";
import { artistBySlug, site, vars } from "@/lib/site";

export function generateStaticParams() {
  return site.artists.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const artist = artistBySlug(slug);
  if (!artist) return {};
  return {
    title: `${artist.name}, Furry Artist`,
    description: `${artist.name} draws fursona ref sheets, icons and illustrations. ${artist.style}. See recent work and commission them through Refpaw.`,
    alternates: { canonical: `/artists/${artist.slug}` },
  };
}

export default async function ArtistPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artist = artistBySlug(slug);
  if (!artist) notFound();

  /** A wide ref sheet takes two columns; everything else takes one. */
  const gallery = artist.gallery.map((key) => ({
    key,
    wide: art(key).cat === "sheets",
  }));

  return (
    <>
      <section className="pagehead atmosphere">
        <div className="wrap">
          <Crumbs
            trail={[
              { label: "Home", href: "/" },
              { label: "Artists", href: "/artists" },
              { label: artist.name },
            ]}
          />
          <div className="split">
            <div>
              <span className="badge badge-mint badge-dot" style={{ marginBottom: 18 }}>
                Open for commissions
              </span>
              <h1 className="h-hero" style={{ fontSize: "clamp(2.3rem,4.4vw,3.4rem)" }}>
                {artist.name}
              </h1>
              <p className="lead">{artist.bio}</p>
              <div className="btn-row">
                <Link className="btn btn-primary" href={`/start?artist=${artist.slug}`}>
                  Commission {artist.name}
                </Link>
                <Link className="btn btn-ghost" href="#work">
                  See the work
                </Link>
              </div>
            </div>
            <div className="split-art">
              <Plate art={artist.avatar} ratio="1x1" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="wrap">
          <div className="grid grid-3">
            <div>
              <p className="eyebrow eyebrow-blue">Style</p>
              <h2 className="h-card" style={{ fontFamily: "var(--display)" }}>
                {artist.style}
              </h2>
              <p style={{ color: "var(--ink-soft)", fontSize: 15 }}>
                Thick outlines, flat or lightly shaded fills, strong silhouettes. Characters
                read instantly at icon size.
              </p>
            </div>
            <div>
              <p className="eyebrow eyebrow-mint">What {artist.name} draws</p>
              <h2 className="h-card" style={{ fontFamily: "var(--display)" }}>
                Sheets, icons, scenes
              </h2>
              <p style={{ color: "var(--ink-soft)", fontSize: 15 }}>
                <Tbc>{`${artist.draws}. Prices start at $${vars.price_icon_flat}.`}</Tbc>
              </p>
            </div>
            <div>
              <p className="eyebrow eyebrow-yellow">Find {artist.name} elsewhere</p>
              <h2 className="h-card" style={{ fontFamily: "var(--display)" }}>
                Their own channels
              </h2>
              <p style={{ color: "var(--ink-soft)", fontSize: 15 }}>
                {artist.instagram && (
                  <>
                    <a
                      href={artist.instagram}
                      rel="noopener"
                      target="_blank"
                      style={{
                        color: "var(--blue-ink)",
                        textDecoration: "underline",
                        textUnderlineOffset: 3,
                      }}
                    >
                      Instagram
                    </a>{" "}
                    &middot;{" "}
                  </>
                )}
                Bluesky and Fur Affinity links to be confirmed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-paper" id="work">
        <div className="wrap wrap-wide">
          <Reveal style={{ marginBottom: 40 }}>
            <p className="eyebrow">Recent work</p>
            <h2 className="h-section">Drawn by {artist.name}</h2>
          </Reveal>
          <Reveal className="art-grid" stagger>
            {gallery.map((g) => (
              <ArtFigure
                key={g.key}
                art={g.key}
                ratio={g.wide ? "16x9" : "4x3"}
                wide={g.wide}
              />
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cta-panel atmosphere">
            <p className="eyebrow eyebrow-mint">Open</p>
            <h2 className="h-section">Want {artist.name} to draw your character?</h2>
            <p className="lead">
              <Tbc>
                {`Send a description and any references you have. You get a quote and a delivery date within ${vars.reply_time}, and you only pay once you are happy with both.`}
              </Tbc>
            </p>
            <div className="btn-row" style={{ justifyContent: "center" }}>
              <Link className="btn btn-primary" href={`/start?artist=${artist.slug}`}>
                Commission {artist.name}
              </Link>
              <Link className="btn btn-ghost" href="/artists">
                See all artists
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
