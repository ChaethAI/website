"use client";

import { StatsGrid } from "@/components/readiness_components";
import { stats } from "@/content/readiness/ai_en";

export function AiReadinessStatisticsGrid() {
  return (
    <StatsGrid
      heading="Global AI adoption signals"
      subheading="Benchmarks that show why forward-looking enterprises are investing now."
      stats={stats}
    />
  );
}
