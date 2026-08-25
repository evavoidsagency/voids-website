import type { Metadata } from "next";
import { EmployerBrandingPage } from "@/components/pages/EmployerBrandingPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "en",
  path: "/companies/employer-branding",
  title: "Advice & employer branding",
  description: "We think along on your whole junior strategy: from recruitment and retention to employer branding that actually lands with students and starters.",
});

export default function Page() {
  return <EmployerBrandingPage lang="en" />;
}
