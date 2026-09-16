import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { WhatsAppTrigger } from "@/components/site/WhatsAppTrigger";
import { localePath, type Lang } from "@/lib/i18n/common";
import { TALENT_THRIVING } from "@/lib/content/talent-thriving";
import { findTestimonialPhoto } from "@/lib/logos";
import { FaqAccordion } from "@/components/pages/FaqAccordion";
import { CountUp } from "@/components/ui/CountUp";

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
    stat1Value: string;
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
    fitBenefits: string[];
    fitCardCaption: string;
    fitCta: string;
    fitCardStat: string;
    fitCardStatLabel: string;
    fitPerks: string[];
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
    sub: "Beantwoord een paar vragen over jezelf en word onderdeel van onze talentpool: persoonlijke matches, offmarket-kansen en exclusieve events. Gratis en laagdrempelig.",
    ctaPager: "Word lid van de talentpool",
    ctaWhats: "💜 Join WhatsApp",
    avatarLabel: "4.000+ studenten gingen je voor",
    stat1Value: "4.000+",
    stat1Label: "studenten in de community",
    stat2Label: "transparante voorwaarden",
    stat3Label: "winst terug naar gelijke kansen",
    resourcesEyebrow: "Jouw route",
    resourcesTitle: "DRIE WEGEN NAAR JE VOLGENDE ROL.",
    resourcesIntro: "Wij bieden meer dan losse vacatures: een jobboard om zelf te solliciteren, een WhatsApp-community met wekelijkse kansen, en een talentpool die je proactief matcht. Omdat we zo nauw met werkgevers samenwerken, kunnen we vaak breder met ze meedenken dan alleen de vacatures die online staan. Hoe actiever je meedoet, hoe meer we voor je kunnen doen.",
    resources: [
      { tier: "Actief in de talentpool", title: "Talentpool", text: "Vertel meer over jezelf en meld je aan bij onze talentpool, en ons team gaat voor je aan de slag: we stellen je proactief voor bij offmarket-kansen, denken dankzij onze nauwe samenwerking met werkgevers al vroeg met je mee, en geven je een plek in ons exclusieve netwerk met events.", cta: "Word lid van de pool", path: "/pager" },
      { tier: "Community", title: "WhatsApp-community", text: "Word lid van de community en krijg passende vacatures wekelijks rechtstreeks in je WhatsApp.", cta: "Join", whats: true },
      { tier: "Los per vacature", title: "Job board", text: "Bekijk open rollen en solliciteer direct per vacature.", cta: "Bekijk jobs", path: "/jobboard" },
    ],
    resourcesBadge: "Aanbevolen",
    faqEyebrow: "Veelgestelde vragen",
    faqTitle: "HOE HET PROCES WERKT.",
    faq: [
      {
        q: "Hoe werkt solliciteren via VOIDS?",
        a: "Via het jobboard of een vacature in de WhatsApp-community solliciteer je los, per rol. Je kan je ook algemeen aanmelden bij de talentpool: dan matchen wij je actief, ook bij rollen waar we vanuit onze samenwerking met werkgevers al vroeg over meedenken. Wat daarna gebeurt verschilt per vacature: soms loopt de selectie via de werkgever zelf, soms doen wij die eerste selectie en de gesprekken. Gaat dat goed, dan brengen we je in contact en pakt de werkgever het verder op.",
      },
      {
        q: "Hoe kom ik in de talentpool?",
        a: "Beantwoord een paar vragen over jezelf en je bent lid. Daarna stellen we je proactief voor bij offmarket-kansen, denken we met je mee en nodigen we je uit voor exclusieve events.",
      },
      {
        q: "Wat is de career pager precies?",
        a: "Een gratis, persoonlijk loopbaanprofiel op basis van je antwoorden. Een leuke bonus, geen verplichte stap: lid worden van de talentpool kan ook zonder.",
      },
      {
        q: "Kost het lid worden van de talentpool iets?",
        a: "Nee, meedoen is voor jou altijd gratis. Wij worden betaald door de bedrijven waar we mensen plaatsen, niet door de studenten en starters in onze community.",
      },
      {
        q: "Ik heb nog geen werkervaring, kan ik me toch aanmelden?",
        a: "Ja, juist dan. De talentpool is bedoeld voor studenten en starters die hun eerste relevante ervaring nog zoeken. We matchen op motivatie, werkstijl en ambitie, niet alleen op een lang cv.",
      },
      {
        q: "Wat gebeurt er met mijn gegevens?",
        a: "We delen je profiel alleen met een werkgever als er een concrete match is, nooit zomaar breed. Je kan op elk moment vragen om je gegevens aan te passen of te verwijderen.",
      },
    ],
    fitEyebrow: "Talentpool",
    fitTitleA: "DIT KRIJG JE ALS JE LID",
    fitTitleB: "WORDT VAN DE TALENTPOOL.",
    fitBenefits: [
      "Proactieve voorstellen bij offmarket-kansen: rollen waar we dankzij onze nauwe samenwerking met werkgevers al vroeg over meedenken.",
      "Je gratis career pager: een persoonlijk loopbaanprofiel op basis van je antwoorden.",
      "Een plek in ons exclusieve netwerk: uitnodigingen voor events, persoonlijke introducties bij werkgevers waarmee we je in contact brengen, en een team dat continu met je meedenkt over nieuwe kansen.",
    ],
    fitCardCaption: "Wat je krijgt als lid van de talentpool",
    fitCta: "Word nu lid",
    fitCardStat: "4.000+",
    fitCardStatLabel: "studenten en starters in de community",
    fitPerks: ["Offmarket-kansen", "Gratis career pager", "Events & exclusief netwerk"],
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
    finalText: "Beantwoord een paar vragen en wij stellen je proactief voor bij bedrijven die bij je passen.",
    finalCta: "Meld je nu aan",
  },
  en: {
    eyebrow: "For talent",
    title: "JOBS COME TO YOU.",
    sub: "Answer a few questions about yourself and become part of our talent pool: personal matches, off-market opportunities and exclusive events. Free, no strings.",
    ctaPager: "Join the talent pool",
    ctaWhats: "💜 Join WhatsApp",
    avatarLabel: "4,000+ students went before you",
    stat1Value: "4,000+",
    stat1Label: "students in the community",
    stat2Label: "transparent terms",
    stat3Label: "profit reinvested in equal opportunity",
    resourcesEyebrow: "Your route",
    resourcesTitle: "THREE PATHS TO YOUR NEXT ROLE.",
    resourcesIntro: "We offer more than individual vacancies: a job board to apply yourself, a WhatsApp community with weekly opportunities, and a talent pool that proactively matches you. Because we work so closely with employers, we can often think along with them more broadly than just the vacancies that are posted. The more active you are, the more we can do for you.",
    resources: [
      { tier: "Active in the talent pool", title: "Talent pool", text: "Tell us more about yourself and sign up to our talent pool, and our team gets to work for you: we proactively put you forward for off-market opportunities, advocate for you with employers early on thanks to our close working relationship, and give you a spot in our exclusive network with events.", cta: "Join the talent pool", path: "/pager" },
      { tier: "Community", title: "WhatsApp community", text: "Join the community and get matching vacancies sent straight to your WhatsApp every week.", cta: "Join", whats: true },
      { tier: "Per vacancy", title: "Job board", text: "Browse open roles and apply directly to any vacancy.", cta: "View jobs", path: "/jobboard" },
    ],
    resourcesBadge: "Recommended",
    faqEyebrow: "Frequently asked",
    faqTitle: "HOW THE PROCESS WORKS.",
    faq: [
      {
        q: "How does applying through VOIDS work?",
        a: "Via the job board or a vacancy in the WhatsApp community, you apply per role. You can also sign up generally for the talent pool: we then actively match you, including to roles we're already thinking through with employers early on. What happens next depends on the vacancy: sometimes the employer runs the selection themselves, sometimes we handle the first selection and interviews ourselves. If that goes well, we connect you and the employer takes it from there.",
      },
      {
        q: "How do I get into the talent pool?",
        a: "Answer a few questions about yourself and you're in. From there we proactively put you forward for off-market opportunities, think along with you, and invite you to exclusive events.",
      },
      {
        q: "What exactly is the career pager?",
        a: "A free, personal career profile based on your answers. A nice bonus, not a required step: joining the talent pool works without it too.",
      },
      {
        q: "Does joining the talent pool cost anything?",
        a: "No, it's always free for you. We're paid by the companies we place people with, not by the students and starters in our community.",
      },
      {
        q: "I don't have any work experience yet, can I still sign up?",
        a: "Yes, especially then. The talent pool is for students and starters still looking for their first relevant experience. We match on motivation, working style and ambition, not just a long CV.",
      },
      {
        q: "What happens to my data?",
        a: "We only share your profile with an employer when there's a concrete match, never broadly. You can ask us to update or delete your data at any time.",
      },
    ],
    fitEyebrow: "Talent pool",
    fitTitleA: "WHAT YOU GET AS A",
    fitTitleB: "TALENT POOL MEMBER.",
    fitBenefits: [
      "Proactive introductions to off-market opportunities: roles we're already thinking through with employers early on thanks to our close working relationship.",
      "Your free career pager: a personal career profile based on your answers.",
      "A spot in our exclusive network: invites to events, personal introductions to employers we connect you with, and a team that keeps thinking along about new opportunities for you.",
    ],
    fitCardCaption: "What you get as a talent pool member",
    fitCta: "Join now",
    fitCardStat: "4,000+",
    fitCardStatLabel: "students and starters in the community",
    fitPerks: ["Off-market opportunities", "Free career pager", "Events & exclusive network"],
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
        <div className="wrap g-collapse" style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 44, alignItems: "center", padding: "64px 32px 70px" }}>
          <div>
            <span className="voids-eyebrow" style={{ color: "var(--voids-blue-100)" }}>{c.eyebrow}</span>
            <h1 className="anton hero-h1" style={{ fontSize: 52, margin: "14px 0 18px", color: "#fff" }}>{c.title}</h1>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--voids-blue-100)", margin: "0 0 28px", maxWidth: 560 }}>{c.sub}</p>
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
                { value: c.stat1Value, label: c.stat1Label },
                { value: "100%", label: c.stat2Label },
                { value: "10%", label: c.stat3Label },
              ].map((s, i) => (
                <div key={s.label} style={{ display: "flex", alignItems: "baseline", gap: 12, borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,.14)", paddingTop: i === 0 ? 0 : 14 }}>
                  <span className="anton" style={{ fontSize: 26, color: "#fff", flex: "none" }}><CountUp value={s.value} /></span>
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
        <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--voids-ink-muted)", margin: "0 0 30px", maxWidth: 1040 }}>{c.resourcesIntro}</p>
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
        <div className="wrap" style={{ padding: "72px 32px" }}>
          <span className="voids-eyebrow" style={{ color: "var(--voids-blue)" }}>{c.fitEyebrow}</span>
          <h2 className="anton section-h2" style={{ fontSize: 36, margin: "10px 0 20px" }}>
            {c.fitTitleA}
            <br />
            {c.fitTitleB}
          </h2>
          <div className="wrap g-collapse" style={{ padding: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 44, alignItems: "center" }}>
            <div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 460 }}>
                {c.fitBenefits.map((b, i) => {
                  const sepIdx = b.indexOf(": ");
                  const label = sepIdx === -1 ? b : b.slice(0, sepIdx);
                  const detail = sepIdx === -1 ? "" : b.slice(sepIdx + 2);
                  const Icon = [TargetIcon, PagerIcon, NetworkIcon][i % 3];
                  return (
                    <div key={b} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                      <div style={{ width: 38, height: 38, borderRadius: "50%", background: "var(--voids-blue-100)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                        <Icon />
                      </div>
                      <div>
                        <div style={{ fontSize: 14.5, fontWeight: 700, color: "var(--voids-ink)", marginBottom: 3 }}>{label}</div>
                        {detail && <p style={{ fontSize: 13.5, lineHeight: 1.5, color: "var(--voids-ink-muted)", margin: 0 }}>{detail}</p>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="card" style={{ padding: 20 }}>
            <div style={{ fontSize: 12.5, fontWeight: 600, color: "var(--voids-ink-muted)", marginBottom: 10 }}>{c.fitCardCaption}</div>
            <div style={{ background: "var(--voids-beige)", borderRadius: "var(--radius-md)", padding: 24 }}>
              <div style={{ marginBottom: 18 }}>
                <span className="anton" style={{ fontSize: 32, color: "var(--voids-blue)", display: "block" }}><CountUp value={c.fitCardStat} /></span>
                <span style={{ fontSize: 13, color: "var(--voids-ink-muted)" }}>{c.fitCardStatLabel}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {c.fitPerks.map((perk) => (
                  <div key={perk} style={{ display: "flex", gap: 8, fontSize: 13.5, fontWeight: 600, color: "var(--voids-ink-soft)" }}>
                    <CheckIcon />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ marginTop: 16 }}>
              <Button variant="secondary" size="md" fullWidth href={p("/pager")}>{c.fitCta}</Button>
            </div>
            </div>
          </div>
        </div>
      </section>

      <Photo src="/photography/talent-band-2.jpg" alt={c.bandAlt} ratio="2 / 1" radius="0" objectPosition="center 26%" sizes="100vw" />

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

      <section style={{ background: "#fff" }}>
        <div className="wrap" style={{ padding: "64px 32px" }}>
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
        </div>
      </section>

      <section className="wrap" style={{ padding: "72px 32px" }}>
        <span className="voids-eyebrow" style={{ color: "var(--voids-blue)" }}>{c.faqEyebrow}</span>
        <h2 className="anton section-h2" style={{ fontSize: 28, margin: "10px 0 22px" }}>{c.faqTitle}</h2>
        <div style={{ maxWidth: 1040 }}>
          <FaqAccordion items={c.faq} />
        </div>
      </section>

      <section style={{ background: "var(--voids-blue)" }}>
        <div className="wrap" style={{ padding: "56px 32px", textAlign: "center", color: "#fff" }}>
          <h2 className="anton section-h2" style={{ fontSize: 38, margin: "0 0 12px", color: "#fff" }}>{c.finalTitle}</h2>
          <p style={{ fontSize: 16, color: "var(--voids-blue-100)", maxWidth: 480, margin: "0 auto 24px" }}>{c.finalText}</p>
          <Button variant="primary" size="lg" href={p("/pager")}>{c.finalCta}</Button>
        </div>
      </section>
    </>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="6.25" stroke="var(--voids-blue)" strokeWidth="1.4" />
      <path d="M4.3 7.1l1.9 1.9 3.5-3.9" stroke="var(--voids-blue)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="var(--voids-blue)" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="5" stroke="var(--voids-blue)" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="1.4" fill="var(--voids-blue)" />
    </svg>
  );
}

function PagerIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="7" width="16" height="13" rx="2" stroke="var(--voids-blue)" strokeWidth="1.6" />
      <path d="M8 7V5.5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2V7" stroke="var(--voids-blue)" strokeWidth="1.6" />
      <path d="M7.5 11.5h9M7.5 15h5.5" stroke="var(--voids-blue)" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="6" cy="7" r="2.4" stroke="var(--voids-blue)" strokeWidth="1.6" />
      <circle cx="18" cy="7" r="2.4" stroke="var(--voids-blue)" strokeWidth="1.6" />
      <circle cx="12" cy="18" r="2.4" stroke="var(--voids-blue)" strokeWidth="1.6" />
      <path d="M8 8.3l2.3 7.4M16 8.3l-2.3 7.4M8.4 7h7.2" stroke="var(--voids-blue)" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
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
