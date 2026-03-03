"use client";

import FadeInSection from "@/components/animations/FadeInSection";
import ImageWithFallback from "@/components/common/ImageWithFallback";
import { STAGGER_DELAY } from "@/lib/constants";

type Dict = {
  home: {
    services_title: string;
    service_consulting_title: string;
    service_consulting_desc: string;
    service_brokerage_title: string;
    service_brokerage_desc: string;
    service_viewing_title: string;
    service_viewing_desc: string;
  };
  [key: string]: unknown;
};

const services = [
  {
    titleKey: "service_consulting_title" as const,
    descKey: "service_consulting_desc" as const,
    image: "/images/services/service-consulting.png",
  },
  {
    titleKey: "service_brokerage_title" as const,
    descKey: "service_brokerage_desc" as const,
    image: "/images/services/service-brokerage.png",
  },
  {
    titleKey: "service_viewing_title" as const,
    descKey: "service_viewing_desc" as const,
    image: "/images/services/service-viewing.png",
  },
];

const ServiceOverview = ({ dict }: { dict: Dict }) => {
  return (
    <section className="py-20 bg-bg-light">
      <div className="max-w-6xl mx-auto px-4">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            {dict.home.services_title}
          </h2>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeInSection key={service.titleKey} delay={index * STAGGER_DELAY}>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <ImageWithFallback
                    src={service.image}
                    alt={dict.home[service.titleKey]}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {dict.home[service.titleKey]}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {dict.home[service.descKey]}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
