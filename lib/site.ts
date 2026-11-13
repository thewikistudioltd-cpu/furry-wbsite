import data from "./site.json";

/**
 * Everything the launch checklist still has to confirm lives in site.json, so
 * a price or a reply time is changed in one place. Values still wrapped in
 * [square brackets] are unconfirmed and render with a dotted underline — see
 * the <Tbc> component in components/Tbc.tsx.
 */

export type NavItem = {
  label: string;
  href: string;
  /** route prefixes that should light this item up */
  match: string[];
};

export type FooterLink = { label: string; href: string };

export type Artist = {
  slug: string;
  name: string;
  style: string;
  draws: string;
  status: string;
  status_tone: string;
  bio: string;
  instagram?: string;
  avatar: string;
  strip: string[];
  gallery: string[];
};

export type Site = {
  name: string;
  tagline: string;
  url: string;
  locale: string;
  contact: Record<string, string>;
  legal: Record<string, string>;
  vars: Record<string, string>;
  nav: NavItem[];
  footer: Record<string, FooterLink[]>;
  artists: Artist[];
};

export const site = data as unknown as Site;
export const vars = site.vars;
export const contact = site.contact;
export const legal = site.legal;

export function artistBySlug(slug: string): Artist | undefined {
  return site.artists.find((a) => a.slug === slug);
}
