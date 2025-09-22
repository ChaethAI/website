export type SourceLink = {
  label: string;
  url?: string;
};

export type HeroContent = {
  accent?: string;
  title: string;
  subtitle?: string;
  bullets?: string[];
};

export type StatContent = {
  value: string;
  description: string;
  sources: SourceLink[];
};

export type InsightEvidence = {
  quote: string;
  attribution: string;
  sources: SourceLink[];
};

export type InsightContent = {
  id: string;
  label: string;
  title: string;
  description: string[];
  highlights: string[];
  evidence: InsightEvidence;
  takeaway: string;
};

export type FinalCtaContent = {
  title: string;
  message: string;
  bullets?: string[];
  closing?: string;
};
