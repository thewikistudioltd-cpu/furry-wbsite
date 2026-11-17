import type { Metadata } from "next";
import Link from "next/link";

import { Plate } from "@/components/Art";
import { Crumbs, CtaPanel, Step, TrustRow } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { Tbc } from "@/components/Tbc";
import { pageMetadata } from "@/lib/metadata";
import { vars } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Furry Art Commissions: Ref Sheets, Icons, Stickers",
  description:
    "Furry art commissions from named artists: ref sheets, profile icons, Telegram sticker packs and a first fursona bundle. SFW only, no AI.",
  path: "/commissions",
});

const products = [
  {
    art: "refsheet-saarema",
    title: "Ref sheet",
    copy: "The sheet every artist and fursuit maker will ask you for. Front and back view, palette with hex codes, expressions and detail callouts.",
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
    art: "sticker-coyote-wink",
    title: "Sticker pack",
    copy: "Your character’s moods, ready to send. Six stickers as 512px PNG files, and you choose the expressions.",
    price: vars.price_stickers_6,
    href: "/furry-telegram-sticker-commission",
    cta: "Order a sticker pack",
  },
  {
    art: "refsheet-orca-canine",
    title: "First fursona bundle",
    copy: "New to all this? A ref sheet, an icon and six stickers from one artist, so your character looks the same everywhere.",
    price: vars.price_bundle,
    href: "/first-fursona-bundle",
    cta: "See the bundle",
  },
];

export default function CommissionsPage() {
  return (
    <>
      <section className="pagehead atmosphere">
        <div className="wrap">
          <Crumbs trail={[{ label: "Home", href: "/" }, { label: "What we draw" }]} />
          <p className="eyebrow">What we draw</p>
          <h1 className="h-hero" style={{ fontSize: "clamp(2.3rem,4.4vw,3.4rem)" }}>
            Furry art commissions from artists you can name
          </h1>
          <p className="lead">
            Every order includes a sketch for approval before color, and full-size files when
            it is finished. You pick the artist, and their name goes on the work.
          </p>
          <TrustRow />
        </div>
      </section>

      <section className="section-sm">
        <div className="wrap wrap-wide">
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

      <section className="section section-paper">
        <div className="wrap">
          <div style={{ marginBottom: 48 }}>
            <p className="eyebrow eyebrow-mint">Simple from the start</p>
            <h2 className="h-section">How a commission works</h2>
          </div>
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
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="split">
            <div>
              <p className="eyebrow eyebrow-blue">Add-ons</p>
              <h2 className="h-section">Things you can add to any order</h2>
              <div className="prose">
                <h3>Character design from scratch</h3>
                <p>
                  <Tbc>
                    {`No character yet? Your artist sketches two or three directions for you to choose from. Adds $${vars.price_design_addon}.`}
                  </Tbc>
                </p>
                <h3>Commercial license</h3>
                <p>
                  Personal use is included with every order. Selling the art on merchandise
                  needs a written license, which your artist quotes separately.
                </p>
                <h3>A private commission</h3>
                <p>
                  Tell us before work starts if you do not want the piece shown in a portfolio.
                  No extra charge.
                </p>
              </div>
            </div>
            <div className="split-art">
              <Plate art="scene-portal-wolf" ratio="3x4" />
            </div>
          </div>
        </div>
      </section>

      <CtaPanel />
    </>
  );
}
