import type { Metadata } from "next";
import { StubPage } from "@/components/pages/StubPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "en",
  path: "/pager",
  title: "Career pager",
  description: "The VOIDS career pager, your personal career-advice intake, is coming.",
});

export default function Page() {
  return (
    <StubPage
      lang="en"
      title="THE CAREER PAGER IS COMING."
      body="The intake flow and your personal career-advice generator land in Phase 2 of the platform."
    />
  );
}
