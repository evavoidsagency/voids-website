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
  { id: "cases", nl: "Cases", en: "Cases", path: "/cases" },
  { id: "blog", nl: "Blog", en: "Blog", path: "/blog" },
  { id: "pricing", nl: "Tarieven", en: "Pricing", path: "/pricing", stub: true },
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
    link: "https://chat.whatsapp.com/CzN5MsbpEHd05uPTnkttDr?mode=wwc",
  },
  {
    nameNl: "Stages",
    nameEn: "Internships",
    abbr: "SG",
    membersNl: "Stageplekken",
    membersEn: "Internship spots",
    link: "https://chat.whatsapp.com/KgBCsjHIY1SBp41XsjuGFT?mode=wwc",
  },
  {
    nameNl: "Werkstudentschappen",
    nameEn: "Working-student jobs",
    abbr: "WS",
    membersNl: "Werken naast je studie",
    membersEn: "Work alongside your studies",
    link: "https://chat.whatsapp.com/CiR5wRUeJe3DkAcJnzjLCE?mode=wwc",
  },
  {
    nameNl: "Bijbanen",
    nameEn: "Side jobs",
    abbr: "BB",
    membersNl: "Flexibel bijverdienen",
    membersEn: "Flexible extra income",
    link: "https://chat.whatsapp.com/DLzJJJwZtb7C11PK6P9fkG?mode=wwc",
  },
  {
    nameNl: "Freelance werk",
    nameEn: "Freelance work",
    abbr: "FL",
    membersNl: "Opdrachten & projecten",
    membersEn: "Gigs & projects",
    link: "https://chat.whatsapp.com/KxfCEDUet9y54csCgtVVYi?mode=wwc",
  },
  {
    nameNl: "Carrièrekansen",
    nameEn: "Career opportunities",
    abbr: "CK",
    membersNl: "Doorgroei & starterrollen",
    membersEn: "Growth & starter roles",
    link: "https://chat.whatsapp.com/FI6trMqZRwT2GsvbSmkwqp?mode=wwc",
  },
  {
    nameNl: "Studentwork in NL (EN)",
    nameEn: "Studentwork in NL (EN)",
    abbr: "EN",
    membersNl: "For English speakers",
    membersEn: "For English speakers",
    link: "https://chat.whatsapp.com/DsX8hvO7CLZDZRmjMBYiPc?mode=wwc",
  },
  {
    nameNl: "Impactwerk",
    nameEn: "Impact work",
    abbr: "IW",
    membersNl: "Purpose-gedreven rollen",
    membersEn: "Purpose-driven roles",
    link: "https://chat.whatsapp.com/J87GPeBOHP24YBnNctt5kT?mode=hqrt3",
  },
];

export const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/voidsagency",
  instagram: "https://www.instagram.com/voids_agency/",
  tiktok: "https://www.tiktok.com/@voidstalentagency",
};

export const t = {
  accountLabel: { nl: "Inloggen", en: "Log in" },
  whatsappCta: { nl: "💜 WhatsApp", en: "💜 WhatsApp" },
  careerPager: { nl: "Career pager", en: "Career pager" },
  whatsModalTitle: { nl: "JOIN DE COMMUNITY 💜", en: "JOIN THE COMMUNITY 💜" },
  whatsModalSub: {
    nl: "Kies je kanaal. Passende jobs landen direct in je WhatsApp.",
    en: "Pick your channel. Matching jobs land straight in your WhatsApp.",
  },
  whatsJoin: { nl: "Join →", en: "Join →" },
  whatsMaybeLater: { nl: "Misschien later", en: "Maybe later" },
  footerTagline: {
    nl: "Wij verbinden hoogopgeleid talent aan ambitieuze organisaties. Kwaliteit boven kwantiteit.",
    en: "We connect highly-educated talent with ambitious organisations. Quality over quantity.",
  },
  footerMenu: { nl: "Menu", en: "Menu" },
  footerMore: { nl: "Meer", en: "More" },
  footerFaq: { nl: "FAQ", en: "FAQ" },
  footerPrivacy: { nl: "Privacy", en: "Privacy" },
  footerStayUpdated: { nl: "Blijf op de hoogte", en: "Stay in the loop" },
  footerNewsletterSub: {
    nl: "Vacaturemeldingen & community-updates.",
    en: "Job alerts & community updates.",
  },
  footerEmailPlaceholder: { nl: "jouw@email.nl", en: "your@email.com" },
  footerOn: { nl: "Aan", en: "On" },
  footerCopyright: { nl: "© 2026 VOIDS.agency · Amsterdam", en: "© 2026 VOIDS.agency · Amsterdam" },
} satisfies Record<string, { nl: string; en: string }>;
