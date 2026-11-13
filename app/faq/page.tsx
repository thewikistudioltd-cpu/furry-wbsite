import type { Metadata } from "next";
import Link from "next/link";

import { Crumbs, CtaPanel, Faq } from "@/components/blocks";
import { Tbc } from "@/components/Tbc";
import { contact, vars } from "@/lib/site";

export const metadata: Metadata = {
  title: "Furry Commission FAQ: Prices, Timing, Payment",
  description:
    "How much a furry ref sheet costs, how long it takes, how to pay, revisions and usage rights. Straight answers before you order.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <section className="pagehead atmosphere">
        <div className="wrap">
          <Crumbs trail={[{ label: "Home", href: "/" }, { label: "Questions" }]} />
          <p className="eyebrow eyebrow-yellow">Questions</p>
          <h1 className="h-hero" style={{ fontSize: "clamp(2.3rem,4.4vw,3.4rem)" }}>
            Questions before you order
          </h1>
          <p className="lead">
            <Tbc>
              {`If the answer you need is not here, write to ${contact.email} and we reply within ${vars.reply_time_support}.`}
            </Tbc>
          </p>
        </div>
      </section>

      <section className="section-sm">
        <div className="wrap" style={{ maxWidth: 860 }}>
          <h2 className="h-section" style={{ marginBottom: 8 }}>
            Prices and payment
          </h2>
          <Faq question="How much does a furry ref sheet cost?">
            <Tbc>
              {`Ref sheets start at $${vars.price_sheet_simple} for flat color with front and back views. Shading, extra views and fursuit details add to the price. You get an exact quote before you pay anything.`}
            </Tbc>
          </Faq>
          <Faq question="How much do icons and sticker packs cost?">
            <Tbc>
              {`Icons start at $${vars.price_icon_flat}. A pack of six stickers starts at $${vars.price_stickers_6}.`}
            </Tbc>
          </Faq>
          <Faq question="How do I pay?">
            By card through a secure checkout link. You do not need a PayPal account. Half is
            due to start and half when you approve the sketch.
          </Faq>
          <Faq question="Which currencies do you accept?">
            Prices are in US dollars. Your card provider converts from your own currency.
          </Faq>

          <h2 className="h-section" style={{ margin: "56px 0 8px" }}>
            Time and process
          </h2>
          <Faq question="How long does a commission take?">
            <Tbc>
              {`Icons usually take ${vars.time_icon}, sticker packs ${vars.time_stickers} and ref sheets ${vars.time_sheet} from the approved sketch. Your artist gives you a date up front.`}
            </Tbc>
          </Faq>
          <Faq question="What if I don&rsquo;t like the sketch?">
            <Tbc>
              {`${vars.sketch_rounds} rounds of changes are included at sketch stage. If it still is not right, your deposit is refunded.`}
            </Tbc>
          </Faq>
          <Faq question="Can I change something after coloring has started?">
            Small fixes, such as a wrong eye color, are free. Larger changes after sketch
            approval are quoted separately.
          </Faq>
          <Faq question="Can I talk to my artist directly?">
            Yes. You talk to your artist by email, Telegram or Discord for the whole order.
          </Faq>

          <h2 className="h-section" style={{ margin: "56px 0 8px" }}>
            What we draw
          </h2>
          <Faq question="Do you draw NSFW art?">No. Refpaw is SFW only.</Faq>
          <Faq question="Do you use AI?">
            No. Every piece is drawn by hand, and you can ask for work-in-progress shots.
          </Faq>
          <Faq question="Can you design a character from scratch?">
            <Tbc>
              {`Yes. Tell your artist the species, colors and personality you have in mind, and they will sketch two or three directions for you to choose from. Character design from scratch adds $${vars.price_design_addon}.`}
            </Tbc>
          </Faq>
          <Faq question="Do you draw closed species or characters from games and shows?">
            We draw closed species if you own the character under that species&rsquo; rules. We
            do not draw copyrighted characters for commercial use.
          </Faq>

          <h2 className="h-section" style={{ margin: "56px 0 8px" }}>
            Using your art
          </h2>
          <Faq question="Can I use the art on merch or my stream?">
            Personal use is included: profile pictures, streams, badges and sharing. Selling
            the art on merchandise needs a commercial license, which your artist can quote.
          </Faq>
          <Faq question="Who owns the art?">
            Your character is yours. Your artist keeps the right to show the piece in their
            portfolio with credit to you as the owner. See section 9 of the{" "}
            <Link href="/terms">terms of service</Link>.
          </Faq>
          <Faq question="Can I give my ref sheet to another artist or a fursuit maker?">
            Yes. That is what a ref sheet is for.
          </Faq>
        </div>
      </section>

      <CtaPanel />
    </>
  );
}
