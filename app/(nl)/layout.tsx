import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export default function NlLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ color: "var(--voids-ink-soft)", background: "var(--voids-beige)", minHeight: "100vh" }}>
      <Header lang="nl" />
      <main>{children}</main>
      <Footer lang="nl" />
    </div>
  );
}
