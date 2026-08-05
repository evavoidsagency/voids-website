import type { Metadata } from "next";
import { CasesPage } from "@/components/pages/CasesPage";

export const metadata: Metadata = {
  title: "Cases",
  description: "From startups to corporates. A selection of our placements.",
  alternates: { languages: { nl: "/cases", en: "/en/cases" } },
};

export default function Page() {
  return <CasesPage lang="en" />;
}
