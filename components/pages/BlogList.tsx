"use client";

import { useState } from "react";
import Link from "next/link";
import { Photo } from "@/components/ui/Photo";
import { BLOG_POSTS, type BlogAud } from "@/lib/content/blog-posts";
import { localePath, type Lang } from "@/lib/i18n/common";

type Filter = "alle" | BlogAud;

const FILTERS: Record<Lang, { key: Filter; label: string }[]> = {
  nl: [
    { key: "alle", label: "Alle" },
    { key: "bedrijf", label: "Voor bedrijven" },
    { key: "talent", label: "Voor talent" },
  ],
  en: [
    { key: "alle", label: "All" },
    { key: "bedrijf", label: "For companies" },
    { key: "talent", label: "For talent" },
  ],
};

const AUD_LABEL: Record<Lang, Record<BlogAud, string>> = {
  nl: { bedrijf: "Voor bedrijven", talent: "Voor talent", beide: "Voor iedereen" },
  en: { bedrijf: "For companies", talent: "For talent", beide: "For everyone" },
};

const READ_MORE: Record<Lang, string> = { nl: "leestijd · Lees meer →", en: "read · Read more →" };

export function BlogList({ lang }: { lang: Lang }) {
  const [aud, setAud] = useState<Filter>("alle");
  const posts = BLOG_POSTS.filter((post) => aud === "alle" || post.aud === aud || post.aud === "beide");

  // Photography ran out of unique shots before posts, so some photos repeat.
  // Give each repeat a distinct crop (mirrored / zoomed) so reused photos
  // never render as pixel-identical thumbnails next to each other.
  const photoSeen = new Map<string, number>();
  const photoVariant = (src: string) => {
    const n = photoSeen.get(src) ?? 0;
    photoSeen.set(src, n + 1);
    return { flip: n === 1 || n === 3, zoom: n === 2 || n === 3 ? 1.25 : 1 };
  };

  return (
    <>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
        {FILTERS[lang].map((f) => (
          <span
            key={f.key}
            onClick={() => setAud(f.key)}
            className={`chip ${aud === f.key ? "chip--active-blue" : ""}`}
          >
            {f.label}
          </span>
        ))}
      </div>
      <div className="g-collapse" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 20 }}>
        {posts.map((post) => {
          const variant = photoVariant(post.photo);
          return (
          <Link
            key={post.slug}
            href={localePath(lang, `/blog/${post.slug}`)}
            className="card flex-collapse"
            style={{ padding: 0, display: "flex", overflow: "hidden", textDecoration: "none", color: "inherit" }}
          >
            <div className="blog-thumb" style={{ width: 150, flex: "none" }}>
              <Photo src={post.photo} alt={post.title[lang]} ratio="1 / 1" radius="0" sizes="150px" flip={variant.flip} zoom={variant.zoom} />
            </div>
            <div style={{ padding: 20 }}>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 10 }}>
                <span className="badge badge--blue">{post.tag[lang]}</span>
                {post.aud !== "beide" && (
                  <span
                    className="badge"
                    style={{
                      border: `1px solid ${post.aud === "talent" ? "var(--voids-blue)" : "var(--voids-purple)"}`,
                      color: post.aud === "talent" ? "var(--voids-blue)" : "var(--voids-purple)",
                      background: "transparent",
                    }}
                  >
                    {AUD_LABEL[lang][post.aud]}
                  </span>
                )}
              </div>
              <div style={{ fontSize: 16, fontWeight: 600, lineHeight: 1.3, margin: "0 0 8px" }}>{post.title[lang]}</div>
              <div style={{ fontSize: 12.5, color: "var(--voids-ink-muted)" }}>
                {post.read[lang]} {READ_MORE[lang]}
              </div>
            </div>
          </Link>
          );
        })}
      </div>
    </>
  );
}
