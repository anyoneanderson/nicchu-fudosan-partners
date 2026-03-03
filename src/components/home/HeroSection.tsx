"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Lang } from "@/i18n/dictionaries";
import { ANIMATION_DURATION } from "@/lib/constants";
import ImageWithFallback from "@/components/common/ImageWithFallback";

type Dict = {
  home: {
    hero_title: string;
    hero_subtitle: string;
  };
  common: {
    nav: { contact: string };
  };
  [key: string]: unknown;
};

const HeroSection = ({ dict, lang }: { dict: Dict; lang: Lang }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="/images/hero/hero-bg.png"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight whitespace-pre-line"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: ANIMATION_DURATION, delay: 0.2 }}
        >
          {dict.home.hero_title}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: ANIMATION_DURATION, delay: 0.4 }}
        >
          {dict.home.hero_subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: ANIMATION_DURATION, delay: 0.6 }}
        >
          <Link
            href={`/${lang}/contact`}
            className="inline-block px-8 py-4 bg-accent text-white font-bold rounded-lg hover:bg-accent-light transition-colors text-lg"
          >
            {dict.common.nav.contact}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
