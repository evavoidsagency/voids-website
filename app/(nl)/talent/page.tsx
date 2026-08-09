import type { Metadata } from "next";
import { TalentPage } from "@/components/pages/TalentPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "nl",
  path: "/talent",
  title: "Voor talent",
  description:
    "Vul één keer in wat je drijft en krijg gratis je career pager. Passende werkstudent-, stage- en starterrollen krijg je daarna direct via WhatsApp.",
});

export default function Page() {
  return <TalentPage lang="nl" />;
}
