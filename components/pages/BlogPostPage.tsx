import Link from "next/link";
import { notFound } from "next/navigation";
import { Photo } from "@/components/ui/Photo";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { getBlogPost, getRelatedPosts, type BlogAud } from "@/lib/content/blog-posts";
import { localePath, type Lang } from "@/lib/i18n/common";

const AUD_LABEL: Record<Lang, Record<BlogAud, string>> = {
  nl: { bedrijf: "Voor bedrijven", talent: "Voor talent", beide: "Voor iedereen" },
  en: { bedrijf: "For companies", talent: "For talent", beide: "For everyone" },
};

const BACK_LABEL: Record<Lang, string> = { nl: "← Terug naar blog", en: "← Back to blog" };

const LEGAL_NOTICE: Record<Lang, string> = {
  nl: "Dit artikel is algemene informatie, geen juridisch, fiscaal of financieel advies. Regels wijzigen en je situatie kan afwijken: check de actuele regels bij een officiële bron (bijv. Rijksoverheid, Belastingdienst, Juridisch Loket) of raadpleeg een adviseur voordat je erop vertrouwt.",
  en: "This article is general information, not legal, tax or financial advice. Rules change and your situation may differ: check the current rules with an official source or a qualified advisor before relying on it.",
};

const CTA_COPY: Record<Lang, Record<BlogAud, { title: string; sub: string }>> = {
  nl: {
    bedrijf: {
      title: "OP ZOEK NAAR JUNIOR TALENT?",
      sub: "Vertel ons wat je nodig hebt, wij regelen een shortlist van gescreende kandidaten.",
    },
    talent: {
      title: "OP ZOEK NAAR EEN ROL DIE BIJ JE PAST?",
      sub: "Join de WhatsApp-community en krijg passende kansen rechtstreeks in je app.",
    },
    beide: {
      title: "KLAAR OM VERDER TE PRATEN?",
      sub: "Of je nu bedrijf bent of op zoek naar je volgende stap: we denken graag mee.",
    },
  },
  en: {
    bedrijf: {
      title: "LOOKING FOR JUNIOR TALENT?",
      sub: "Tell us what you need, we'll put together a shortlist of screened candidates.",
    },
    talent: {
      title: "LOOKING FOR A ROLE THAT FITS YOU?",
      sub: "Join the WhatsApp community and get matching opportunities straight in your app.",
    },
    beide: {
      title: "READY TO TALK FURTHER?",
      sub: "Whether you're a company or looking for your next step, we're happy to think along.",
    },
  },
};

const WHATSAPP_CTA: Record<Lang, string> = { nl: "💜 Join WhatsApp", en: "💜 Join WhatsApp" };
const COMPANIES_CTA: Record<Lang, string> = { nl: "Praat met ons", en: "Talk to us" };
const TALENT_CTA: Record<Lang, string> = { nl: "Bekijk voor talent", en: "See it for talent" };
const RELATED_TITLE: Record<Lang, string> = { nl: "OOK INTERESSANT", en: "ALSO WORTH READING" };

const SITE_URL = "https://voids.agency";
/** Date all launch articles were published; update per-post if the content file ever tracks real dates. */
const PUBLISHED_DATE = "2026-08-09";

export function BlogPostPage({ lang, slug }: { lang: Lang; slug: string }) {
  const post = getBlogPost(slug);
  if (!post) notFound();

  const p = (path: string) => localePath(lang, path);
  const cta = CTA_COPY[lang][post.aud];
  const url = `${SITE_URL}${p(`/blog/${slug}`)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title[lang],
    description: post.excerpt[lang],
    image: `${SITE_URL}${post.photo}`,
    datePublished: PUBLISHED_DATE,
    dateModified: PUBLISHED_DATE,
    inLanguage: lang === "nl" ? "nl-NL" : "en-US",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: "VOIDS", url: SITE_URL },
    publisher: { "@type": "Organization", name: "VOIDS", url: SITE_URL },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="wrap narrow" style={{ padding: "48px 32px 0" }}>
        <Link href={p("/blog")} style={{ fontSize: 13.5, color: "var(--voids-ink-muted)", textDecoration: "none" }}>
          {BACK_LABEL[lang]}
        </Link>
      </section>

      <section className="wrap narrow" style={{ padding: "18px 32px 32px" }}>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
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
        <h1 className="anton hero-h1" style={{ fontSize: 38, margin: "0 0 14px", lineHeight: 1.15 }}>
          {post.title[lang]}
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--voids-ink-muted)", margin: "0 0 12px" }}>
          {post.excerpt[lang]}
        </p>
        <div style={{ fontSize: 12.5, color: "var(--voids-ink-muted)" }}>{post.read[lang]}</div>
      </section>

      <section className="wrap" style={{ padding: "0 32px 40px" }}>
        <Photo
          src={post.photo}
          alt={post.title[lang]}
          ratio="16 / 9"
          radius="var(--radius-lg)"
          priority
          sizes="(max-width: 800px) 100vw, 700px"
        />
      </section>

      <section className="wrap narrow" style={{ padding: "0 32px 56px" }}>
        {post.body[lang].map((block, i) => (
          <div key={i}>
            {block.h2 && (
              <h2 className="anton section-h2" style={{ fontSize: 21, margin: "30px 0 12px", textTransform: "none" }}>
                {block.h2}
              </h2>
            )}
            {block.ul ? (
              <ul style={{ margin: "0 0 14px", paddingLeft: 20 }}>
                {block.ul.map((li, j) => (
                  <li key={j} style={{ fontSize: 15, lineHeight: 1.65, color: "var(--voids-ink-soft)", marginBottom: 8 }}>
                    {li}
                  </li>
                ))}
              </ul>
            ) : block.p ? (
              <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--voids-ink-soft)", margin: "0 0 14px" }}>
                {block.p}
              </p>
            ) : null}
          </div>
        ))}

        {post.legalTopic && (
          <div
            style={{
              marginTop: 20,
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border-hairline)",
              background: "var(--voids-beige)",
              padding: "14px 16px",
              fontSize: 12.5,
              lineHeight: 1.55,
              color: "var(--voids-ink-muted)",
            }}
          >
            {LEGAL_NOTICE[lang]}
          </div>
        )}
      </section>

      <section className="wrap narrow" style={{ padding: "0 32px 56px" }}>
        <h2 className="anton section-h2" style={{ fontSize: 18, margin: "0 0 16px" }}>{RELATED_TITLE[lang]}</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {getRelatedPosts(slug).map((r) => (
            <Link
              key={r.slug}
              href={p(`/blog/${r.slug}`)}
              className="card"
              style={{ display: "block", padding: "14px 18px", textDecoration: "none" }}
            >
              <span style={{ fontSize: 14, fontWeight: 600, color: "var(--voids-ink)" }}>{r.title[lang]} →</span>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ background: post.aud === "talent" ? "var(--voids-blue)" : "var(--voids-purple)" }}>
        <div className="wrap" style={{ padding: "52px 32px", textAlign: "center", color: "#fff" }}>
          <h2 className="anton section-h2" style={{ fontSize: 30, margin: "0 0 12px", color: "#fff" }}>
            {cta.title}
          </h2>
          <p style={{ fontSize: 15, margin: "0 0 24px", color: "rgba(255,255,255,.85)", maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
            {cta.sub}
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {(post.aud === "bedrijf" || post.aud === "beide") && (
              <Button variant={post.aud === "beide" ? "outline" : "primary"} size="lg" onDark href={p("/companies")}>
                {COMPANIES_CTA[lang]}
              </Button>
            )}
            {(post.aud === "talent" || post.aud === "beide") && (
              <WhatsAppButton variant={post.aud === "beide" ? "outline" : "secondary"} size="lg" onDark>
                {WHATSAPP_CTA[lang]}
              </WhatsAppButton>
            )}
            {post.aud === "beide" && (
              <Button variant="outline" size="lg" onDark href={p("/talent")}>
                {TALENT_CTA[lang]}
              </Button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
