import { getDictionary } from "@/i18n/dictionaries";
import type { Lang } from "@/i18n/dictionaries";
import CompanyInfo from "@/components/about/CompanyInfo";
import Mission from "@/components/about/Mission";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Lang;
  const dict = await getDictionary(lang);

  return (
    <div className="pt-20">
      <Mission dict={dict} />
      <CompanyInfo dict={dict} />
    </div>
  );
}
