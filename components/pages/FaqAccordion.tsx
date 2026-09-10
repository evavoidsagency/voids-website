"use client";

import { useState } from "react";

function FaqItem({
  item,
  isOpen,
  onToggle,
}: {
  item: { q: string; a: string; ul?: string[] };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="card" style={{ padding: 0, overflow: "hidden", marginBottom: 10 }}>
      <button
        type="button"
        onClick={onToggle}
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
}

export function FaqAccordion({ items }: { items: { q: string; a: string; ul?: string[] }[] }) {
  const [open, setOpen] = useState(0);
  const mid = Math.ceil(items.length / 2);
  const columns = [items.slice(0, mid), items.slice(mid)];

  return (
    <div className="faq-columns">
      {columns.map((col, ci) => (
        <div key={ci} style={{ display: "flex", flexDirection: "column" }}>
          {col.map((item, ii) => {
            const i = ci === 0 ? ii : mid + ii;
            const isOpen = open === i;
            return <FaqItem key={item.q} item={item} isOpen={isOpen} onToggle={() => setOpen(isOpen ? -1 : i)} />;
          })}
        </div>
      ))}
    </div>
  );
}
