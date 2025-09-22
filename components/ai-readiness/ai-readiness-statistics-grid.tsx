"use client";

import { StatsGrid } from "@/components/readiness";
import { stats } from "@/content/readiness/why_ai";

export function AiReadinessStatisticsGrid() {
  return (
    <StatsGrid
      heading="Global AI adoption signals"
      subheading="Benchmarks that show why forward-looking enterprises are investing now."
      stats={stats}
    />
  );
}
