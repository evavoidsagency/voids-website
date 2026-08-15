import { Photo } from "@/components/ui/Photo";
import { findLogoFile } from "@/lib/logos";
import type { Lang } from "@/lib/i18n/common";
import { CLIENT_CASES, ROLES } from "@/lib/content/cases";

const COPY: Record<Lang, { eyebrow: string; title: string; sub: string; rolesTitle: string }> = {
  nl: {
    eyebrow: "Cases",
    title: "MATCHES DIE WERKEN.",
    sub: "Een kleine greep uit de vele bedrijven waar we mee hebben samengewerkt, van scale-up tot corporate.",
    rolesTitle: "ROLLEN DIE WE INVULDEN",
  },
  en: {
    eyebrow: "Cases",
    title: "MATCHES THAT WORK.",
    sub: "A small selection from the many companies we've worked with, from scale-up to corporate.",
    rolesTitle: "ROLES WE FILLED",
  },
};

export function CasesPage({ lang }: { lang: Lang }) {
  const c = COPY[lang];

  return (
    <>
      <section className="wrap" style={{ padding: "64px 32px 40px", maxWidth: 820 }}>
        <span className="voids-eyebrow" style={{ color: "var(--voids-purple)" }}>{c.eyebrow}</span>
        <h1 className="anton hero-h1" style={{ fontSize: 48, margin: "12px 0 12px" }}>{c.title}</h1>
        <p style={{ fontSize: 16, color: "var(--voids-ink-muted)", margin: 0, maxWidth: 620, textWrap: "balance" }}>{c.sub}</p>
      </section>

      <section className="wrap g-collapse" style={{ padding: "0 32px 30px", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 20 }}>
        {CLIENT_CASES[lang].map((cs) => {
          const logoUrl = findLogoFile(cs.slug);
          return (
            <div key={cs.company} className="card" style={{ padding: 0, overflow: "hidden" }}>
              <Photo src={cs.photo} alt={cs.company} ratio="16 / 10" radius="0" sizes="(max-width: 800px) 100vw, 33vw" />
              <div style={{ padding: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  {logoUrl ? (
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: "#fff", border: "1px solid var(--border-hairline)", display: "flex", alignItems: "center", justifyContent: "center", padding: 4 }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={logoUrl} alt={cs.company} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                    </div>
                  ) : (
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: cs.bg, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13 }}>
                      {cs.logo}
                    </div>
                  )}
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>{cs.company}</div>
                    <div style={{ fontSize: 12, color: "var(--voids-ink-muted)" }}>{cs.sector}</div>
                  </div>
                </div>
                <div className="badge badge--purple" style={{ marginBottom: 10 }}>{cs.metric}</div>
                <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--voids-ink-muted)", margin: 0 }}>{cs.text}</p>
              </div>
            </div>
          );
        })}
      </section>

      <section style={{ background: "#fff", borderTop: "1px solid var(--border-hairline)" }}>
        <div className="wrap" style={{ padding: "50px 32px" }}>
          <h2 className="anton section-h2" style={{ fontSize: 26, margin: "0 0 20px" }}>{c.rolesTitle}</h2>
          <div className="g-collapse" style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 16 }}>
            {ROLES[lang].map((r) => (
              <div key={r.role} style={{ background: "var(--voids-beige)", border: "1px solid var(--border-hairline)", borderRadius: "var(--radius-md)", padding: 20 }}>
                <div style={{ fontSize: 15, fontWeight: 600 }}>{r.role}</div>
                <div style={{ fontSize: 12.5, color: "var(--voids-ink-muted)", margin: "4px 0 12px" }}>{r.company} · {r.uren}</div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {r.tags.map((t) => (
                    <span key={t} className="badge badge--blue">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
