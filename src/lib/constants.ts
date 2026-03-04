import type { Lang } from "@/i18n/dictionaries";

export const SUPPORTED_LANGS: Lang[] = ["ja", "zh"];
export const DEFAULT_LANG: Lang = "ja";

export const SITE_URL = "https://nicchu-fudosan.netlify.app";

export const CORPORATE_COLOR = {
  bgPrimary: "#0a0a0a",
  bgSecondary: "#111111",
  bgTertiary: "#1a1a1a",
  textPrimary: "#ffffff",
  textSecondary: "#a0a0a0",
  accent: "#c4933f",
  accentLight: "#d4a85a",
  border: "#2a2a2a",
} as const;

export const ANIMATION_DURATION = 0.6;
export const STAGGER_DELAY = 0.15;
