import type { Lang } from "@/lib/i18n/common";

const MIN_WAGE = 14.99;
const ADVICE_LOW = 16.49;
const ADVICE_HIGH = 17.99;

const COPY: Record<
  Lang,
  {
    steps: { label: string; value: string; note: string; recommended?: boolean }[];
    footnote: string;
  }
> = {
  nl: {
    steps: [
      { label: "Wettelijk minimumloon (21+)", value: `€ ${MIN_WAGE.toFixed(2).replace(".", ",")}`, note: "Absolute ondergrens, per 1 juli 2026" },
      { label: "VOIDS-advies", value: `€ ${ADVICE_LOW.toFixed(2).replace(".", ",")} – ${ADVICE_HIGH.toFixed(2).replace(".", ",")}`, note: "+10 tot 20% boven het minimumloon", recommended: true },
      { label: "Hoger? Prima.", value: `€ ${Math.ceil(ADVICE_HIGH)}+`, note: "Afhankelijk van rol, ervaring & CAO" },
    ],
    footnote:
      "Cijfers o.b.v. het wettelijk brutominimumloon voor werknemers van 21 jaar en ouder, per 1 juli 2026 (bron: rijksoverheid.nl). Voor werkstudenten onder de 21 geldt een lager wettelijk minimumjeugdloon; reken vanaf dat bedrag met dezelfde marge. Geldt er een CAO voor de functie of sector? Die gaat vaak vóór het wettelijk minimum.",
  },
  en: {
    steps: [
      { label: "Statutory minimum wage (21+)", value: `€ ${MIN_WAGE.toFixed(2)}`, note: "Absolute floor, as of 1 July 2026" },
      { label: "VOIDS advice", value: `€ ${ADVICE_LOW.toFixed(2)} – ${ADVICE_HIGH.toFixed(2)}`, note: "+10 to 20% above minimum wage", recommended: true },
      { label: "Higher? Great.", value: `€ ${Math.ceil(ADVICE_HIGH)}+`, note: "Depends on role, experience & CAO" },
    ],
    footnote:
      "Figures based on the statutory gross minimum wage for employees aged 21 and older, as of 1 July 2026 (source: rijksoverheid.nl). Working students under 21 fall under a lower statutory youth minimum wage; apply the same margin from that amount. If a CAO applies to the role or sector, it usually takes precedence over the statutory minimum.",
  },
};

export function SalaryCompass({ lang }: { lang: Lang }) {
  const c = COPY[lang];

  return (
    <div>
      <div className="g-collapse" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 16, alignItems: "stretch" }}>
        {c.steps.map((s) => (
          <div
            key={s.label}
            style={{
              position: "relative",
              background: s.recommended ? "var(--voids-purple)" : "var(--voids-beige)",
              border: s.recommended ? "none" : "1px solid var(--border-hairline)",
              borderRadius: "var(--radius-md)",
              padding: 22,
              textAlign: "center",
              transform: s.recommended ? "scale(1.04)" : "none",
            }}
          >
            {s.recommended && (
              <span
                style={{
                  position: "absolute",
                  top: -11,
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: 10.5,
                  fontWeight: 700,
                  letterSpacing: ".03em",
                  textTransform: "uppercase",
                  color: "var(--voids-purple)",
                  background: "#fff",
                  borderRadius: 999,
                  padding: "4px 10px",
                  whiteSpace: "nowrap",
                }}
              >
                {lang === "en" ? "Recommended" : "Aanbevolen"}
              </span>
            )}
            <div style={{ fontSize: 13, fontWeight: 600, color: s.recommended ? "#fff" : "var(--voids-ink)" }}>{s.label}</div>
            <div
              className="anton"
              style={{ fontSize: s.recommended ? 30 : 26, color: s.recommended ? "#fff" : "var(--voids-purple)", margin: "10px 0 6px", whiteSpace: "nowrap" }}
            >
              {s.value}
            </div>
            <div style={{ fontSize: 12, color: s.recommended ? "var(--voids-purple-100)" : "var(--voids-ink-muted)" }}>{s.note}</div>
          </div>
        ))}
      </div>
      <p style={{ fontSize: 11.5, color: "var(--voids-ink-muted)", margin: "18px 0 0" }}>{c.footnote}</p>
    </div>
  );
}
