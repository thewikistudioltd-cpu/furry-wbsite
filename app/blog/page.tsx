import type { Metadata } from "next";
import Link from "next/link";

import { Plate } from "@/components/Art";
import { Crumbs, CtaPanel } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "The Refpaw Blog: Guides for Commissioning Furry Art",
  description:
    "Plain guides on ref sheets, prices, sticker packs and commissioning furry art safely.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <>
      <section className="pagehead atmosphere">
        <div className="wrap">
          <Crumbs trail={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
          <p className="eyebrow eyebrow-yellow">Guides</p>
          <h1 className="h-hero" style={{ fontSize: "clamp(2.3rem,4.4vw,3.4rem)" }}>
            Guides for commissioning furry art
          </h1>
          <p className="lead">
            What a ref sheet should contain, what commissions cost, how to brief an artist and
            how to stay safe doing it.
          </p>
        </div>
      </section>

      <section className="section-sm">
        <div className="wrap wrap-wide">
          <Reveal className="grid grid-3" stagger>
            {posts.map((post) => (
              <article className="card card-hover post-card" key={post.slug}>
                <Plate art={post.art} ratio="16x9" credit={false} />
                <div className="card-body">
                  <span className="post-meta">{post.eyebrow}</span>
                  <h3>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p>{post.summary}</p>
                  <Link className="tlink" href={`/blog/${post.slug}`}>
                    Read it
                  </Link>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaPanel />
    </>
  );
}
