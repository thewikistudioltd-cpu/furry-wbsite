import type { Metadata } from "next";

import { Crumbs, CtaPanel, Note } from "@/components/blocks";
import { Tbc } from "@/components/Tbc";
import { vars } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Public Queue",
  description:
    "Every open Refpaw order and the stage it has reached, so you can see where yours stands.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/queue" },
};

const rows = [
  { what: "Ref sheet, Standard", artist: "LunaFlare", stage: "Sketch sent", tone: "sun" },
  { what: "Icon, shaded", artist: "LunaFlare", stage: "Coloring", tone: "blue" },
  { what: "Sticker pack, six", artist: "LunaFlare", stage: "Waiting to start", tone: "mint" },
];

const legend = [
  { tone: "mint", label: "Waiting to start", copy: "Accepted and paid, waiting its turn." },
  { tone: "sun", label: "Sketch sent", copy: "With you for approval or changes." },
  { tone: "blue", label: "Coloring", copy: "Sketch approved, line and color underway." },
  {
    tone: "pink",
    label: "Delivered",
    copy: `Files sent. Link works for ${vars.file_link_days}.`,
  },
];

export default function QueuePage() {
  return (
    <>
      <section className="pagehead atmosphere">
        <div className="wrap">
          <Crumbs trail={[{ label: "Home", href: "/" }, { label: "Public queue" }]} />
          <p className="eyebrow eyebrow-blue">Public queue</p>
          <h1 className="h-hero" style={{ fontSize: "clamp(2.3rem,4.4vw,3.4rem)" }}>
            Where every order stands
          </h1>
          <p className="lead">
            Orders are listed by the character owner&rsquo;s handle, in the order they were
            accepted. No names, no brief details, no prices.
          </p>
        </div>
      </section>

      <section className="section-sm">
        <div className="wrap">
          <div style={{ maxWidth: "72ch", marginBottom: 32 }}>
            <Note>
              <strong>Not connected yet.</strong> This table is a layout for the real queue.
              Connect it to wherever you track orders before launch, or remove the page and the
              links to it.
            </Note>
          </div>

          <div className="card" style={{ padding: "8px 8px 0" }}>
            <table className="queue-table">
              <caption className="visually-hidden">
                Open Refpaw orders and their current stage
              </caption>
              <thead>
                <tr>
                  <th scope="col">Order</th>
                  <th scope="col">What</th>
                  <th scope="col">Artist</th>
                  <th scope="col">Stage</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.what}>
                    <td>
                      <Tbc>{"[handle]"}</Tbc>
                    </td>
                    <td>{row.what}</td>
                    <td>{row.artist}</td>
                    <td>
                      <span className={`badge badge-${row.tone} badge-dot`}>{row.stage}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-4" style={{ marginTop: 44 }}>
            {legend.map((l) => (
              <div key={l.label}>
                <span className={`badge badge-${l.tone} badge-dot`}>{l.label}</span>
                <p style={{ fontSize: "14.5px", color: "var(--ink-soft)", marginTop: 10 }}>
                  <Tbc>{l.copy}</Tbc>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaPanel />
    </>
  );
}
