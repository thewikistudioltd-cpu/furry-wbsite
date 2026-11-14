import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

/**
 * The disallowed paths match the routes whose metadata already sets
 * `robots: { index: false }`. Keep the two in step: a page that is noindex in
 * its own metadata should be listed here too.
 */
/** Required by `output: "export"`: the file is written once, at build time. */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = site.url.replace(/\/$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/start/", "/queue/", "/terms/", "/brandbook/"],
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
