"use client";

import { useState } from "react";
import { Photo } from "@/components/ui/Photo";
import type { Lang } from "@/lib/i18n/common";

type Aud = "alle" | "bedrijf" | "talent" | "beide";

const PHOTOS = [
  "/photography/blog-1.jpg",
  "/photography/blog-2.jpg",
  "/photography/blog-3.jpg",
  "/photography/blog-4.jpg",
  "/photography/blog-5.jpg",
  "/photography/blog-6.jpg",
  "/photography/blog-7.jpg",
  "/photography/blog-8.jpg",
];

const POSTS: Record<Lang, { tag: string; aud: Aud; title: string; read: string }[]> = {
  nl: [
    { tag: "Uitgelegd", aud: "beide", title: "Wat is een werkstudent, en wat mag je verwachten?", read: "5 min" },
    { tag: "Vergelijking", aud: "bedrijf", title: "Werkstudent, stagiair of starter: wat past bij jouw bedrijf?", read: "6 min" },
    { tag: "Werkgever", aud: "bedrijf", title: "Zo bouw je een junior-instroom die blijft plakken", read: "7 min" },
    { tag: "Fair pay", aud: "bedrijf", title: "Wat is een eerlijk uurtarief voor een werkstudent?", read: "5 min" },
    { tag: "Carrière", aud: "talent", title: "Zo schrijf je een matchprofiel dat opvalt", read: "4 min" },
    { tag: "Studie & werk", aud: "talent", title: "Betaald werken naast je studie: wat levert het op?", read: "5 min" },
    { tag: "Eerste stap", aud: "talent", title: "Van studie naar eerste baan in 5 stappen", read: "6 min" },
    { tag: "Gen Z", aud: "beide", title: "Waarom Gen Z op karakter matcht, niet op functietitel", read: "4 min" },
  ],
  en: [
    { tag: "Explained", aud: "beide", title: "What is a working student, and what can you expect?", read: "5 min" },
    { tag: "Comparison", aud: "bedrijf", title: "Working student, intern or starter: what fits your company?", read: "6 min" },
    { tag: "Employer", aud: "bedrijf", title: "How to build a junior pipeline that sticks", read: "7 min" },
    { tag: "Fair pay", aud: "bedrijf", title: "What is a fair hourly rate for a working student?", read: "5 min" },
    { tag: "Career", aud: "talent", title: "How to write a match profile that stands out", read: "4 min" },
    { tag: "Study & work", aud: "talent", title: "Paid work alongside your studies: what does it bring?", read: "5 min" },
    { tag: "First step", aud: "talent", title: "From study to first job in 5 steps", read: "6 min" },
    { tag: "Gen Z", aud: "beide", title: "Why Gen Z matches on character, not job title", read: "4 min" },
  ],
};

const FILTERS: Record<Lang, { key: Aud; label: string }[]> = {
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

const AUD_LABEL: Record<Lang, Record<Aud, string>> = {
  nl: { alle: "", bedrijf: "Voor bedrijven", talent: "Voor talent", beide: "Voor iedereen" },
  en: { alle: "", bedrijf: "For companies", talent: "For talent", beide: "For everyone" },
};

const READ_MORE: Record<Lang, string> = { nl: "leestijd · Lees meer →", en: "read · Read more →" };

export function BlogList({ lang }: { lang: Lang }) {
  const [aud, setAud] = useState<Aud>("alle");
  const posts = POSTS[lang]
    .map((p, i) => ({ ...p, photo: PHOTOS[i] }))
    .filter((p) => aud === "alle" || p.aud === aud || p.aud === "beide");

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
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {posts.map((p) => (
          <div key={p.title} className="card" style={{ padding: 0, display: "flex", overflow: "hidden" }}>
            <div style={{ width: 150, flex: "none" }}>
              <Photo src={p.photo} alt={p.title} ratio="1 / 1" radius="0" sizes="150px" />
            </div>
            <div style={{ padding: 20 }}>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 10 }}>
                <span className="badge badge--blue">{p.tag}</span>
                {p.aud !== "beide" && (
                  <span
                    className="badge"
                    style={{
                      border: `1px solid ${p.aud === "talent" ? "var(--voids-purple)" : "var(--voids-blue)"}`,
                      color: p.aud === "talent" ? "var(--voids-purple)" : "var(--voids-blue)",
                      background: "transparent",
                    }}
                  >
                    {AUD_LABEL[lang][p.aud]}
                  </span>
                )}
              </div>
              <div style={{ fontSize: 16, fontWeight: 600, lineHeight: 1.3, margin: "0 0 8px" }}>{p.title}</div>
              <div style={{ fontSize: 12.5, color: "var(--voids-ink-muted)" }}>
                {p.read} {READ_MORE[lang]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
