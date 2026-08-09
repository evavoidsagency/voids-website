import type { Metadata } from "next";
import { CasesPage } from "@/components/pages/CasesPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "nl",
  path: "/cases",
  title: "Cases",
  description: "Van startups tot corporates: Mila Health, Hubby en Joulz over hun werkstudenten via VOIDS. Een greep uit onze plaatsingen.",
});

export default function Page() {
  return <CasesPage lang="nl" />;
}
