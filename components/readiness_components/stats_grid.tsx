"use client";

import { Container } from "@/components/global/container";
import { Typography } from "@/components/global/typography";

export interface StatSource {
  label: string;
  url?: string;
}

export interface StatItem {
  value: string;
  description: string;
  sources: StatSource[];
}

interface StatsGridProps {
  background?: "dark" | "darker";
  heading: string;
  subheading?: string;
  stats: StatItem[];
}

export function StatsGrid({ background = "darker", heading, subheading, stats }: StatsGridProps) {
  return (
    <Container bg={background} pad_y="lg">
      <div className="text-center mb-16">
        <Typography as="h2" variant="sectionTitle" className="mb-4">
          {heading}
        </Typography>
        {subheading ? (
          <Typography variant="sectionSubtitle" className="mb-0">
            {subheading}
          </Typography>
        ) : null}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.value} className="flex h-80 flex-col bg-neutral-800 p-6">
            <div className="flex flex-1 items-center justify-center">
              <Typography variant="h1" className="text-white !text-4xl md:!text-5xl lg:!text-6xl !font-light !tracking-tight !text-center">
                {stat.value}
              </Typography>
            </div>

            <div className="flex flex-1 flex-col justify-center">
              <p className="mb-3 max-w-prose text-center text-sm leading-relaxed text-neutral-300">
                {stat.description}
              </p>
              <div className="space-y-1 text-center text-xs font-medium text-neutral-500">
                {stat.sources.map(({ label, url }) => (
                  <div key={label}>
                    {url ? (
                      <a
                        href={url}
                        className="text-violet-300 transition-colors hover:text-violet-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {label}
                      </a>
                    ) : (
                      <span>{label}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
