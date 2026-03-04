"use client";

import FadeInSection from "@/components/animations/FadeInSection";
import ImageWithFallback from "@/components/common/ImageWithFallback";

type Dict = {
  about: {
    mission_title: string;
    mission_text: string;
    mission_label: string;
  };
  [key: string]: unknown;
};

const Mission = ({ dict }: { dict: Dict }) => {
  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeInSection>
            <div className="relative h-64 md:h-96 overflow-hidden rounded-sm">
              <ImageWithFallback
                src="/images/about/about-mission.png"
                alt={dict.about.mission_title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <p className="text-sm tracking-widest uppercase text-accent mb-4">
              {dict.about.mission_label}
            </p>
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-8">
              {dict.about.mission_title}
            </h2>
            <p className="text-text-secondary leading-loose text-lg">
              {dict.about.mission_text}
            </p>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default Mission;
