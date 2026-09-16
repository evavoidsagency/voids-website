"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { CHANNELS, t } from "@/lib/i18n/common";

type Ctx = { openModal: () => void; closeModal: () => void };

const WhatsAppContext = createContext<Ctx | null>(null);

export function useWhatsApp() {
  const ctx = useContext(WhatsAppContext);
  if (!ctx) throw new Error("useWhatsApp must be used inside WhatsAppProvider");
  return ctx;
}

export function WhatsAppProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const value = useMemo<Ctx>(
    () => ({ openModal: () => setIsOpen(true), closeModal: () => setIsOpen(false) }),
    []
  );
  return (
    <WhatsAppContext.Provider value={value}>
      {children}
      {!isOpen && <FloatingWhatsAppButton onClick={value.openModal} />}
      <WhatsAppModal open={isOpen} onClose={value.closeModal} />
    </WhatsAppContext.Provider>
  );
}

/** Persistent floating entry point to the WhatsApp community, always one tap
    away — example of the "always-visible pill CTA" pattern from vacaturevia. */
function FloatingWhatsAppButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="WhatsApp"
      className="floating-whatsapp-btn"
      style={{ position: "fixed", bottom: 22, right: 22, zIndex: 45, border: "none", cursor: "pointer" }}
    >
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#fff"
          d="M12 2.5c-5.25 0-9.5 4.25-9.5 9.5 0 1.68.44 3.26 1.21 4.63L2.5 21.5l5.02-1.32a9.46 9.46 0 0 0 4.48 1.14c5.25 0 9.5-4.25 9.5-9.5s-4.25-9.32-9.5-9.32Zm5.56 13.4c-.23.65-1.37 1.26-1.9 1.33-.48.07-1.09.1-1.76-.11-.4-.13-.93-.3-1.6-.58-2.82-1.22-4.66-4.07-4.8-4.26-.14-.19-1.15-1.53-1.15-2.92 0-1.38.73-2.06.99-2.34.26-.28.57-.35.76-.35l.54.01c.17 0 .4-.03.63.48.23.54.79 1.87.86 2 .07.15.12.31.02.5-.09.19-.14.31-.27.47-.13.16-.28.36-.4.48-.13.13-.27.28-.12.54.15.28.67 1.11 1.43 1.8.99.87 1.81 1.15 2.08 1.28.28.13.44.11.6-.07.16-.19.68-.8.87-1.08.19-.28.37-.22.62-.13.25.09 1.57.74 1.85.87.28.13.46.2.53.31.07.11.07.64-.15 1.3Z"
        />
      </svg>
    </button>
  );
}

function WhatsAppModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();
  const lang: "nl" | "en" = pathname?.startsWith("/en") ? "en" : "nl";

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 60,
        background: "rgba(20,6,60,.55)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={t.whatsModalTitle[lang]}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: "var(--radius-lg)",
          maxWidth: 460,
          width: "100%",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          boxShadow: "var(--shadow-md)",
        }}
      >
        <div style={{ background: "var(--voids-purple)", color: "#fff", padding: "26px 28px", flex: "none" }}>
          <div className="anton" style={{ fontSize: 26, color: "#fff" }}>
            {t.whatsModalTitle[lang]}
          </div>
          <p style={{ fontSize: 14, color: "var(--voids-purple-100)", margin: "8px 0 0" }}>
            {t.whatsModalSub[lang]}
          </p>
        </div>
        <div style={{ padding: "18px 22px 22px", overflowY: "auto", minHeight: 0 }}>
          {CHANNELS.map((ch) => (
            <a
              key={ch.abbr}
              href={ch.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "13px 4px",
                borderBottom: "1px solid var(--voids-line-soft)",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 8,
                  background: "var(--voids-purple-100)",
                  color: "var(--voids-purple)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: 13,
                  flex: "none",
                }}
              >
                {ch.abbr}
              </span>
              <span style={{ flex: 1 }}>
                <span style={{ display: "block", fontSize: 14, fontWeight: 600, color: "var(--voids-ink)" }}>
                  {lang === "en" ? ch.nameEn : ch.nameNl}
                </span>
                <span style={{ display: "block", fontSize: 12, color: "var(--voids-ink-muted)" }}>
                  {lang === "en" ? ch.membersEn : ch.membersNl}
                </span>
              </span>
              <span style={{ color: "var(--voids-blue)", fontWeight: 600, fontSize: 14 }}>{t.whatsJoin[lang]}</span>
            </a>
          ))}
          <button
            type="button"
            onClick={onClose}
            style={{
              display: "block",
              width: "100%",
              textAlign: "center",
              marginTop: 16,
              fontSize: 13,
              color: "var(--voids-ink-muted)",
              cursor: "pointer",
              background: "none",
              border: "none",
              font: "inherit",
            }}
          >
            {t.whatsMaybeLater[lang]}
          </button>
        </div>
      </div>
    </div>
  );
}
