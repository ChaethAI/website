import type { HeroContent, InsightContent, StatContent } from "./types";

export const hero: HeroContent = {
  accent: "Why AI matters now",
  title: "Scale intelligence across your entire enterprise",
  subtitle:
    "Understand how leaders translate AI vision into organisation-wide gains—and how Chaeth keeps velocity and governance aligned.",
  bullets: [
    "Map high-impact workflows across every business function",
    "Deploy trusted assistants that accelerate whole teams",
    "Keep control of data while expanding AI capacity",
  ],
};

export const stats: StatContent[] = [
  {
    value: "74%",
    description: "Thai firms planning AI adoption this year—even as only 18 percent have deployed it in production.",
    sources: [{ label: "PwC Thailand" }],
  },
  {
    value: "$4.4T",
    description: "Global productivity McKinsey expects AI to unlock by 2030 for organisations that scale it deliberately.",
    sources: [{ label: "McKinsey" }],
  },
  {
    value: "60%+",
    description: "Potential productivity gain from agentic AI according to McKinsey&apos;s enterprise studies.",
    sources: [{ label: "McKinsey" }],
  },
  {
    value: "25%",
    description: "Share of GenAI adopters deploying AI agents in 2025, doubling to 50 percent by 2027.",
    sources: [{ label: "Deloitte" }],
  },
  {
    value: "58.5%",
    description: "Knowledge workers reporting higher output with AI-enabled workflows.",
    sources: [{ label: "PwC" }],
  },
  {
    value: "69%",
    description: "Developers who learn faster with AI support, accelerating product delivery.",
    sources: [{ label: "Stack Overflow" }],
  },
];

export const insights: InsightContent[] = [
  {
    id: "starting-point",
    label: "Starting point",
    title: "Investment is accelerating faster than execution",
    description: [
      "Organisations everywhere are funding AI platforms, yet many teams still struggle to convert ambition into measurable outcomes.",
      "Bridging the gap means sequencing adoption so every function sees impact—not just a proof of concept in a lab.",
    ],
    highlights: [
      "Talent and governance remain top blockers",
      "Execution pace determines competitive advantage",
      "Delay widens the productivity divide",
    ],
    evidence: {
      quote: "Organizations are reallocating resources to focus on value creation and scaling AI across the enterprise.",
      attribution: "McKinsey, The State of AI",
      sources: [{ label: "McKinsey" }],
    },
    takeaway: "Build an adoption roadmap that sequences wins across business units while aligning risk, security, and change management.",
  },
  {
    id: "enterprise-value",
    label: "Enterprise value",
    title: "AI compounds growth when you own the operating model",
    description: [
      "Agentic workflows reclaim hours, while custom assistants augment sales, operations, and engineering teams in parallel.",
      "Owning the full stack ensures reliability, compliance, and continuous improvement as models advance.",
    ],
    highlights: [
      "Automate repetitive tasks and redeploy talent",
      "Deliver faster customer and employee experiences",
      "Blend automation with human oversight for scale",
    ],
    evidence: {
      quote: "Impact: more than 60 percent potential productivity gain and expected savings of more than three million dollars annually.",
      attribution: "McKinsey, Agentic AI Advantage",
      sources: [{ label: "McKinsey" }],
    },
    takeaway: "Design operating models where AI becomes a core service layer supporting every team, not a side experiment.",
  },
  {
    id: "team-dynamics",
    label: "Teams",
    title: "High-performing teams co-create with AI",
    description: [
      "Leaders invite teams to iterate on AI tooling, capturing improvements in responsiveness, analysis, and product cycles.",
      "When adoption is inclusive, AI becomes the workflow fabric that accelerates outcomes for everyone.",
    ],
    highlights: [
      "Service operations resolve requests up to 70% faster",
      "Finance teams turn insights around in minutes",
      "Engineering sprints accelerate by more than 20%",
    ],
    evidence: {
      quote: "AI adoption unlocks unfair advantages when teams co-create the workflows that scale.",
      attribution: "Industry research",
      sources: [{ label: "Industry reports" }],
    },
    takeaway: "Stand up cross-functional squads that launch assistants, collect feedback, and roll improvements across the organisation.",
  },
  {
    id: "knowledge",
    label: "Knowledge",
    title: "Data and expertise compound when AI is embedded",
    description: [
      "AI accelerates how teams learn, document, and share knowledge—building proprietary insights that grow in value.",
      "When knowledge moves from individuals into managed systems, onboarding, governance, and innovation all accelerate.",
    ],
    highlights: [
      "Developers report faster learning and delivery",
      "Knowledge bases stay fresh through AI curation",
      "Insights travel across teams without friction",
    ],
    evidence: {
      quote: "Advances in AI will create as much value in the next five years as in the previous twenty-five.",
      attribution: "McKinsey, Technology Trends Outlook",
      sources: [{ label: "McKinsey" }],
    },
    takeaway: "Invest in AI-enhanced knowledge systems so expertise compounds and remains under your control.",
  },
];

export const finalCta = {
  title: "Build your enterprise AI program",
  subtitle:
    "Brief leadership, align on the opportunity, and launch an adoption journey that scales trusted AI across the organisation.",
  madeBy: "Made by a team of former",
};
