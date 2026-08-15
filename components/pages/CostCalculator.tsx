"use client";

import { useState } from "react";
import type { Lang } from "@/lib/i18n/common";

const RATES = { stagiair: 4, werkstudent: 16, starter: 24 };
const WEEKS_PER_MONTH = 4.33;

const COPY: Record<
  Lang,
  {
    hoursLabel: string;
    hoursUnit: string;
    costLabel: string;
    cards: { key: keyof typeof RATES; label: string; note: string }[];
    footnote: string;
  }
> = {
  nl: {
    hoursLabel: "Uren / week",
    hoursUnit: "u",
    costLabel: "kosten / maand",
    cards: [
      { key: "stagiair", label: "Stagiair", note: "Stagevergoeding · leert mee" },
      { key: "werkstudent", label: "Werkstudent", note: "Draait mee, flexibel" },
      { key: "starter", label: "Starter (pro-rata)", note: "Volledig zelfstandig" },
    ],
    footnote:
      "Indicatie op basis van gangbaar bruto uurtarief incl. werkgeverslasten (stagiair vanaf €800 bruto/maand fulltime naar rato, gelijk aan de Rijksoverheidsnorm, meer betalen juichen we toe; werkstudent ± €16, starter ± €24 p/u). Een starter werkt normaal fulltime; hier pro-rata getoond ter vergelijking. Vraag ons om een exacte berekening voor jouw situatie.",
  },
  en: {
    hoursLabel: "Hours / week",
    hoursUnit: "hrs",
    costLabel: "cost / month",
    cards: [
      { key: "stagiair", label: "Intern", note: "Allowance · learning on the job" },
      { key: "werkstudent", label: "Working student", note: "Hands-on, flexible" },
      { key: "starter", label: "Starter (pro-rata)", note: "Fully independent" },
    ],
    footnote:
      "Estimate based on typical gross hourly rates incl. employer costs (intern from €800 gross/month full-time pro-rata, matching the Dutch government standard, and we welcome paying more; working student ± €16, starter ± €24 per hour). A starter normally works full-time; shown pro-rata here for comparison. Ask us for an exact calculation for your situation.",
  },
};

function costFor(key: keyof typeof RATES, hours: number) {
  let cost = RATES[key] * hours * WEEKS_PER_MONTH;
  if (key === "stagiair") cost = Math.max(cost, 800 * (hours / 40));
  return Math.round(cost).toLocaleString("nl-NL");
}

export function CostCalculator({ lang }: { lang: Lang }) {
  const [hours, setHours] = useState(20);
  const c = COPY[lang];

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24, maxWidth: 460 }}>
        <span style={{ fontSize: 13, color: "var(--voids-ink-muted)", whiteSpace: "nowrap" }}>{c.hoursLabel}</span>
        <input
          type="range"
          min={8}
          max={40}
          step={4}
          value={hours}
          onChange={(e) => setHours(parseInt(e.target.value, 10))}
          aria-label={c.hoursLabel}
          style={{ flex: 1, accentColor: "var(--voids-purple)" }}
        />
        <span className="anton" style={{ fontSize: 24, color: "var(--voids-purple)", width: 56, textAlign: "right" }}>
          {hours}
          {c.hoursUnit}
        </span>
      </div>
      <div className="g-collapse" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 16 }}>
        {c.cards.map((card) => (
          <div key={card.key} style={{ background: "var(--voids-beige)", border: "1px solid var(--border-hairline)", borderRadius: "var(--radius-md)", padding: 22, textAlign: "center" }}>
            <div style={{ fontSize: 14, fontWeight: 600 }}>{card.label}</div>
            <div className="anton" style={{ fontSize: 40, color: "var(--voids-purple)", margin: "10px 0 4px" }}>
              € {costFor(card.key, hours)}
            </div>
            <div style={{ fontSize: 11, letterSpacing: ".04em", textTransform: "uppercase", color: "var(--voids-purple)", fontWeight: 600, marginBottom: 2 }}>
              {c.costLabel}
            </div>
            <div style={{ fontSize: 12, color: "var(--voids-ink-muted)" }}>{card.note}</div>
          </div>
        ))}
      </div>
      <p style={{ fontSize: 11.5, color: "var(--voids-ink-muted)", margin: "14px 0 0" }}>{c.footnote}</p>
    </div>
  );
}
