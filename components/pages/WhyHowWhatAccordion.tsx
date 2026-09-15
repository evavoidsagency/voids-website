"use client";

import { useState } from "react";

export function WhyHowWhatAccordion({ items }: { items: { label: string; text: string }[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div style={{ borderTop: "1px solid var(--border-hairline)" }}>
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.label} style={{ borderBottom: "1px solid var(--border-hairline)" }}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : i)}
              aria-expanded={open}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                padding: "22px 4px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <span className="anton" style={{ fontSize: 20, color: "var(--voids-ink)" }}>{item.label}</span>
              <ChevronIcon open={open} />
            </button>
            {open && (
              <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--voids-ink-muted)", margin: "0 4px 24px", maxWidth: 720 }}>
                {item.text}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      style={{ flex: "none", transform: open ? "rotate(180deg)" : "none", transition: "transform 160ms ease" }}
    >
      <path d="M5 7.5l5 5 5-5" stroke="var(--voids-ink)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
