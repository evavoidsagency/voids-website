import type { ReactNode } from "react";

type Variant = "purple" | "blue" | "neutral" | "on-dark";

export function Badge({
  variant = "purple",
  children,
  className,
}: {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={["badge", `badge--${variant}`, className || ""].join(" ")}>
      {children}
    </span>
  );
}
