import type { Metadata } from "next";
import { TalentPage } from "@/components/pages/TalentPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "en",
  path: "/talent",
  title: "For talent",
  description:
    "Tell us once what drives you and join the talent pool for free. Matching working-student, internship and starter roles then come straight to your WhatsApp.",
});

export default function Page() {
  return <TalentPage lang="en" />;
}
