import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const TO_ADDRESS = "contact@voids.agency";

export async function POST(request: Request) {
  const { name, company, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    console.error("Contact form: GMAIL_USER / GMAIL_APP_PASSWORD env vars are not set.");
    return NextResponse.json({ error: "Mail is not configured" }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailAppPassword },
  });

  try {
    await transporter.sendMail({
      from: `"VOIDS website" <${gmailUser}>`,
      to: TO_ADDRESS,
      replyTo: email,
      subject: `Nieuw contactformulier bericht van ${name}${company ? ` (${company})` : ""}`,
      text: `Naam: ${name}\nBedrijf: ${company || "-"}\nE-mail: ${email}\n\nBericht:\n${message}`,
      html: `<p><strong>Naam:</strong> ${escapeHtml(name)}</p><p><strong>Bedrijf:</strong> ${escapeHtml(company || "-")}</p><p><strong>E-mail:</strong> ${escapeHtml(email)}</p><p><strong>Bericht:</strong></p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
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
