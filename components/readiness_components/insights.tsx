"use client";

import { InsightSection, type InsightContent } from "@/components/readiness_components/insight_section";

interface ReadinessInsightsProps {
  sections: InsightContent[];
}

export function ReadinessInsights({ sections }: ReadinessInsightsProps) {
  return (
    <div className="space-y-0">
      {sections.map((section, index) => (
        <InsightSection key={section.id} content={section} index={index} />
      ))}
    </div>
  );
}
