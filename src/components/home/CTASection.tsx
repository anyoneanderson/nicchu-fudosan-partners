"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
    <section className="py-20 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <FadeInSection>
          <h2 className="text-3xl font-bold mb-4">{dict.home.cta_title}</h2>
          <p className="text-white/70 mb-8 text-lg">
            {dict.home.cta_subtitle}
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={`/${lang}/contact`}
              className="inline-block px-10 py-4 bg-accent text-white font-bold rounded-lg hover:bg-accent-light transition-colors text-lg"
            >
              {dict.home.cta_button}
            </Link>
          </motion.div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default CTASection;
