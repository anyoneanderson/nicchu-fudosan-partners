export type Lang = "ja" | "zh";

const dictionaries = {
  ja: () => import("./ja.json").then((m) => m.default),
  zh: () => import("./zh.json").then((m) => m.default),
};

export const getDictionary = async (lang: Lang) => dictionaries[lang]();
