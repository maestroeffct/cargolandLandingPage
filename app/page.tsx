import WhatMakesUsDifferent from "@/src/components/AboutSection/WhatMakesUsDifferent";
import FeaturePillsMarquee from "@/src/components/Features/FeaturePills";
import Hero from "@/src/components/Hero/Hero";
import FeatureCarousel from "@/src/components/WebFeatures/FeatureCarousel";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturePillsMarquee />
      <WhatMakesUsDifferent />
      <FeatureCarousel />
    </>
  );
}
