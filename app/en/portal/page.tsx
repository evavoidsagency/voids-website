import type { Metadata } from "next";
import { StubPage } from "@/components/pages/StubPage";

export const metadata: Metadata = { title: "Portal", alternates: { languages: { nl: "/portal", en: "/en/portal" } } };

export default function Page() {
  return (
    <StubPage
      lang="en"
      title="THE PORTAL IS COMING."
      body="Logging in and your personal application overview land in Phase 4 of the platform."
    />
  );
}
