import type { Metadata } from "next";
import Link from "next/link";

import { Plate } from "@/components/Art";
import { Crumbs } from "@/components/blocks";
import { Tbc } from "@/components/Tbc";
import { artSrc } from "@/lib/artwork";
import { contact, site, vars } from "@/lib/site";

export const metadata: Metadata = {
  title: "Meet the Artists",
  description:
    "Refpaw is a collective of human artists. See each artist's style, past work and open slots, then pick who draws your character.",
  alternates: { canonical: "/artists" },
};

export default function ArtistsPage() {
  return (
    <>
      <section className="pagehead atmosphere">
        <div className="wrap">
          <Crumbs trail={[{ label: "Home", href: "/" }, { label: "Artists" }]} />
          <p className="eyebrow eyebrow-blue">The collective</p>
          <h1 className="h-hero" style={{ fontSize: "clamp(2.3rem,4.4vw,3.4rem)" }}>
            The artists behind Refpaw
          </h1>
          <p className="lead">
            Refpaw is a collective, which means the artists are the business. Each one has
            their own style, their own queue and their own name on the work.
          </p>
        </div>
      </section>

      <section className="section-sm">
        <div className="wrap wrap-wide">
          <div className="grid grid-3">
            {site.artists.map((artist) => (
              <article className="card artist-card" key={artist.slug}>
                <div className="artist-head">
                  <img
                    className="artist-avatar"
                    src={artSrc(artist.avatar)}
                    alt=""
                    width={58}
                    height={58}
                    loading="lazy"
                  />
                  <div>
                    <h3>{artist.name}</h3>
                    <p>{artist.style}</p>
                  </div>
                </div>
                <div className="artist-strip">
                  {artist.strip.map((key) => (
                    <img src={artSrc(key)} alt="" loading="lazy" key={key} />
                  ))}
                </div>
                <div className="artist-foot">
                  <span className="badge badge-mint badge-dot">{artist.status}</span>
                  <Link className="tlink" href={`/artists/${artist.slug}`}>
                    See {artist.name}&rsquo;s work
                  </Link>
                </div>
              </article>
            ))}

            <article
              className="card"
              style={{ padding: 28, display: "flex", flexDirection: "column", gap: 12 }}
            >
              <span className="badge badge-blue">How the roster grows</span>
              <h3 className="h-card" style={{ margin: 0 }}>
                One real artist beats four invented ones
              </h3>
              <p style={{ color: "var(--ink-soft)", fontSize: 15, flex: 1 }}>
                An artist appears here only once their profile, portfolio and permission to show
                the work are all confirmed. That is why this page is short.
              </p>
              <Link className="tlink" href="/our-promise">
                Read our promise
              </Link>
            </article>

            <article
              className="card"
              style={{ padding: 28, display: "flex", flexDirection: "column", gap: 12 }}
            >
              <span className="badge badge-sun">Not sure?</span>
              <h3 className="h-card" style={{ margin: 0 }}>
                Let us match you
              </h3>
              <p style={{ color: "var(--ink-soft)", fontSize: 15, flex: 1 }}>
                Send your brief with &ldquo;no preference&rdquo; and we will pass it to the
                artist who draws your species best.
              </p>
              <Link className="tlink" href="/start">
                Start a commission
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="wrap">
          <div className="split">
            <div>
              <p className="eyebrow eyebrow-mint">How it works</p>
              <h2 className="h-section">What an artist listing means</h2>
              <div className="prose">
                <h3>Status</h3>
                <p>
                  Open means they can take your brief now. A slot count means that is how many
                  they have left this round. Opens on a date means you can book ahead. Closed
                  means wait, or pick someone else.
                </p>
                <h3>Credit</h3>
                <p>
                  Their signature goes on the file and their name goes on our site. We never
                  pass one artist&rsquo;s work off as another&rsquo;s.
                </p>
                <h3>Pay</h3>
                <p>
                  <Tbc>
                    {`Artists keep ${vars.artist_share} of every order. The rest covers payment fees, the website and the people who answer your messages.`}
                  </Tbc>
                </p>
              </div>
            </div>
            <div className="split-art">
              <Plate art="scene-forest-wolves" ratio="1x1" />
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="join">
        <div className="wrap">
          <div className="cta-panel atmosphere">
            <p className="eyebrow eyebrow-yellow">Artists</p>
            <h2 className="h-section">Want to draw with us?</h2>
            <p className="lead">
              <Tbc>
                {`We are open to SFW artists who draw by hand. You keep ${vars.artist_share} of every order and your name on every piece.`}
              </Tbc>
            </p>
            <div className="btn-row" style={{ justifyContent: "center" }}>
              <a className="btn btn-primary" href={`mailto:${contact.email}`}>
                <Tbc>{`Write to ${contact.email}`}</Tbc>
              </a>
            </div>
            <p style={{ marginTop: 18, fontSize: "14.5px", color: "var(--ink-faint)" }}>
              <Tbc>{`Send a link to your gallery. We reply within ${vars.reply_time}.`}</Tbc>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
