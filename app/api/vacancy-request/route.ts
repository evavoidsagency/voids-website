import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_ADDRESS = "contact@voids.agency";
const FROM_ADDRESS = "VOIDS website <noreply@voids.agency>";

export async function POST(request: Request) {
  const { name, company, email, role, details } = await request.json();

  if (!name || !company || !email || !details) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("Vacancy request form: RESEND_API_KEY env var is not set.");
    return NextResponse.json({ error: "Mail is not configured" }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      replyTo: email,
      subject: `Nieuwe vacature-aanvraag van ${company}`,
      text: `Naam: ${name}\nBedrijf: ${company}\nE-mail: ${email}\nRol: ${role || "-"}\n\nDetails:\n${details}`,
      html: `<p><strong>Naam:</strong> ${escapeHtml(name)}</p><p><strong>Bedrijf:</strong> ${escapeHtml(company)}</p><p><strong>E-mail:</strong> ${escapeHtml(email)}</p><p><strong>Rol:</strong> ${escapeHtml(role || "-")}</p><p><strong>Details:</strong></p><p>${escapeHtml(details).replace(/\n/g, "<br>")}</p>`,
    });
    if (error) {
      console.error("Vacancy request form send failed:", error);
      return NextResponse.json({ error: "Failed to send" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Vacancy request form send failed:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
