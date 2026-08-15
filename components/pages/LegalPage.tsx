type Block = { p?: string; ul?: string[] };
export type LegalSection = { heading?: string; blocks: Block[] };

export function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
  footnote,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  sections: LegalSection[];
  footnote?: string;
}) {
  return (
    <section className="wrap narrow" style={{ padding: "64px 32px 96px" }}>
      <span className="voids-eyebrow" style={{ color: "var(--voids-purple)" }}>{eyebrow}</span>
      <h1 className="anton hero-h1" style={{ fontSize: 40, margin: "12px 0 24px" }}>{title}</h1>
      {intro && (
        <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--voids-ink-muted)", marginBottom: 32, fontStyle: "italic" }}>
          {intro}
        </p>
      )}
      {sections.map((s, i) => (
        <div key={i} style={{ marginBottom: 30 }}>
          {s.heading && (
            <h2 className="anton section-h2" style={{ fontSize: 19, margin: "0 0 10px", textTransform: "none" }}>
              {s.heading}
            </h2>
          )}
          {s.blocks.map((b, j) => (
            <div key={j}>
              {b.p && (
                <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "var(--voids-ink-soft)", margin: "0 0 12px" }}>
                  {b.p}
                </p>
              )}
              {b.ul && (
                <ul style={{ margin: "0 0 12px", paddingLeft: 20 }}>
                  {b.ul.map((li, k) => (
                    <li key={k} style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--voids-ink-soft)", marginBottom: 6 }}>
                      {li}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ))}
      {footnote && <p style={{ fontSize: 12.5, color: "var(--voids-ink-muted)", marginTop: 40 }}>{footnote}</p>}
    </section>
  );
}
