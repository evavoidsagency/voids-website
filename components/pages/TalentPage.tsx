import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { WhatsAppTrigger } from "@/components/site/WhatsAppTrigger";
import { localePath, type Lang } from "@/lib/i18n/common";

const COPY: Record<
  Lang,
  {
    eyebrow: string;
    title: string;
    sub: string;
    ctaPager: string;
    ctaWhats: string;
    resources: { title: string; text: string; cta: string; path?: string; whats?: boolean }[];
    fitEyebrow: string;
    fitTitleA: string;
    fitTitleB: string;
    fitText: string;
    fitCardRole: string;
    fitCriteria: { label: string; pct: number }[];
    referralEyebrow: string;
    referralTitleA: string;
    referralTitleB: string;
    referralText: string;
    referralCta: string;
    referralSteps: string[];
  }
> = {
  nl: {
    eyebrow: "Voor talent",
    title: "JOBS KOMEN NAAR JOU TOE.",
    sub: "Vul één keer in wat je drijft en krijg gratis je career pager. Passende kansen landen daarna vanzelf in je WhatsApp. Gratis en laagdrempelig. Dat blijft zo.",
    ctaPager: "Maak gratis je career pager",
    ctaWhats: "💜 Join WhatsApp",
    resources: [
      { title: "Career pager", text: "Doe de intake en krijg je persoonlijke loopbaanadvies.", cta: "Start", path: "/pager" },
      { title: "Job board", text: "Bekijk open rollen en solliciteer direct per vacature.", cta: "Bekijk jobs", path: "/jobboard" },
      { title: "WhatsApp-community", text: "Krijg passende jobs als eerste in je app.", cta: "Join", whats: true },
    ],
    fitEyebrow: "Two-way fit",
    fitTitleA: "JIJ ZIET OOK WAAROM",
    fitTitleB: "EEN ROL BIJ JÓU PAST.",
    fitText:
      "Geen zwart gat waar je cv in verdwijnt. Bij elke match zie je transparant waarom die bij jouw matchprofiel past, zodat jij kiest en niet alleen wordt gekozen.",
    fitCardRole: "Werkstudent Growth · Mila Health",
    fitCriteria: [
      { label: "Sluit aan op “Impact maken”", pct: 92 },
      { label: "Zelfstandig werken", pct: 88 },
      { label: "Data & uitzoeken", pct: 90 },
    ],
    referralEyebrow: "Referral",
    referralTitleA: "GOEDE MENSEN KENNEN",
    referralTitleB: "GOEDE MENSEN.",
    referralText:
      "Ken je iemand die past bij een ambitieuze organisatie? Draag ze voor. Wordt het een match, dan verdien jij mee en wordt de community sterker.",
    referralCta: "Nodig een vriend uit",
    referralSteps: [
      "Deel jouw persoonlijke link uit de community.",
      "Je vriend maakt een profiel en wordt gematcht.",
      "Bij een plaatsing ontvang jij een beloning.",
    ],
  },
  en: {
    eyebrow: "For talent",
    title: "JOBS COME TO YOU.",
    sub: "Tell us once what drives you and get your free career pager. After that, matching opportunities land in your WhatsApp automatically. Free, no strings, and it stays that way.",
    ctaPager: "Build your free career pager",
    ctaWhats: "💜 Join WhatsApp",
    resources: [
      { title: "Career pager", text: "Complete the intake and get your personal career advice.", cta: "Start", path: "/pager" },
      { title: "Job board", text: "Browse open roles and apply to any of them in a minute.", cta: "View jobs", path: "/jobboard" },
      { title: "WhatsApp community", text: "Be first to hear about matching jobs, right in your app.", cta: "Join", whats: true },
    ],
    fitEyebrow: "Two-way fit",
    fitTitleA: "YOU ALSO SEE WHY",
    fitTitleB: "A ROLE FITS YOU.",
    fitText:
      "No black hole for your CV. With every match you can see exactly why it fits your profile, so you’re choosing too, not just being chosen.",
    fitCardRole: "Working student Growth · Mila Health",
    fitCriteria: [
      { label: "Fits “Making impact”", pct: 92 },
      { label: "Working independently", pct: 88 },
      { label: "Data & figuring things out", pct: 90 },
    ],
    referralEyebrow: "Referral",
    referralTitleA: "GOOD PEOPLE KNOW",
    referralTitleB: "GOOD PEOPLE.",
    referralText:
      "Know someone who fits an ambitious organisation? Refer them. If it turns into a match, you get rewarded and the community gets stronger.",
    referralCta: "Invite a friend",
    referralSteps: [
      "Share your personal link from the community.",
      "Your friend creates a profile and gets matched.",
      "When they’re placed, you receive a reward.",
    ],
  },
};

export function TalentPage({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  const p = (path: string) => localePath(lang, path);

  return (
    <>
      <section style={{ background: "var(--voids-blue)", color: "#fff" }}>
        <div className="wrap" style={{ padding: "64px 32px 70px", maxWidth: 820 }}>
          <span className="voids-eyebrow" style={{ color: "var(--voids-blue-100)" }}>{c.eyebrow}</span>
          <h1 className="anton" style={{ fontSize: 56, margin: "14px 0 18px", color: "#fff" }}>{c.title}</h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--voids-blue-100)", margin: "0 0 28px" }}>{c.sub}</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Button variant="primary" size="lg" href={p("/pager")}>{c.ctaPager}</Button>
            <WhatsAppButton variant="outline" size="lg" onDark>{c.ctaWhats}</WhatsAppButton>
          </div>
        </div>
      </section>

      <section className="wrap" style={{ padding: "60px 32px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
        {c.resources.map((r) =>
          r.whats ? (
            <WhatsAppTrigger key={r.title} className="card" style={{ display: "block", padding: 26 }}>
              <ResourceCardBody r={r} />
            </WhatsAppTrigger>
          ) : (
            <a key={r.title} href={p(r.path!)} className="card" style={{ display: "block", padding: 26, textDecoration: "none" }}>
              <ResourceCardBody r={r} />
            </a>
          )
        )}
      </section>

      <section style={{ background: "#fff", borderTop: "1px solid var(--border-hairline)", borderBottom: "1px solid var(--border-hairline)" }}>
        <div className="wrap" style={{ padding: "64px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 44, alignItems: "center" }}>
          <div>
            <span className="voids-eyebrow" style={{ color: "var(--voids-blue)" }}>{c.fitEyebrow}</span>
            <h2 className="anton" style={{ fontSize: 36, margin: "10px 0 14px" }}>
              {c.fitTitleA}
              <br />
              {c.fitTitleB}
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--voids-ink-muted)", maxWidth: 460 }}>{c.fitText}</p>
          </div>
          <div style={{ background: "var(--voids-beige)", border: "1px solid var(--border-hairline)", borderRadius: "var(--radius-md)", padding: 24 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <span style={{ fontWeight: 600, fontSize: 15 }}>{c.fitCardRole}</span>
              <span className="anton" style={{ fontSize: 26, color: "var(--voids-blue)" }}>92%</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
              {c.fitCriteria.map((f) => (
                <div key={f.label}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12.5, marginBottom: 4 }}>
                    <span>{f.label}</span>
                    <span style={{ color: "var(--voids-blue)", fontWeight: 600 }}>Match</span>
                  </div>
                  <div style={{ height: 7, borderRadius: 999, background: "var(--voids-line-soft)" }}>
                    <div style={{ width: `${f.pct}%`, height: "100%", background: "var(--voids-blue)", borderRadius: 999 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="wrap" style={{ padding: "64px 32px" }}>
        <div style={{ background: "var(--voids-purple)", color: "#fff", borderRadius: "var(--radius-lg)", padding: 40, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
          <div>
            <span className="voids-eyebrow" style={{ color: "var(--voids-purple-100)" }}>{c.referralEyebrow}</span>
            <h2 className="anton" style={{ fontSize: 38, margin: "10px 0 14px", color: "#fff" }}>
              {c.referralTitleA}
              <br />
              {c.referralTitleB}
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--voids-purple-100)", margin: "0 0 22px" }}>{c.referralText}</p>
            <WhatsAppButton variant="secondary" size="md">{c.referralCta}</WhatsAppButton>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {c.referralSteps.map((s, i) => (
              <div key={s} style={{ display: "flex", gap: 14, alignItems: "center", background: "rgba(255,255,255,.1)", borderRadius: "var(--radius-md)", padding: 16 }}>
                <span className="anton" style={{ fontSize: 22, color: "#fff" }}>{i + 1}</span>
                <span style={{ fontSize: 14 }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ResourceCardBody({ r }: { r: { title: string; text: string; cta: string } }) {
  return (
    <>
      <div className="anton" style={{ fontSize: 22 }}>{r.title}</div>
      <p style={{ fontSize: 14, color: "var(--voids-ink-muted)", lineHeight: 1.55, margin: "10px 0 14px" }}>{r.text}</p>
      <span style={{ fontSize: 13.5, fontWeight: 600, color: "var(--voids-blue)" }}>{r.cta} →</span>
    </>
  );
}
