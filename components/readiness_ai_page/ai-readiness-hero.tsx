"use client";

import { HeroSection } from "@/components/readiness_components";
import { GetInTouchButton } from "@/components/global/get_in_touch_button";
import { hero } from "@/content/readiness/why_ai";

export function AiReadinessHero() {
  return (
    <HeroSection
      accent={hero.accent}
      title={hero.title}
      subtitle={hero.subtitle}
      bullets={hero.bullets}
      actions={<GetInTouchButton variant="secondary" size="lg" />}
    />
  );
}
