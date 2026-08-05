import { Button } from "@/components/ui/Button";
import { localePath, type Lang } from "@/lib/i18n/common";

const COPY: Record<Lang, { back: string }> = {
  nl: { back: "Terug naar home" },
  en: { back: "Back to home" },
};

/**
 * Placeholder for a route that's on the site map (per the platform
 * briefing's phasing) but not built yet — jobboard is Phase 3, career
 * pager Phase 2, portal Phase 4, self-service pricing/payment Phase 5.
 */
export function StubPage({
  lang,
  title,
  body,
}: {
  lang: Lang;
  title: string;
  body: string;
}) {
  const c = COPY[lang];
  return (
    <section className="wrap" style={{ padding: "96px 32px", textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
      <h1 className="anton" style={{ fontSize: 36, margin: "0 0 14px" }}>{title}</h1>
      <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--voids-ink-muted)", margin: "0 0 28px" }}>{body}</p>
      <Button variant="primary" size="md" href={localePath(lang, "/")}>
        {c.back}
      </Button>
    </section>
  );
}
