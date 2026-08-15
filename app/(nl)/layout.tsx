import type { Metadata } from "next";
import { RootHtml } from "@/components/site/RootHtml";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { BASE_METADATA } from "@/lib/seo";

export const metadata: Metadata = BASE_METADATA.nl;

export default function NlLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootHtml lang="nl">
      <div style={{ color: "var(--voids-ink-soft)", background: "var(--voids-beige)", minHeight: "100vh" }}>
        <Header lang="nl" />
        <main>{children}</main>
        <Footer lang="nl" />
      </div>
    </RootHtml>
  );
}
