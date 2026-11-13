export type Species = {
  slug: string;
  name: string;
  title: string;
  intro: string;
  eyebrow: string;
  /** what the buyer should tell their artist */
  tell: string[];
  tellNote: string;
  /** the ref sheet shown beside the "what to tell your artist" list */
  sheet: string;
  /**
   * Set when we have not drawn this species through Refpaw yet. The page says
   * so in plain words rather than implying work that does not exist. Remove
   * this once real artwork of the species is in artwork.json.
   */
  noWorkYet?: string;
  /** a second, species-specific section */
  second: { heading: string; art: string; body: string[] };
  /** gallery shown at the foot of the page, when we have matching work */
  gallery?: { wide?: boolean; art: string }[];
};

export const species: Species[] = [
  {
    slug: "wolf",
    name: "Wolf",
    title: "Wolf fursona ref sheet and art commissions",
    eyebrow: "Species guide",
    intro:
      "Wolves are the most common fursona species, so the details are what set yours apart. Markings, ear shape, tail and eye color do the work.",
    tell: [
      "Base coat and marking colors",
      "Where the markings sit",
      "Eye color",
      "Build: lean, stocky or tall",
      "Any scars, piercings or accessories",
    ],
    tellNote:
      "If you have an old drawing or a photo of the coat pattern you want, send it. A ref sheet is easier to get right when the artist can see what you mean.",
    sheet: "refsheet-grey-wolf",
    second: {
      heading: "Markings are the whole job",
      art: "scene-forest-wolves",
      body: [
        "Two grey wolves can look identical until you decide where the lighter fur stops. Say which markings are symmetrical and which are not, because that one answer changes how every future artist draws your character.",
        "Eye colour and ear shape do more work than people expect at thumbnail size. They are what makes your icon recognisable in a crowded chat.",
      ],
    },
    gallery: [
      { art: "refsheet-monochrome-wolf", wide: true },
      { art: "scene-portal-wolf" },
      { art: "scene-forest-wolves" },
      { art: "refsheet-grey-wolf", wide: true },
      { art: "scene-waterfall" },
      { art: "scene-moonlight-pair" },
    ],
  },
  {
    slug: "fox",
    name: "Fox",
    title: "Fox fursona ref sheet and art commissions",
    eyebrow: "Species guide",
    intro:
      "Foxes come in far more than red. Arctic, fennec, silver, marble and invented colorways all change the shape of the ears, tail and face.",
    tell: [
      "The type of fox",
      "Sock and tail-tip colors",
      "Ear size",
      "Muzzle shape",
      "Whether the tail is one color or banded",
    ],
    tellNote:
      "Fennec ears and arctic winter coats change the silhouette a lot, so say which one you mean early. It saves a round of sketch changes.",
    sheet: "refsheet-fox-winter",
    second: {
      heading: "The tail carries the design",
      art: "art-samurai-fox",
      body: [
        "A fox tail is the largest single block of colour on the character, so decide early whether it is one colour, banded, or tipped, and how far up the banding goes.",
        "Socks matter for the same reason. Where the dark fur stops on each leg is one of the first things a fursuit maker will ask you about.",
      ],
    },
    gallery: [
      { art: "refsheet-fox-winter", wide: true },
      { art: "art-samurai-fox" },
      { art: "icon-bust-coyote" },
      { art: "refsheet-coyote", wide: true },
      { art: "scene-forest-walk" },
      { art: "scene-beach-jeep" },
    ],
  },
  {
    slug: "dragon",
    name: "Dragon",
    title: "Dragon fursona ref sheet and art commissions",
    eyebrow: "Species guide",
    intro:
      "Dragons have the most parts to get right: horns, wings, scales, spines and tail. A ref sheet saves you from explaining them again for every future commission.",
    tell: [
      "Western or Eastern body type",
      "Number and shape of horns",
      "Wing style",
      "Scale and underbelly colors",
      "Tail tip",
      "Whether the character has fur, scales or both",
    ],
    tellNote:
      "Wings are the part most often redrawn, so decide early whether they are feathered, membrane or something else, and whether they fold.",
    sheet: "refsheet-crimson-lizard",
    noWorkYet:
      "The sheet above is a scaled reptilian character, not a dragon — we have not drawn a dragon through Refpaw yet. It shows the layout your dragon sheet would use: every view, the head expressions and the palette. Ask your artist for dragon work from their own portfolio before you order.",
    second: {
      heading: "Wings are the part people redo",
      art: "scene-waterfall",
      body: [
        "Decide early whether they are feathered, membrane or something else, and whether they fold. A wing that only works in one pose costs you a round of changes on every future commission.",
        "The same goes for horns. Two sketches of the horn shape from different angles save far more time than a paragraph describing them.",
      ],
    },
  },
  {
    slug: "protogen",
    name: "Protogen",
    title: "Protogen ref sheet and art commissions",
    eyebrow: "Species guide",
    intro:
      "A protogen is part animal, part machine, and the visor does most of the talking. A good protogen ref sheet shows the visor expressions as clearly as the body, because that is how other artists will read your character.",
    tell: [
      "Visor colour and the expressions you use most",
      "The layout of fur and armour, and where they meet",
      "The colour of the lights",
      "Any extra parts, such as wings or tail attachments",
      "Whether any part is detachable",
    ],
    tellNote:
      "Protogens are an open species, with some rarer traits restricted by the species creator. Your artist will check your design against those rules before starting.",
    sheet: "refsheet-orca-canine",
    noWorkYet:
      "We have not drawn a protogen through Refpaw yet, so the sheet above is a different species. It shows the layout your protogen sheet would use: every view, the detail callouts and the palette. Ask your artist for protogen work from their own portfolio before you order.",
    second: {
      heading: "Why the visor matters most",
      art: "refsheet-fox-winter",
      body: [
        "Your visor is your face. List the expressions you actually use in chat, in order, and your artist will lay them out as a row on the sheet, the same way the expression row works on the sheet beside this text.",
        "That row is what a future artist or a fursuit maker copies from, so it is worth more space than almost anything else on the sheet.",
      ],
    },
  },
];

export function speciesBySlug(slug: string): Species | undefined {
  return species.find((s) => s.slug === slug);
}
