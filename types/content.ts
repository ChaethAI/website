export type Locale = "en" | "th";

export type CardItem = {
  id: string;
  category: string;
  title: string;
  sentence: string;
  href: string;
  graphicSide: "left" | "right";
  graphicLabel?: string;
};

export type DialogCopy = {
  title: string;
  body: string;
};

export type CompactFeature = {
  id: string;
  category: string;
  title: string;
  blurb?: string;
  iconKey?: string;
};

export type CaseStudy = {
  id: string;
  hero: string;
  logo?: string;
  title: string;
  body: string;
  meta?: string;
  href?: string;
};

export type SiteContent = {
  useCases: CardItem[];
  useCasePills: string[];
  useCaseDialogs: Record<string, DialogCopy>;

  explainers: CardItem[];
  explainerDialogs: Record<string, DialogCopy>;

  compactFeatures: CompactFeature[];
  caseStudies: CaseStudy[];
  ui: {
    readMore: string;
    headings: {
      features: string;
      useCases: string;
      compact: string;
      caseStudies: string;
    };
  };
};
