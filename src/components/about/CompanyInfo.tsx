"use client";

import FadeInSection from "@/components/animations/FadeInSection";

type Dict = {
  about: {
    company_title: string;
    company_name_label: string;
    company_name_value: string;
    representative_label: string;
    representative_value: string;
    business_label: string;
    business_value: string;
    address_label: string;
    address_value: string;
  };
  [key: string]: unknown;
};

const CompanyInfo = ({ dict }: { dict: Dict }) => {
  const items = [
    { label: dict.about.company_name_label, value: dict.about.company_name_value },
    { label: dict.about.representative_label, value: dict.about.representative_value },
    { label: dict.about.business_label, value: dict.about.business_value },
    { label: dict.about.address_label, value: dict.about.address_value },
  ];

  return (
    <section className="py-32 bg-bg-secondary">
      <div className="max-w-4xl mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-12">
            {dict.about.company_title}
          </h2>
        </FadeInSection>

        <FadeInSection delay={0.15}>
          <div className="border border-border overflow-hidden">
            <table className="w-full">
              <tbody>
                {items.map((item) => (
                  <tr key={item.label} className="border-b border-border last:border-b-0">
                    <th className="bg-bg-tertiary px-6 py-5 text-left text-sm font-normal tracking-wider text-accent w-1/3">
                      {item.label}
                    </th>
                    <td className="px-6 py-5 text-text-primary">
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default CompanyInfo;
