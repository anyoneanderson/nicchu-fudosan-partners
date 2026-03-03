type Dict = {
  common: {
    company_name: string;
    nav: { home: string; about: string; contact: string };
  };
  footer: {
    copyright: string;
    all_rights: string;
  };
  [key: string]: unknown;
};

const Footer = ({ dict }: { dict: Dict }) => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg font-bold mb-2">
              {dict.common.company_name}
            </p>
          </div>
          <div className="flex flex-col gap-2 md:items-end">
            <p className="text-white/70 text-sm">
              {dict.footer.copyright}
            </p>
            <p className="text-white/50 text-xs">
              {dict.footer.all_rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
