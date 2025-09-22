"use client";

import { StatsGrid } from "@/components/readiness_components/stats_grid";
import type { StatContent } from "@/content/readiness/types";

interface ReadinessStatsProps {
  heading: string;
  subheading?: string;
  stats: StatContent[];
}

export function ReadinessStats({ heading, subheading, stats }: ReadinessStatsProps) {
  return <StatsGrid heading={heading} subheading={subheading} stats={stats} />;
}
