import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      /**
       * The site is a static export with image optimisation off
       * (next.config.ts), so next/image would render a plain <img> anyway while
       * making the object-fit and aspect-ratio rules in globals.css harder to
       * follow. Turn this back on if the site moves to a Node deployment and
       * `images.unoptimized` is removed.
       */
      "@next/next/no-img-element": "off",
    },
  },
]);

export default eslintConfig;
