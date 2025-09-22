"use client";

import { InsightSection } from "@/components/readiness";
import { insights } from "@/content/readiness/why_thailand";

export function ThaiInsights() {
  return (
    <div className="space-y-0">
      {insights.map((section, index) => (
        <InsightSection key={section.id} content={section} index={index} />
      ))}
    </div>
  );
}
