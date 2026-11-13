import type { Metadata } from "next";
import { Suspense } from "react";

import { Crumbs } from "@/components/blocks";
import { Tbc } from "@/components/Tbc";
import { vars } from "@/lib/site";

import { OrderForm } from "./OrderForm";

export const metadata: Metadata = {
  title: "Start a Commission",
  description:
    "Tell us about your character and pick an artist. You get a quote and a delivery date before you pay.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/start" },
};

export default function StartPage() {
  return (
    <>
      <section className="pagehead atmosphere">
        <div className="wrap">
          <Crumbs trail={[{ label: "Home", href: "/" }, { label: "Start a commission" }]} />
          <p className="eyebrow">Start a commission</p>
          <h1 className="h-hero" style={{ fontSize: "clamp(2.3rem,4.4vw,3.4rem)" }}>
            Tell us about your character
          </h1>
          <p className="lead">
            <Tbc>
              {`You get a quote and a delivery date by email within ${vars.reply_time}, and you only pay once you are happy with both.`}
            </Tbc>
          </p>
        </div>
      </section>

      <section className="section-sm">
        <div className="wrap">
          <div
            className="split"
            style={{ gridTemplateColumns: "1.35fr 1fr", alignItems: "start" }}
          >
            {/* the form reads ?product= and ?artist=, which only exist on the client */}
            <Suspense fallback={<div className="card" style={{ padding: 32, minHeight: 640 }} />}>
              <OrderForm />
            </Suspense>

            <aside>
              <div className="card" style={{ padding: 26, marginBottom: 22 }}>
                <h2 className="h-card">What happens next</h2>
                <ol
                  className="prose"
                  style={{ paddingLeft: "1.2em", fontSize: 15, marginTop: 14 }}
                >
                  <li>
                    <Tbc>{`Your artist reads the brief and replies within ${vars.reply_time}.`}</Tbc>
                  </li>
                  <li>You get a price and a delivery date. Nothing is charged yet.</li>
                  <li>
                    <Tbc>{`You pay a ${vars.deposit_split} deposit to start.`}</Tbc>
                  </li>
                  <li>
                    <Tbc>
                      {`You approve the sketch. ${vars.sketch_rounds} rounds of changes are included.`}
                    </Tbc>
                  </li>
                  <li>The balance is due, then the full-size files are yours.</li>
                </ol>
              </div>

              <div className="card" style={{ padding: 26 }}>
                <h2 className="h-card">Before you send</h2>
                <ul
                  className="prose"
                  style={{
                    paddingLeft: "1.2em",
                    fontSize: 15,
                    marginTop: 14,
                    marginBottom: 0,
                  }}
                >
                  <li>
                    We draw SFW art only. We cannot take adult, suggestive or fetish requests at
                    any price.
                  </li>
                  <li>
                    You confirm you own the character, or have the owner&rsquo;s permission.
                  </li>
                  <li>Closed-species characters must follow that species&rsquo; rules.</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
