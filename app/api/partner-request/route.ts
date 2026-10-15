import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_ADDRESS = "contact@voids.agency";
const FROM_ADDRESS = "VOIDS website <noreply@voids.agency>";

export async function POST(request: Request) {
  const { name, company, email, sector, size, juniors, goal, note, consent } = await request.json();

  if (!name || !company || !email || !consent) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("Partner request form: RESEND_API_KEY env var is not set.");
    return NextResponse.json({ error: "Mail is not configured" }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  const rows: [string, string][] = [
    ["Naam", name],
    ["Bedrijf", company],
    ["E-mail", email],
    ["Sector", sector || "-"],
    ["Aantal medewerkers", size || "-"],
    ["Juniors/werkstudenten nu", juniors || "-"],
    ["Doel", goal || "-"],
  ];

  try {
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      replyTo: email,
      subject: `Nieuwe partner-aanmelding van ${company}`,
      text: `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nToelichting:\n${note || "-"}`,
      html: `${rows.map(([k, v]) => `<p><strong>${k}:</strong> ${escapeHtml(String(v))}</p>`).join("")}<p><strong>Toelichting:</strong></p><p>${escapeHtml(note || "-").replace(/\n/g, "<br>")}</p>`,
    });
    if (error) {
      console.error("Partner request form send failed:", error);
      return NextResponse.json({ error: "Failed to send" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Partner request form send failed:", err);
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
