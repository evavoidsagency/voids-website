import { Button } from "@/components/ui/Button";
import { localePath, type Lang } from "@/lib/i18n/common";

const COPY: Record<Lang, { back: string }> = {
  nl: { back: "Terug naar home" },
  en: { back: "Back to home" },
};

/**
 * Placeholder for a route that's on the site map (per the platform
 * briefing's phasing) but not built yet — career pager is Phase 2,
 * jobboard Phase 3, self-service pricing/payment Phase 4. Portal is
 * deferred with no scheduled phase (see briefing section 5) — its stub
 * stays unlinked and noindexed rather than removed, so it can be
 * reconnected without rebuilding the route.
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
