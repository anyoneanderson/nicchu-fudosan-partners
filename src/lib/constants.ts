import type { Lang } from "@/i18n/dictionaries";

export const SUPPORTED_LANGS: Lang[] = ["ja", "zh"];
export const DEFAULT_LANG: Lang = "ja";

export const SITE_URL = "https://nicchu-fudosan.netlify.app";

export const CORPORATE_COLOR = {
  primary: "#1e3a5f",
  accent: "#c4933f",
  light: "#f5f7fa",
} as const;

export const ANIMATION_DURATION = 0.6;
export const STAGGER_DELAY = 0.15;
