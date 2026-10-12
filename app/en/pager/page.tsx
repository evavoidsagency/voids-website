import type { Metadata } from "next";
import { StubPage } from "@/components/pages/StubPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "en",
  path: "/pager",
  title: "Talent pool",
  description: "Signing up for the VOIDS talent pool is coming.",
});

export default function Page() {
  return (
    <StubPage
      lang="en"
      title="TALENT POOL SIGN-UP IS COMING."
      body="The talent pool intake lands in Phase 2 of the platform."
    />
  );
}
