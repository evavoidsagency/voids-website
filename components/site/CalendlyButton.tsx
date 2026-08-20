"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

const CALENDLY_URL = "https://calendly.com/wieke-voids/introduction";

declare global {
  interface Window {
    Calendly?: { initPopupWidget: (opts: { url: string }) => void };
  }
}

export function CalendlyButton({
  label,
  variant = "outline",
  size = "md",
  onDark = false,
}: {
  label: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  onDark?: boolean;
}) {
  useEffect(() => {
    if (document.getElementById("calendly-widget-script")) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);
    const script = document.createElement("script");
    script.id = "calendly-widget-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      onDark={onDark}
      onClick={() => window.Calendly?.initPopupWidget({ url: CALENDLY_URL })}
    >
      {label}
    </Button>
  );
}
