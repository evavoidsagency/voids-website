import { NextResponse } from "next/server";
import { Resend } from "resend";

// Talent pool sign-up: the form on /pager posts here (multipart, CV attached).
// The answers land as one row in the Notion database "ATS Kandidaten"
// (05. Operations > Talent > ATS). Needs NOTION_TOKEN; the integration must have
// access to that database. Optional: NOTION_ATS_DATA_SOURCE_ID, RESEND_API_KEY.

const NOTION_VERSION = "2025-09-03";
const DEFAULT_DATA_SOURCE_ID = "a8456477-78e6-4cb7-be3a-654f4c734a90";
const TO_ADDRESS = "contact@voids.agency";
const FROM_ADDRESS = "VOIDS website <noreply@voids.agency>";

// Vercel rejects request bodies above ~4.5 MB, so keep attachments below that.
const MAX_FILES_BYTES = 4 * 1024 * 1024;
const MAX_TEXT = 1800;


// The form sends stable keys; Notion gets the Dutch labels the team works with.
const LOOKING_FOR: Record<string, string> = {
  stage: "Stage",
  workstudent: "Werkstudentschap",
  starter: "Startersfunctie",
  trainee: "Traineeship",
  sidejob: "Bijbaan",
  freelance: "Freelance werk",
  board: "Bestuurs- of vrijwilligersrol",
  impact: "Impactwerk",
};
const FIELDS: Record<string, string> = {
  bizdev: "Business Development",
  comms: "Communicatie",
  consulting: "Consultancy",
  data: "Data",
  design: "Design",
  finance: "Finance",
  hr: "HR",
  legal: "Juridisch",
  marketing: "Marketing",
  operations: "Operations",
  sales: "Sales",
  tech: "Tech",
};
const VALUES: Record<string, string> = {
  freedom: "Vrijheid",
  security: "Zekerheid",
  growth: "Groei",
  impact: "Impact maken",
  appreciation: "Waardering krijgen",
  creativity: "Creativiteit",
  build: "Zelf iets opbouwen",
  together: "Samen met anderen",
  calm: "Rust en overzicht",
  status: "Aanzien",
};
// Question 5: six either/or pairs. "a" is the left option of the form, "b" the right.
const PAIRS: { key: string; property: string; a: string; b: string }[] = [
  { key: "q5_1", property: "Alleen of samen", a: "Alleen", b: "Samen" },
  { key: "q5_2", property: "Routine of afwisseling", a: "Routine", b: "Afwisseling" },
  { key: "q5_3", property: "Klein team of grote organisatie", a: "Klein team", b: "Grote organisatie" },
  { key: "q5_4", property: "Snel of zorgvuldig", a: "Snel schakelen", b: "Rustig en zorgvuldig" },
  { key: "q5_5", property: "Zelf bedenken of duidelijke opdracht", a: "Zelf bedenken", b: "Duidelijke opdracht" },
  { key: "q5_6", property: "Kantoor of thuis", a: "Op kantoor", b: "Thuis of wisselend" },
];
// Question 10: ten tasks, answered "+" (like), "-" (don't like) or "0" (doesn't matter).
const TASKS: Record<string, string> = {
  writing: "Schrijven",
  research: "Uitzoeken",
  data: "Cijfers en data",
  building: "Bouwen of programmeren",
  design: "Ontwerpen",
  advising: "Anderen helpen of adviseren",
  presenting: "Presenteren",
  selling: "Verkopen of overtuigen",
  organising: "Organiseren",
  talking: "Gesprekken voeren",
};
// Open questions, in the order of the intake form. They go into the page body.
const OPEN_QUESTIONS: { key: string; label: string }[] = [
  { key: "q1", label: "1. Een moment waarop je volledig in je element was" },
  { key: "q3", label: "3. Een onderwerp waar je vanzelf nieuwsgierig naar bent" },
  { key: "q4", label: "4. Waar je over een paar jaar wil staan" },
  { key: "q6", label: "6. Bij wie werkte of leerde je tot nu toe het prettigst?" },
  { key: "q7", label: "7. Hoeveel wil je in het begin zelf mogen beslissen?" },
  { key: "q8", label: "8. Wat je nodig hebt van de mensen om je heen" },
  { key: "q9", label: "9. Een dealbreaker in een team of organisatie" },
  { key: "q11", label: "11. Waar je complimenten over krijgt of goed in bent" },
  { key: "q12", label: "12. Een soort organisatie die je aanspreekt" },
  { key: "q13", label: "13. Een taak die je liever niet doet" },
  { key: "q14", label: "14. Nog iets dat we moeten weten" },
];
const REQUIRED_OPEN = ["q1", "q6", "q7", "q8", "q9", "q11"];

const CV_EXT = ["pdf", "doc", "docx"];
const PORTFOLIO_EXT = ["pdf", "doc", "docx", "ppt", "pptx", "png", "jpg", "jpeg"];
const MIME: Record<string, string> = {
  pdf: "application/pdf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ppt: "application/vnd.ms-powerpoint",
  pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
};

class BadRequest extends Error {}

const str = (data: FormData, key: string) => {
  const v = data.get(key);
  return typeof v === "string" ? v.trim() : "";
};
const list = (data: FormData, key: string) => data.getAll(key).filter((v): v is string => typeof v === "string");
const rich = (value: string) => [{ type: "text", text: { content: value.slice(0, 2000) } }];
const ext = (name: string) => name.split(".").pop()?.toLowerCase() ?? "";
const isDate = (v: string) => /^\d{4}-\d{2}-\d{2}$/.test(v) && !Number.isNaN(Date.parse(v));

function paragraphs(text: string) {
  const out: unknown[] = [];
  for (let i = 0; i < text.length; i += 1900) {
    out.push({ object: "block", type: "paragraph", paragraph: { rich_text: rich(text.slice(i, i + 1900)) } });
  }
  return out;
}

function readFile(data: FormData, key: string, allowed: string[], required: boolean) {
  const v = data.get(key);
  if (!(v instanceof File) || v.size === 0) {
    if (required) throw new BadRequest(`${key} missing`);
    return null;
  }
  if (!allowed.includes(ext(v.name))) throw new BadRequest(`${key} type`);
  return v;
}

async function notion(token: string, path: string, init: RequestInit & { json?: unknown }) {
  const headers: Record<string, string> = { Authorization: `Bearer ${token}`, "Notion-Version": NOTION_VERSION };
  let body = init.body;
  if (init.json !== undefined) {
    headers["Content-Type"] = "application/json";
    body = JSON.stringify(init.json);
  }
  const res = await fetch(`https://api.notion.com/v1${path}`, { method: init.method ?? "POST", headers, body });
  if (!res.ok) throw new Error(`Notion ${path} responded ${res.status}: ${(await res.text()).slice(0, 300)}`);
  return res.json();
}

async function uploadFile(token: string, file: File) {
  const type = MIME[ext(file.name)] ?? "application/octet-stream";
  const created = await notion(token, "/file_uploads", {
    json: { mode: "single_part", filename: file.name, content_type: type },
  });
  const form = new FormData();
  form.append("file", new File([await file.arrayBuffer()], file.name, { type }));
  await notion(token, `/file_uploads/${created.id}/send`, { body: form });
  return { type: "file_upload", file_upload: { id: created.id }, name: file.name };
}

export async function POST(request: Request) {
  const token = process.env.NOTION_TOKEN;

  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form" }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field.
  if (str(data, "website")) return NextResponse.json({ ok: true });

  try {
    const first = str(data, "first");
    const last = str(data, "last");
    const email = str(data, "email");
    const phone = str(data, "phone");
    const school = str(data, "school");
    const bachelor = str(data, "bachelor");
    const master = str(data, "master");
    const birth = str(data, "birth");
    const start = str(data, "start");
    const gradYear = Number(str(data, "gradyear"));
    const hours = Number(str(data, "hours"));
    const lang = str(data, "lang") === "en" ? "EN" : "NL";

    if (!first || !last || !phone || !school || !bachelor) throw new BadRequest("required");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new BadRequest("email");
    if (!Number.isInteger(gradYear) || gradYear < 1990 || gradYear > 2045) throw new BadRequest("gradyear");
    if (!Number.isFinite(hours) || hours < 1 || hours > 40) throw new BadRequest("hours");
    if (!isDate(start)) throw new BadRequest("start");
    if (birth && !isDate(birth)) throw new BadRequest("birth");
    if (str(data, "consent") !== "on") throw new BadRequest("consent");

    const looking = list(data, "looking").map((k) => LOOKING_FOR[k]).filter(Boolean);
    if (looking.length === 0) throw new BadRequest("looking");
    const fields = list(data, "field").map((k) => FIELDS[k]).filter(Boolean);
    const values = list(data, "values").map((k) => VALUES[k]).filter(Boolean);
    if (new Set(values).size !== 3) throw new BadRequest("values");

    const pairs: Record<string, { select: { name: string } }> = {};
    for (const p of PAIRS) {
      const v = str(data, p.key);
      if (v !== "a" && v !== "b") throw new BadRequest(p.key);
      pairs[p.property] = { select: { name: v === "a" ? p.a : p.b } };
    }

    const like: string[] = [];
    const dislike: string[] = [];
    for (const [key, label] of Object.entries(TASKS)) {
      const v = str(data, `q10_${key}`);
      if (v === "+") like.push(label);
      else if (v === "-") dislike.push(label);
      else if (v !== "0") throw new BadRequest(`q10_${key}`);
    }

    const answers = OPEN_QUESTIONS.map((q) => ({ ...q, text: str(data, q.key).slice(0, MAX_TEXT) }));
    for (const key of REQUIRED_OPEN) {
      if (!answers.find((a) => a.key === key)?.text) throw new BadRequest(key);
    }

    const cv = readFile(data, "cv", CV_EXT, true)!;
    const portfolio = readFile(data, "portfolio", PORTFOLIO_EXT, false);
    if (cv.size + (portfolio?.size ?? 0) > MAX_FILES_BYTES) throw new BadRequest("size");

    let portfolioLink = str(data, "portfolioLink");
    if (portfolioLink && !/^https?:\/\//i.test(portfolioLink)) portfolioLink = `https://${portfolioLink}`;
    try {
      if (portfolioLink) new URL(portfolioLink);
    } catch {
      throw new BadRequest("portfolioLink");
    }

    // Without a Notion token (not set up yet) the sign-up still works: everything goes to the team by mail.
    if (!token) {
      const resendKey = process.env.RESEND_API_KEY;
      if (!resendKey) {
        console.error("Talent signup: neither NOTION_TOKEN nor RESEND_API_KEY is set.");
        return NextResponse.json({ error: "Not configured" }, { status: 503 });
      }
      const attachments = await Promise.all(
        [cv, portfolio].filter((f): f is File => !!f).map(async (f) => ({ filename: f.name, content: Buffer.from(await f.arrayBuffer()) })),
      );
      const text = [
        `Nieuwe aanmelding talentpool (${lang})`,
        "",
        `Naam: ${first} ${last}`,
        `E-mail: ${email}`,
        `Telefoon: ${phone}`,
        `Geboortedatum: ${birth || "-"}`,
        `Bachelor: ${bachelor}${master ? ` | Master: ${master}` : ""}`,
        `Onderwijsinstelling: ${school}`,
        `(Verwacht) afstudeerjaar: ${gradYear}`,
        `Uren per week: ${hours}`,
        `Gewenste startdatum: ${start}`,
        `Op zoek naar: ${looking.join(", ")}`,
        `Vakgebied: ${fields.join(", ") || "-"}`,
        `Drie belangrijkste dingen: ${values.join(", ")}`,
        ...PAIRS.map((p) => `${p.property}: ${pairs[p.property].select.name}`),
        `Taken leuk: ${like.join(", ") || "-"}`,
        `Taken liever niet: ${dislike.join(", ") || "-"}`,
        `Portfolio-link: ${portfolioLink || "-"}`,
        "",
        ...answers.flatMap((a) => [a.label, a.text || "-", ""]),
        "Toestemming gegeven: ja",
      ].join("\n");
      const { error } = await new Resend(resendKey).emails.send({
        from: FROM_ADDRESS,
        to: TO_ADDRESS,
        replyTo: email,
        subject: `Nieuwe aanmelding talentpool: ${first} ${last}`,
        text,
        attachments,
      });
      if (error) throw new Error(`Resend failed: ${JSON.stringify(error)}`);
      return NextResponse.json({ ok: true });
    }

    const cvFile = await uploadFile(token, cv);
    const portfolioFile = portfolio ? await uploadFile(token, portfolio) : null;

    const keepUntil = new Date();
    keepUntil.setFullYear(keepUntil.getFullYear() + 1);

    const properties: Record<string, unknown> = {
      Naam: { title: rich(`${first} ${last}`) },
      Status: { select: { name: "Nieuw" } },
      "Career pager": { select: { name: "Te maken" } },
      Voornaam: { rich_text: rich(first) },
      Achternaam: { rich_text: rich(last) },
      "E-mail": { email },
      Telefoon: { phone_number: phone.slice(0, 40) },
      Taal: { select: { name: lang } },
      Bachelor: { rich_text: rich(bachelor) },
      Onderwijsinstelling: { rich_text: rich(school) },
      "Afstudeerjaar (verwacht)": { number: gradYear },
      "Uren per week": { number: hours },
      "Gewenste startdatum": { date: { start } },
      "Op zoek naar": { multi_select: looking.map((name) => ({ name })) },
      "Drie belangrijkste dingen": { multi_select: values.map((name) => ({ name })) },
      "Taken: leuk": { multi_select: like.map((name) => ({ name })) },
      "Taken: liever niet": { multi_select: dislike.map((name) => ({ name })) },
      CV: { files: [cvFile] },
      "Toestemming gegeven": { checkbox: true },
      "Bewaren tot": { date: { start: keepUntil.toISOString().slice(0, 10) } },
      ...pairs,
    };
    if (fields.length) properties["Vakgebied"] = { multi_select: fields.map((name) => ({ name })) };
    if (master) properties["Master"] = { rich_text: rich(master) };
    if (birth) properties["Geboortedatum"] = { date: { start: birth } };
    if (portfolioFile) properties["Portfolio"] = { files: [portfolioFile] };
    if (portfolioLink) properties["Portfolio-link"] = { url: portfolioLink };

    const children: unknown[] = [];
    for (const a of answers) {
      children.push({ object: "block", type: "heading_3", heading_3: { rich_text: rich(a.label) } });
      children.push(...paragraphs(a.text || "-"));
    }

    const page = await notion(token, "/pages", {
      json: {
        parent: { type: "data_source_id", data_source_id: process.env.NOTION_ATS_DATA_SOURCE_ID || DEFAULT_DATA_SOURCE_ID },
        icon: { type: "emoji", emoji: "🙋" },
        properties,
        children,
      },
    });

    // Heads-up to the team. Never fails the sign-up: the row is already in Notion.
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      try {
        await new Resend(resendKey).emails.send({
          from: FROM_ADDRESS,
          to: TO_ADDRESS,
          replyTo: email,
          subject: `Nieuwe aanmelding talentpool: ${first} ${last}`,
          text: `${first} ${last} (${email}) heeft zich aangemeld voor de talentpool.\nOp zoek naar: ${looking.join(", ")}\nTaal: ${lang}\n\nIn de ATS: ${page.url}`,
        });
      } catch (err) {
        console.error("Talent signup: notification mail failed.", err);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    if (err instanceof BadRequest) {
      return NextResponse.json({ error: "Invalid input", field: err.message }, { status: 400 });
    }
    console.error("Talent signup failed.", err);
    return NextResponse.json({ error: "Failed to save" }, { status: 502 });
  }
}
