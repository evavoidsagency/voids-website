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
      title: "EEN JUNIOR ERBIJ IN JE TEAM?",
      sub: "We denken graag met je mee. Vertel ons waar je naar op zoek bent, dan kijken we samen wat past.",
    },
    talent: {
      title: "OP ZOEK NAAR EEN ROL DIE BIJ JE PAST?",
      sub: "Sluit je aan bij onze WhatsApp-community en ontvang passende kansen direct in je app.",
    },
    beide: {
      title: "ZIN OM VERDER TE PRATEN?",
      sub: "Of je nu een bedrijf bent of op zoek naar je volgende stap: we denken graag met je mee.",
    },
  },
  en: {
    bedrijf: {
      title: "ADDING A JUNIOR TO YOUR TEAM?",
      sub: "We're happy to think along. Tell us what you're looking for and we'll work out together what fits.",
    },
    talent: {
      title: "LOOKING FOR A ROLE THAT FITS YOU?",
      sub: "Join the WhatsApp community and get matching opportunities straight in your app.",
    },
    beide: {
      title: "WANT TO TALK FURTHER?",
      sub: "Whether you're a company or looking for your next step, we're happy to think along.",
    },
  },
};

const WHATSAPP_CTA: Record<Lang, string> = { nl: "💜 Join WhatsApp", en: "💜 Join WhatsApp" };
const COMPANIES_CTA: Record<Lang, string> = { nl: "Laten we kennismaken", en: "Let's get to know each other" };
const TALENT_CTA: Record<Lang, string> = { nl: "Naar de talentpagina", en: "Go to the talent page" };
const RELATED_TITLE: Record<Lang, string> = { nl: "OOK INTERESSANT", en: "ALSO WORTH READING" };
const SOURCES_TITLE: Record<Lang, string> = { nl: "Bronnen", en: "Sources" };
const PUBLISHED_LABEL: Record<Lang, string> = { nl: "Gepubliceerd", en: "Published" };
const UPDATED_LABEL: Record<Lang, string> = { nl: "Bijgewerkt", en: "Updated" };
const ACCESSED_LABEL: Record<Lang, string> = { nl: "geraadpleegd", en: "accessed" };
const INTEREST_NOTICE: Record<Lang, string> = {
  nl: "Transparantie: VOIDS bemiddelt tussen werkstudenten en organisaties en heeft dus een belang bij dit onderwerp. We onderbouwen feiten met bronnen en koppelen onderzoek en trends aan onze eigen ervaringen uit de praktijk.",
  en: "Transparency: VOIDS connects working students with organisations and therefore has an interest in this topic. We back up facts with sources and connect research and trends to our own experience from practice.",
};

/** Renders "[1]" style citation markers as superscript links to the source list. */
function Inline({ text }: { text: string }) {
  const parts = text.split(/(\[\d+\])/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[(\d+)\]$/);
        return m ? (
          <sup key={i}>
            <a href={`#bron-${m[1]}`} style={{ textDecoration: "none", color: "var(--voids-purple)" }}>[{m[1]}]</a>
          </sup>
        ) : (
          <span key={i}>{part}</span>
        );
      })}
    </>
  );
}

function fmtDate(iso: string, lang: Lang) {
  return new Date(iso + "T12:00:00").toLocaleDateString(lang === "nl" ? "nl-NL" : "en-GB", { day: "numeric", month: "long", year: "numeric" });
}

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
    datePublished: post.published ?? PUBLISHED_DATE,
    dateModified: post.updated ?? post.published ?? PUBLISHED_DATE,
    ...(post.sources?.length ? { citation: post.sources.map((s) => ({ "@type": "CreativeWork", name: s.title, url: s.url, publisher: { "@type": "Organization", name: s.publisher } })) } : {}),
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
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 16px", fontSize: 12.5, color: "var(--voids-ink-muted)" }}>
          <span>{post.read[lang]}</span>
          <span>{PUBLISHED_LABEL[lang]} {fmtDate(post.published ?? PUBLISHED_DATE, lang)}</span>
          {post.updated ? <span>{UPDATED_LABEL[lang]} {fmtDate(post.updated, lang)}</span> : null}
        </div>
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
                    <Inline text={li} />
                  </li>
                ))}
              </ul>
            ) : block.p ? (
              <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--voids-ink-soft)", margin: "0 0 14px" }}>
                <Inline text={block.p} />
              </p>
            ) : null}
          </div>
        ))}

        {post.sources && post.sources.length > 0 && (
          <div style={{ marginTop: 28 }}>
            <h2 className="anton section-h2" style={{ fontSize: 18, margin: "0 0 12px", textTransform: "none" }}>{SOURCES_TITLE[lang]}</h2>
            <ol style={{ margin: 0, paddingLeft: 20 }}>
              {post.sources.map((s, i) => (
                <li key={i} id={`bron-${i + 1}`} style={{ fontSize: 13.5, lineHeight: 1.6, color: "var(--voids-ink-soft)", marginBottom: 6 }}>
                  {s.publisher}{s.year ? ` (${s.year})` : ""}: <a href={s.url} target="_blank" rel="noopener noreferrer">{s.title}</a>, {ACCESSED_LABEL[lang]} {fmtDate(s.accessed, lang)}.
                </li>
              ))}
            </ol>
          </div>
        )}

        {post.commercialInterest && (
          <p style={{ marginTop: 18, fontSize: 12.5, lineHeight: 1.55, color: "var(--voids-ink-muted)" }}>{INTEREST_NOTICE[lang]}</p>
        )}

        {post.legalTopic && (
          <div
            style={{
              marginTop: 20,
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border-hairline)",
              background: "#fff",
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
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {getRelatedPosts(slug).map((r, i, arr) => {
            const dupeIndex = arr.slice(0, i).filter((p) => p.photo === r.photo).length;
            return (
            <Link
              key={r.slug}
              href={p(`/blog/${r.slug}`)}
              className="card flex-collapse"
              style={{ display: "flex", overflow: "hidden", padding: 0, textDecoration: "none", color: "inherit" }}
            >
              <div className="blog-thumb" style={{ width: 96, flex: "none" }}>
                <Photo src={r.photo} alt={r.title[lang]} ratio="1 / 1" radius="0" sizes="96px" flip={dupeIndex > 0} zoom={dupeIndex > 1 ? 1.25 : 1} />
              </div>
              <div style={{ padding: "14px 18px", minWidth: 0 }}>
                <span className="badge badge--blue" style={{ marginBottom: 6, display: "inline-block" }}>{r.tag[lang]}</span>
                <div style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.35, color: "var(--voids-ink)" }}>{r.title[lang]}</div>
              </div>
            </Link>
            );
          })}
        </div>
      </section>

      <section style={{ background: post.aud === "talent" ? "var(--voids-blue)" : "var(--voids-purple)" }}>
        <div className="wrap" style={{ padding: "52px 32px", textAlign: "center", color: "#fff" }}>
          <h2 className="anton section-h2" style={{ fontSize: 30, margin: "0 0 12px", color: "#fff" }}>
            {cta.title}
          </h2>
          <p style={{ fontSize: 15, margin: "0 0 24px", color: "rgba(255,255,255,.85)", maxWidth: 620, marginLeft: "auto", marginRight: "auto" }}>
            {cta.sub}
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {(post.aud === "bedrijf" || post.aud === "beide") && (
              <Button variant="outline" size="lg" onDark href={p("/companies")}>
                {COMPANIES_CTA[lang]}
              </Button>
            )}
            {(post.aud === "talent" || post.aud === "beide") && (
              <WhatsAppButton variant="outline" size="lg" onDark>
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
