import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Plate } from "@/components/Art";
import { Crumbs } from "@/components/blocks";
import { JsonLd } from "@/components/JsonLd";
import { artSrc } from "@/lib/artwork";
import { postBySlug, posts } from "@/lib/blog";
import { articleJsonLd } from "@/lib/structured-data";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
      url: `/blog/${post.slug}`,
      images: [artSrc(post.art)],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: [artSrc(post.art)],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();
  const structuredData = articleJsonLd({
    headline: post.title,
    description: post.summary,
    path: `/blog/${post.slug}/`,
    image: artSrc(post.art),
  });

  return (
    <>
      <JsonLd data={structuredData} />
      <section className="pagehead atmosphere">
        <div className="wrap" style={{ maxWidth: 860 }}>
          <Crumbs
            trail={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />
          <p className="eyebrow">{post.eyebrow}</p>
          <h1 className="h-hero" style={{ fontSize: "clamp(2.1rem,4vw,3rem)" }}>
            {post.title}
          </h1>
          <p className="lead">{post.summary}</p>
        </div>
      </section>

      <section className="section-sm">
        <div className="wrap" style={{ maxWidth: 860 }}>
          <div className="split-art" style={{ marginBottom: 40 }}>
            <Plate art={post.art} ratio="16x9" />
          </div>

          <article className="prose">
            {post.sections.map((s) => (
              <section key={s.heading}>
                <h2>{s.heading}</h2>
                <p>{s.body}</p>
              </section>
            ))}
          </article>

          <div className="card" style={{ padding: 26, marginTop: 44 }}>
            <h2 className="h-card">Next step</h2>
            <p style={{ color: "var(--ink-soft)", fontSize: 15, marginTop: 8 }}>
              Everything on Refpaw is drawn by a named human artist, SFW only, with a sketch
              for you to approve before color.
            </p>
            <div className="btn-row" style={{ marginTop: 18 }}>
              <Link className="btn btn-primary btn-sm" href={post.next.href}>
                {post.next.label}
              </Link>
              <Link className="btn btn-ghost btn-sm" href="/blog">
                More guides
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
