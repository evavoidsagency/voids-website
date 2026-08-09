import type { Lang } from "@/lib/i18n/common";

export const SDGS: Record<Lang, { num: string; title: string; text: string; color: string }[]> = {
  nl: [
    { num: "4", title: "Kwaliteitsonderwijs", text: "Werkervaring die telt tijdens de studie.", color: "#C5192D" },
    { num: "8", title: "Eerlijk werk & economische groei", text: "Fair wages en transparante voorwaarden.", color: "#A21942" },
    { num: "10", title: "Minder ongelijkheid", text: "Gelijke kansen, ongeacht netwerk of achtergrond.", color: "#DD1367" },
  ],
  en: [
    { num: "4", title: "Quality education", text: "Work experience that counts during your studies.", color: "#C5192D" },
    { num: "8", title: "Decent work & economic growth", text: "Fair wages and transparent terms.", color: "#A21942" },
    { num: "10", title: "Reduced inequalities", text: "Equal opportunity, regardless of network or background.", color: "#DD1367" },
  ],
};
