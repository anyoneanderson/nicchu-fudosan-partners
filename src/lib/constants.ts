import type { Lang } from "@/i18n/dictionaries";

export const SUPPORTED_LANGS: Lang[] = ["ja", "zh"];
export const DEFAULT_LANG: Lang = "ja";

export const SITE_URL = "https://nicchu-fudosan-partners.netlify.app";

export const CORPORATE_COLOR = {
  bgPrimary: "#ffffff",
  bgSecondary: "#f7f7f7",
  bgTertiary: "#efefef",
  bgDark: "#111111",
  textPrimary: "#222222",
  textSecondary: "#666666",
  accent: "#c4933f",
  accentLight: "#d4a85a",
  border: "#e5e5e5",
} as const;

export const ANIMATION_DURATION = 0.6;
export const STAGGER_DELAY = 0.15;
