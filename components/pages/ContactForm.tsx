"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import type { Lang } from "@/lib/i18n/common";

const COPY: Record<
  Lang,
  {
    name: string;
    company: string;
    email: string;
    message: string;
    submit: string;
    submitting: string;
    sentTitle: string;
    sentBody: string;
    errorBody: string;
  }
> = {
  nl: {
    name: "Naam",
    company: "Bedrijf",
    email: "E-mail",
    message: "Waar kunnen we mee helpen?",
    submit: "Verstuur bericht",
    submitting: "Versturen…",
    sentTitle: "BERICHT VERSTUURD.",
    sentBody: "Dankjewel. We komen binnenkort bij je terug.",
    errorBody: "Er ging iets mis bij het versturen. Probeer het nog eens, of mail ons direct op contact@voids.agency.",
  },
  en: {
    name: "Name",
    company: "Company",
    email: "Email",
    message: "What can we help you with?",
    submit: "Send message",
    submitting: "Sending…",
    sentTitle: "MESSAGE SENT.",
    sentBody: "Thank you. We’ll get back to you within two business days.",
    errorBody: "Something went wrong sending this. Please try again, or email us directly at contact@voids.agency.",
  },
};

type Status = "idle" | "submitting" | "sent" | "error";

export function ContactForm({ lang }: { lang: Lang }) {
  const [status, setStatus] = useState<Status>("idle");
  const c = COPY[lang];

  if (status === "sent") {
    return (
      <div className="card" role="status" aria-live="polite" style={{ padding: 26, textAlign: "center" }}>
        <div className="anton" style={{ fontSize: 24, marginBottom: 8 }}>{c.sentTitle}</div>
        <p style={{ fontSize: 14, color: "var(--voids-ink-muted)", margin: 0 }}>{c.sentBody}</p>
      </div>
    );
  }

  return (
    <form
      className="card"
      style={{ padding: 26 }}
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        setStatus("submitting");
        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: data.get("name"),
              company: data.get("company"),
              email: data.get("email"),
              message: data.get("message"),
            }),
          });
          if (!res.ok) throw new Error("Request failed");
          setStatus("sent");
        } catch {
          setStatus("error");
        }
      }}
    >
      <div className="g-collapse" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
        <input name="name" autoComplete="name" className="input" placeholder={c.name} aria-label={c.name} required />
        <input name="company" autoComplete="organization" className="input" placeholder={c.company} aria-label={c.company} />
      </div>
      <input name="email" autoComplete="email" className="input" type="email" placeholder={c.email} aria-label={c.email} required style={{ marginBottom: 12 }} />
      <textarea name="message" className="textarea" placeholder={c.message} aria-label={c.message} rows={4} required style={{ marginBottom: 14 }} />
      {status === "error" && (
        <p role="alert" aria-live="polite" style={{ fontSize: 13, color: "var(--voids-red, #c5192d)", margin: "0 0 12px" }}>{c.errorBody}</p>
      )}
      <Button variant="primary" size="md" fullWidth disabled={status === "submitting"}>
        {status === "submitting" ? c.submitting : c.submit}
      </Button>
    </form>
  );
}
