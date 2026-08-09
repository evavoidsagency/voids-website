import type { Metadata } from "next";
import { TermsPage } from "@/components/pages/TermsPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "nl",
  path: "/terms",
  title: "Voorwaarden",
  description: "Algemene voorwaarden van VOIDS.",
});

export default function Page() {
  return <TermsPage lang="nl" />;
}
