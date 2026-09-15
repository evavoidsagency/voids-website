"use client";

import { useState } from "react";

export function PricingToggle({
  leftLabel,
  leftText,
  rightLabel,
  rightText,
}: {
  leftLabel: string;
  leftText: string;
  rightLabel: string;
  rightText: string;
}) {
  const [active, setActive] = useState<"left" | "right">("left");

  return (
    <div className="card" style={{ padding: 28, maxWidth: 640 }}>
      <div role="tablist" style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
        {(
          [
            { side: "left" as const, label: leftLabel },
            { side: "right" as const, label: rightLabel },
          ]
        ).map((tab) => {
          const isActive = active === tab.side;
          return (
            <button
              key={tab.side}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(tab.side)}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 14,
                letterSpacing: "var(--tracking-display)",
                textTransform: "uppercase",
                padding: "11px 18px",
                borderRadius: "var(--radius-md)",
                border: `1px solid ${isActive ? "var(--voids-purple)" : "var(--border-hairline)"}`,
                background: isActive ? "var(--voids-purple)" : "#fff",
                color: isActive ? "#fff" : "var(--voids-ink-muted)",
                cursor: "pointer",
                transition: "background 0.15s ease, color 0.15s ease, border-color 0.15s ease",
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <p key={active} className="services-tab-panel" style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--voids-ink-muted)", margin: 0 }}>
        {active === "left" ? leftText : rightText}
      </p>
    </div>
  );
}
