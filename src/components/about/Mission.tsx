"use client";

import FadeInSection from "@/components/animations/FadeInSection";
import ImageWithFallback from "@/components/common/ImageWithFallback";

type Dict = {
  about: {
    page_title: string;
    mission_title: string;
    mission_text: string;
  };
  [key: string]: unknown;
};

const Mission = ({ dict }: { dict: Dict }) => {
  return (
    <section className="py-16 bg-bg-light">
      <div className="max-w-6xl mx-auto px-4">
        <FadeInSection>
          <h1 className="text-3xl font-bold text-primary mb-12 text-center">
            {dict.about.page_title}
          </h1>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeInSection>
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
              <ImageWithFallback
                src="/images/about/about-mission.png"
                alt={dict.about.mission_title}
                fill
                className="object-cover"
              />
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <h2 className="text-2xl font-bold text-primary mb-4">
              {dict.about.mission_title}
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {dict.about.mission_text}
            </p>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default Mission;
