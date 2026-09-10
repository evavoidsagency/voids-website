"use client";

import { useState } from "react";

export function FaqAccordion({ items }: { items: { q: string; a: string; ul?: string[] }[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="faq-columns">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="card" style={{ padding: 0, overflow: "hidden", breakInside: "avoid", marginBottom: 10 }}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
                padding: "16px 20px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                fontSize: 15.5,
                fontWeight: 600,
                color: "var(--voids-ink)",
              }}
            >
              {item.q}
              <span
                aria-hidden="true"
                style={{
                  flex: "none",
                  fontSize: 18,
                  color: "var(--voids-blue)",
                  transform: isOpen ? "rotate(45deg)" : "none",
                  transition: "transform 150ms ease",
                }}
              >
                +
              </span>
            </button>
            {isOpen && (
              <div style={{ padding: "0 20px 18px" }}>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--voids-ink-muted)", margin: item.ul ? "0 0 10px" : 0 }}>
                  {item.a}
                </p>
                {item.ul && (
                  <ul style={{ margin: 0, paddingLeft: 18 }}>
                    {item.ul.map((li) => (
                      <li key={li} style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--voids-ink-muted)", marginBottom: 4 }}>
                        {li}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
