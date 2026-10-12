import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_ADDRESS = "contact@voids.agency";
const FROM_ADDRESS = "VOIDS website <noreply@voids.agency>";

export async function POST(request: Request) {
  const { name, email, study, note, vacancy, company } = await request.json();

  if (!name || !email || !vacancy) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("Application form: RESEND_API_KEY env var is not set.");
    return NextResponse.json({ error: "Mail is not configured" }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      replyTo: email,
      subject: `Sollicitatie: ${vacancy}${company ? ` bij ${company}` : ""}`,
      text: `Vacature: ${vacancy}${company ? ` (${company})` : ""}\nNaam: ${name}\nE-mail: ${email}\nStudie en jaar: ${study || "-"}\n\nToelichting:\n${note || "-"}`,
      html: `<p><strong>Vacature:</strong> ${escapeHtml(vacancy)}${company ? ` (${escapeHtml(company)})` : ""}</p><p><strong>Naam:</strong> ${escapeHtml(name)}</p><p><strong>E-mail:</strong> ${escapeHtml(email)}</p><p><strong>Studie en jaar:</strong> ${escapeHtml(study || "-")}</p><p><strong>Toelichting:</strong></p><p>${escapeHtml(note || "-").replace(/\n/g, "<br>")}</p>`,
    });
    if (error) {
      console.error("Application form send failed:", error);
      return NextResponse.json({ error: "Failed to send" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Application form send failed:", err);
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
