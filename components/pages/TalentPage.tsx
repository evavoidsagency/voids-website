import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { WhatsAppTrigger } from "@/components/site/WhatsAppTrigger";
import { localePath, type Lang } from "@/lib/i18n/common";
import { TALENT_THRIVING } from "@/lib/content/talent-thriving";
import { findTestimonialPhoto } from "@/lib/logos";

const HERO_AVATARS = ["thomke-tierolff", "charlotte-pallandt", "anna-haasnoot", "bas-lemmens"];

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
    sub: "Vul één keer in wat je drijft en krijg gratis je career pager. Daarna krijg je passende kansen vanzelf via WhatsApp. Gratis en laagdrempelig.",
    ctaPager: "Maak gratis je career pager",
    ctaWhats: "💜 Join WhatsApp",
    avatarLabel: "4.000+ studenten gingen je voor",
    stat1Label: "studenten in de community",
    stat2Label: "transparante voorwaarden",
    stat3Label: "winst terug naar gelijke kansen",
    resourcesEyebrow: "Jouw route",
    resourcesTitle: "HOE DIEP WIL JE MEE?",
    resourcesIntro: "Er zijn een paar manieren om met VOIDS in contact te komen, van vrijblijvend tot actief op de radar bij bedrijven. Elke stap dieper levert meer op.",
    resources: [
      { tier: "Vrijblijvend", title: "Job board", text: "Bekijk open rollen en solliciteer direct per vacature, zonder account of profiel.", cta: "Bekijk jobs", path: "/jobboard" },
      { tier: "Community", title: "WhatsApp-community", text: "Word lid van de community en krijg passende vacatures wekelijks rechtstreeks in je WhatsApp.", cta: "Join", whats: true },
      { tier: "Actief in de talentpool", title: "Career pager", text: "Bouw je profiel op en kom in onze actieve talentpool: track je sollicitaties, zie je matchscore per rol, en word proactief voorgesteld bij offmarket-kansen.", cta: "Word lid van de talentpool", path: "/pager" },
    ],
    resourcesBadge: "Aanbevolen",
    faqEyebrow: "Veelgestelde vragen",
    faqTitle: "HOE HET PROCES WERKT.",
    faq: [
      {
        q: "Hoe werkt de sollicitatieprocedure via VOIDS?",
        a: "Dat hangt van je route af. Via het job board solliciteer je gewoon los per vacature, geen account nodig. Ben je lid van de talentpool (via de career pager), dan werkt het net iets anders: wij matchen je actief met organisaties die aansluiten op wat je zoekt, en breng je bij een klik in contact. Je regelt de rest daarna rechtstreeks met de werkgever.",
      },
      {
        q: "Hoe kom ik in de talentpool?",
        a: "Het makkelijkst is via de career pager: één keer invullen wat je drijft en waar je naar op zoek bent. Liever niet de hele intake doen? Dan kun je ook gewoon je contactgegevens achterlaten, en nemen we zelf contact op. Zodra je in de talentpool zit, kunnen we je proactief voorstellen bij kansen die nooit op het job board verschijnen (offmarket dus), met je meedenken, en je uitnodigen voor exclusieve events.",
      },
      {
        q: "Wat is de career pager precies?",
        a: "De career pager is vooral het middel om in de talentpool te komen: het is een kort, persoonlijk loopbaanprofiel dat je gratis aanmaakt (wat je drijft, waar je goed in bent, wat voor werk daarbij past). Het echte doel is dat account: daarmee kun je solliciteren op rollen via de site, je sollicitaties bijhouden, per vacature precies zien hoe goed je matcht, en sta je op de radar bij organisaties die aansluiten.",
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
    sub: "Tell us once what drives you and get your free career pager. Matching opportunities then come straight to your WhatsApp. Free, no strings.",
    ctaPager: "Build your free career pager",
    ctaWhats: "💜 Join WhatsApp",
    avatarLabel: "4,000+ students went before you",
    stat1Label: "students in the community",
    stat2Label: "transparent terms",
    stat3Label: "profit reinvested in equal opportunity",
    resourcesEyebrow: "Your route",
    resourcesTitle: "HOW DEEP DO YOU WANT IN?",
    resourcesIntro: "There are a few ways to engage with VOIDS, from no-strings-attached to actively on companies' radar. Each step deeper pays off more.",
    resources: [
      { tier: "No strings attached", title: "Job board", text: "Browse open roles and apply directly to any vacancy, no account or profile needed.", cta: "View jobs", path: "/jobboard" },
      { tier: "Community", title: "WhatsApp community", text: "Join the community and get matching vacancies sent straight to your WhatsApp every week.", cta: "Join", whats: true },
      { tier: "Active in the talent pool", title: "Career pager", text: "Build your profile and join our active talent pool: track your applications, see your match score per role, and get proactively put forward for off-market opportunities.", cta: "Join the talent pool", path: "/pager" },
    ],
    resourcesBadge: "Recommended",
    faqEyebrow: "Frequently asked",
    faqTitle: "HOW THE PROCESS WORKS.",
    faq: [
      {
        q: "How does applying through VOIDS work?",
        a: "Depends on your route. Via the job board you just apply per vacancy, no account needed. If you're in the talent pool (via the career pager), it works a bit differently: we actively match you with organisations that fit what you're looking for, and connect you at the click of a button. You arrange the rest directly with the employer.",
      },
      {
        q: "How do I get into the talent pool?",
        a: "The easiest way is the career pager: fill in once what drives you and what you're looking for. Don't want to do the full intake? You can also just leave your contact details, and we'll reach out ourselves. Once you're in the talent pool, we can proactively put you forward for opportunities that never appear on the job board (off-market), think along with you, and invite you to exclusive events.",
      },
      {
        q: "What exactly is the career pager?",
        a: "The career pager is mainly the means to get into the talent pool: it's a short, personal career profile you build for free (what drives you, what you're good at, what kind of work fits that). The real point is that account: it lets you apply to roles on the site, track your applications, see exactly how well you match a role, and puts you on the radar of organisations that fit.",
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
        <div className="wrap g-collapse" style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 44, alignItems: "center", padding: "64px 32px 70px" }}>
          <div>
            <span className="voids-eyebrow" style={{ color: "var(--voids-blue-100)" }}>{c.eyebrow}</span>
            <h1 className="anton hero-h1" style={{ fontSize: 52, margin: "14px 0 18px", color: "#fff" }}>{c.title}</h1>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--voids-blue-100)", margin: "0 0 28px", maxWidth: 520 }}>{c.sub}</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Button variant="primary" size="lg" href={p("/pager")}>{c.ctaPager}</Button>
              <WhatsAppButton variant="outline" size="lg" onDark>{c.ctaWhats}</WhatsAppButton>
            </div>
          </div>

          <div style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.18)", borderRadius: "var(--radius-lg)", padding: 26 }}>
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
            const recommended = i === c.resources.length - 1;
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

      <section className="wrap" style={{ padding: "0 32px 72px" }}>
        <span className="voids-eyebrow" style={{ color: "var(--voids-blue)" }}>{c.faqEyebrow}</span>
        <h2 className="anton section-h2" style={{ fontSize: 28, margin: "10px 0 22px" }}>{c.faqTitle}</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 780 }}>
          {c.faq.map((item) => (
            <div key={item.q}>
              <div style={{ fontSize: 15.5, fontWeight: 600, marginBottom: 6 }}>{item.q}</div>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--voids-ink-muted)", margin: 0 }}>{item.a}</p>
            </div>
          ))}
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
      <div className="anton" style={{ fontSize: 22 }}>{r.title}</div>
      <p style={{ fontSize: 14, color: mutedColor, lineHeight: 1.55, margin: "10px 0 14px", flex: 1 }}>{r.text}</p>
      <span style={{ fontSize: 13.5, fontWeight: 600, color: ctaColor }}>{r.cta} →</span>
    </>
  );
}
