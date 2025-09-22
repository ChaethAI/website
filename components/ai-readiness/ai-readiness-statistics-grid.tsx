"use client";

import { Container } from "@/components/global/container";
import { Typography } from "@/components/global/typography";

interface StatItem {
  number: string;
  description: string;
  source: string;
  sourceUrl: string;
}

const stats: StatItem[] = [
  {
    number: "74%",
    description: "Of Thai firms plan AI adoption, but only 18% are using it today—while the US surges ahead with 65% GenAI integration",
    source: "PwC Thailand 2025",
    sourceUrl: "#"
  },
  {
    number: "$3M+",
    description: "Annual savings from agentic AI in enterprise operations, with 60%+ productivity gains",
    source: "McKinsey 2025",
    sourceUrl: "#"
  },
  {
    number: "25%",
    description: "Of enterprises deploying AI agents by 2025, surging to 50% by 2027—driving massive value creation",
    source: "Deloitte Global 2025",
    sourceUrl: "#"
  },
  {
    number: "58.5%",
    description: "Users report AI boosts output, enabling inclusion and scale",
    source: "PwC 2025",
    sourceUrl: "#"
  },
  {
    number: "69%",
    description: "Of devs learn new techniques faster with AI, building lasting knowledge",
    source: "Stack Overflow 2025",
    sourceUrl: "#"
  },
  {
    number: "$4.4T",
    description: "Global productivity from AI by 2030—Thailand can claim its share",
    source: "McKinsey",
    sourceUrl: "#"
  }
];

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  return (
    <div className="bg-neutral-800 p-6 h-80 flex flex-col">
      {/* Top half - Number only */}
      <div className="flex-1 flex items-center justify-center">
        <Typography variant="h1" className="text-white !text-4xl md:!text-5xl lg:!text-6xl !font-light !tracking-tight !text-center">
          {stat.number}
        </Typography>
      </div>

      {/* Bottom half - Description and Source */}
      <div className="flex-1 flex flex-col justify-center">
        <p className="text-neutral-300 text-sm leading-relaxed text-center max-w-prose mb-3">
          {stat.description}
        </p>
        <div className="text-xs text-neutral-500 font-medium text-center">
          <span>{stat.source}</span>
          {stat.sourceUrl !== "#" && (
            <a
              href={stat.sourceUrl}
              className="ml-2 text-violet-400 hover:text-violet-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              [Read Report]
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function AiReadinessStatisticsGrid() {
  return (
    <Container bg="darker" pad_y="lg">
      <div className="text-center mb-16">
        <Typography as="h2" variant="sectionTitle">
          Thailand's AI Reality Check
        </Typography>
        <Typography variant="sectionSubtitle">
          The numbers don't lie—AI adoption is accelerating globally, and Thailand's future depends on joining the race now.
        </Typography>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} index={index} />
        ))}
      </div>
    </Container>
  );
}
