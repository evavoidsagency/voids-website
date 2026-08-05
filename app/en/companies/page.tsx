import type { Metadata } from "next";
import { CompaniesPage } from "@/components/pages/CompaniesPage";

export const metadata: Metadata = {
  title: "For companies",
  description:
    "We take the entire hiring process off your hands, from briefing to signed match. A shortlist instead of a CV pile.",
  alternates: { languages: { nl: "/companies", en: "/en/companies" } },
};

export default function Page() {
  return <CompaniesPage lang="en" />;
}
