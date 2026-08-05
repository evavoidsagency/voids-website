import type { Metadata } from "next";
import { TalentPage } from "@/components/pages/TalentPage";

export const metadata: Metadata = {
  title: "For talent",
  description:
    "Tell us once what drives you and get your free career pager. Matching opportunities then land in your WhatsApp automatically.",
  alternates: { languages: { nl: "/talent", en: "/en/talent" } },
};

export default function Page() {
  return <TalentPage lang="en" />;
}
