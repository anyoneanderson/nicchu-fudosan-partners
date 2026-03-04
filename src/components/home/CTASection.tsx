"use client";

import Link from "next/link";
import type { Lang } from "@/i18n/dictionaries";
import FadeInSection from "@/components/animations/FadeInSection";

type Dict = {
  home: {
    cta_title: string;
    cta_subtitle: string;
    cta_button: string;
  };
  [key: string]: unknown;
};

const CTASection = ({ dict, lang }: { dict: Dict; lang: Lang }) => {
  return (
    <section className="py-32 relative">
      {/* ゴールドアクセントライン */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-px bg-accent" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6">
            {dict.home.cta_title}
          </h2>
          <p className="text-text-secondary mb-12">
            {dict.home.cta_subtitle}
          </p>
          <Link
            href={`/${lang}/contact`}
            className="inline-block px-8 py-3 border border-accent text-accent tracking-widest uppercase text-sm hover:bg-accent hover:text-bg-primary transition-all duration-300"
          >
            {dict.home.cta_button}
          </Link>
        </FadeInSection>
      </div>
    </section>
  );
};

export default CTASection;
