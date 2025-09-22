"use client";

import { AiReadinessHero } from "@/components/readiness_ai_page/ai-readiness-hero";
import { AiReadinessStatisticsGrid } from "@/components/readiness_ai_page/ai-readiness-statistics-grid";
import { AiReadinessBenefitsGrid } from "@/components/readiness_ai_page/ai-readiness-benefits-grid";
import { AiReadinessFinalCTA } from "@/components/readiness_ai_page/ai-readiness-final-cta";

export default function AiEducationPage() {
  return (
    <>
      <AiReadinessHero />
      <AiReadinessStatisticsGrid />
      <AiReadinessBenefitsGrid />
      <AiReadinessFinalCTA />
    </>
  );
}
