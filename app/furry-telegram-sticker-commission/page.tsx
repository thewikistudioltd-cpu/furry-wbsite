import type { Metadata } from "next";
import Link from "next/link";

import { Sticker } from "@/components/Art";
import { Crumbs, CtaPanel, TrustRow } from "@/components/blocks";
import { JsonLd } from "@/components/JsonLd";
import { Tbc } from "@/components/Tbc";
import { pageMetadata } from "@/lib/metadata";
import { vars } from "@/lib/site";
import { serviceJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: "Furry Telegram Sticker Pack Commissions",
  description:
    "Custom furry sticker packs for Telegram and Discord. Six hand-drawn stickers of your character as transparent 512px PNG files.",
  path: "/furry-telegram-sticker-commission",
});

const expressions = [
  "Happy",
  "Laughing",
  "Crying",
  "Angry",
  "Sleepy",
  "Love",
  "Confused",
  "Hug",
  "Coffee",
  "No thoughts",
];

const packs = [
  {
    title: "6 stickers",
    price: vars.price_stickers_6,
    featured: false,
    cta: "Order six",
    items: ["Six expressions you choose", "512px transparent PNGs", "Discord emote sizes"],
  },
  {
    title: "12 stickers",
    price: vars.price_stickers_12,
    featured: true,
    cta: "Order twelve",
    items: [
      "Twelve expressions",
      "Everything in the six pack",
      "Enough for a full Telegram set",
    ],
  },
  {
    title: "24 stickers",
    price: vars.price_stickers_24,
    featured: false,
    cta: "Order twenty-four",
    items: [
      "Twenty-four expressions",
      "Everything in the twelve pack",
      "Room for the inside jokes",
    ],
  },
];

const structuredData = serviceJsonLd({
  name: "Furry Telegram sticker pack commission",
  description:
    "A custom set of hand-drawn fursona stickers for Telegram and Discord, created by a named human artist.",
  path: "/furry-telegram-sticker-commission/",
});

export default function StickerPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <section className="pagehead atmosphere">
        <div className="wrap">
          <Crumbs
            trail={[
              { label: "Home", href: "/" },
              { label: "What we draw", href: "/commissions" },
              { label: "Sticker packs" },
            ]}
          />
          <p className="eyebrow eyebrow-yellow">Sticker packs</p>
          <h1 className="h-hero" style={{ fontSize: "clamp(2.3rem,4.4vw,3.4rem)" }}>
            Custom furry sticker packs for Telegram and Discord
          </h1>
          <p className="lead">
            Stickers are how your character talks when typing is too much effort. Tell your
            artist which moods you use most, and they will draw your character doing exactly
            that.
          </p>
          <div className="btn-row">
            <Link className="btn btn-primary" href="/start?product=stickers">
              Order a sticker pack
            </Link>
            <Link className="btn btn-ghost" href="#expressions">
              Choose expressions
            </Link>
          </div>
          <TrustRow />
        </div>
      </section>

      <section className="section-sm">
        <div className="wrap">
          <div className="split">
            <div className="sticker-sheet">
              <Sticker art="sticker-coyote-grin" />
              <Sticker art="sticker-coyote-laugh" />
              <Sticker art="sticker-coyote-wink" />
              <Sticker art="sticker-coyote-angry" />
              <span className="credit credit-float">Drawn by LunaFlare</span>
            </div>
            <div>
              <h2 className="h-section">What you get</h2>
              <ul className="prose" style={{ paddingLeft: "1.2em" }}>
                <li>Six stickers in one consistent style</li>
                <li>512px PNG files with transparent backgrounds, ready for Telegram</li>
                <li>Discord emote sizes included</li>
                <li>Help setting up your Telegram pack if it is your first one</li>
              </ul>
              <p
                style={{
                  fontSize: "14.5px",
                  color: "var(--ink-faint)",
                  marginTop: 18,
                }}
              >
                The four above are real expressions of one character, cut from that
                character&rsquo;s Refpaw ref sheet and exported at 512px. A full pack is drawn
                the same way, from the moods you pick.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-paper" id="expressions">
        <div className="wrap">
          <div style={{ marginBottom: 32 }}>
            <p className="eyebrow eyebrow-yellow">Expressions</p>
            <h2 className="h-section">Choose your expressions</h2>
            <p className="lead measure">
              Pick from the usual suspects or describe your own. Inside jokes are welcome as
              long as they are SFW.
            </p>
          </div>
          <div className="chip-row">
            {expressions.map((e) => (
              <span className="chip" key={e}>
                {e}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div style={{ marginBottom: 44 }}>
            <p className="eyebrow">Pack sizes</p>
            <h2 className="h-section">How many do you want?</h2>
          </div>
          <div className="grid grid-3">
            {packs.map((pack) => (
              <article
                className={`card tier${pack.featured ? " tier-featured" : ""}`}
                key={pack.title}
              >
                {pack.featured && (
                  <span className="badge badge-pink" style={{ alignSelf: "flex-start" }}>
                    Most ordered
                  </span>
                )}
                <h3 className="h-card">{pack.title}</h3>
                <p className="price">
                  <Tbc>{`$${pack.price}`}</Tbc>
                </p>
                <ul>
                  {pack.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <Link
                  className={`btn btn-sm btn-block ${pack.featured ? "btn-primary" : "btn-ghost"}`}
                  href="/start?product=stickers"
                >
                  {pack.cta}
                </Link>
              </article>
            ))}
          </div>
          <p style={{ marginTop: 28 }}>
            Need more later? Your artist keeps your character on file, so new stickers match
            the old ones.
          </p>
        </div>
      </section>

      <section className="section section-paper">
        <div className="wrap">
          <div className="grid grid-2">
            <div>
              <p className="eyebrow eyebrow-mint">Timing</p>
              <h2 className="h-section">How long it takes</h2>
              <p>
                <Tbc>
                  {`A pack of six usually takes ${vars.time_stickers} from the approved sketches.`}
                </Tbc>
              </p>
              <div className="btn-row">
                <Link className="btn btn-ghost" href="/queue">
                  See the public queue
                </Link>
              </div>
            </div>
            <div>
              <p className="eyebrow eyebrow-blue">Setting it up</p>
              <h2 className="h-section">First Telegram pack?</h2>
              <p>
                We walk you through the Stickers bot, the file sizes and the mistakes that make
                a pack look wrong on a phone.
              </p>
              <div className="btn-row">
                <Link className="btn btn-ghost" href="/blog/telegram-sticker-pack">
                  Read the guide
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
