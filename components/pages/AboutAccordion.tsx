"use client";

import { useState } from "react";
import type { ReactNode } from "react";

export function AboutAccordion({ items }: { items: { title: string; icon: ReactNode; content: ReactNode }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div style={{ borderTop: "1px solid rgba(255,255,255,.18)" }}>
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.title} style={{ borderBottom: "1px solid rgba(255,255,255,.18)" }}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                padding: "22px 0",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                color: "#fff",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: open ? "#fff" : "rgba(255,255,255,.12)",
                    color: open ? "var(--voids-purple)" : "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: "none",
                    transition: "background 0.15s ease, color 0.15s ease",
                  }}
                >
                  {item.icon}
                </span>
                <span className="anton" style={{ fontSize: 22, color: "#fff" }}>{item.title}</span>
              </span>
              <ChevronIcon open={open} />
            </button>
            {open && <div style={{ paddingBottom: 28, paddingLeft: 54, maxWidth: 760 }}>{item.content}</div>}
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
      <path d="M5 7.5l5 5 5-5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
