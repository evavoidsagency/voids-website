import type { Metadata } from "next";
import { WervingSelectiePage } from "@/components/pages/WervingSelectiePage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "nl",
  path: "/companies/werving-selectie",
  title: "Werving & selectie",
  description: "Zes stappen. Wij doen het werk, jullie beslissen. Van intake tot ondertekende match, voor werkstudenten, stagiairs en starters.",
});

export default function Page() {
  return <WervingSelectiePage lang="nl" />;
}
