"use client";

import { InsightSection } from "@/components/readiness_components";
import { insights } from "@/content/readiness/thailand_en";

export function ThaiInsights() {
  return (
    <div className="space-y-0">
      {insights.map((section, index) => (
        <InsightSection key={section.id} content={section} index={index} />
      ))}
    </div>
  );
}
