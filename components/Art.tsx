import { art, artSrc } from "@/lib/artwork";

/**
 * The three ways artwork appears on the site. Every one of them reads its alt
 * text and its artist credit from lib/artwork.json, so neither can go missing.
 *
 * Plain <img> on purpose: the site is a static export with image optimisation
 * off, so next/image would add nothing but would make the object-fit and
 * aspect-ratio rules in globals.css harder to reason about.
 */

export type Ratio = "4x3" | "1x1" | "3x4" | "16x9";

type PlateProps = {
  art: string;
  ratio?: Ratio;
  /** override the tint from artwork.json */
  tint?: string;
  /** hide the credit tag when the surrounding card already names the artist */
  credit?: boolean;
  priority?: boolean;
};

export function Plate({
  art: key,
  ratio = "4x3",
  tint,
  credit = true,
  priority = false,
}: PlateProps) {
  const item = art(key);
  const contain = item.fit === "contain" ? " plate-contain" : "";

  return (
    <span className={`plate plate-${ratio} ${tint ?? item.tint}${contain}`}>
      <img
        src={artSrc(key)}
        alt={item.alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        {...(priority ? { fetchPriority: "high" as const } : {})}
      />
      {credit && <span className="credit">Drawn by {item.credit}</span>}
    </span>
  );
}

type FigureProps = {
  art: string;
  ratio?: Ratio;
  /** a ref sheet is wide, so it takes two columns of the gallery grid */
  wide?: boolean;
};

export function ArtFigure({ art: key, ratio = "4x3", wide = false }: FigureProps) {
  const item = art(key);

  return (
    <figure className={wide ? "art-item art-item-wide" : "art-item"} data-cat={item.cat}>
      <Plate art={key} ratio={ratio} credit={false} />
      <figcaption>
        <span className="art-name">{item.title}</span>
        <span className="art-by">Drawn by {item.credit}</span>
      </figcaption>
    </figure>
  );
}

export function Sticker({ art: key, tint }: { art: string; tint?: string }) {
  const item = art(key);

  return (
    <span className={`sticker ${tint ?? item.tint}`} title={item.title}>
      <img src={artSrc(key)} alt={item.alt} loading="lazy" decoding="async" />
    </span>
  );
}
