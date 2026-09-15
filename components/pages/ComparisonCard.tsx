"use client";

import { useState } from "react";
import type { ReactNode } from "react";

export function ComparisonCard({
  title,
  sub,
  leftIcon,
  leftColor,
  leftBadgeClass,
  leftHeading,
  leftDuration,
  leftBullets,
  leftCta,
  rightIcon,
  rightColor,
  rightBadgeClass,
  rightHeading,
  rightDuration,
  rightBullets,
  rightCta,
}: {
  title?: string;
  sub?: string;
  leftIcon: ReactNode;
  leftColor: string;
  leftBadgeClass: string;
  leftHeading: string;
  leftDuration: string;
  leftBullets: string[];
  leftCta?: ReactNode;
  rightIcon: ReactNode;
  rightColor: string;
  rightBadgeClass: string;
  rightHeading: string;
  rightDuration: string;
  rightBullets: string[];
  rightCta?: ReactNode;
}) {
  const [active, setActive] = useState<"left" | "right">("left");
  const isLeft = active === "left";
  const color = isLeft ? leftColor : rightColor;
  const bg = color.includes("blue") ? "var(--voids-blue-100)" : "var(--voids-purple-100)";
  const icon = isLeft ? leftIcon : rightIcon;
  const heading = isLeft ? leftHeading : rightHeading;
  const badgeClass = isLeft ? leftBadgeClass : rightBadgeClass;
  const duration = isLeft ? leftDuration : rightDuration;
  const bullets = isLeft ? leftBullets : rightBullets;
  const cta = isLeft ? leftCta : rightCta;

  return (
    <div className="card" style={{ padding: 28, height: "100%", display: "flex", flexDirection: "column" }}>
      {title && <h3 className="anton" style={{ fontSize: 24, margin: "0 0 6px" }}>{title}</h3>}
      {sub && <p style={{ fontSize: 13, lineHeight: 1.55, color: "var(--voids-ink-muted)", margin: "0 0 18px", minHeight: 105 }}>{sub}</p>}

      <div role="tablist" style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
        {(
          [
            { side: "left" as const, icon: leftIcon, heading: leftHeading, c: leftColor },
            { side: "right" as const, icon: rightIcon, heading: rightHeading, c: rightColor },
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
                display: "flex",
                alignItems: "center",
                gap: 7,
                fontSize: 13,
                fontWeight: 700,
                padding: "9px 16px",
                borderRadius: "var(--radius-md)",
                border: `1px solid ${isActive ? tab.c : "var(--border-hairline)"}`,
                background: isActive ? tab.c : "#fff",
                color: isActive ? "#fff" : "var(--voids-ink-muted)",
                cursor: "pointer",
                transition: "background 0.15s ease, color 0.15s ease, border-color 0.15s ease",
              }}
            >
              {tab.icon} {tab.heading}
            </button>
          );
        })}
      </div>

      <div key={active} className="services-tab-panel" style={{ background: bg, borderRadius: "var(--radius-md)", padding: 22, flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
              {icon}
            </div>
            <span className="anton" style={{ fontSize: 15, color }}>{heading}</span>
          </div>
          <span className={`badge ${badgeClass}`} style={{ whiteSpace: "nowrap", background: "#fff" }}>{duration}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {bullets.map((b) => (
            <div key={b} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13.5, color: "var(--voids-ink-soft)", lineHeight: 1.5, background: "#fff", borderRadius: "var(--radius-sm)", padding: "11px 14px" }}>
              <CheckIcon color={color} />
              <span>{b}</span>
            </div>
          ))}
        </div>
        {cta && <div style={{ marginTop: 16 }}>{cta}</div>}
      </div>
    </div>
  );
}

function CheckIcon({ color }: { color: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flex: "none", marginTop: 2 }}>
      <circle cx="7" cy="7" r="6.25" stroke={color} strokeWidth="1.4" />
      <path d="M4.3 7.1l1.9 1.9 3.5-3.9" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
