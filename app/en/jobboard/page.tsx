import type { Metadata } from "next";
import { StubPage } from "@/components/pages/StubPage";

export const metadata: Metadata = { title: "Job board", alternates: { languages: { nl: "/jobboard", en: "/en/jobboard" } } };

export default function Page() {
  return (
    <StubPage
      lang="en"
      title="THE JOB BOARD IS COMING."
      body="The job board with open roles and quick-apply lands in Phase 3 of the platform. Want matching roles now? Join the WhatsApp community via the button in the top right."
    />
  );
}
