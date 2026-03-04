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
    <div className="pt-20">
      <section className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-primary mb-4">
          {dict.contact.page_title}
        </h1>
        <p className="text-gray-600 mb-8">{dict.contact.description}</p>
        <ContactForm dict={dict} />
      </section>
    </div>
  );
}
