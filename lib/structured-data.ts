import { site } from "@/lib/site";

const base = site.url.replace(/\/$/, "");

export function absoluteUrl(path: string): string {
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function serviceJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: name,
    description,
    url: absoluteUrl(path),
    areaServed: "Worldwide",
    provider: {
      "@type": "Organization",
      name: site.name,
      url: absoluteUrl("/"),
    },
  };
}

export function articleJsonLd({
  headline,
  description,
  path,
  image,
}: {
  headline: string;
  description: string;
  path: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url: absoluteUrl(path),
    image: absoluteUrl(image),
    author: {
      "@type": "Organization",
      name: site.name,
      url: absoluteUrl("/"),
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: absoluteUrl("/"),
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/branding/refpaw-icon.svg"),
      },
    },
  };
}

export function profilePageJsonLd({
  name,
  description,
  path,
  image,
  sameAs,
}: {
  name: string;
  description: string;
  path: string;
  image: string;
  sameAs: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: absoluteUrl(path),
    mainEntity: {
      "@type": "Person",
      name,
      description,
      image: absoluteUrl(image),
      sameAs,
    },
  };
}
