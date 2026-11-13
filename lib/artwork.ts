import data from "./artwork.json";

/**
 * Every image on the site is registered here with its alt text and the human
 * artist who drew it. Nothing renders artwork without going through this map,
 * so a piece can never appear without a credit.
 *
 * Refpaw promises no AI at any stage: an entry may only be added for artwork
 * drawn by a person who has agreed to it being shown.
 */

export type ArtCategory = "sheets" | "icons" | "illustration";

export type Artwork = {
  file: string;
  title: string;
  alt: string;
  credit: string;
  cat: ArtCategory;
  /** `contain` shows a whole ref sheet; `cover` fills the frame. */
  fit: "cover" | "contain";
  tint: string;
};

const entries = Object.fromEntries(
  Object.entries(data as Record<string, unknown>).filter(
    ([key]) => !key.startsWith("_"),
  ),
) as Record<string, Artwork>;

export type ArtKey = keyof typeof entries & string;

export const artwork = entries;

export function art(key: string): Artwork {
  const item = artwork[key];
  if (!item) throw new Error(`Unknown artwork key: ${key}`);
  return item;
}

export function artSrc(key: string): string {
  return `/art/${art(key).file}`;
}

export function artsByCategory(cat: ArtCategory): [string, Artwork][] {
  return Object.entries(artwork).filter(([, a]) => a.cat === cat);
}
