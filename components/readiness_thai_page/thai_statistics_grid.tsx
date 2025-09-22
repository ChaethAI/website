"use client";

import { StatsGrid } from "@/components/readiness_components";
import { stats } from "@/content/readiness/why_thailand";

export function ThaiStatisticsGrid() {
  return (
    <StatsGrid
      heading="Thailand&apos;s AI reality check"
      subheading="Regional peers are compounding value while local readiness gaps persist."
      stats={stats}
    />
  );
}
