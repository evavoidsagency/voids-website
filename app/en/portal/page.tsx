import type { Metadata } from "next";
import { StubPage } from "@/components/pages/StubPage";

export const metadata: Metadata = {
  title: "Portal",
  alternates: { languages: { nl: "/portal", en: "/en/portal" } },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <StubPage
      lang="en"
      title="THE PORTAL IS COMING."
      body="Logging in and your personal application overview may land in a later phase of the platform. You can already apply without an account via the job board."
    />
  );
}
