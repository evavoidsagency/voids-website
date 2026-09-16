import type { CSSProperties } from "react";

/** Small hand-drawn-feel accent marks — decoration only, never meaningful content. */

export function DoodleSquiggle({ color = "currentColor", style }: { color?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 140 70" fill="none" style={style} aria-hidden="true">
      <path
        d="M2 12c20 0 20 40 40 40s16-46 40-30 20 34 40 18"
        stroke={color}
        strokeWidth="2"
        strokeDasharray="1 7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DoodleSparkle({ color = "currentColor", style }: { color?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" style={style} aria-hidden="true">
      <path d="M20 0v14M20 26v14M0 20h14M26 20h14M6 6l10 10M24 24l10 10M34 6 24 16M16 24 6 34" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function DoodleRing({ color = "currentColor", style }: { color?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" style={style} aria-hidden="true">
      <circle cx="20" cy="20" r="17" stroke={color} strokeWidth="2" />
    </svg>
  );
}
