export type Lang = "nl" | "en";

export type NavItem = {
  id: string;
  nl: string;
  en: string;
  /** Path without locale prefix, e.g. "/talent" */
  path: string;
  /** True while the destination is still a Phase 2+ stub. */
  stub?: boolean;
};

export const NAV: NavItem[] = [
  { id: "talent", nl: "Talent", en: "Talent", path: "/talent" },
  { id: "jobboard", nl: "Jobs", en: "Jobs", path: "/jobboard", stub: true },
  { id: "companies", nl: "Bedrijven", en: "Companies", path: "/companies" },
  { id: "impact", nl: "Impact", en: "Impact", path: "/impact" },
  { id: "blog", nl: "Blog", en: "Blog", path: "/blog" },
  { id: "about", nl: "Over ons", en: "About", path: "/about" },
];

/** Locale-prefix a path: "/talent" -> "/en/talent" for lang "en". */
export function localePath(lang: Lang, path: string) {
  if (path === "/") return lang === "en" ? "/en" : "/";
  return lang === "en" ? `/en${path}` : path;
}

/** Given the current pathname, return the equivalent path in the other language. */
export function altLocalePath(pathname: string) {
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const rest = pathname.slice(3);
    return rest === "" ? "/" : rest;
  }
  return `/en${pathname === "/" ? "" : pathname}`;
}

export const CHANNELS: {
  nameNl: string;
  nameEn: string;
  abbr: string;
  membersNl: string;
  membersEn: string;
  link: string;
}[] = [
  {
    nameNl: "Startersfuncties",
    nameEn: "Starter roles",
    abbr: "ST",
    membersNl: "Fulltime & parttime banen",
    membersEn: "Full-time & part-time jobs",
    link: "https://chat.whatsapp.com/IaN0kEeuDjb341rExEmUm2?mode=gi_t",
  },
  {
    nameNl: "Stages",
    nameEn: "Internships",
    abbr: "SG",
    membersNl: "Stageplekken",
    membersEn: "Internship spots",
    link: "https://chat.whatsapp.com/LWCJAz0ftTaCOAOFqmw9jW?mode=gi_t",
  },
  {
    nameNl: "Werkstudentschappen",
    nameEn: "Working-student jobs",
    abbr: "WS",
    membersNl: "Werken naast je studie",
    membersEn: "Work alongside your studies",
    link: "https://chat.whatsapp.com/Gr2K2NIcyybDPOBG7ODV2T?mode=gi_t",
  },
  {
    nameNl: "Bijbanen",
    nameEn: "Side jobs",
    abbr: "BB",
    membersNl: "Flexibel bijverdienen",
    membersEn: "Flexible extra income",
    link: "https://chat.whatsapp.com/LMpEUdegNr42uZm7tgRMWk?mode=gi_t",
  },
  {
    nameNl: "Freelance werk",
    nameEn: "Freelance work",
    abbr: "FL",
    membersNl: "Opdrachten & projecten",
    membersEn: "Gigs & projects",
    link: "https://chat.whatsapp.com/Fv1kBc7Ex6v0B6CnF6HP57?mode=gi_t",
  },
  {
    nameNl: "Carrièrekansen",
    nameEn: "Career opportunities",
    abbr: "CK",
    membersNl: "Vrijwilligerswerk & bestuursrollen",
    membersEn: "Volunteering & board roles",
    link: "https://chat.whatsapp.com/HoDEZyDnNzVHLBuXU8e96N?mode=gi_t",
  },
  {
    nameNl: "Studentwork in NL (EN)",
    nameEn: "Studentwork in NL (EN)",
    abbr: "EN",
    membersNl: "For English speakers",
    membersEn: "For English speakers",
    link: "https://chat.whatsapp.com/LMoQg9Wzao5HpC3KyQvV2Q?mode=gi_t",
  },
  {
    nameNl: "Impactwerk",
    nameEn: "Impact work",
    abbr: "IW",
    membersNl: "Purpose-gedreven rollen",
    membersEn: "Purpose-driven roles",
    link: "https://chat.whatsapp.com/LeIgU0MEPUv6FbaIYnpZqu?mode=gi_t",
  },
];

export const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/voidsagency",
  instagram: "https://www.instagram.com/voids_agency/",
  tiktok: "https://www.tiktok.com/@voidstalentagency",
};

export const t = {
  accountLabel: { nl: "Portal", en: "Portal" },
  contactLabel: { nl: "Contact", en: "Contact" },
  moreLabel: { nl: "Meer", en: "More" },
  whatsappCta: { nl: "💜 WhatsApp", en: "💜 WhatsApp" },
  joinTalentPool: { nl: "Join de talentpool", en: "Join the talent pool" },
  openMenu: { nl: "Open menu", en: "Open menu" },
  closeMenu: { nl: "Sluit menu", en: "Close menu" },
  whatsModalTitle: { nl: "JOIN DE COMMUNITY 💜", en: "JOIN THE COMMUNITY 💜" },
  whatsModalSub: {
    nl: "Kies je kanaal. Passende jobs landen direct in je WhatsApp.",
    en: "Pick your channel. Matching jobs land straight in your WhatsApp.",
  },
  whatsJoin: { nl: "Join →", en: "Join →" },
  whatsMaybeLater: { nl: "Misschien later", en: "Maybe later" },
  footerTagline: {
    nl: "Wij verbinden hoogopgeleid talent aan ambitieuze organisaties.",
    en: "We connect highly-educated talent with ambitious organisations.",
  },
  footerMenu: { nl: "Menu", en: "Menu" },
  footerMore: { nl: "Meer", en: "More" },
  footerFaq: { nl: "FAQ", en: "FAQ" },
  footerPrivacy: { nl: "Privacy", en: "Privacy" },
  footerTerms: { nl: "Voorwaarden", en: "Terms" },
  footerStayUpdated: { nl: "Blijf op de hoogte", en: "Stay in the loop" },
  footerNewsletterSub: {
    nl: "Vacaturemeldingen & community-updates.",
    en: "Job alerts & community updates.",
  },
  footerCopyright: { nl: "© 2026 VOIDS.agency · Amsterdam", en: "© 2026 VOIDS.agency · Amsterdam" },
} satisfies Record<string, { nl: string; en: string }>;
