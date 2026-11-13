import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section atmosphere" style={{ paddingBlock: 120 }}>
      <div className="wrap center">
        <p className="eyebrow">404</p>
        <h1 className="h-hero">This page wandered off</h1>
        <p className="lead measure">
          The link is broken or the page has moved. Head back home or go straight to the
          artists.
        </p>
        <div className="btn-row">
          <Link className="btn btn-primary" href="/">
            Back to home
          </Link>
          <Link className="btn btn-ghost" href="/artists">
            Meet the artists
          </Link>
        </div>
      </div>
    </section>
  );
}
