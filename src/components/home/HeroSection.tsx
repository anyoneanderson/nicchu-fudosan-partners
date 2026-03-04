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
    hero_label: string;
    cta_button: string;
  };
  [key: string]: unknown;
};

const HeroSection = ({ dict, lang }: { dict: Dict; lang: Lang }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="/images/hero/hero-bg.png"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          className="text-sm tracking-widest uppercase text-accent mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: ANIMATION_DURATION }}
        >
          {dict.home.hero_label}
        </motion.p>
        <motion.h1
          className="text-5xl md:text-7xl font-light tracking-wider leading-tight mb-8 whitespace-pre-line"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: ANIMATION_DURATION, delay: 0.2 }}
        >
          {dict.home.hero_title}
        </motion.h1>
        <motion.p
          className="text-lg text-text-secondary leading-relaxed mb-12 max-w-2xl mx-auto"
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
            className="inline-block px-8 py-3 border border-accent text-accent tracking-widest uppercase text-sm hover:bg-accent hover:text-bg-primary transition-all duration-300"
          >
            {dict.home.cta_button}
          </Link>
        </motion.div>
      </div>

      {/* スクロール誘導 */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-text-muted"
        >
          <path d="M7 13l5 5 5-5M7 7l5 5 5-5" />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
