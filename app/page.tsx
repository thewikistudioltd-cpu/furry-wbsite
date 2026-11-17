import type { Metadata } from "next";
import Link from "next/link";

import { ArtFigure, Plate } from "@/components/Art";
import { CtaPanel, Faq, Step, TrustRow } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { Tbc } from "@/components/Tbc";
import { artSrc } from "@/lib/artwork";
import { site, vars } from "@/lib/site";

const homeDescription =
  "Hand-drawn fursona ref sheets, icons and sticker packs from artists you can name. SFW only. No AI. Approve the sketch before color starts.";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale.replace("-", "_"),
    title: "Refpaw | Furry Ref Sheets, Icons & Stickers by Real Artists",
    description: homeDescription,
    url: "/",
    images: ["/branding/social-cover-1200x630.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Refpaw | Furry Ref Sheets, Icons & Stickers by Real Artists",
    description: homeDescription,
    images: ["/branding/social-cover-1200x630.png"],
  },
};

const products = [
  {
    art: "refsheet-saarema",
    title: "Ref sheet",
    copy: "The sheet every artist and fursuit maker will ask you for. Front and back view, palette with hex codes, two expressions and detail callouts.",
    price: vars.price_sheet_simple,
    href: "/furry-ref-sheet-commission",
    cta: "Order a ref sheet",
  },
  {
    art: "icon-bust-coyote",
    title: "Icon",
    copy: "A headshot for Telegram, Discord, Bluesky and everywhere else. Flat or shaded, with square and round crops.",
    price: vars.price_icon_flat,
    href: "/furry-icon-commission",
    cta: "Order an icon",
  },
  {
    art: "sticker-coyote-laugh",
    title: "Sticker pack",
    copy: "Your character’s moods, ready to send. Six stickers as 512px PNG files, and you choose the expressions.",
    price: vars.price_stickers_6,
    href: "/furry-telegram-sticker-commission",
    cta: "Order a sticker pack",
  },
  {
    art: "refsheet-orca-canine",
    title: "First fursona bundle",
    copy: "New to all this? Get a ref sheet, an icon and six stickers from one artist, so your character looks the same everywhere.",
    price: vars.price_bundle,
    href: "/first-fursona-bundle",
    cta: "See the bundle",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero atmosphere">
        <div className="wrap wrap-wide">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">Fursona art, drawn by hand</p>
              <h1 className="h-hero">
                Your sona, drawn by a <span className="marker accent-pink">real artist</span>.
              </h1>
              <p className="lead">
                Ref sheets, icons and sticker packs from artists you can name. You pick who
                draws your character, approve the sketch, and their name goes on the finished
                piece.
              </p>
              <div className="btn-row">
                <Link className="btn btn-primary" href="/start">
                  Start a commission
                </Link>
                <Link className="btn btn-ghost" href="/artists">
                  Meet the artists
                </Link>
              </div>
              <TrustRow />
            </div>

            <Reveal className="hero-art">
              <div className="hero-plate-main">
                <img
                  src={artSrc("refsheet-coyote")}
                  alt="Reference sheet of a tan coyote character: four full-body views, a clothed version, head expressions and a color palette"
                  width={1400}
                  height={991}
                  fetchPriority="high"
                  decoding="async"
                />
                <span className="credit">Drawn by LunaFlare</span>
              </div>
              <div className="hero-plate-sub">
                <img
                  src={artSrc("icon-bust-coyote")}
                  alt="Bust portrait of a gray and brown coyote character with green eyes, smiling"
                  width={600}
                  height={600}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span className="hero-chip">
                One character, <em>one artist</em>
              </span>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="wrap wrap-wide">
          <Reveal className="center" style={{ marginBottom: 48 }}>
            <p className="eyebrow eyebrow-blue">What we draw</p>
            <h2 className="h-section">Four things, done properly</h2>
            <p className="lead measure">
              Every order includes a sketch for approval before color, and full-size files
              when it is finished.
            </p>
          </Reveal>

          <Reveal className="grid grid-4" stagger>
            {products.map((p) => (
              <article className="card card-hover product-card" key={p.title}>
                <Plate art={p.art} ratio="4x3" credit={false} />
                <div className="card-body">
                  <h3 className="h-card">{p.title}</h3>
                  <p>{p.copy}</p>
                  <div className="product-foot">
                    <span className="price">
                      <Tbc>{`From $${p.price}`}</Tbc>
                    </span>
                    <Link className="tlink" href={p.href}>
                      {p.cta}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal style={{ marginBottom: 48 }}>
            <p className="eyebrow eyebrow-mint">Simple from the start</p>
            <h2 className="h-section">How a commission works</h2>
          </Reveal>

          <Reveal className="grid grid-4 steps" stagger>
            <Step n={1} title="Pick an artist">
              Browse their past work and choose the style you like.
            </Step>
            <Step n={2} title="Send your character">
              A description, photos, an old drawing. Anything helps.
            </Step>
            <Step n={3} title="Approve the sketch">
              <Tbc>{`${vars.sketch_rounds} rounds of changes are included before color starts.`}</Tbc>
            </Step>
            <Step n={4} title="Get your files">
              Full-size PNGs, plus a credit line for your artist.
            </Step>
          </Reveal>

          <p style={{ marginTop: 36 }}>
            <Link className="tlink" href="/queue">
              See the public queue to check where every open order stands
            </Link>
          </p>
        </div>
      </section>

      <section className="section section-paper">
        <div className="wrap wrap-wide">
          <Reveal
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 24,
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: 44,
            }}
          >
            <div>
              <p className="eyebrow">Recent work</p>
              <h2 className="h-section" style={{ marginBottom: 0 }}>
                Real sheets, real characters
              </h2>
            </div>
            <Link className="btn btn-ghost btn-sm" href="/work">
              See all work
            </Link>
          </Reveal>

          <Reveal className="art-grid" stagger>
            <ArtFigure art="refsheet-saarema" ratio="16x9" wide />
            <ArtFigure art="scene-portal-wolf" />
            <ArtFigure art="art-samurai-fox" />
            <ArtFigure art="refsheet-orca-canine" ratio="16x9" wide />
            <ArtFigure art="scene-beach-jeep" />
            <ArtFigure art="icon-halloween-cat" />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="artist-feature">
            <div className="artist-showcase">
              <Plate art="scene-portal-wolf" ratio="3x4" credit={false} decorative />
              <Plate art="icon-halloween-cat" ratio="1x1" credit={false} decorative />
              <Plate art="art-samurai-fox" ratio="1x1" credit={false} decorative />
            </div>

            <div>
              <p className="eyebrow eyebrow-blue">The collective</p>
              <h2 className="h-section">Choose the hand behind the work</h2>

              <div className="artist-meta">
                <img
                  src={artSrc("icon-bust-coyote")}
                  alt="LunaFlare artist avatar"
                  width={62}
                  height={62}
                  loading="lazy"
                />
                <div>
                  <h3>LunaFlare</h3>
                  <p>
                    Bold lineart, clean color &middot;{" "}
                    <span className="accent-mint">Open for commissions</span>
                  </p>
                </div>
              </div>

              <p>
                Thick outlines, flat saturated color, strong silhouettes. Ref sheets are the
                core of the work: every view, every marking and a palette your next artist can
                actually use.
              </p>

              <div className="btn-row" style={{ marginTop: 24 }}>
                <Link className="btn btn-primary" href="/start?artist=lunaflare">
                  Commission LunaFlare
                </Link>
                <Link className="btn btn-ghost" href="/artists/lunaflare">
                  See the work
                </Link>
              </div>

              <p className="roster-note">
                Only one artist is listed, because an artist appears here only once their
                profile, portfolio and permissions are confirmed.{" "}
                <Link className="tlink" href="/artists#join">
                  Draw with us
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="promise-panel">
            <div style={{ maxWidth: "52ch", marginBottom: 44 }}>
              <p className="eyebrow eyebrow-mint" style={{ color: "#8f99b5" }}>
                Our promise
              </p>
              <h2 className="h-section">Three things we won&rsquo;t bend on</h2>
              <p className="lead">You should know exactly what you are buying and who from.</p>
            </div>
            <div className="grid grid-3">
              <div className="promise-item">
                <h3>SFW only</h3>
                <p>
                  Everything we draw is safe for work. If you need something else, we are not
                  the right fit, and that is fine.
                </p>
              </div>
              <div className="promise-item">
                <h3>No AI, at any stage</h3>
                <p>
                  Sketch, line and color are done by hand. Ask your artist for work-in-progress
                  shots any time.
                </p>
              </div>
              <div className="promise-item">
                <h3>You know who drew it</h3>
                <p>
                  Every piece is signed and credited. We never pass one artist&rsquo;s work off
                  as another&rsquo;s.
                </p>
              </div>
            </div>
            <p style={{ marginTop: 36, fontSize: 15, color: "#8f99b5" }}>
              <Tbc>{`Artists keep ${vars.artist_share} of every order. `}</Tbc>
              <Link
                href="/our-promise"
                style={{ color: "#fff", textDecoration: "underline", textUnderlineOffset: 3 }}
              >
                Read the full promise
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section-paper">
        <div className="wrap">
          <div className="split">
            <Reveal>
              <p className="eyebrow eyebrow-yellow">Questions</p>
              <h2 className="h-section">Questions people ask first</h2>
              <p className="lead">
                Straight answers before you order. The rest are on the questions page.
              </p>
              <div className="btn-row">
                <Link className="btn btn-ghost" href="/faq">
                  See all questions
                </Link>
              </div>
            </Reveal>
            <Reveal>
              <Faq question="How long does a commission take?">
                <Tbc>
                  {`Icons usually take ${vars.time_icon}, sticker packs ${vars.time_stickers} and ref sheets ${vars.time_sheet} from the approved sketch. Your artist gives you a date up front.`}
                </Tbc>
              </Faq>
              <Faq question="How do I pay?">
                By card through a secure checkout link. You do not need a PayPal account. Half
                is due to start and half when you approve the sketch.
              </Faq>
              <Faq question="What if I don&rsquo;t like the sketch?">
                <Tbc>
                  {`${vars.sketch_rounds} rounds of changes are included at sketch stage. If it still is not right, your deposit is refunded.`}
                </Tbc>
              </Faq>
              <Faq question="Can I use the art on merch or my stream?">
                Personal use is included: profile pictures, streams, badges and sharing. Selling
                the art on merchandise needs a commercial license, which your artist can quote.
              </Faq>
              <Faq question="Can you design a character from scratch?">
                Yes. Tell your artist the species, colors and personality you have in mind, and
                they will sketch two or three directions for you to choose from.
              </Faq>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaPanel />
    </>
  );
}
