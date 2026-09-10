"use client";

import { useEffect, useRef, useState } from "react";
import { CountUp } from "@/components/ui/CountUp";

export function MatchBars({ criteria }: { criteria: { label: string; pct: number }[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ display: "flex", flexDirection: "column", gap: 11 }}>
      {criteria.map((f) => (
        <div key={f.label}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12.5, marginBottom: 4 }}>
            <span>{f.label}</span>
            <span style={{ color: "var(--voids-blue)", fontWeight: 600 }}><CountUp value={`${f.pct}%`} /></span>
          </div>
          <div style={{ height: 7, borderRadius: 999, background: "var(--voids-line-soft)" }}>
            <div
              style={{
                width: visible ? `${f.pct}%` : "0%",
                height: "100%",
                background: "var(--voids-blue)",
                borderRadius: 999,
                transition: "width 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
