import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HtmlLangSync } from "@/components/site/HtmlLangSync";

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ color: "var(--voids-ink-soft)", background: "var(--voids-beige)", minHeight: "100vh" }}>
      <HtmlLangSync lang="en" />
      <Header lang="en" />
      <main>{children}</main>
      <Footer lang="en" />
    </div>
  );
}
