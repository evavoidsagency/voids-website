"use client";

import { useEffect, useRef, useState } from "react";

/** Animates a stat's numeric portion up from 0 when it scrolls into view (e.g. "4.000+", "100%", "±30 dagen"). Non-numeric strings render as-is. */
export function CountUp({ value, duration = 1200 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    setDisplay(value);
    started.current = false;

    const match = value.match(/^(\D*)(\d{1,3}(?:[.,]\d{3})*|\d+)(.*)$/);
    if (!match) return;
    const [, prefix, numStr, suffix] = match;
    const sepMatch = numStr.match(/^\d{1,3}([.,])\d{3}$/);
    const sep = sepMatch ? sepMatch[1] : null;
    const target = parseInt(numStr.replace(/[.,]/g, ""), 10);
    if (isNaN(target)) return;

    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(target * eased);
            const formatted = sep ? current.toString().replace(/\B(?=(\d{3})+(?!\d))/g, sep) : String(current);
            setDisplay(`${prefix}${formatted}${suffix}`);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{display}</span>;
}
