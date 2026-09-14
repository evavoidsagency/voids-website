"use client";

import { useState } from "react";
import type { ReactNode } from "react";

function CheckIcon({ color, filled }: { color: string; filled: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ flex: "none", transition: "all .15s ease" }}>
      <circle cx="8" cy="8" r="7" fill={filled ? color : "#fff"} stroke={color} strokeWidth="1.4" />
      <path d="M4.8 8.2l2.1 2.1 4.1-4.5" stroke={filled ? "#fff" : color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Column({
  side,
  leader,
  icon,
  color,
  bg,
  badgeClass,
  heading,
  duration,
  bullets,
  checked,
  onToggle,
  bestFitLabel,
}: {
  side: "left" | "right";
  leader: "left" | "right" | null;
  icon: ReactNode;
  color: string;
  bg: string;
  badgeClass: string;
  heading: string;
  duration: string;
  bullets: string[];
  checked: boolean[];
  onToggle: (i: number) => void;
  bestFitLabel: string;
}) {
  const isLeader = leader === side;
  return (
    <div
      style={{
        background: bg,
        borderRadius: "var(--radius-md)",
        padding: 18,
        display: "flex",
        flexDirection: "column",
        boxShadow: isLeader ? `0 0 0 2px ${color}` : "0 0 0 2px transparent",
        opacity: leader && !isLeader ? 0.75 : 1,
        transition: "box-shadow .2s ease, opacity .2s ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginBottom: 6, flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, fontWeight: 700, color }}>
          {icon} {heading}
        </div>
        <span className={`badge ${badgeClass}`} style={{ whiteSpace: "nowrap", background: "#fff" }}>{duration}</span>
      </div>
      <div style={{ minHeight: 20, marginBottom: 6 }}>
        {isLeader && (
          <span
            className="anton"
            style={{ display: "inline-block", fontSize: 11, letterSpacing: ".02em", color: "#fff", background: color, borderRadius: 999, padding: "3px 10px" }}
          >
            {bestFitLabel}
          </span>
        )}
      </div>
      {bullets.map((b, i) => (
        <button
          key={b}
          type="button"
          onClick={() => onToggle(i)}
          aria-pressed={checked[i]}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 8,
            fontSize: 13,
            lineHeight: 1.5,
            marginBottom: 8,
            background: "none",
            border: "none",
            padding: 0,
            textAlign: "left",
            cursor: "pointer",
            font: "inherit",
            color: checked[i] ? "var(--voids-ink)" : "var(--voids-ink-soft)",
            fontWeight: checked[i] ? 600 : 400,
          }}
        >
          <span style={{ marginTop: 1 }}>
            <CheckIcon color={color} filled={checked[i]} />
          </span>
          <span>{b}</span>
        </button>
      ))}
    </div>
  );
}

export function ComparisonCard({
  title,
  sub,
  checkPrompt,
  bestFitLabel,
  leftIcon,
  leftColor,
  leftBadgeClass,
  leftHeading,
  leftDuration,
  leftBullets,
  rightIcon,
  rightColor,
  rightBadgeClass,
  rightHeading,
  rightDuration,
  rightBullets,
}: {
  title: string;
  sub: string;
  checkPrompt: string;
  bestFitLabel: string;
  leftIcon: ReactNode;
  leftColor: string;
  leftBadgeClass: string;
  leftHeading: string;
  leftDuration: string;
  leftBullets: string[];
  rightIcon: ReactNode;
  rightColor: string;
  rightBadgeClass: string;
  rightHeading: string;
  rightDuration: string;
  rightBullets: string[];
}) {
  const [leftChecked, setLeftChecked] = useState<boolean[]>(() => leftBullets.map(() => false));
  const [rightChecked, setRightChecked] = useState<boolean[]>(() => rightBullets.map(() => false));
  const leftScore = leftChecked.filter(Boolean).length;
  const rightScore = rightChecked.filter(Boolean).length;
  const leader = leftScore === rightScore ? null : leftScore > rightScore ? "left" : "right";

  const leftBg = leftColor.includes("blue") ? "var(--voids-blue-100)" : "var(--voids-purple-100)";
  const rightBg = rightColor.includes("blue") ? "var(--voids-blue-100)" : "var(--voids-purple-100)";

  const toggleLeft = (i: number) => setLeftChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  const toggleRight = (i: number) => setRightChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  return (
    <div className="card" style={{ padding: 28 }}>
      <h3 className="anton" style={{ fontSize: 24, margin: "0 0 6px" }}>{title}</h3>
      <p style={{ fontSize: 13, color: "var(--voids-ink-muted)", margin: "0 0 6px" }}>{sub}</p>
      <p style={{ fontSize: 12, color: "var(--voids-ink-muted)", fontStyle: "italic", margin: "0 0 16px" }}>{checkPrompt}</p>
      <div className="g-collapse" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, alignItems: "stretch" }}>
        <Column
          side="left"
          leader={leader}
          icon={leftIcon}
          color={leftColor}
          bg={leftBg}
          badgeClass={leftBadgeClass}
          heading={leftHeading}
          duration={leftDuration}
          bullets={leftBullets}
          checked={leftChecked}
          onToggle={toggleLeft}
          bestFitLabel={bestFitLabel}
        />
        <Column
          side="right"
          leader={leader}
          icon={rightIcon}
          color={rightColor}
          bg={rightBg}
          badgeClass={rightBadgeClass}
          heading={rightHeading}
          duration={rightDuration}
          bullets={rightBullets}
          checked={rightChecked}
          onToggle={toggleRight}
          bestFitLabel={bestFitLabel}
        />
      </div>
    </div>
  );
}
