import type { MetadataRoute } from "next";

import { posts } from "@/lib/blog";
import { site } from "@/lib/site";
import { species } from "@/lib/species";

/**
 * Built from the same data the pages are, so a new blog post or species page
 * cannot be left out of the sitemap.
 *
 * The noindex routes — /start, /queue, /terms, /brandbook — are deliberately
 * absent: there is no point asking a crawler to fetch a page we then tell it
 * not to index.
 */

/** Required by `output: "export"`: the file is written once, at build time. */
export const dynamic = "force-static";

const STATIC_ROUTES: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "commissions", priority: 0.9 },
  { path: "furry-ref-sheet-commission", priority: 0.9 },
  { path: "furry-icon-commission", priority: 0.8 },
  { path: "furry-telegram-sticker-commission", priority: 0.8 },
  { path: "first-fursona-bundle", priority: 0.8 },
  { path: "work", priority: 0.7 },
  { path: "artists", priority: 0.7 },
  { path: "our-promise", priority: 0.6 },
  { path: "faq", priority: 0.6 },
  { path: "about", priority: 0.5 },
  { path: "blog", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const lastModified = new Date();

  return [
    ...STATIC_ROUTES.map(({ path, priority }) => ({
      url: `${base}/${path ? `${path}/` : ""}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...site.artists.map((artist) => ({
      url: `${base}/artists/${artist.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...species.map((s) => ({
      url: `${base}/species/${s.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...posts.map((post) => ({
      url: `${base}/blog/${post.slug}/`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
