# Refpaw — Production launch checklist

## Content & identity
- [ ] Confirm final legal/brand name, domain, and contact email.
- [ ] Confirm full artist roster, each artist's specialties, correct display names, bios, links, and availability.
- [ ] Replace every `*-concept.webp` / `artist-*.webp` mockup with authorized original human-made artwork, with artist attribution and permissions.
- [ ] Obtain real customer testimonials and obtain permission before displaying them (current prototype deliberately contains no invented testimonials).
- [ ] Agree the brand voice and any final logo refinements.

## Commerce & commissions
- [ ] Connect and test submission endpoint/email/CRM and file-upload storage; downloadable mock brief is currently local-only.
- [ ] Set actual prices or quoting process, currencies, revision limits, and turnaround times.
- [ ] Publish commission terms, copyright and commercial-use rules, cancellation/refund policy, privacy, accessibility and any applicable cookie notices.
- [ ] Connect and test secure payment provider if charging online; no payment processing is included.
- [ ] Set up spam protection, virus scanning for uploads, file limits and retention policy.
- [ ] Add live artist availability/slots and an internal order-tracking workflow.

## Frontend / operations
- [ ] Swap sample concept thumbnails for optimized, accessible artist-licensed images.
- [ ] Complete browser/device QA, including Safari/iPhone, Android and keyboard accessibility.
- [ ] Connect production analytics, consent and SEO metadata/canonical URLs.
- [ ] Host on Vercel/Netlify/static host or integrate into your chosen CMS.
- [ ] Configure website environment variables, backups and monitoring where relevant.
- [ ] Replace `hello@example.com` and enable real contact links.

## Figma
- [ ] Existing design file: https://www.figma.com/design/bgwBVqS1bH2b5tN7sZqE6l
- [ ] Bring this new visual direction into the Figma file once connector write quota permits; the previous Figma mockup is an early prototype, not this finished code design.
