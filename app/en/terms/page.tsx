import type { Metadata } from "next";
import { TermsPage } from "@/components/pages/TermsPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "en",
  path: "/terms",
  title: "Terms",
  description: "VOIDS general terms and conditions.",
});

export default function Page() {
  return <TermsPage lang="en" />;
}
