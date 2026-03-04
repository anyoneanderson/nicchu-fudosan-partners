import Link from "next/link";
import type { Lang } from "@/i18n/dictionaries";

type Dict = {
  common: {
    company_name: string;
    nav: { home: string; about: string; contact: string };
  };
  footer: {
    copyright: string;
    all_rights: string;
    nav_label: string;
    contact_label: string;
    address: string;
  };
  [key: string]: unknown;
};

const Footer = ({ dict, lang }: { dict: Dict; lang: Lang }) => {
  return (
    <footer className="bg-[#050505]">
      {/* ゴールドグラデーションライン */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* 会社情報 */}
          <div>
            <p className="text-lg font-light tracking-wider mb-4">
              {dict.common.company_name}
            </p>
            <p className="text-text-muted text-sm leading-relaxed">
              {dict.footer.address}
            </p>
          </div>

          {/* ナビゲーション */}
          <div>
            <p className="text-sm tracking-widest uppercase text-accent mb-4">
              {dict.footer.nav_label}
            </p>
            <nav className="space-y-2">
              <Link
                href={`/${lang}/`}
                className="block text-text-secondary text-sm hover:text-accent transition-colors"
              >
                {dict.common.nav.home}
              </Link>
              <Link
                href={`/${lang}/about`}
                className="block text-text-secondary text-sm hover:text-accent transition-colors"
              >
                {dict.common.nav.about}
              </Link>
              <Link
                href={`/${lang}/contact`}
                className="block text-text-secondary text-sm hover:text-accent transition-colors"
              >
                {dict.common.nav.contact}
              </Link>
            </nav>
          </div>

          {/* お問い合わせ */}
          <div>
            <p className="text-sm tracking-widest uppercase text-accent mb-4">
              {dict.footer.contact_label}
            </p>
            <Link
              href={`/${lang}/contact`}
              className="text-text-secondary text-sm hover:text-accent transition-colors"
            >
              {dict.common.nav.contact} →
            </Link>
          </div>
        </div>
      </div>

      {/* コピーライト */}
      <div className="border-t border-border py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-text-muted text-xs">
            {dict.footer.copyright}
          </p>
          <p className="text-text-muted text-xs">
            {dict.footer.all_rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
