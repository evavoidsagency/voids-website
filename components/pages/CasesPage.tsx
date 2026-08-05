import { Photo } from "@/components/ui/Photo";
import type { Lang } from "@/lib/i18n/common";

const CLIENT_CASES: Record<
  Lang,
  { logo: string; bg: string; company: string; sector: string; metric: string; text: string; photo: string }[]
> = {
  nl: [
    { logo: "BK", bg: "#3A0CA3", company: "Travel-tech scale-up", sector: "Amsterdam", metric: "6 werkstudenten", text: "Snel opgeschaald met werkstudenten die precies pasten op cultuur en tempo.", photo: "/photography/case-traveltech.jpg" },
    { logo: "VO", bg: "#4476F2", company: "Finance-kantoor", sector: "Finance · Amsterdam", metric: "1 werkstudent · 14 dagen", text: "Van briefing tot getekende match binnen twee weken.", photo: "/photography/case-finance.jpg" },
    { logo: "TE", bg: "#6A44C4", company: "Terra", sector: "Climate", metric: "3 stagiairs", text: "Content- en community-stagiairs met een echte duurzaamheidsmissie.", photo: "/photography/case-terra.jpg" },
  ],
  en: [
    { logo: "BK", bg: "#3A0CA3", company: "Travel-tech scale-up", sector: "Amsterdam", metric: "6 working students", text: "Scaled up fast with working students who matched their culture and pace exactly.", photo: "/photography/case-traveltech.jpg" },
    { logo: "VO", bg: "#4476F2", company: "Finance firm", sector: "Finance · Amsterdam", metric: "1 working student · 14 days", text: "From briefing to signed match within two weeks.", photo: "/photography/case-finance.jpg" },
    { logo: "TE", bg: "#6A44C4", company: "Terra", sector: "Climate", metric: "3 interns", text: "Content and community interns with a real sustainability mission.", photo: "/photography/case-terra.jpg" },
  ],
};

const ROLES: Record<Lang, { role: string; company: string; uren: string; tags: string[] }[]> = {
  nl: [
    { role: "Werkstudent Growth", company: "HealthTech scale-up", uren: "20 u/wk", tags: ["Analytics", "Content"] },
    { role: "Stage Content & Community", company: "Climate startup", uren: "24 u/wk", tags: ["Social", "Copy"] },
    { role: "Junior Data Analist", company: "SaaS-bedrijf", uren: "32 u/wk", tags: ["SQL", "Dashboards"] },
    { role: "Traineeship Operations", company: "DeepTech", uren: "40 u/wk", tags: ["Proces", "Ownership"] },
  ],
  en: [
    { role: "Working student Growth", company: "HealthTech scale-up", uren: "20 hrs/wk", tags: ["Analytics", "Content"] },
    { role: "Internship Content & Community", company: "Climate startup", uren: "24 hrs/wk", tags: ["Social", "Copy"] },
    { role: "Junior Data Analyst", company: "SaaS company", uren: "32 hrs/wk", tags: ["SQL", "Dashboards"] },
    { role: "Traineeship Operations", company: "DeepTech", uren: "40 hrs/wk", tags: ["Process", "Ownership"] },
  ],
};

const COPY: Record<Lang, { eyebrow: string; title: string; sub: string; rolesTitle: string }> = {
  nl: { eyebrow: "Cases", title: "MATCHES DIE WERKEN.", sub: "Van startups tot corporates. Een greep uit onze plaatsingen.", rolesTitle: "ROLLEN DIE WE INVULDEN" },
  en: { eyebrow: "Cases", title: "MATCHES THAT WORK.", sub: "From startups to corporates. A selection of our placements.", rolesTitle: "ROLES WE FILLED" },
};

export function CasesPage({ lang }: { lang: Lang }) {
  const c = COPY[lang];

  return (
    <>
      <section className="wrap" style={{ padding: "64px 32px 40px", maxWidth: 820 }}>
        <span className="voids-eyebrow" style={{ color: "var(--voids-purple)" }}>{c.eyebrow}</span>
        <h1 className="anton" style={{ fontSize: 48, margin: "12px 0 12px" }}>{c.title}</h1>
        <p style={{ fontSize: 16, color: "var(--voids-ink-muted)", margin: 0 }}>{c.sub}</p>
      </section>

      <section className="wrap" style={{ padding: "0 32px 30px", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
        {CLIENT_CASES[lang].map((cs) => (
          <div key={cs.company} className="card" style={{ padding: 0, overflow: "hidden" }}>
            <Photo src={cs.photo} alt={cs.company} ratio="16 / 10" radius="0" sizes="(max-width: 800px) 100vw, 33vw" />
            <div style={{ padding: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: cs.bg, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13 }}>
                  {cs.logo}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{cs.company}</div>
                  <div style={{ fontSize: 12, color: "var(--voids-ink-muted)" }}>{cs.sector}</div>
                </div>
              </div>
              <div className="badge badge--purple" style={{ marginBottom: 10 }}>{cs.metric}</div>
              <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--voids-ink-muted)", margin: 0 }}>{cs.text}</p>
            </div>
          </div>
        ))}
      </section>

      <section style={{ background: "#fff", borderTop: "1px solid var(--border-hairline)" }}>
        <div className="wrap" style={{ padding: "50px 32px" }}>
          <h2 className="anton" style={{ fontSize: 26, margin: "0 0 20px" }}>{c.rolesTitle}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
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
