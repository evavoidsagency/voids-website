import type { Metadata } from "next";
import { CompaniesPage } from "@/components/pages/CompaniesPage";

export const metadata: Metadata = {
  title: "Voor bedrijven",
  description:
    "Wij nemen het hele wervingsproces uit handen, van briefing tot getekende match. Een shortlist in plaats van een cv-stapel.",
  alternates: { languages: { nl: "/companies", en: "/en/companies" } },
};

export default function Page() {
  return <CompaniesPage lang="nl" />;
}
