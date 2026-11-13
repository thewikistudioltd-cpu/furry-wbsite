import type { Metadata } from "next";
import Link from "next/link";

import { Plate } from "@/components/Art";
import { Crumbs, CtaPanel } from "@/components/blocks";
import { Tbc } from "@/components/Tbc";
import { contact, vars } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Refpaw | A Collective of Human Artists",
  description:
    "Refpaw is a collective of artists who draw fursona art by hand. Find out who we are, how we work and how artists are paid.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="pagehead atmosphere">
        <div className="wrap">
          <Crumbs trail={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <p className="eyebrow">About</p>
          <h1 className="h-hero" style={{ fontSize: "clamp(2.3rem,4.4vw,3.4rem)" }}>
            A collective, with names on the work
          </h1>
          <p className="lead">
            Refpaw started from one idea: anyone commissioning their first fursona should know
            exactly who is drawing it.
          </p>
        </div>
      </section>

      <section className="section-sm">
        <div className="wrap">
          <div className="split">
            <div className="prose">
              <p>
                <Tbc>
                  {"[Two or three sentences of the real founding story: who started it and why. Replace this paragraph before launch.]"}
                </Tbc>
              </p>
              <p>
                <Tbc>
                  {`Today ${vars.artist_count} number of artists draw under the Refpaw name. Each one sets their own style and signs their own work. Refpaw handles the website, payments and scheduling so they can spend their time drawing.`}
                </Tbc>
              </p>
              <p>
                <Tbc>
                  {"[Our artists are based in Pakistan and work with clients around the world. Confirm or remove this line.]"}
                </Tbc>
              </p>
            </div>
            <div className="split-art">
              <Plate art="scene-moonlight-pair" ratio="4x3" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="wrap">
          <div className="grid grid-2">
            <div>
              <p className="eyebrow eyebrow-mint">Money</p>
              <h2 className="h-section">How the money works</h2>
              <p>
                <Tbc>
                  {`Artists keep ${vars.artist_share} of every order. The rest pays for card fees, the website and customer support. No hidden cuts, no surprise deductions.`}
                </Tbc>
              </p>
              <div className="btn-row">
                <Link className="btn btn-ghost" href="/our-promise">
                  Read the full promise
                </Link>
              </div>
            </div>
            <div>
              <p className="eyebrow eyebrow-blue">Contact</p>
              <h2 className="h-section">Get in touch</h2>
              <p>
                <Tbc>
                  {`Email ${contact.email}. Telegram ${contact.telegram}. We reply within ${vars.reply_time}.`}
                </Tbc>
              </p>
              <div className="btn-row">
                <a className="btn btn-ghost" href={`mailto:${contact.email}`}>
                  Email us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaPanel />
    </>
  );
}
