import type { Metadata } from "next";
import { CasesPage } from "@/components/pages/CasesPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "en",
  path: "/cases",
  title: "Cases",
  description: "From startups to corporates: Mila Health, Hubby and Joulz on their working students via VOIDS. A selection of our placements.",
});

export default function Page() {
  return <CasesPage lang="en" />;
}
