export type Post = {
  slug: string;
  title: string;
  eyebrow: string;
  /** the search term this post is written for */
  keyword: string;
  summary: string;
  art: string;
  next: { href: string; label: string };
  sections: { heading: string; body: string }[];
};

export const posts: Post[] = [
  {
    slug: "furry-ref-sheet-cost-2026",
    title: "How much does a furry ref sheet cost in 2026?",
    eyebrow: "Commission pricing",
    keyword: "how much does a furry commission cost",
    summary:
      "What changes the quote, how detail levels compare, and what to ask before paying.",
    art: "refsheet-coyote",
    next: { href: "/furry-ref-sheet-commission", label: "See ref sheet prices" },
    sections: [
      {
        heading: "Why there is no single price",
        body: "A ref sheet quote depends on the artist, number of views, rendering style, expressions, callouts and whether the design already exists. Compare like with like, not just the lowest total.",
      },
      {
        heading: "What raises the quote",
        body: "Extra views, complex markings, wings, armor, detailed accessories, character design and commercial rights all add work. Ask for every deliverable to be written down.",
      },
      {
        heading: "How to compare quotes",
        body: "Check the artist name, portfolio, revision stage, file formats, usage rights, delivery estimate and refund terms. A clear scope is more useful than a vague low number.",
      },
    ],
  },
  {
    slug: "what-to-put-on-fursona-ref-sheet",
    title: "What to put on a fursona ref sheet",
    eyebrow: "Reference sheet checklist",
    keyword: "fursona reference sheet",
    summary: "The views, palette, callouts and notes that make a sheet useful.",
    art: "refsheet-saarema",
    next: { href: "/furry-ref-sheet-commission", label: "Order a ref sheet" },
    sections: [
      {
        heading: "Start with the essential views",
        body: "A front and back full-body view establish silhouette, markings and proportions. Add a side view when the muzzle, wings, tail or body shape needs it.",
      },
      {
        heading: "Use a precise palette",
        body: "Place clean color chips beside the character and include hex codes where useful. Keep lighting effects away from the main flat-color reference.",
      },
      {
        heading: "Call out easy-to-miss details",
        body: "Show paw pads, mouth color, scars, piercings, asymmetrical markings and accessories. Clear notes prevent future artists from guessing.",
      },
    ],
  },
  {
    slug: "commission-furry-art-safely",
    title: "How to commission furry art safely",
    eyebrow: "Safe commissioning",
    keyword: "how to commission a furry artist",
    summary: "How to check an artist, understand a deposit and spot warning signs.",
    art: "scene-portal-wolf",
    next: { href: "/our-promise", label: "Read our promise" },
    sections: [
      {
        heading: "Verify the artist",
        body: "Follow links from the artist’s established profile, compare style consistency and look for clear terms. Reverse-search suspicious portfolio images when something feels wrong.",
      },
      {
        heading: "Agree before paying",
        body: "Get the deliverables, price, revision stages, schedule, usage rights and refund rules in writing. Use a payment method with an understandable dispute process.",
      },
      {
        heading: "Watch for warning signs",
        body: "Pressure to pay immediately, copied portfolios, changing account names, refusal to provide a sketch stage and unclear ownership claims all deserve caution.",
      },
    ],
  },
  {
    slug: "describe-your-fursona",
    title: "How to describe your fursona to an artist",
    eyebrow: "Character brief",
    keyword: "how to make a fursona",
    summary:
      "A simple brief for species, colors, markings, personality and must-keep details.",
    art: "refsheet-violet-hyena",
    next: { href: "/start", label: "Start a commission" },
    sections: [
      {
        heading: "Describe the foundation",
        body: "Start with species, build, age presentation and the overall visual impression. Then explain base colors and where markings sit.",
      },
      {
        heading: "Add personality",
        body: "A few traits such as calm, chaotic, shy or confident help the artist choose pose and expression. Mention signature objects or clothing.",
      },
      {
        heading: "Separate must-haves from inspiration",
        body: "Label fixed details clearly. Moodboards and animal photos are inspiration, not instructions to copy another artist’s work.",
      },
    ],
  },
  {
    slug: "telegram-sticker-pack",
    title: "How to make a Telegram sticker pack from your stickers",
    eyebrow: "Telegram stickers",
    keyword: "telegram sticker pack size",
    summary:
      "File preparation, expression planning and the setup sequence for a usable pack.",
    art: "sticker-coyote-grin",
    next: { href: "/furry-telegram-sticker-commission", label: "Order a sticker pack" },
    sections: [
      {
        heading: "Prepare the files",
        body: "Use transparent PNG files sized for Telegram, with enough empty space around ears, horns and text to avoid clipping. Refpaw packs use 512px artwork.",
      },
      {
        heading: "Build a balanced expression set",
        body: "Begin with reactions you use often: happy, laugh, sad, angry, love and confused. Add personal jokes only after the practical basics.",
      },
      {
        heading: "Create and test the pack",
        body: "Use Telegram’s official sticker tools, assign relevant emoji and test every sticker in both light and dark chat themes before sharing the link.",
      },
    ],
  },
  {
    slug: "fursuit-ref-sheet",
    title: "What a fursuit maker needs from your ref sheet",
    eyebrow: "Fursuit-ready reference",
    keyword: "fursuit reference sheet",
    summary: "Extra views, flat colors, material notes and construction-friendly details.",
    art: "refsheet-grey-wolf",
    next: { href: "/furry-ref-sheet-commission", label: "Order a fursuit-ready sheet" },
    sections: [
      {
        heading: "Show construction-critical views",
        body: "Front, back and side views help a maker understand proportions. Add separate paw, tail, ear and head details when their shape is unusual.",
      },
      {
        heading: "Keep colors flat",
        body: "A maker needs the local color, not dramatic lighting. Use clear chips and explain which markings are symmetrical.",
      },
      {
        heading: "Add practical notes",
        body: "Call out removable accessories, vision areas, ventilation preferences and material ideas as discussion points, not rigid construction instructions.",
      },
    ],
  },
  {
    slug: "protogen-ref-sheets",
    title: "Protogen ref sheets: what your artist needs to know",
    eyebrow: "Protogen design",
    keyword: "protogen ref sheet",
    summary: "Visor expressions, armor layout, lighting and species-rule details.",
    art: "refsheet-orca-canine",
    next: { href: "/species/protogen", label: "Protogen species guide" },
    sections: [
      {
        heading: "Treat the visor as a face",
        body: "Show several visor expressions and define the light color. Keep the expression symbols readable from a distance.",
      },
      {
        heading: "Map fur and armor clearly",
        body: "Use front, back and side views to show where organic and mechanical areas meet. Label floating or detachable parts.",
      },
      {
        heading: "Check current species rules",
        body: "Trait rules can change. Confirm the current official guidance and ownership requirements before finalizing restricted features.",
      },
    ],
  },
  {
    slug: "furry-commission-terms",
    title: "What is a YCH? Furry commission terms explained",
    eyebrow: "Commission glossary",
    keyword: "furry ych",
    summary: "YCH, adoptable, ref sheet, WIP and TOS in plain language.",
    art: "art-magazine-cover",
    next: { href: "/faq", label: "See all questions" },
    sections: [
      {
        heading: "YCH and adoptable",
        body: "YCH means “your character here”: the pose or composition is fixed and your character is drawn into it. An adoptable is a character design offered for someone to purchase under stated terms.",
      },
      {
        heading: "Ref sheet and WIP",
        body: "A ref sheet records a character’s design. WIP means work in progress, usually a sketch or partial image shared for feedback.",
      },
      {
        heading: "TOS and usage rights",
        body: "TOS means terms of service. Read the sections on payment, revisions, cancellation, credit, personal use and commercial licensing before ordering.",
      },
    ],
  },
];

export function postBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
