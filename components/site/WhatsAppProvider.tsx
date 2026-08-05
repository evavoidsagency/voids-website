"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
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
      <WhatsAppModal open={isOpen} onClose={value.closeModal} />
    </WhatsAppContext.Provider>
  );
}

function WhatsAppModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();
  const lang: "nl" | "en" = pathname?.startsWith("/en") ? "en" : "nl";

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
          <div
            onClick={onClose}
            style={{ textAlign: "center", marginTop: 16, fontSize: 13, color: "var(--voids-ink-muted)", cursor: "pointer" }}
          >
            {t.whatsMaybeLater[lang]}
          </div>
        </div>
      </div>
    </div>
  );
}
