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
    <div>
      {/* ヒーローセクション */}
      <section className="pt-32 pb-20 bg-bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm tracking-widest uppercase text-accent mb-4">
            {dict.about.page_label}
          </p>
          <h1 className="text-4xl md:text-6xl font-light tracking-wide text-text-primary">
            {dict.about.page_title}
          </h1>
        </div>
      </section>

      <Mission dict={dict} />
      <CompanyInfo dict={dict} />
    </div>
  );
}
