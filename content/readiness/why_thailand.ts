import type { FinalCtaContent, HeroContent, InsightContent, StatContent } from "./types";

export const hero: HeroContent = {
  accent: "Thailand`s AI moment",
  title: "Accelerate AI readiness in Thailand",
  subtitle:
    "Quantify the urgency, learn from local pioneers, and see how Thai-hosted AI lets you modernise without giving up control.",
  bullets: [
    "Align leadership on the regional readiness gap",
    "Scale assistants across business units on Thai infrastructure",
    "Protect strategic data while demonstrating enterprise ROI",
  ],
};

export const stats: StatContent[] = [
  {
    value: "18% vs 42%",
    description: "Thai enterprises using AI today compared with Singapore, highlighting the readiness gap.",
    sources: [
      {
        label: "PwC Thailand 2024",
        url: "https://www.pwc.com/th/en/press-room/press-release/2024/press-release-05-06-24-en.html",
      },
      {
        label: "Seasia 2025",
        url: "https://seasia.co/2025/07/16/ai-adoption-in-southeast-asia-who-leads-who-lags",
      },
    ],
  },
  {
    value: "฿2.6T",
    description: "Economic value Thailand can unlock by accelerating enterprise AI adoption.",
    sources: [
      {
        label: "Beacon VC 2025",
        url: "https://www.beaconvc.fund/research/decoding-thailands-ai-boom",
      },
    ],
  },
  {
    value: "41%",
    description: "Executives citing data security as the primary barrier to AI adoption.",
    sources: [
      {
        label: "Appsmith 2025",
        url: "https://www.appsmith.com/downloads/ebooks/Beyond-the-Hype--Appsmith-AI-Survey.pdf",
      },
    ],
  },
  {
    value: "6% GDP",
    description: "Projected uplift to Thailand&apos;s economy by 2030 if GenAI is scaled responsibly.",
    sources: [
      {
        label: "The Investor 2024",
        url: "https://theinvestor.vn/genai-set-to-increase-thai-gdp-by-6-by-2030-d13359.html",
      },
    ],
  },
  {
    value: "80,000",
    description: "AI-trained professionals still needed to meet national readiness goals.",
    sources: [
      {
        label: "TDRI 2025",
        url: "https://tdri.or.th/en/2025/06/thailand-ai-readiness-assessment-report-2025/",
      },
    ],
  },
  {
    value: "50%",
    description: "Share of GenAI adopters Deloitte expects to run AI agents by 2027, signalling how quickly the region is moving.",
    sources: [
      {
        label: "Deloitte 2025",
        url: "https://www.deloitte.com/global/en/about/press-room/deloitte-globals-2025-predictions-report.html",
      },
    ],
  },
];

export const insights: InsightContent[] = [
  {
    id: "readiness-gap",
    label: "Readiness gap",
    title: "Thailand is investing, but execution trails the region",
    description: [
      "Hyperscaler regions are live and a ฿25B national plan is underway, yet only 18 percent of Thai enterprises have integrated AI into operations.",
      "Each quarter of delay compounds the talent shortage and widens the productivity divide with regional competitors.",
    ],
    highlights: [
      "National strategy launched but adoption trails SEA peers",
      "95 percent of executives cite skills and governance blockers",
      "Delay risks forfeiting trillions of baht in new growth",
    ],
    evidence: {
      quote: "Thailand has a national AI strategy, but lacks AI-specific laws and risk-based mechanisms. A talent gap of 80,000 AI professionals persists.",
      attribution: "Thailand Development Research Institute, 2025",
      sources: [
        {
          label: "TDRI Readiness Report",
          url: "https://tdri.or.th/en/2025/06/thailand-ai-readiness-assessment-report-2025/",
        },
      ],
    },
    takeaway: "Chaeth's readiness diagnostics surface capability gaps and prioritise moves that accelerate enterprise rollout without sacrificing governance.",
  },
  {
    id: "value-case",
    label: "Enterprise value",
    title: "Thai enterprises can capture outsized gains by scaling now",
    description: [
      "PwC projects up to a six percent GDP uplift for Thailand if AI adoption accelerates. Early movers are already compressing launch cycles and redeploying talent to higher-value work.",
      "Boards expect more than experiments—agentic workflows and change management prove value across whole business units.",
    ],
    highlights: [
      "SEA pioneers ship faster with AI-enabled teams",
      "Deloitte sees half of adopters deploying agents by 2027",
      "Thai leaders cite growth and efficiency, not hype",
    ],
    evidence: {
      quote: "Organizations are reallocating resources to focus on value creation and scaling AI across the enterprise.",
      attribution: "McKinsey, The State of AI 2025",
      sources: [
        {
          label: "McKinsey State of AI",
          url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
        },
        {
          label: "Deloitte GenAI Predictions",
          url: "https://www.deloitte.com/global/en/about/press-room/deloitte-globals-2025-predictions-report.html",
        },
      ],
    },
    takeaway: "Chaeth co-designs Thai-hosted AI rollouts that tie directly to KPIs, revenue, and productivity improvements.",
  },
  {
    id: "trust-control",
    label: "Trust",
    title: "Security and compliance demand a private AI foundation",
    description: [
      "Forty-one percent of Thai executives cite data security as the primary barrier to AI adoption, while PDPA requires purpose-bound usage and auditability.",
      "Private, Thai-hosted infrastructure lets teams move quickly without sending sensitive data to foreign clouds.",
    ],
    highlights: [
      "PDPA compliance needs transparent data governance",
      "Risk teams require audit trails and retention controls",
      "Private deployments keep strategic data in-country",
    ],
    evidence: {
      quote: "Data and data security remain major concerns—41 percent report security as the primary barrier to AI adoption.",
      attribution: "Appsmith, Beyond the Hype Survey 2025",
      sources: [
        {
          label: "Appsmith AI Survey",
          url: "https://www.appsmith.com/downloads/ebooks/Beyond-the-Hype--Appsmith-AI-Survey.pdf",
        },
        {
          label: "Bangkok Post, Data Quality",
          url: "https://www.bangkokpost.com/business/general/3051260/data-quality-concerns-a-barrier-to-adoption-of-ai",
        },
      ],
    },
    takeaway: "Chaeth delivers Thai-hosted deployments with the controls, audit trails, and integrations risk teams need before scaling enterprise AI.",
  },
  {
    id: "local-momentum",
    label: "Momentum",
    title: "Local pioneers prove the model for responsible adoption",
    description: [
      "Thai financial leaders such as SCBX and KBTG have set AI-first roadmaps, pairing talent programmes with automation to hit growth targets.",
      "National initiatives are aligning regulators, enterprises, and universities—standing still means losing ground to peers already scaling.",
    ],
    highlights: [
      "SCBX published an AI outlook guiding subsidiaries",
      "KBTG&apos;s 5+1 pillars focus on productivity and services",
      "Government programmes accelerate nationwide adoption",
    ],
    evidence: {
      quote: "AI adoption for all stakeholders nationwide is an unavoidable move to help boost Thailand&apos;s GDP.",
      attribution: "Bangkok Post, Nationwide AI Adoption Initiative, 2025",
      sources: [
        {
          label: "Bangkok Post Initiative",
          url: "https://www.bangkokpost.com/business/general/3105138/new-initiative-targets-nationwide-ai-adoption",
        },
        {
          label: "SCBX AI Outlook",
          url: "https://www.scbx.com/en/news/scbx-ai-outlook-2025/",
        },
        {
          label: "KBTG AI Pillars",
          url: "https://www.kasikornbank.com/en/news/pages/ai_5plus1.aspx",
        },
      ],
    },
    takeaway: "We translate proven Thai playbooks into other sectors so you accelerate learning and deliver trusted AI experiences at scale.",
  },
];

export const finalCta: FinalCtaContent = {
  title: "Turn Thailand's AI readiness into market leadership",
  message: "Elevate intelligence across every team so customer moments, decisions, and delivery move faster.",
  bullets: [
    "Align executives and operators on measurable AI gains",
    "Launch Thai-hosted automation that sharpens every service",
    "Track adoption, compliance, and revenue in a single playbook",
  ],
  closing: "Chaeth partners with Thai enterprises to convert readiness into lasting market leadership on sovereign infrastructure.",
};
