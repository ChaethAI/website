"use client";

import { AiReadinessHero } from "@/components/readiness_ai_page/ai-hero";
import { AiReadinessStatisticsGrid } from "@/components/readiness_ai_page/ai-statis-grid";
import { AiReadinessBenefitsGrid } from "@/components/readiness_ai_page/ai-benefits-grid";
import { AiReadinessFinalCTA } from "@/components/readiness_ai_page/ai-final-cta";

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
