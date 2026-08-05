import type { Metadata } from "next";
import { StubPage } from "@/components/pages/StubPage";

export const metadata: Metadata = { title: "Career pager", alternates: { languages: { nl: "/pager", en: "/en/pager" } } };

export default function Page() {
  return (
    <StubPage
      lang="en"
      title="THE CAREER PAGER IS COMING."
      body="The intake flow and your personal career-advice generator land in Phase 2 of the platform."
    />
  );
}
