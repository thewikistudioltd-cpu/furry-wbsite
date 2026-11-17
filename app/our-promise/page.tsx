import type { Metadata } from "next";
import Link from "next/link";

import { Plate } from "@/components/Art";
import { Crumbs, CtaPanel } from "@/components/blocks";
import { Tbc } from "@/components/Tbc";
import { pageMetadata } from "@/lib/metadata";
import { contact, vars } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "SFW Only, No AI, Credited Artists",
  description:
    "Our rules in plain words: SFW art only, no AI at any stage, every piece signed and credited, and a public queue for every order.",
  path: "/our-promise",
});

export default function PromisePage() {
  return (
    <>
      <section className="pagehead atmosphere">
        <div className="wrap">
          <Crumbs trail={[{ label: "Home", href: "/" }, { label: "Our promise" }]} />
          <p className="eyebrow eyebrow-mint">Our promise</p>
          <h1 className="h-hero" style={{ fontSize: "clamp(2.3rem,4.4vw,3.4rem)" }}>
            What we promise, and what we won&rsquo;t draw
          </h1>
          <p className="lead">
            You should know exactly what you are buying and who from. Here it is in plain
            words.
          </p>
        </div>
      </section>

      <section className="section-sm">
        <div className="wrap">
          <div className="split" style={{ gridTemplateColumns: "1fr 1fr", alignItems: "start" }}>
            <div className="prose">
              <h2>SFW only</h2>
              <p>
                Everything on Refpaw is safe for work. We do not take adult, suggestive or
                fetish requests at any price. If that is what you are looking for, we are not
                the right fit.
              </p>

              <h2>No AI at any stage</h2>
              <p>
                Every sketch, line and color is done by a person. We do not use image
                generators for drafts, backgrounds or touch-ups. Ask your artist for
                work-in-progress shots whenever you like.
              </p>

              <h2>Every piece is credited</h2>
              <p>
                You know who is drawing before you pay. Their signature is on the file and
                their name is on our site. We never pass one artist&rsquo;s work off as
                another&rsquo;s.
              </p>

              <h2>Artists are paid fairly</h2>
              <p>
                <Tbc>
                  {`Artists keep ${vars.artist_share} of every order. The rest covers payment fees, the website and the people who answer your messages.`}
                </Tbc>
              </p>

              <h2>You can see the queue</h2>
              <p>Our public queue shows every open order and the stage it has reached.</p>

              <h2>No traced or copied work</h2>
              <p>
                <Tbc>
                  {`Our artists draw from scratch. If you ever believe a piece copies someone else’s art, write to ${contact.email} and we will look into it and reply within ${vars.reply_time_report}.`}
                </Tbc>
              </p>
            </div>

            <div>
              <div className="split-art" style={{ marginBottom: 24 }}>
                <Plate art="refsheet-grey-wolf" ratio="4x3" />
              </div>
              <div className="card" style={{ padding: 26 }}>
                <h2 className="h-card">Hold us to it</h2>
                <p style={{ color: "var(--ink-soft)", fontSize: 15, marginTop: 10 }}>
                  <Tbc>
                    {`If we break any of these, tell us. Write to ${contact.email} and we reply within ${vars.reply_time_support}.`}
                  </Tbc>
                </p>
                <div className="btn-row" style={{ marginTop: 20 }}>
                  <Link className="btn btn-ghost btn-sm" href="/queue">
                    See the public queue
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaPanel />
    </>
  );
}
