import type { Metadata } from "next";
import { StubPage } from "@/components/pages/StubPage";

export const metadata: Metadata = { title: "Pricing", alternates: { languages: { nl: "/pricing", en: "/en/pricing" } } };

export default function Page() {
  return (
    <StubPage
      lang="en"
      title="PRICING IS COMING."
      body="Posting your own vacancy and paying online lands in Phase 5 of the platform. Want to hire now? Book an intro call via the companies page."
    />
  );
}
