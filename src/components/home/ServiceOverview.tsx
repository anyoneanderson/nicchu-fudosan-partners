"use client";

import FadeInSection from "@/components/animations/FadeInSection";
import ImageWithFallback from "@/components/common/ImageWithFallback";

type Dict = {
  home: {
    services_title: string;
    services_label: string;
    service_strategy_title: string;
    service_strategy_desc: string;
    service_leads_title: string;
    service_leads_desc: string;
    service_contract_title: string;
    service_contract_desc: string;
    service_culture_title: string;
    service_culture_desc: string;
    service_chinese_title: string;
    service_chinese_desc: string;
  };
  [key: string]: unknown;
};

const services = [
  {
    number: "01",
    titleKey: "service_strategy_title" as const,
    descKey: "service_strategy_desc" as const,
    image: "/images/services/service-strategy.png",
  },
  {
    number: "02",
    titleKey: "service_leads_title" as const,
    descKey: "service_leads_desc" as const,
    image: "/images/services/service-leads.png",
  },
  {
    number: "03",
    titleKey: "service_contract_title" as const,
    descKey: "service_contract_desc" as const,
    image: "/images/services/service-contract.png",
  },
  {
    number: "04",
    titleKey: "service_culture_title" as const,
    descKey: "service_culture_desc" as const,
    image: "/images/services/service-culture.png",
  },
  {
    number: "05",
    titleKey: "service_chinese_title" as const,
    descKey: "service_chinese_desc" as const,
    image: "/images/services/service-chinese.png",
  },
];

const ServiceOverview = ({ dict }: { dict: Dict }) => {
  return (
    <section className="py-32">
      {/* セクションヘッダー */}
      <div className="max-w-6xl mx-auto px-6 mb-24">
        <FadeInSection>
          <p className="text-sm tracking-widest uppercase text-accent mb-4">
            {dict.home.services_label}
          </p>
          <h2 className="text-3xl md:text-5xl font-light tracking-wide text-text-primary">
            {dict.home.services_title}
          </h2>
        </FadeInSection>
      </div>

      {/* サービス一覧 */}
      {services.map((service, index) => {
        const isReversed = index % 2 === 1;
        return (
          <div
            key={service.titleKey}
            className={`relative py-24 ${index % 2 === 0 ? "bg-bg-secondary" : ""}`}
          >
            <div className="max-w-6xl mx-auto px-6">
              <FadeInSection>
                <div className="grid md:grid-cols-2 gap-16 items-center">
                  {/* テキスト */}
                  <div className={isReversed ? "md:order-2" : ""}>
                    <span className="text-8xl font-extralight text-accent/20 block leading-none">
                      {service.number}
                    </span>
                    <h3 className="text-2xl font-light tracking-wide mt-4 mb-6 text-text-primary">
                      {dict.home[service.titleKey]}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {dict.home[service.descKey]}
                    </p>
                  </div>

                  {/* 画像 */}
                  <div
                    className={`relative aspect-[4/3] overflow-hidden ${isReversed ? "md:order-1" : ""}`}
                  >
                    <ImageWithFallback
                      src={service.image}
                      alt={dict.home[service.titleKey]}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ServiceOverview;
