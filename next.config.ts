import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Refpaw is a brochure site: every route is known at build time and nothing
   * needs a server. `export` writes plain HTML to out/, so it can be hosted
   * anywhere — Vercel, Netlify, S3, or the same static host as before.
   *
   * To move to a Node deployment later (image optimisation, API routes for the
   * order form), delete `output` and `images.unoptimized`.
   */
  output: "export",
  images: { unoptimized: true },

  /** out/about/index.html rather than out/about.html, so plain file hosts work. */
  trailingSlash: true,
};

export default nextConfig;
