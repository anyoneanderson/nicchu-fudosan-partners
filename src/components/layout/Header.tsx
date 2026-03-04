"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Lang } from "@/i18n/dictionaries";

type Dict = {
  common: {
    company_name: string;
    nav: { home: string; about: string; contact: string };
    lang_switch: string;
  };
  [key: string]: unknown;
};

const Header = ({ lang, dict }: { lang: Lang; dict: Dict }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const otherLang = lang === "ja" ? "zh" : "ja";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: `/${lang}/`, label: dict.common.nav.home },
    { href: `/${lang}/about`, label: dict.common.nav.about },
    { href: `/${lang}/contact`, label: dict.common.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href={`/${lang}/`}
          className={`text-lg font-light tracking-wider whitespace-nowrap transition-colors duration-300 ${
            scrolled ? "text-text-primary" : "text-white"
          }`}
        >
          {dict.common.company_name}
        </Link>

        {/* デスクトップナビ */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm tracking-wider transition-colors duration-300 ${
                scrolled
                  ? "text-text-secondary hover:text-accent"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={`/${otherLang}/`}
            className={`text-sm px-4 py-1.5 border tracking-wider transition-all duration-300 ${
              scrolled
                ? "border-border text-text-secondary hover:border-accent hover:text-accent"
                : "border-white/40 text-white/80 hover:border-white hover:text-white"
            }`}
          >
            {dict.common.lang_switch}
          </Link>
        </div>

        {/* モバイルハンバーガー */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 transition-transform ${scrolled ? "bg-text-primary" : "bg-white"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 transition-opacity ${scrolled ? "bg-text-primary" : "bg-white"} ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 transition-transform ${scrolled ? "bg-text-primary" : "bg-white"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </nav>

      {/* モバイルメニュー */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-border py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-6 py-3 text-text-secondary hover:text-accent transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={`/${otherLang}/`}
            className="block px-6 py-3 text-accent"
            onClick={() => setMenuOpen(false)}
          >
            {dict.common.lang_switch}
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
