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

export type NavLink = {
  label: string;
  href: string;
  target?: string;
  rel?: string;
};

export type NavbarContent = {
  links: NavLink[]; // middle navigation links
  action?: NavLink; // right-side action (e.g., Try Now)
};

export type HeroContent = {
  badge?: string;
  title: {
    preEmphasis?: string; // e.g., "Local-first"
    main: string; // e.g., "AI"
    postLine?: string; // e.g., "for Thai enterprises"
  };
  subtitle?: string;
  demo?: NavLink; // e.g., Try now
};

export type FooterContent = {
  brandName: string;
  tagline?: string;
  links: NavLink[]; // footer nav
  legal?: {
    copyrightBrand?: string; // defaults to brandName if omitted
  };
};

export type CtaContent = {
  title: string;
  subtitle?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export type SiteContent = {
  // Small icon + label items shown in the intro section
  introHighlights?: { id: string; label: string; iconKey: string }[];
  navbar: NavbarContent;
  hero: HeroContent;
  useCases: CardItem[];
  useCasePills: string[];
  useCaseDialogs: Record<string, DialogCopy>;

  explainers: CardItem[];
  explainerDialogs: Record<string, DialogCopy>;

  compactFeatures: CompactFeature[];
  caseStudies: CaseStudy[];
  cta: CtaContent;
  footer: FooterContent;
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
