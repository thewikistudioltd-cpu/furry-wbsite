"use client";

import { useMemo, useState } from "react";

import { ArtFigure } from "@/components/Art";
import { art } from "@/lib/artwork";

type Item = { key: string; wide?: boolean };

const FILTERS = [
  { cat: "all", label: "All work" },
  { cat: "sheets", label: "Ref sheets" },
  { cat: "icons", label: "Icons and busts" },
  { cat: "illustration", label: "Illustrations" },
] as const;

type Cat = (typeof FILTERS)[number]["cat"];

export function GalleryFilter({ items }: { items: Item[] }) {
  const [cat, setCat] = useState<Cat>("all");

  const shown = useMemo(
    () => items.filter((i) => cat === "all" || art(i.key).cat === cat),
    [items, cat],
  );

  return (
    <>
      <div className="filters">
        {FILTERS.map((f) => (
          <button
            className="filter"
            type="button"
            key={f.cat}
            aria-pressed={cat === f.cat}
            onClick={() => setCat(f.cat)}
          >
            {f.label}
          </button>
        ))}
        <span className="badge" style={{ marginLeft: "auto", alignSelf: "center" }}>
          {shown.length} {shown.length === 1 ? "piece" : "pieces"}
        </span>
      </div>

      <div className="art-grid">
        {shown.map((i) => (
          <ArtFigure
            key={i.key}
            art={i.key}
            ratio={i.wide ? "16x9" : "4x3"}
            wide={i.wide}
          />
        ))}
      </div>
    </>
  );
}
