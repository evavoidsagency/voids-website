import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { WhatsAppTrigger } from "@/components/site/WhatsAppTrigger";
import { localePath, type Lang } from "@/lib/i18n/common";
import { TALENT_THRIVING } from "@/lib/content/talent-thriving";
import { findTestimonialPhoto } from "@/lib/logos";
import { FaqAccordion } from "@/components/pages/FaqAccordion";

const HERO_AVATARS = ["thomke-tierolff", "anna-haasnoot", "charlotte-pallandt"];

const COPY: Record<
  Lang,
  {
    eyebrow: string;
    title: string;
    sub: string;
    ctaPager: string;
    ctaWhats: string;
    avatarLabel: string;
    stat1Label: string;
    stat2Label: string;
    stat3Label: string;
    resourcesEyebrow: string;
    resourcesTitle: string;
    resourcesIntro: string;
    resources: { tier: string; title: string; text: string; cta: string; path?: string; whats?: boolean }[];
    resourcesBadge: string;
    faqEyebrow: string;
    faqTitle: string;
    faq: { q: string; a: string }[];
    fitEyebrow: string;
    fitTitleA: string;
    fitTitleB: string;
    fitText: string;
    fitCardRole: string;
    fitCriteria: { label: string; pct: number }[];
    thrivingEyebrow: string;
    thrivingTitle: string;
    bandAlt: string;
    referralEyebrow: string;
    referralTitleA: string;
    referralTitleB: string;
    referralText: string;
    referralCta: string;
    referralSteps: string[];
    finalTitle: string;
    finalText: string;
    finalCta: string;
  }
> = {
  nl: {
    eyebrow: "Voor talent",
    title: "JOBS KOMEN NAAR JOU TOE.",
    sub: "Beantwoord een paar vragen over jezelf en word onderdeel van onze talentpool: persoonlijke matches, offmarket-kansen en exclusieve events, rechtstreeks in je WhatsApp. Gratis en laagdrempelig.",
    ctaPager: "Word lid van de talentpool",
    ctaWhats: "💜 Join WhatsApp",
    avatarLabel: "4.000+ studenten gingen je voor",
    stat1Label: "studenten in de community",
    stat2Label: "transparante voorwaarden",
    stat3Label: "winst terug naar gelijke kansen",
    resourcesEyebrow: "Jouw route",
    resourcesTitle: "DRIE MANIEREN OM DICHTERBIJ TE KOMEN.",
    resourcesIntro: "Het meeste haal je uit onze talentpool: persoonlijke matches, offmarket-kansen en events. Liever eerst vrijblijvend rondkijken? Dat kan ook, via de WhatsApp-community of het jobboard.",
    resources: [
      { tier: "Actief in de talentpool", title: "Talentpool", text: "Beantwoord een paar vragen over jezelf en je ambities en je bent onderdeel van onze actieve talentpool: track je sollicitaties, zie je matchscore per rol, en word proactief voorgesteld bij offmarket-kansen die nooit op het jobboard verschijnen.", cta: "Word lid van de talentpool", path: "/pager" },
      { tier: "Community", title: "WhatsApp-community", text: "Word lid van de community en krijg passende vacatures wekelijks rechtstreeks in je WhatsApp.", cta: "Join", whats: true },
      { tier: "Vrijblijvend", title: "Job board", text: "Bekijk open rollen en solliciteer direct per vacature, zonder account of profiel.", cta: "Bekijk jobs", path: "/jobboard" },
    ],
    resourcesBadge: "Aanbevolen",
    faqEyebrow: "Veelgestelde vragen",
    faqTitle: "HOE HET PROCES WERKT.",
    faq: [
      {
        q: "Hoe werkt solliciteren via VOIDS?",
        a: "Via het jobboard of een vacature in de WhatsApp-community solliciteer je los, per rol. Je kan je ook algemeen aanmelden bij de talentpool: dan matchen wij je actief, ook bij rollen die nooit online komen. Wat daarna gebeurt verschilt per vacature: soms loopt de selectie via de werkgever zelf, soms doen wij die eerste selectie en de gesprekken. Gaat dat goed, dan brengen we je in contact en pakt de werkgever het verder op.",
      },
      {
        q: "Hoe kom ik in de talentpool?",
        a: "Beantwoord een paar vragen over jezelf en je bent lid. Daarna stellen we je proactief voor bij offmarket-kansen, denken we met je mee en nodigen we je uit voor exclusieve events.",
      },
      {
        q: "Wat is de career pager precies?",
        a: "Een gratis, persoonlijk loopbaanprofiel op basis van je antwoorden. Een leuke bonus, geen verplichte stap: lid worden van de talentpool kan ook zonder.",
      },
    ],
    fitEyebrow: "Two-way fit",
    fitTitleA: "JIJ ZIET OOK WAAROM",
    fitTitleB: "EEN ROL BIJ JÓU PAST.",
    fitText:
      "Bij de meeste vacatures hoor je alleen óf je gekozen bent, nooit waarom. Bij VOIDS zie je per match welke criteria wel en niet aansluiten op jouw profiel, zodat jij zelf beoordeelt of een rol past, in plaats van alleen af te wachten.",
    fitCardRole: "Werkstudent Growth · Mila Health",
    fitCriteria: [
      { label: "Sluit aan op “Impact maken”", pct: 92 },
      { label: "Zelfstandig werken", pct: 88 },
      { label: "Data & uitzoeken", pct: 90 },
    ],
    thrivingEyebrow: "Talent aan het woord",
    thrivingTitle: "ZO ZIET DAT ER IN DE PRAKTIJK UIT.",
    bandAlt: "Twee werkstudenten aan het werk",
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
    finalTitle: "KLAAR OM GEZIEN TE WORDEN?",
    finalText: "Beantwoord een paar vragen en je staat op de radar bij bedrijven die bij je passen.",
    finalCta: "Word lid van de talentpool",
  },
  en: {
    eyebrow: "For talent",
    title: "JOBS COME TO YOU.",
    sub: "Answer a few questions about yourself and become part of our talent pool: personal matches, off-market opportunities and exclusive events, straight in your WhatsApp. Free, no strings.",
    ctaPager: "Join the talent pool",
    ctaWhats: "💜 Join WhatsApp",
    avatarLabel: "4,000+ students went before you",
    stat1Label: "students in the community",
    stat2Label: "transparent terms",
    stat3Label: "profit reinvested in equal opportunity",
    resourcesEyebrow: "Your route",
    resourcesTitle: "THREE WAYS TO GET CLOSER.",
    resourcesIntro: "There are a few ways to engage with VOIDS. The more active you are, the more we can do for you: from individual vacancies to a spot in our talent pool, with personal matches and off-market opportunities.",
    resources: [
      { tier: "No strings attached", title: "Job board", text: "Browse open roles and apply directly to any vacancy, no account or profile needed.", cta: "View jobs", path: "/jobboard" },
      { tier: "Community", title: "WhatsApp community", text: "Join the community and get matching vacancies sent straight to your WhatsApp every week.", cta: "Join", whats: true },
      { tier: "Active in the talent pool", title: "Talent pool", text: "Answer a few questions about yourself and your ambitions and you're part of our active talent pool: track your applications, see your match score per role, and get proactively put forward for off-market opportunities that never appear on the job board.", cta: "Join the talent pool", path: "/pager" },
    ],
    resourcesBadge: "Recommended",
    faqEyebrow: "Frequently asked",
    faqTitle: "HOW THE PROCESS WORKS.",
    faq: [
      {
        q: "How does applying through VOIDS work?",
        a: "Via the job board or a vacancy in the WhatsApp community, you apply per role. You can also sign up generally for the talent pool: we then actively match you, including to roles that never go online. What happens next depends on the vacancy: sometimes the employer runs the selection themselves, sometimes we handle the first selection and interviews ourselves. If that goes well, we connect you and the employer takes it from there.",
      },
      {
        q: "How do I get into the talent pool?",
        a: "Answer a few questions about yourself and you're in. From there we proactively put you forward for off-market opportunities, think along with you, and invite you to exclusive events.",
      },
      {
        q: "What exactly is the career pager?",
        a: "A free, personal career profile based on your answers. A nice bonus, not a required step: joining the talent pool works without it too.",
      },
    ],
    fitEyebrow: "Two-way fit",
    fitTitleA: "YOU ALSO SEE WHY",
    fitTitleB: "A ROLE FITS YOU.",
    fitText:
      "With most job platforms, you only hear whether you were chosen, never why. At VOIDS, every match shows which criteria do and don’t line up with your profile, so you can judge the fit yourself instead of just waiting to be picked.",
    fitCardRole: "Working student Growth · Mila Health",
    fitCriteria: [
      { label: "Fits “Making impact”", pct: 92 },
      { label: "Working independently", pct: 88 },
      { label: "Data & figuring things out", pct: 90 },
    ],
    thrivingEyebrow: "Talent in their own words",
    thrivingTitle: "WHAT THAT LOOKS LIKE IN PRACTICE.",
    bandAlt: "Two working students collaborating",
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
    finalTitle: "READY TO GET NOTICED?",
    finalText: "Answer a few questions and you're on the radar of companies that fit you.",
    finalCta: "Join the talent pool",
  },
};

export function TalentPage({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  const p = (path: string) => localePath(lang, path);

  return (
    <>
      <section style={{ background: "var(--voids-blue)", color: "#fff" }}>
        <div className="wrap g-collapse" style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 44, alignItems: "start", padding: "64px 32px 70px" }}>
          <div>
            <span className="voids-eyebrow" style={{ color: "var(--voids-blue-100)" }}>{c.eyebrow}</span>
            <h1 className="anton hero-h1" style={{ fontSize: 52, margin: "14px 0 18px", color: "#fff" }}>{c.title}</h1>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--voids-blue-100)", margin: "0 0 28px", maxWidth: 520 }}>{c.sub}</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Button variant="primary" size="lg" href={p("/pager")}>{c.ctaPager}</Button>
              <WhatsAppButton variant="outline" size="lg" onDark>{c.ctaWhats}</WhatsAppButton>
            </div>
          </div>

          <div style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.18)", borderRadius: "var(--radius-lg)", padding: 26, marginTop: 38 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
              <div style={{ display: "flex" }}>
                {HERO_AVATARS.map((slug, i) => {
                  const photo = findTestimonialPhoto(slug);
                  return (
                    <div
                      key={slug}
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        overflow: "hidden",
                        position: "relative",
                        flex: "none",
                        border: "2px solid var(--voids-blue)",
                        marginLeft: i === 0 ? 0 : -14,
                      }}
                    >
                      {photo && <Photo src={photo} alt="" ratio="1 / 1" radius="0" sizes="44px" />}
                    </div>
                  );
                })}
              </div>
              <span style={{ fontSize: 13.5, fontWeight: 600, color: "#fff" }}>{c.avatarLabel}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { value: "4.000+", label: c.stat1Label },
                { value: "100%", label: c.stat2Label },
                { value: "10%", label: c.stat3Label },
              ].map((s) => (
                <div key={s.label} style={{ display: "flex", alignItems: "baseline", gap: 12, borderTop: "1px solid rgba(255,255,255,.14)", paddingTop: 14 }}>
                  <span className="anton" style={{ fontSize: 26, color: "#fff", flex: "none" }}>{s.value}</span>
                  <span style={{ fontSize: 13, color: "var(--voids-blue-100)" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="wrap" style={{ padding: "72px 32px" }}>
        <span className="voids-eyebrow" style={{ color: "var(--voids-blue)" }}>{c.resourcesEyebrow}</span>
        <h2 className="anton section-h2" style={{ fontSize: 28, margin: "10px 0 10px" }}>{c.resourcesTitle}</h2>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--voids-ink-muted)", margin: "0 0 30px", maxWidth: 700 }}>{c.resourcesIntro}</p>
        <div className="g-collapse" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, alignItems: "stretch" }}>
          {c.resources.map((r, i) => {
            const recommended = i === 0;
            const body = <ResourceCardBody r={r} num={i + 1} recommended={recommended} badge={c.resourcesBadge} />;
            const style: React.CSSProperties = recommended
              ? { display: "flex", flexDirection: "column", padding: 26, background: "var(--voids-purple)", color: "#fff", position: "relative" }
              : { display: "flex", flexDirection: "column", padding: 26, textDecoration: "none" };
            return r.whats ? (
              <WhatsAppTrigger key={r.title} className={recommended ? "card" : "card card--hoverable"} style={style}>
                {body}
              </WhatsAppTrigger>
            ) : (
              <a key={r.title} href={p(r.path!)} className={recommended ? "card" : "card card--hoverable"} style={style}>
                {body}
              </a>
            );
          })}
        </div>
      </section>

      <section style={{ background: "#fff" }}>
        <div className="wrap g-collapse" style={{ padding: "72px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 44, alignItems: "center" }}>
          <div>
            <span className="voids-eyebrow" style={{ color: "var(--voids-blue)" }}>{c.fitEyebrow}</span>
            <h2 className="anton section-h2" style={{ fontSize: 36, margin: "10px 0 14px" }}>
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

      <Photo src="/photography/talent-band.jpg" alt={c.bandAlt} ratio="2 / 1" radius="0" sizes="100vw" />

      <section style={{ background: "var(--voids-beige)" }}>
        <div className="wrap" style={{ padding: "72px 32px" }}>
          <span className="voids-eyebrow" style={{ color: "var(--voids-purple)" }}>{c.thrivingEyebrow}</span>
          <h2 className="anton section-h2" style={{ fontSize: 30, margin: "10px 0 30px" }}>{c.thrivingTitle}</h2>
          <div className="g-collapse" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {TALENT_THRIVING[lang].map((t) => {
              const photo = findTestimonialPhoto(t.slug);
              return (
                <div key={t.name} className="card" style={{ padding: 26 }}>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--voids-ink)", margin: "0 0 18px" }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
                    {photo ? (
                      <div style={{ width: 46, height: 46, borderRadius: "50%", flex: "none", overflow: "hidden", position: "relative" }}>
                        <Photo src={photo} alt={t.name} ratio="1 / 1" radius="0" sizes="46px" />
                      </div>
                    ) : (
                      <div
                        style={{
                          width: 46,
                          height: 46,
                          borderRadius: "50%",
                          flex: "none",
                          background: "var(--voids-purple-100)",
                          color: "var(--voids-purple)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 700,
                          fontSize: 15,
                        }}
                      >
                        {t.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600 }}>{t.name}</div>
                      <div style={{ fontSize: 13, color: "var(--voids-ink-muted)" }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="wrap" style={{ padding: "64px 32px" }}>
        <div className="g-collapse" style={{ background: "var(--voids-purple)", color: "#fff", borderRadius: "var(--radius-lg)", padding: 40, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
          <div>
            <span className="voids-eyebrow" style={{ color: "var(--voids-purple-100)" }}>{c.referralEyebrow}</span>
            <h2 className="anton section-h2" style={{ fontSize: 38, margin: "10px 0 14px", color: "#fff" }}>
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

      <section className="wrap" style={{ padding: "72px 32px" }}>
        <span className="voids-eyebrow" style={{ color: "var(--voids-blue)" }}>{c.faqEyebrow}</span>
        <h2 className="anton section-h2" style={{ fontSize: 28, margin: "10px 0 22px" }}>{c.faqTitle}</h2>
        <div style={{ maxWidth: 780 }}>
          <FaqAccordion items={c.faq} />
        </div>
      </section>

      <section style={{ background: "var(--voids-blue)" }}>
        <div className="wrap" style={{ padding: "56px 32px", textAlign: "center", color: "#fff" }}>
          <h2 className="anton section-h2" style={{ fontSize: 38, margin: "0 0 12px", color: "#fff" }}>{c.finalTitle}</h2>
          <p style={{ fontSize: 16, color: "var(--voids-blue-100)", maxWidth: 480, margin: "0 auto 24px" }}>{c.finalText}</p>
          <Button variant="secondary" size="lg" href={p("/pager")}>{c.finalCta}</Button>
        </div>
      </section>
    </>
  );
}

function ResourceCardBody({
  r,
  num,
  recommended,
  badge,
}: {
  r: { tier: string; title: string; text: string; cta: string };
  num: number;
  recommended: boolean;
  badge: string;
}) {
  const mutedColor = recommended ? "var(--voids-purple-100)" : "var(--voids-ink-muted)";
  const numColor = recommended ? "rgba(255,255,255,.55)" : "var(--voids-blue-200)";
  const ctaColor = recommended ? "#fff" : "var(--voids-blue)";
  return (
    <>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 8, marginBottom: 6 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
          <span className="anton" style={{ fontSize: 18, color: numColor }}>0{num}</span>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".04em", textTransform: "uppercase", color: mutedColor }}>{r.tier}</span>
        </div>
        {recommended && (
          <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: ".03em", textTransform: "uppercase", color: "var(--voids-purple)", background: "#fff", borderRadius: 999, padding: "4px 9px", whiteSpace: "nowrap" }}>
            {badge}
          </span>
        )}
      </div>
      <div className="anton" style={{ fontSize: 22, color: recommended ? "#fff" : "var(--text-strong)" }}>{r.title}</div>
      <p style={{ fontSize: 14, color: mutedColor, lineHeight: 1.55, margin: "10px 0 14px", flex: 1 }}>{r.text}</p>
      <span style={{ fontSize: 13.5, fontWeight: 600, color: ctaColor }}>{r.cta} →</span>
    </>
  );
}
