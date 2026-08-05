import type { Metadata } from "next";
import { CasesPage } from "@/components/pages/CasesPage";

export const metadata: Metadata = {
  title: "Cases",
  description: "Van startups tot corporates. Een greep uit onze plaatsingen.",
  alternates: { languages: { nl: "/cases", en: "/en/cases" } },
};

export default function Page() {
  return <CasesPage lang="nl" />;
}
