import type { Metadata } from "next";
import { FaqPage } from "@/components/pages/FaqPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "nl",
  path: "/faq",
  title: "FAQ",
  description: "Veelgestelde vragen over VOIDS: wat we doen, hoe we matchen, en hoe je je aanmeldt als bedrijf of talent.",
});

export default function Page() {
  return <FaqPage lang="nl" />;
}
