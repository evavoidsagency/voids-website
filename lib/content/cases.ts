import type { Lang } from "@/lib/i18n/common";

export const CLIENT_CASES: Record<
  Lang,
  { logo: string; slug: string; bg: string; company: string; sector: string; metric: string; text: string; photo: string }[]
> = {
  nl: [
    {
      logo: "MH",
      slug: "mila-health",
      bg: "#3A0CA3",
      company: "Mila Health",
      sector: "milahealth.co",
      metric: "3 werkstudenten Marketing",
      text: "Eén Nederlandse, Zweedse en Duitse werkstudent, elk verantwoordelijk voor hun eigen markt. Meteen een hefboom bij de uitbreiding naar Zweden en Duitsland.",
      photo: "/photography/case-traveltech.jpg",
    },
    {
      logo: "HB",
      slug: "hubby",
      bg: "#4476F2",
      company: "Hubby",
      sector: "hubbyesim.com",
      metric: "3 werkstudenten",
      text: "Twee founder's associates die meedenken op strategisch niveau, plus een werkstudent partnerships & storytelling voor de merkkant.",
      photo: "/photography/case-finance.jpg",
    },
    {
      logo: "JZ",
      slug: "joulz",
      bg: "#6A44C4",
      company: "Joulz",
      sector: "Energie & infrastructuur",
      metric: "3 werkstudenten Finance",
      text: "Werkstudenten Order-to-Cash en Purchase-to-Pay die het facturatie- en betaalproces mee op poten hielden, van debiteuren- tot crediteurenbeheer.",
      photo: "/photography/case-terra.jpg",
    },
  ],
  en: [
    {
      logo: "MH",
      slug: "mila-health",
      bg: "#3A0CA3",
      company: "Mila Health",
      sector: "milahealth.co",
      metric: "3 working students, Marketing",
      text: "A Dutch, Swedish and German working student, each owning their own market. An instant lever for the expansion into Sweden and Germany.",
      photo: "/photography/case-traveltech.jpg",
    },
    {
      logo: "HB",
      slug: "hubby",
      bg: "#4476F2",
      company: "Hubby",
      sector: "hubbyesim.com",
      metric: "3 working students",
      text: "Two founder's associates thinking along at a strategic level, plus a working student for partnerships & storytelling on the brand side.",
      photo: "/photography/case-finance.jpg",
    },
    {
      logo: "JZ",
      slug: "joulz",
      bg: "#6A44C4",
      company: "Joulz",
      sector: "Energy & infrastructure",
      metric: "3 working students, Finance",
      text: "Order-to-cash and purchase-to-pay working students who helped run the invoicing and payments process, from receivables to payables.",
      photo: "/photography/case-terra.jpg",
    },
  ],
};

export const ROLES: Record<Lang, { role: string; company: string; uren: string; tags: string[] }[]> = {
  nl: [
    { role: "Werkstudent Marketing (NL/SE/DE)", company: "Mila Health", uren: "±20 u/wk", tags: ["Marketing", "Internationaal"] },
    { role: "Founder's Associate", company: "Hubby", uren: "±20 u/wk", tags: ["Strategie", "Founder support"] },
    { role: "Werkstudent Order to Cash", company: "Joulz", uren: "±20 u/wk", tags: ["Debiteuren", "Facturatie"] },
    { role: "Werkstudent Purchase to Pay", company: "Joulz", uren: "±20 u/wk", tags: ["Crediteuren", "Bankverwerking"] },
  ],
  en: [
    { role: "Working student Marketing (NL/SE/DE)", company: "Mila Health", uren: "±20 hrs/wk", tags: ["Marketing", "International"] },
    { role: "Founder's Associate", company: "Hubby", uren: "±20 hrs/wk", tags: ["Strategy", "Founder support"] },
    { role: "Working student Order to Cash", company: "Joulz", uren: "±20 hrs/wk", tags: ["Receivables", "Invoicing"] },
    { role: "Working student Purchase to Pay", company: "Joulz", uren: "±20 hrs/wk", tags: ["Payables", "Bank processing"] },
  ],
};
