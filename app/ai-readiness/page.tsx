"use client";

import { AiReadinessHero } from "@/components/ai-readiness/ai-readiness-hero";
import { AiReadinessStatisticsGrid } from "@/components/ai-readiness/ai-readiness-statistics-grid";
import { AiReadinessBenefitsGrid } from "@/components/ai-readiness/ai-readiness-benefits-grid";
import { AiReadinessFinalCTA } from "@/components/ai-readiness/ai-readiness-final-cta";

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
