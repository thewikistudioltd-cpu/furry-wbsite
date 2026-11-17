import type { Metadata } from "next";

import { Crumbs, CtaPanel, Note } from "@/components/blocks";
import { contact } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

import { GalleryFilter } from "./GalleryFilter";

export const metadata: Metadata = pageMetadata({
  title: "Furry Art Portfolio: Ref Sheets, Icons, Illustrations",
  description:
    "Hand-drawn fursona reference sheets, headshot icons and character illustrations by the artists of the Refpaw collective. Every piece credited.",
  path: "/work",
});

/** Wide ref sheets take two columns so a row still lines up along the bottom. */
const items = [
  { key: "refsheet-saarema", wide: true },
  { key: "scene-portal-wolf" },
  { key: "icon-bust-coyote" },
  { key: "refsheet-coyote", wide: true },
  { key: "art-samurai-fox" },
  { key: "scene-waterfall" },
  { key: "refsheet-orca-canine", wide: true },
  { key: "icon-halloween-cat" },
  { key: "art-magazine-cover" },
  { key: "refsheet-grey-wolf", wide: true },
  { key: "scene-forest-wolves" },
  { key: "scene-beach-jeep" },
  { key: "refsheet-monochrome-wolf", wide: true },
  { key: "art-moon-badger" },
  { key: "scene-moonlight-pair" },
  { key: "refsheet-crimson-lizard", wide: true },
  { key: "scene-forest-walk" },
  { key: "scene-beach-tiger" },
  { key: "refsheet-violet-hyena", wide: true },
  { key: "refsheet-fox-winter" },
  { key: "sticker-coyote-grin" },
  { key: "sticker-coyote-laugh" },
  { key: "sticker-coyote-wink" },
  { key: "sticker-coyote-angry" },
];

export default function WorkPage() {
  return (
    <>
      <section className="pagehead atmosphere">
        <div className="wrap">
          <Crumbs trail={[{ label: "Home", href: "/" }, { label: "Work" }]} />
          <p className="eyebrow">The work</p>
          <h1 className="h-hero" style={{ fontSize: "clamp(2.3rem,4.4vw,3.4rem)" }}>
            Real sheets, real characters
          </h1>
          <p className="lead">
            Every piece here was drawn by hand by a named artist, for a real character owner.
            Nothing on this page was generated.
          </p>
        </div>
      </section>

      <section className="section-sm">
        <div className="wrap wrap-wide">
          <GalleryFilter items={items} />

          <div style={{ marginTop: 36, maxWidth: "72ch" }}>
            <Note>
              <strong>About these pieces.</strong> Artwork is shown with the artist&rsquo;s
              permission and credited to them. Characters belong to the people who commissioned
              them. If you own a character here and would rather it was not shown, write to{" "}
              {contact.email} and we will take it down.
            </Note>
          </div>
        </div>
      </section>

      <CtaPanel />
    </>
  );
}
