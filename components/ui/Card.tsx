import type { CSSProperties, ReactNode } from "react";

export function Card({
  accent,
  hoverable = false,
  padding = 24,
  style,
  className,
  children,
  onClick,
}: {
  accent?: "purple" | "blue";
  hoverable?: boolean;
  padding?: number | string;
  style?: CSSProperties;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  const cls = [
    "card",
    accent ? `card--accent-${accent}` : "",
    hoverable ? "card--hoverable" : "",
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={cls}
      style={{ padding, cursor: onClick ? "pointer" : undefined, ...style }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
