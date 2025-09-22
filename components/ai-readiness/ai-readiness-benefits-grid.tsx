"use client";

import { Container } from "@/components/global/container";
import { Typography } from "@/components/global/typography";
import { IconBullet } from "@/components/global/icon_bullet";

interface BenefitSection {
  id: string;
  title: string;
  subtitle: string;
  description: React.ReactNode;
  highlights: string[];
  impact: string;
  quote: {
    text: string;
    source: string;
    url: string;
  };
}

const benefits: BenefitSection[] = [
  {
    id: "starting-point",
    title: "Thailand's AI Potential Meets Global Urgency",
    subtitle: "Where we stand today: why we can't afford to wait",
    description: (
      <>
        Thailand's investing boldly: ฿25B government plan for 2026-2027, $15.4B infra by 2027, and hyperscaler regions live.

        Yet, Deloitte 2025 notes 95% cite expertise gaps, Cisco shows 43% data readiness: holding us back.

        Globally, AI fuels $4.4 trillion in productivity by 2030 (McKinsey), with US firms reaping 1.5% annual growth by 2035 (Wharton).

        This urgency is real: Integrate GenAI now for internal wins like streamlined chats and agents, or risk falling behind.
      </>
    ),
    highlights: [
      "74% of Thai firms plan AI adoption",
      "Only 18% using it today vs 65% in US",
      "$4.4T global productivity by 2030",
      "95% cite expertise gaps as blocker"
    ],
    impact: "Join the global leaders or risk falling behind",
    quote: {
      text: "Organizations are beginning to take steps that drive bottom-line impact: for example, reallocating resources to focus on value creation and scaling AI across the enterprise.",
      source: "McKinsey's \"The state of AI\" report, March 2025",
      url: "#"
    }
  },
  {
    id: "unlocking-value",
    title: "Scale, Control, and Growth That Multiplies",
    subtitle: "From millions in new revenue to 60%+ productivity gains",
    description: (
      <>
        GenAI's powerhouse: <strong>Massive Scale</strong>: Enterprises multiply operations through intelligent internal tools like agents automating workflows, per McKinsey's projections.

        <strong>Complete Control</strong>: Own your AI to avoid proprietary pitfalls, ensuring reliable performance across finance, manufacturing, and services.

        <strong>Accelerated Growth</strong>: Custom AI for your industry: Chat assistants for quick queries in retail, code tools boosting dev speed in tech by 10-30% (Deloitte).

        Across sectors, this scales: PwC 2025 predicts exponential growth, unlocking returns that compound over time.
      </>
    ),
    highlights: [
      "$3M+ annual gains from agentic AI",
      "60%+ productivity improvements",
      "10-30% faster development cycles",
      "Exponential scaling across industries"
    ],
    impact: "Multiply your growth trajectory with AI",
    quote: {
      text: "Impact: More than 60 percent potential productivity gain and expected savings of more than $3 million annually.",
      source: "McKinsey's \"Seizing the agentic AI advantage,\" June 2025",
      url: "#"
    }
  },
  {
    id: "shift-to-creator",
    title: "From Passive Users to Active Co-Creators of AI-Powered Growth",
    subtitle: "Building unfair advantages through intelligent collaboration",
    description: (
      <>
        Leaders thrive on collaboration: iterating GenAI tools like agents for internal efficiency, per Harvard Business Review's productivity research.

        This shift creates "unfair advantages": Custom agents handle messaging in services (70% faster), analysis in finance (days to minutes), and code in tech (24% dev speed boost).

        Benefits scale across industries: manufacturing optimizes supply chains, retail personalizes internal ops: all with GenAI's intelligence amplification.
      </>
    ),
    highlights: [
      "25% enterprises deploying AI agents by 2025",
      "50% by 2027 with massive value creation",
      "70% faster service operations",
      "24% development speed improvement"
    ],
    impact: "Create unfair advantages that competitors can't match",
    quote: {
      text: "Deloitte predicts that 25% of enterprises using GenAI are expected to deploy AI agents in 2025, growing to 50% by 2027.",
      source: "Deloitte Global's \"2025 Predictions Report: Generative AI,\" November 2024",
      url: "#"
    }
  },
  {
    id: "efficiency-inclusion",
    title: "Driving Scale, Access, and Economic Growth Through Internal GenAI",
    subtitle: "Democratizing intelligence for every business level",
    description: (
      <>
        GenAI democratizes scale: SMEs access tools for unstructured data analysis (e.g., market insights), boosting inclusion.

        Benefits compound: 30-60% meeting efficiency (Microsoft), expanded capacity via agents automating routines.

        Across industries: Finance gains from instant queries, manufacturing from workflow intelligence: all scaling GenAI internally for economic growth ($1.16B Thai market, 26% CAGR, Statista 2025).
      </>
    ),
    highlights: [
      "58.5% users report output boost",
      "30-60% meeting efficiency gains",
      "$1.16B Thai AI market growth",
      "26% CAGR through 2025"
    ],
    impact: "Scale intelligence across your entire organization",
    quote: {
      text: "AI can make people more valuable, not less: even in the most highly automatable jobs.",
      source: "PwC's \"The Fearless Future: 2025 Global AI Jobs Barometer,\" 2025",
      url: "#"
    }
  },
  {
    id: "building-knowledge",
    title: "Building Knowledge for Long-Term Advantage with GenAI Tools",
    subtitle: "Creating lasting competitive advantages through AI mastery",
    description: (
      <>
        GenAI fosters knowledge: Internal tools like code editors (10-30% faster coding) and agents enable experimentation, expanding team capabilities while scaling output.

        Benefits compound: Harvard notes more productive teams; industries gain IP through tailored workflows.

        Long-term: $120B SEA GDP addition by 2027.

        This creates sustainable advantages that compound over time.
      </>
    ),
    highlights: [
      "69% of developers learn faster with AI",
      "10-30% faster coding and development",
      "$120B SEA GDP addition by 2027",
      "Sustainable competitive advantage"
    ],
    impact: "Build knowledge that compounds into lasting advantage",
    quote: {
      text: "Advances in AI and the tech/IT sector will create as much value in the next five years as it did during the previous 25.",
      source: "McKinsey's \"McKinsey technology trends outlook 2025,\" July 2025",
      url: "#"
    }
  }
];

function BenefitSection({ benefit, index }: { benefit: BenefitSection; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <Container bg={isEven ? "dark" : "darker"} pad_y="lg" className="relative">
      {/* Section header */}
      <div className="text-center mb-12">
        <Typography as="h2" variant="sectionTitle" className="mb-8">
          {benefit.title}
        </Typography>
        <Typography variant="sectionSubtitle" className="mb-6">
          {benefit.subtitle}
        </Typography>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
        <div className="space-y-6">
          {typeof benefit.description === 'string' ? (
            <Typography variant="body" className="text-neutral-300 leading-relaxed max-w-none">
              {benefit.description.split(/(?<=[.!?])\s+(?=[A-Z])/g).map((sentence, idx, arr) => (
                <span key={idx}>
                  {sentence.trim()}
                  {idx < arr.length - 1 && <><br /><br /></>}
                </span>
              ))}
            </Typography>
          ) : (
            <div className="text-neutral-300 leading-relaxed max-w-none">
              {benefit.description}
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 items-start">
            {benefit.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-3 min-h-[2.5rem]">
                <div className="w-2 h-2 bg-violet-400 flex-shrink-0 mt-2" />
                <Typography variant="body" className="text-sm text-neutral-300 leading-relaxed">
                  {highlight}
                </Typography>
              </div>
            ))}
          </div>
        </div>

          <div className="bg-neutral-100 border border-neutral-200 p-8 aspect-square flex flex-col justify-center">
            <div className="text-center mb-6">
              <Typography variant="h3" className="text-neutral-900 mb-2">
                {benefit.impact}
              </Typography>
            </div>

            <Typography variant="quote" className="text-neutral-700 mb-4">
              "{benefit.quote.text}"
            </Typography>

            <div className="text-xs text-neutral-600 text-right">
              <span className="font-medium">{benefit.quote.source}</span>
              {benefit.quote.url !== "#" && (
                <a
                  href={benefit.quote.url}
                  className="ml-2 text-violet-600 hover:text-violet-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [Read Full Report]
                </a>
              )}
            </div>
          </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />
    </Container>
  );
}

export function AiReadinessBenefitsGrid() {
  return (
    <div className="space-y-0">
      {benefits.map((benefit, index) => (
        <BenefitSection key={benefit.id} benefit={benefit} index={index} />
      ))}
    </div>
  );
}
