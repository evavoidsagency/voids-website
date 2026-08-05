"use client";

import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { useWhatsApp } from "@/components/site/WhatsAppProvider";

/** Any Button variant/size that opens the WhatsApp community modal on click. */
export function WhatsAppButton({
  variant = "primary",
  size = "md",
  fullWidth,
  onDark,
  children,
}: {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  onDark?: boolean;
  children: ReactNode;
}) {
  const { openModal } = useWhatsApp();
  return (
    <Button variant={variant} size={size} fullWidth={fullWidth} onDark={onDark} onClick={openModal}>
      {children}
    </Button>
  );
}
