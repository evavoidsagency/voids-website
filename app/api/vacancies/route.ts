import { NextResponse } from "next/server";

// Reads the "VOIDS Vacatures" Notion database and returns the live vacancies
// for the jobboard. The Notion token stays on the server; the page only sees
// the JSON returned here. Set NOTION_TOKEN (and optionally
// NOTION_VACANCIES_DATA_SOURCE_ID) in the hosting environment.

const NOTION_VERSION = "2025-09-03";
const DEFAULT_DATA_SOURCE_ID = "467b3ab6-53ff-4fa2-8386-5cceb7cccf3f";

type RichText = { plain_text: string }[];
type NotionProps = Record<string, any>;
type NotionPage = { id: string; properties: NotionProps };

const text = (p: NotionProps, key: string) => ((p[key]?.rich_text ?? p[key]?.title ?? []) as RichText).map((t) => t.plain_text).join("").trim();
const select = (p: NotionProps, key: string) => (p[key]?.select?.name ?? "") as string;
const num = (p: NotionProps, key: string) => (typeof p[key]?.number === "number" ? (p[key].number as number) : null);
const lines = (value: string) => value.split("\n").map((l) => l.replace(/^[-•]\s*/, "").trim()).filter(Boolean);
const slug = (value: string) =>
  value.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "").replace(/&/g, " ").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const FORM_EN: Record<string, string> = { hybride: "hybrid", "op kantoor": "on site", remote: "remote" };

function placeLabel(city: string, form: string, lang: "nl" | "en") {
  if (!city && !form) return "";
  if (city === "Remote" || (!city && form === "Remote")) return "Remote";
  const f = form ? (lang === "en" ? FORM_EN[form.toLowerCase()] ?? form.toLowerCase() : form.toLowerCase()) : "";
  return [city, f].filter(Boolean).join(", ");
}

function toVacancy(page: NotionPage) {
  const p = page.properties;
  const titleNl = text(p, "Functietitel");
  const titleEn = text(p, "Title (EN)");
  const company = select(p, "Bedrijf");
  const type = select(p, "Type").toLowerCase();
  const city = select(p, "Stad");
  const form = select(p, "Werkvorm");
  const salMin = num(p, "Salaris min");
  const salMax = num(p, "Salaris max");
  const hMin = num(p, "Uren min");
  const hMax = num(p, "Uren max");
  const featured = select(p, "Soort") === "Uitgelicht";
  const from = p["Online vanaf"]?.date?.start as string | undefined;

  return {
    id: page.id,
    co: company,
    logo: slug(company),
    type,
    field: select(p, "Vakgebied"),
    h: [hMin ?? hMax ?? 0, hMax ?? hMin ?? 0],
    loc: city || form,
    lt: { nl: placeLabel(city, form, "nl"), en: placeLabel(city, form, "en") },
    sal: [salMin ?? salMax ?? 0, salMax ?? salMin ?? 0],
    hasSal: salMin !== null || salMax !== null,
    month: select(p, "Salaris per") === "Maand",
    own: !featured,
    push: featured,
    applyUrl: featured ? (p["Sollicitatielink"]?.url as string | null) ?? "" : "",
    posted: from ?? "",
    t: { nl: titleNl, en: titleEn },
    about: { nl: text(p, "Over de rol"), en: text(p, "About the role (EN)") },
    tasks: { nl: lines(text(p, "Taken")), en: lines(text(p, "Tasks (EN)")) },
    want: { nl: lines(text(p, "Wij zoeken")), en: lines(text(p, "We are looking for (EN)")) },
    offer: { nl: lines(text(p, "Wij bieden")), en: lines(text(p, "We offer (EN)")) },
    // The English site only shows vacancies that have an English title.
    hasEn: titleEn.length > 0,
  };
}

async function fetchLivePages(token: string, dataSourceId: string) {
  const pages: NotionPage[] = [];
  let cursor: string | undefined;
  do {
    const res = await fetch(`https://api.notion.com/v1/data_sources/${dataSourceId}/query`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Notion-Version": NOTION_VERSION,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filter: { property: "Status", select: { equals: "Live" } },
        page_size: 100,
        ...(cursor ? { start_cursor: cursor } : {}),
      }),
    });
    if (!res.ok) throw new Error(`Notion responded ${res.status}`);
    const json = await res.json();
    pages.push(...(json.results as NotionPage[]));
    cursor = json.has_more ? json.next_cursor : undefined;
  } while (cursor);
  return pages;
}

export async function GET() {
  const token = process.env.NOTION_TOKEN;
  if (!token) {
    return NextResponse.json({ configured: false, vacancies: [] });
  }

  try {
    const pages = await fetchLivePages(token, process.env.NOTION_VACANCIES_DATA_SOURCE_ID || DEFAULT_DATA_SOURCE_ID);
    const today = new Date().toISOString().slice(0, 10);
    const vacancies = pages
      .filter((page) => {
        const from = page.properties["Online vanaf"]?.date?.start as string | undefined;
        const until = page.properties["Online tot"]?.date?.start as string | undefined;
        return (!from || from <= today) && (!until || until >= today);
      })
      .map(toVacancy)
      .filter((v) => v.t.nl && v.co)
      .sort((a, b) => b.posted.localeCompare(a.posted));

    return NextResponse.json(
      { configured: true, vacancies },
      { headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=900" } },
    );
  } catch (err) {
    console.error("Vacancies: could not read Notion.", err);
    return NextResponse.json({ configured: true, error: true, vacancies: [] }, { status: 502 });
  }
}
