import fs from "node:fs";
import path from "node:path";

const EXTENSIONS = [".svg", ".png", ".jpg", ".jpeg"];

/**
 * Looks for a real asset dropped into /public/{dir}/{slug}.{ext}.
 * Returns its public URL if found, otherwise null (caller shows a
 * placeholder). Runs server-side only — safe to call from a Server
 * Component page.
 */
function findPublicAsset(dir: string, slug: string): string | null {
  const base = path.join(process.cwd(), "public", dir);
  for (const ext of EXTENSIONS) {
    const file = path.join(base, `${slug}${ext}`);
    if (fs.existsSync(file)) return `/${dir}/${slug}${ext}`;
  }
  return null;
}

/** Drop a matching file in /public/logos/{slug}.svg|.png to replace the placeholder. */
export function findLogoFile(slug: string): string | null {
  return findPublicAsset("logos", slug);
}

/**
 * Official UN SDG icons aren't bundled here (their zip downloads need to be
 * fetched by hand from https://www.un.org/sustainabledevelopment/news/communications-material/
 * — automated fetching kept 404ing). Drop the goal's icon in as
 * /public/sdg-icons/{num}.svg|.png (e.g. "4.png") to use it instead of the
 * number-only placeholder.
 */
export function findSdgIcon(num: string): string | null {
  return findPublicAsset("sdg-icons", num);
}
