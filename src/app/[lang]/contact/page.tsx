import { getDictionary } from "@/i18n/dictionaries";
import type { Lang } from "@/i18n/dictionaries";
import ContactForm from "@/components/contact/ContactForm";

export default async function ContactPage({
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
            {dict.contact.page_label}
          </p>
          <h1 className="text-4xl md:text-6xl font-light tracking-wide">
            {dict.contact.page_title}
          </h1>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-6 py-20">
        <p className="text-text-secondary mb-12 leading-relaxed">
          {dict.contact.description}
        </p>
        <ContactForm dict={dict} />
      </section>
    </div>
  );
}
