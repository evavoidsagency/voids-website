import type { Metadata } from "next";
import { RootHtml } from "@/components/site/RootHtml";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { BASE_METADATA } from "@/lib/seo";

export const metadata: Metadata = BASE_METADATA.en;

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootHtml lang="en">
      <div style={{ color: "var(--voids-ink-soft)", background: "var(--voids-beige)", minHeight: "100vh" }}>
        <Header lang="en" />
        <main>{children}</main>
        <Footer lang="en" />
      </div>
    </RootHtml>
  );
}
