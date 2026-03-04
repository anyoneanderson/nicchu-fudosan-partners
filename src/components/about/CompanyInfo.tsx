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
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <FadeInSection>
          <h2 className="text-2xl font-bold text-primary mb-8">
            {dict.about.company_title}
          </h2>
        </FadeInSection>

        <FadeInSection delay={0.15}>
          <div className="border rounded-xl overflow-hidden">
            <table className="w-full">
              <tbody>
                {items.map((item) => (
                  <tr key={item.label} className="border-b last:border-b-0">
                    <th className="bg-bg-light px-6 py-4 text-left text-sm font-medium text-gray-700 w-1/3">
                      {item.label}
                    </th>
                    <td className="px-6 py-4 text-gray-900">{item.value}</td>
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
