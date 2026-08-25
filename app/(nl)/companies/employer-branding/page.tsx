import type { Metadata } from "next";
import { EmployerBrandingPage } from "@/components/pages/EmployerBrandingPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "nl",
  path: "/companies/employer-branding",
  title: "Advies & employer branding",
  description: "We denken mee over je hele junior-strategie: van recruitment en het behouden van jong talent tot employer branding die aanslaat bij studenten en starters.",
});

export default function Page() {
  return <EmployerBrandingPage lang="nl" />;
}
