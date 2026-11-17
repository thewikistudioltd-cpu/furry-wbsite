import Link from "next/link";
import type { ReactNode } from "react";

import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

/** The three things we never stop saying. */
export function TrustRow() {
  const items = ["SFW only", "Drawn by people, no AI", "Artist credited"];
  return (
    <ul className="trust-row">
      {items.map((item) => (
        <li key={item}>
          <Check />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M4 10.5 8 14.5 16 5.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Closing call to action, used at the foot of most pages. */
export function CtaPanel() {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="cta-panel atmosphere">
          <p className="eyebrow eyebrow-yellow">Ready when you are</p>
          <h2 className="h-section">Ready to see your character on paper?</h2>
          <p className="lead">
            Pick an artist and send a description. You get a quote and a delivery date
            before you pay anything.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link className="btn btn-primary" href="/start">
              Start a commission
            </Link>
            <Link className="btn btn-ghost" href="/artists">
              Meet the artists
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Crumbs({ trail }: { trail: { label: string; href?: string }[] }) {
  const base = site.url.replace(/\/$/, "");
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${base}${item.href === "/" ? "/" : `${item.href}/`}` } : {}),
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <nav className="crumbs" aria-label="Breadcrumb">
        {trail.map((item, i) => (
          <span key={item.label} style={{ display: "contents" }}>
            {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
            {i < trail.length - 1 && <span>/</span>}
          </span>
        ))}
      </nav>
    </>
  );
}

export function Faq({ question, children }: { question: string; children: ReactNode }) {
  return (
    <details className="faq-item">
      <summary>{question}</summary>
      <div className="faq-answer">{children}</div>
    </details>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return (
    <div className="note">
      <span className="note-icon" aria-hidden="true">
        &#9679;
      </span>
      <div>{children}</div>
    </div>
  );
}

export function Step({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="step">
      <span className="step-num">{n}</span>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
