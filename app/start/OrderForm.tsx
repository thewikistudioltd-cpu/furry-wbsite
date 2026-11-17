"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Note } from "@/components/blocks";
import { Tbc } from "@/components/Tbc";
import { site, vars } from "@/lib/site";

const PRODUCTS = [
  { value: "ref-sheet", label: "Ref sheet", price: vars.price_sheet_simple },
  { value: "icon", label: "Icon", price: vars.price_icon_flat },
  { value: "stickers", label: "Sticker pack", price: vars.price_stickers_6 },
  { value: "bundle", label: "First fursona bundle", price: vars.price_bundle },
];

export function OrderForm() {
  /**
   * Links such as /start?product=icon and /start?artist=lunaflare come from the
   * product and artist pages, so the visitor does not pick twice. The page is a
   * static export, so the parameters only exist on the client — the Suspense
   * boundary in page.tsx covers the prerender.
   */
  const params = useSearchParams();
  const preProduct = params.get("product") ?? "";
  const preArtist = params.get("artist") ?? "";

  const [product, setProduct] = useState(
    PRODUCTS.some((x) => x.value === preProduct) ? preProduct : "",
  );
  const [artist, setArtist] = useState(
    site.artists.some((x) => x.slug === preArtist) ? preArtist : "",
  );
  const [sent, setSent] = useState(false);
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sent) statusRef.current?.focus();
  }, [sent]);

  return (
    <form
      className="card"
      style={{ padding: 32 }}
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="field">
        <span
          id="product-label"
          style={{ display: "block", fontWeight: 700, fontSize: 15, marginBottom: 6 }}
        >
          What would you like?
        </span>
        <div className="choice-grid" role="radiogroup" aria-labelledby="product-label">
          {PRODUCTS.map((p) => (
            <label className="choice" key={p.value}>
              <input
                type="radio"
                name="product"
                value={p.value}
                required
                checked={product === p.value}
                onChange={() => setProduct(p.value)}
              />
              <span>
                <span className="choice-title">{p.label}</span>
                <span className="choice-meta">
                  <Tbc>{`From $${p.price}`}</Tbc>
                </span>
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="field">
        <label htmlFor="artist">Which artist?</label>
        <select
          className="select"
          id="artist"
          name="artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        >
          <option value="">No preference &mdash; match me to someone</option>
          {site.artists.map((a) => (
            <option value={a.slug} key={a.slug}>
              {a.name} &mdash; {a.status.toLowerCase()}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="character">Your character&rsquo;s name and species</label>
        <input
          className="input"
          id="character"
          name="character"
          type="text"
          required
          placeholder="Milo, gray wolf"
        />
      </div>

      <div className="field">
        <label htmlFor="describe">Describe your character</label>
        <span className="hint">
          Colors, markings, personality, anything you want us to get right.
        </span>
        <textarea className="textarea" id="describe" name="describe" required />
      </div>

      <div className="field">
        <label htmlFor="refs">Reference images</label>
        <span className="hint">
          <Tbc>{`Old drawings, photos, color samples. Optional, up to ${vars.upload_limit} each.`}</Tbc>
        </span>
        <input
          className="input"
          id="refs"
          name="refs"
          type="file"
          multiple
          accept="image/*"
          style={{ padding: "11px 14px" }}
        />
      </div>

      <div className="field">
        <label htmlFor="avoid">Anything we should avoid?</label>
        <span className="hint">Optional.</span>
        <textarea
          className="textarea"
          id="avoid"
          name="avoid"
          style={{ minHeight: 90 }}
        />
      </div>

      <div className="field">
        <label htmlFor="name">Your name or handle</label>
        <input className="input" id="name" name="name" type="text" required />
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input className="input" id="email" name="email" type="email" required />
      </div>

      <div className="field">
        <label htmlFor="chat">Telegram or Discord handle</label>
        <span className="hint">Optional. Only used to talk about this order.</span>
        <input className="input" id="chat" name="chat" type="text" />
      </div>

      <div className="field">
        <label className="checkbox">
          <input type="checkbox" name="agree" required />
          <span>
            I have read the{" "}
            <a
              href="/terms"
              style={{ color: "var(--blue-ink)", textDecoration: "underline", textUnderlineOffset: 3 }}
            >
              terms of service
            </a>
            . This is a SFW request.
          </span>
        </label>
      </div>

      <button className="btn btn-primary btn-block" type="submit" disabled={sent}>
        Send my request
      </button>

      {sent && (
        <div ref={statusRef} tabIndex={-1} style={{ marginTop: 20 }}>
          <Note>
            <strong>Not connected yet.</strong> This form does not send anything or take
            payment. Wire it to your email service or CRM before launch, then replace this
            message with:{" "}
            <Tbc>
              {`“Got it. Your artist will reply to your email within ${vars.reply_time} with a quote and a date.”`}
            </Tbc>
          </Note>
        </div>
      )}
    </form>
  );
}
