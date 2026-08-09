import type { Metadata } from "next";
import { CompaniesPage } from "@/components/pages/CompaniesPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "en",
  path: "/companies",
  title: "For companies",
  description:
    "Hire working students, interns and starters without the hassle. We take the entire hiring process off your hands, from briefing to signed match: a shortlist instead of a CV pile.",
});

export default function Page() {
  return <CompaniesPage lang="en" />;
}
