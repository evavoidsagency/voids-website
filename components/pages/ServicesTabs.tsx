"use client";

import { useState } from "react";
import Link from "next/link";
import { Photo } from "@/components/ui/Photo";

export type ServiceTab = {
  verb: string;
  title: string;
  text: string;
  chips: string[];
  cta: string;
  href: string;
  photo: string;
  photoAlt: string;
};

export function ServicesTabs({ services }: { services: ServiceTab[] }) {
  const [active, setActive] = useState(0);
  const s = services[active];
  const color = active === 2 ? "var(--voids-blue)" : "var(--voids-purple)";
  const badgeClass = active === 2 ? "badge--blue" : "badge--purple";

  return (
    <div>
      <div role="tablist" style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
        {services.map((tab, i) => {
          const isActive = i === active;
          const tabColor = i === 2 ? "var(--voids-blue)" : "var(--voids-purple)";
          return (
            <button
              key={tab.verb}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(i)}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 15,
                letterSpacing: "var(--tracking-display)",
                textTransform: "uppercase",
                padding: "12px 20px",
                borderRadius: "var(--radius-md)",
                border: `1px solid ${isActive ? tabColor : "var(--border-hairline)"}`,
                background: isActive ? tabColor : "#fff",
                color: isActive ? "#fff" : "var(--voids-ink-muted)",
                cursor: "pointer",
                transition: "background 0.15s ease, color 0.15s ease, border-color 0.15s ease",
              }}
            >
              {tab.verb}
            </button>
          );
        })}
      </div>

      <div className="g-collapse" style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 40, alignItems: "center" }}>
        <Photo src={s.photo} alt={s.photoAlt} ratio="4 / 3" />
        <div key={active} className="services-tab-panel">
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".02em", textTransform: "uppercase", color: "var(--voids-ink-muted)", marginBottom: 10 }}>
            {s.title}
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--voids-ink-muted)", margin: "0 0 20px" }}>{s.text}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 22 }}>
            {s.chips.map((chip) => (
              <span key={chip} className={`badge ${badgeClass}`}>{chip}</span>
            ))}
          </div>
          <Link href={s.href} style={{ fontSize: 14, fontWeight: 600, color }}>
            {s.cta}
          </Link>
        </div>
      </div>
    </div>
  );
}
