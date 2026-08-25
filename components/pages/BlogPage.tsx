import { BlogList } from "@/components/pages/BlogList";
import type { Lang } from "@/lib/i18n/common";

const COPY: Record<Lang, { eyebrow: string; title: string; sub: string }> = {
  nl: {
    eyebrow: "Blog",
    title: "KENNIS OVER JUNIOR TALENT.",
    sub: "Praktische gidsen voor bedrijven en studenten, van “wat is een werkstudent?” tot slim werven.",
  },
  en: {
    eyebrow: "Blog",
    title: "SMART TAKES ON JUNIOR TALENT.",
    sub: "Practical guides for companies and students, from “what is a working student?” to smart hiring.",
  },
};

export function BlogPage({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  return (
    <>
      <section className="wrap" style={{ padding: "64px 32px 36px" }}>
        <span className="voids-eyebrow" style={{ color: "var(--voids-purple)" }}>{c.eyebrow}</span>
        <h1 className="anton hero-h1" style={{ fontSize: 48, margin: "12px 0 12px", maxWidth: 820 }}>{c.title}</h1>
        <p style={{ fontSize: 16, color: "var(--voids-ink-muted)", margin: 0, maxWidth: 640 }}>{c.sub}</p>
      </section>
      <section className="wrap" style={{ padding: "16px 32px 60px" }}>
        <BlogList lang={lang} />
      </section>
    </>
  );
}
