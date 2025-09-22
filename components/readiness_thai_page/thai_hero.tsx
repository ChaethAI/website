"use client";

import { HeroSection } from "@/components/readiness_components/hero_section";
import type { HeroContent } from "@/content/readiness/types";
import type { ReactNode } from "react";

interface ReadinessHeroProps {
  content: HeroContent;
  actions?: ReactNode;
}

export function ThaiHero({ content, actions }: ReadinessHeroProps) {
  return (
    <HeroSection
      accent={content.accent}
      title={content.title}
      subtitle={content.subtitle}
      bullets={content.bullets}
      actions={actions}
    />
  );
}
