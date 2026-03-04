import { Noto_Sans_JP, Noto_Sans_SC } from "next/font/google";
import { getDictionary } from "@/i18n/dictionaries";
import type { Lang } from "@/i18n/dictionaries";
import { SUPPORTED_LANGS, SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-noto-sans-sc",
  display: "swap",
});

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }));
}

const metaByLang: Record<Lang, { title: string; description: string }> = {
  ja: {
    title: "日中不動産パートナーズ株式会社",
    description:
      "中国語圏のお客様向け販売体制をゼロから整えるお手伝いをします。投資コンサルティング、不動産仲介、内見サポートを提供。",
  },
  zh: {
    title: "日中不动产合伙人株式会社",
    description:
      "我们帮助您从零开始建立面向中文圈客户的销售体制。提供投资咨询、不动产中介、看房支持。",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = rawLang as Lang;
  const meta = metaByLang[lang];

  return {
    title: {
      default: meta.title,
      template: `%s | ${meta.title}`,
    },
    description: meta.description,
    alternates: {
      canonical: `${SITE_URL}/${lang}/`,
      languages: {
        ja: `${SITE_URL}/ja/`,
        zh: `${SITE_URL}/zh/`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${SITE_URL}/${lang}/`,
      siteName: meta.title,
      locale: lang === "ja" ? "ja_JP" : "zh_CN",
      type: "website",
      images: [`${SITE_URL}/images/ogp/ogp-${lang}.png`],
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Lang;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} className={`${notoSansJP.variable} ${notoSansSC.variable}`}>
      <body className="min-h-screen flex flex-col bg-bg-primary text-text-primary antialiased font-sans">
        <Header lang={lang} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer dict={dict} lang={lang} />
      </body>
    </html>
  );
}
