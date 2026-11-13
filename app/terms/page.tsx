import type { Metadata } from "next";

import { Crumbs, Note } from "@/components/blocks";
import { Tbc } from "@/components/Tbc";
import { contact, legal, vars } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms for ordering art from Refpaw: payment, revisions, refunds, delivery and how you can use your art.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/terms" },
};

/** Each clause is plain text so a lawyer can review it without reading JSX. */
const clauses: { heading: string; body: string }[] = [
  {
    heading: "1. Who we are",
    body: `Refpaw is a trading name of ${legal.entity}, registered in ${legal.country}, company number ${legal.company_number}. Contact: ${contact.email}.`,
  },
  {
    heading: "2. What we draw",
    body: "We draw SFW art only. We do not accept adult, suggestive or fetish requests, hateful content, or art of real people without their permission. We can decline any request and will refund any payment made for it.",
  },
  {
    heading: "3. No AI",
    body: "All art is drawn by a human artist. We do not use generative AI at any stage.",
  },
  {
    heading: "4. Quotes and payment",
    body: `Your artist sends a quote and a delivery date. Work starts when the deposit of ${vars.deposit_split} is paid. The balance is due when you approve the sketch. Payments are taken by card through our payment provider.`,
  },
  {
    heading: "5. Changes",
    body: `${vars.sketch_rounds} rounds of changes are included at sketch stage. Small corrections after that are free. Larger changes after sketch approval are quoted separately.`,
  },
  {
    heading: "6. Delivery",
    body: "We deliver digital files by email or download link. Delivery dates are estimates. If we expect to be more than [5 days] late, we will tell you and you may cancel under section 7.",
  },
  {
    heading: "7. Cancellation and refunds",
    body: `Before the sketch is sent: full refund. After the sketch is sent and before approval: refund of the deposit if ${vars.sketch_rounds_lc} rounds of changes have not fixed the issue. After sketch approval: no refund, because the work is custom. If we miss the delivery date by more than [14 days], you may cancel for a full refund.`,
  },
  {
    heading: "8. Your rights",
    body: "You own your character. You may use the art for personal purposes, including profiles, streams, badges and sharing it with other artists and makers. Commercial use, including selling merchandise, needs a written license from your artist.",
  },
  {
    heading: "9. The artist’s rights",
    body: "The artist keeps the copyright in the artwork unless agreed otherwise in writing, and may show it in their portfolio and on Refpaw channels with credit to you. Tell us before work starts if you want the piece kept private.",
  },
  {
    heading: "10. Credit",
    body: "Please do not remove the artist’s signature. When you post the art, credit the artist where the platform allows it.",
  },
  {
    heading: "11. Your character",
    body: "You confirm that you own the character or have the owner’s permission, and that closed-species characters follow that species’ rules.",
  },
  {
    heading: "12. Chargebacks",
    body: `If there is a problem, write to us first at ${contact.email}. We will reply within ${vars.reply_time_support}.`,
  },
  {
    heading: "13. Privacy",
    body: "We use your details only to complete your order and to contact you about it. See our privacy policy at [link to be added].",
  },
  {
    heading: "14. Law",
    body: `These terms are governed by the law of ${legal.governing_law}.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="pagehead">
        <div className="wrap">
          <Crumbs trail={[{ label: "Home", href: "/" }, { label: "Terms of service" }]} />
          <h1 className="h-hero" style={{ fontSize: "clamp(2.1rem,4vw,3rem)" }}>
            Terms of service
          </h1>
          <div style={{ maxWidth: "70ch", marginTop: 10 }}>
            <Note>
              <strong>This is a plain-language draft.</strong> Have it reviewed by a legal
              professional before publishing, and add the legal entity details. The page is set
              to noindex until then.
            </Note>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="wrap">
          <div className="prose">
            {clauses.map((c) => (
              <section key={c.heading}>
                <h2>{c.heading}</h2>
                <p>
                  <Tbc>{c.body}</Tbc>
                </p>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
