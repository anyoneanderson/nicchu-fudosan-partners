"use client";

import { useState } from "react";
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
  const otherLang = lang === "ja" ? "zh" : "ja";

  const navItems = [
    { href: `/${lang}/`, label: dict.common.nav.home },
    { href: `/${lang}/about`, label: dict.common.nav.about },
    { href: `/${lang}/contact`, label: dict.common.nav.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href={`/${lang}/`}
          className="text-lg font-bold text-primary whitespace-nowrap"
        >
          {dict.common.company_name}
        </Link>

        {/* デスクトップナビ */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-gray-700 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={`/${otherLang}/`}
            className="text-sm px-3 py-1 border border-primary text-primary rounded hover:bg-primary hover:text-white transition-colors"
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
              className={`block h-0.5 bg-gray-700 transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 bg-gray-700 transition-opacity ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 bg-gray-700 transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </nav>

      {/* モバイルメニュー */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-6 py-3 text-gray-700 hover:bg-gray-50"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={`/${otherLang}/`}
            className="block px-6 py-3 text-primary font-medium"
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
