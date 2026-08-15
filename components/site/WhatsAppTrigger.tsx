"use client";

import type { CSSProperties, ReactNode } from "react";
import { useWhatsApp } from "@/components/site/WhatsAppProvider";

/** Bare clickable span that opens the WhatsApp modal — for inline text CTAs. */
export function WhatsAppTrigger({
  children,
  style,
  className,
}: {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}) {
  const { openModal } = useWhatsApp();
  return (
    <span
      role="button"
      tabIndex={0}
      onClick={openModal}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openModal();
        }
      }}
      className={className}
      style={{ cursor: "pointer", ...style }}
    >
      {children}
    </span>
  );
}
