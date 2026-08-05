import type { Metadata } from "next";
import { TalentPage } from "@/components/pages/TalentPage";

export const metadata: Metadata = {
  title: "Voor talent",
  description:
    "Vul één keer in wat je drijft en krijg gratis je career pager. Passende kansen landen daarna vanzelf in je WhatsApp.",
  alternates: { languages: { nl: "/talent", en: "/en/talent" } },
};

export default function Page() {
  return <TalentPage lang="nl" />;
}
