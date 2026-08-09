import type { Metadata } from "next";
import { StubPage } from "@/components/pages/StubPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "en",
  path: "/pricing",
  title: "Pricing",
  description: "Posting your own vacancy and paying online at VOIDS is coming. Want to hire now? Book an intro call.",
});

export default function Page() {
  return (
    <StubPage
      lang="en"
      title="PRICING IS COMING."
      body="Posting your own vacancy and paying online lands in Phase 5 of the platform. Want to hire now? Book an intro call via the companies page."
    />
  );
}
