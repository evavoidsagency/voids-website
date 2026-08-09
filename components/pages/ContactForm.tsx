"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import type { Lang } from "@/lib/i18n/common";

const COPY: Record<
  Lang,
  { name: string; company: string; email: string; message: string; submit: string; sentTitle: string; sentBody: string }
> = {
  nl: {
    name: "Naam",
    company: "Bedrijf",
    email: "E-mail",
    message: "Waar kunnen we mee helpen?",
    submit: "Verstuur bericht",
    sentTitle: "BERICHT VERSTUURD.",
    sentBody: "Dank je wel. We reageren binnen twee werkdagen.",
  },
  en: {
    name: "Name",
    company: "Company",
    email: "Email",
    message: "What can we help you with?",
    submit: "Send message",
    sentTitle: "MESSAGE SENT.",
    sentBody: "Thank you. We’ll get back to you within two business days.",
  },
};

/**
 * Static demo form for Phase 1 — no backend wired yet. Swap the
 * onSubmit for a real handler (e.g. a Supabase `contact_requests`
 * insert or an email API route) in a later phase.
 */
export function ContactForm({ lang }: { lang: Lang }) {
  const [sent, setSent] = useState(false);
  const c = COPY[lang];

  if (sent) {
    return (
      <div className="card" style={{ padding: 26, textAlign: "center" }}>
        <div className="anton" style={{ fontSize: 24, marginBottom: 8 }}>{c.sentTitle}</div>
        <p style={{ fontSize: 14, color: "var(--voids-ink-muted)", margin: 0 }}>{c.sentBody}</p>
      </div>
    );
  }

  return (
    <form
      className="card"
      style={{ padding: 26 }}
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
        <input className="input" placeholder={c.name} required />
        <input className="input" placeholder={c.company} />
      </div>
      <input className="input" type="email" placeholder={c.email} required style={{ marginBottom: 12 }} />
      <textarea className="textarea" placeholder={c.message} rows={4} style={{ marginBottom: 14 }} />
      <Button variant="primary" size="md" fullWidth>
        {c.submit}
      </Button>
    </form>
  );
}
