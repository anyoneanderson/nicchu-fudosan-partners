import { getDictionary } from "@/i18n/dictionaries";
import type { Lang } from "@/i18n/dictionaries";
import HeroSection from "@/components/home/HeroSection";
import ServiceOverview from "@/components/home/ServiceOverview";
import CTASection from "@/components/home/CTASection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Lang;
  const dict = await getDictionary(lang);

  return (
    <>
      <HeroSection dict={dict} lang={lang} />
      <ServiceOverview dict={dict} />
      <CTASection dict={dict} lang={lang} />
    </>
  );
}
