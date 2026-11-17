# Refpaw website

The production Refpaw marketing and commission site. It uses Next.js App Router and exports a fully static site into `out/`.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production checks

```bash
npm run check
```

This runs ESLint, the production static export, and SEO regression checks against the generated `out/` files.

## Deployment

`npm run build` writes the deployable site to `out/`. The host must serve unknown routes with `out/404.html` and a real HTTP 404 status.

The canonical base URL defaults to `lib/site.json`. A build can deliberately override it:

```bash
NEXT_PUBLIC_SITE_URL=https://preview.example.com npm run build
```

Do not index a preview deployment. The production build should use `https://refpaw.com`.

## Content sources

- `lib/site.json` — prices, timings, contact details, legal details, navigation and artist roster
- `lib/artwork.json` — artwork files, alt text and artist credit
- `lib/blog.ts` — blog posts
- `lib/species.ts` — species pages

Values still wrapped in square brackets are unconfirmed business decisions. Confirm them before launch rather than guessing.
