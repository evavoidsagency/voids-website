"use client";

import { useState } from "react";
import type { ReactNode } from "react";

export function PricingToggle({
  leftLabel,
  leftText,
  leftIcon,
  rightLabel,
  rightText,
  rightIcon,
}: {
  leftLabel: string;
  leftText: string;
  leftIcon?: ReactNode;
  rightLabel: string;
  rightText: string;
  rightIcon?: ReactNode;
}) {
  const [active, setActive] = useState<"left" | "right">("left");
  const isLeft = active === "left";

  return (
    <div className="card" style={{ padding: 10 }}>
      <div role="tablist" style={{ display: "flex", gap: 8 }}>
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
                flex: 1,
                fontFamily: "var(--font-display)",
                fontSize: 15,
                letterSpacing: "var(--tracking-display)",
                textTransform: "uppercase",
                padding: "16px 20px",
                borderRadius: "var(--radius-md)",
                border: "none",
                background: isActive ? "var(--voids-purple)" : "transparent",
                color: isActive ? "#fff" : "var(--voids-ink-muted)",
                cursor: "pointer",
                transition: "background 0.15s ease, color 0.15s ease",
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div key={active} className="services-tab-panel g-collapse" style={{ display: "grid", gridTemplateColumns: ".7fr 1.3fr", gap: 28, alignItems: "center", padding: "30px 26px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 52, height: 52, borderRadius: "50%", background: "var(--voids-purple-100)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
            {isLeft ? leftIcon : rightIcon}
          </div>
          <span className="anton" style={{ fontSize: 20, color: "var(--voids-purple)" }}>{isLeft ? leftLabel : rightLabel}</span>
        </div>
        <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--voids-ink-muted)", margin: 0 }}>
          {isLeft ? leftText : rightText}
        </p>
      </div>
    </div>
  );
}
