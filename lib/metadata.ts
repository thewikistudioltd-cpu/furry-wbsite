import type { Metadata } from "next";

import { site } from "@/lib/site";

const defaultImage = "/branding/social-cover-1200x630.png";

export function pageMetadata({
  title,
  description,
  path,
  image = defaultImage,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: site.locale.replace("-", "_"),
      title: `${title} | ${site.name}`,
      description,
      url: path,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: [image],
    },
  };
}
