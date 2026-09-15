import type { Lang } from "@/lib/i18n/common";

export const PROCESS: Record<Lang, { num: string; title: string; text: string; when: string }[]> = {
  nl: [
    { num: "01", title: "Intake & briefing", text: "Wij nemen jullie rol, cultuur en groeifase door. Jij levert de richting, wij de rest.", when: "Dag 1" },
    {
      num: "02",
      title: "Sourcing, binnen en buiten de community",
      text: "We zoeken actief binnen onze community van 4.000+ studenten, via ons bredere netwerk van samenwerkingspartners, en daarbuiten via studieverenigingen, om zoveel mogelijk geschikte kandidaten te bereiken.",
      when: "Dag 1-7",
    },
    { num: "03", title: "Voorselectie & check", text: "Een recruiter beoordeelt elke match handmatig. Alleen de sterkste gaan door.", when: "Dag 8-14" },
    { num: "04", title: "Shortlist i.p.v. cv-stapel", text: "Geen stapel om zelf uit te pluizen: alleen kandidaten die al streng zijn getoetst op fit, met onderbouwing waarom.", when: "Week 3" },
    {
      num: "05",
      title: "Gesprekken & match",
      text: "Jullie plannen zelf de gesprekken met de kandidaten uit de shortlist en kiezen wie het beste past.",
      when: "Na shortlist",
    },
    { num: "06", title: "Nazorg & retentie", text: "We blijven contact houden om te checken of de match werkt.", when: "Doorlopend" },
  ],
  en: [
    { num: "01", title: "Intake & briefing", text: "We dig into your role, culture and growth stage. You set the direction, we do the rest.", when: "Day 1" },
    {
      num: "02",
      title: "Sourcing, inside and outside our community",
      text: "We search actively across our 4,000+ student community, our wider network of partner organisations, and beyond through partnerships with study associations, to reach as many suitable candidates as possible.",
      when: "Day 1-7",
    },
    { num: "03", title: "Pre-selection & review", text: "A recruiter reviews every match personally. Only the strongest make the cut.", when: "Day 8-14" },
    { num: "04", title: "Shortlist, not a CV pile", text: "No pile to sift through yourself: only candidates already rigorously tested for fit, with the reasoning behind each one.", when: "Week 3" },
    {
      num: "05",
      title: "Interviews & match",
      text: "You schedule the interviews with candidates from the shortlist yourself, and choose who fits best.",
      when: "After shortlist",
    },
    { num: "06", title: "Aftercare & retention", text: "We keep checking in to make sure the match is working.", when: "Ongoing" },
  ],
};

export const ROLE_TYPES: Record<Lang, string[]> = {
  nl: ["Business Development", "Sales", "Marketing", "Communicatie", "Data", "AI & Automatisering", "Finance", "Legal", "Founder's Associate", "Operations", "en meer"],
  en: ["Business Development", "Sales", "Marketing", "Communications", "Data", "AI & Automation", "Finance", "Legal", "Founder's Associate", "Operations", "and more"],
};

export const WHY_WS: Record<Lang, { title: string; text: string; icon: "flex" | "trust" | "focus" | "pipeline" | "coin" }[]> = {
  nl: [
    {
      title: "Flexibel",
      text: "Schuift mee met uren en planning.",
      icon: "flex",
    },
    {
      title: "Kostenefficiënt",
      text: "Voordeliger dan een fulltime starter.",
      icon: "coin",
    },
    {
      title: "Meer focus",
      text: "Operationeel werk uit handen bij je kernteam.",
      icon: "focus",
    },
    {
      title: "Continuïteit",
      text: "Geen eindeloos opnieuw inwerken.",
      icon: "pipeline",
    },
    {
      title: "Risicoloos kennismaken",
      text: "Eerst leren kennen, met ruimte om door te groeien.",
      icon: "trust",
    },
  ],
  en: [
    {
      title: "Flexible",
      text: "Scales with your hours and planning.",
      icon: "flex",
    },
    {
      title: "Cost-efficient",
      text: "Better value than a full-time starter.",
      icon: "coin",
    },
    {
      title: "More focus",
      text: "Operational work off your core team's plate.",
      icon: "focus",
    },
    {
      title: "Continuity",
      text: "No endless re-onboarding.",
      icon: "pipeline",
    },
    {
      title: "Low-risk trial",
      text: "Get to know them first, with room to grow.",
      icon: "trust",
    },
  ],
};
