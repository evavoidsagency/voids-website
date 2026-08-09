import type { Metadata } from "next";
import { CompaniesPage } from "@/components/pages/CompaniesPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "nl",
  path: "/companies",
  title: "Voor bedrijven",
  description:
    "Werkstudenten, stagiairs en starters werven zonder gedoe. Wij nemen het hele wervingsproces uit handen, van briefing tot getekende match: een shortlist in plaats van een cv-stapel.",
});

export default function Page() {
  return <CompaniesPage lang="nl" />;
}
