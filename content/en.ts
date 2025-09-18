import { SiteContent } from "@/types/content";
import { enCaseStudies } from "./case_studies";

const en: SiteContent = {
  navbar: {
    links: [
      { label: "Features", href: "#features" },
      { label: "Use Cases", href: "#use-cases" },
      { label: "Pricing", href: "#pricing" },
    ],
    action: { label: "Try Now", href: "https://demo.chaeth.com", target: "_blank", rel: "noopener noreferrer" },
  },
  hero: {
    badge: "🇹🇭 Data residency in Thailand",
    title: { preEmphasis: "Local-first", main: "AI", postLine: "for Thai enterprises" },
    subtitle: "Professional Class AI for Your Enterprise",
    demo: { label: "Try now", href: "https://demo.chaeth.com", target: "_blank", rel: "noopener noreferrer" },
  },
  ui: {
    readMore: "Read more",
    headings: {
      features: "Augment All of Your Work on One Integrated, Secure Platform",
      useCases: "Use Cases",
      compact: "Enterprise-ready Local-AI",
      caseStudies: "Case Studies",
    },
    subtitles: {
      useCases: "Discover how Chaeth transforms customer interactions across various industries",
    },
  },
  introHighlights: [
    { id: "thai_language", label: "Thai / English language", iconKey: "thai" },
    { id: "pdpa", label: "PDPA compliance", iconKey: "pdpa" },
    { id: "enterprise_security", label: "Enterprise security", iconKey: "shield" },
  ],
  

  explainers: [
    {
      id: "hosted",
      category: "Residency",
      title: "Hosted in Thailand",
      sentence: "Deployed on Thai cloud/GPU providers; data at rest and in transit all encrypted in Thailand. Shared or dedicated options",
      href: "/residency",
      graphicSide: "left",
    },
    {
      id: "privacy",
      category: "Privacy",
      title: "No training on your data",
      sentence: "Your data stays yours, with retention controls and a full audit trail.",
      href: "/privacy",
      graphicSide: "right",
    },
    {
      id: "sso",
      category: "Identity",
      title: "Single sign‑on (SSO) that fits",
      sentence: "SAML 2.0 / OIDC integration, regular social SSO (e.g., Google), optional SCIM or LDAP sync, and granular RBAC.",
      href: "/sso",
      graphicSide: "left",
    },
  ],
  explainerDialogs: {
    hosted: {
      title: "Hosted in Thailand",
      body:
        "Hosted on Thai cloud and GPU servers so data at rest remains in Thailand by default. We host and manage the AI models ourselves, offering shared or dedicated servers and GPUs based on your workload needs and performance expectations. Scaling is handled automatically to match your usage patterns. Options include VPC peering or Private Link, private subnets with no public egress, and customer‑managed keys (KMS/BYOK) where supported by your provider. Encryption in transit (TLS 1.2+) and at rest (AES‑256) are standard. Controls support PDPA (Thailand) data residency and cross‑border transfer requirements (e.g., defined purposes, consent or other legal basis). Retention policies, in‑country disaster recovery, and detailed audit logs support compliance reviews.",
    },
    privacy: {
      title: "No training on your data",
      body:
        "No training on your prompts or outputs, your data stays your data. Retrieval is restricted to the sources you configure and can be kept in your network. Fine‑grained retention windows, export, and deletion help meet PDPA obligations (consent, purpose limitation, DSAR). Full audit trail captures who accessed what, when, and with which model/integration. Optional safeguards include prompt/output redaction, content logging controls, DLP checks, and outbound egress restrictions so information never leaves your control.",
    },
    sso: {
      title: "Single sign‑on (SSO) that fits",
      body:
        "Integrate with your identity provider via SAML 2.0 or OpenID Connect (OIDC). Map groups/attributes to roles for least‑privilege RBAC. Support for SCIM 2.0 or LDAP directory sync where available enables automated provisioning and de‑provisioning. Enforce enterprise policies such as MFA at the IdP, session timeouts, IP allowlists, and device posture checks. Tested with common IdPs (e.g., Azure AD/Microsoft Entra, Google Workspace, Okta). Clear, exportable audit logs support compliance and internal review.",
    },
  },

  compactFeatures: [
    {
      id: "residency",
      category: "Residency",
      title: "Thai-hosted infrastructure",
      blurb:
        "Deploy on Thai cloud/GPU providers; data at rest stays in Thailand (PDPA‑aligned). Shared or dedicated servers/GPUs; on‑prem optional.",
      iconKey: "server",
    },
    { id: "experience", category: "Experience", title: "Mobile‑first", blurb: "Responsive UI, Thai language, PWA install, and passkeys where supported—built for teams on the go.", iconKey: "smartphone" },
    { id: "security", category: "Security", title: "Enterprise-Grade Security", blurb: "Industry-standard protection with zero training on your data.", iconKey: "shield" },
    { id: "workflows", category: "Workflows", title: "Agentic Workflows", blurb: "Expert-quality work product for complex flows without prompting.", iconKey: "bot" },
    { id: "models", category: "Models", title: "Domain-Specific Models", blurb: "High-performing custom models for complex professional work.", iconKey: "brain" },
    { id: "support", category: "Support", title: "24/7 Customer Support", blurb: "White glove support to maximize your experience.", iconKey: "headphones" },
    { id: "audit", category: "Auditability", title: "Auditable by Design", blurb: "Traceable actions and reproducible outputs with tamper-evident logs.", iconKey: "scrollText" },
  ],

  useCases: [
    {
      id: "exec",
      category: "Executive",
      title: "Executive & Knowledge Work Acceleration",
      sentence: "Briefings, meeting prep, and first‑draft docs in minutes.",
      href: "#",
      graphicSide: "right",
      graphicLabel: "Executive briefings",
    },
    {
      id: "sales",
      category: "Sales",
      title: "Sales & Marketing Acceleration",
      sentence: "Faster RFPs, follow‑ups, and on‑brand campaign drafts.",
      href: "#",
      graphicSide: "right",
      graphicLabel: "Sales & campaigns",
    },
    {
      id: "dev",
      category: "Developer",
      title: "Software Development & IT Productivity",
      sentence: "Speed up coding, debugging, reviews, and runbooks.",
      href: "#",
      graphicSide: "right",
      graphicLabel: "Code & runbooks",
    },
    {
      id: "support",
      category: "Support",
      title: "Customer Support & Internal Operations",
      sentence: "Suggested replies, triage, and rapid policy lookups.",
      href: "#",
      graphicSide: "right",
      graphicLabel: "Agent assist",
    },
    {
      id: "analysts",
      category: "Analysts",
      title: "Data Analysis & Reporting for Non-Analysts",
      sentence: "Ask spreadsheets, auto‑SQL, and instant charts and summaries.",
      href: "#",
      graphicSide: "right",
      graphicLabel: "Sheets to insights",
    },
  ],
  useCasePills: ["Executive", "Sales", "Developer", "Support", "Analysts"],
  useCaseDialogs: {
    exec: {
      title: "Empowering Executives with Strategic AI",
      body:
        "Who: CEOs, COOs, chiefs of staff, program managers, and analysts. What: AI crafts concise briefings, preps for high-stakes meetings, drafts policy memos, builds decision matrices, creates board presentations, and translates documents (e.g., Thai to English). How it helps: AI slashes research time, distills complex data into actionable insights, and automates repetitive tasks like email drafting. Imagine preparing a board deck in hours instead of days, with AI pulling market trends and competitor analysis instantly. Why it matters: Executives make faster, sharper decisions without drowning in prep work, staying focused on strategy. Example: A CEO uses AI to summarize a 50-page industry report into a one-page brief in minutes, then generates a tailored presentation for investors, saving a full day’s work."
    },
    sales: {
      title: "Supercharging Sales & Marketing with AI",
      body:
        "Who: Sales reps, account managers, marketing teams, and presales. What: AI generates polished RFP responses, personalized proposals, discovery call summaries, follow-up emails, campaign ideas, and localized content (e.g., Thai market copy). How it helps: AI cuts drafting time by up to 70%, ensures brand-consistent messaging, and reuses top-performing content. Picture a sales rep closing deals faster by using AI to tailor a proposal for a Thai client in real time, or a marketer launching a campaign with AI-generated visuals and copy in hours. Why it matters: Teams hit quotas faster, engage buyers with precision, and scale personalized outreach. Example: A marketing team uses AI to create a multilingual email campaign, saving 20 hours a week while boosting open rates by 15%."
    },
    dev: {
      title: "Accelerating Development & IT with AI",
      body:
        "Who: Software engineers, DevOps, IT admins, and service desk teams. What: AI writes code in unfamiliar languages, debugs errors, reviews APIs, drafts technical docs, automates infrastructure scripts, and summarizes incidents. How it helps: AI speeds up coding by suggesting fixes in seconds, unblocks teams from waiting on specialists, and simplifies complex tasks like writing Terraform scripts or Python automation. Imagine an engineer resolving a production bug in minutes with AI’s step-by-step debug guidance. Why it matters: Teams ship code faster, reduce downtime, and focus on innovation over repetitive tasks. Example: A DevOps team uses AI to generate a Kubernetes deployment script, cutting setup time from two days to two hours."
    },
    support: {
      title: "Transforming Customer Support & Operations with AI",
      body:
        "Who: Contact center agents, HR help desks, finance ops, and internal support teams. What: AI suggests real-time chat responses, triages tickets, retrieves policy answers, drafts resolution summaries, and compiles weekly operational reports. How it helps: AI boosts first-contact resolution by 30%, speeds up responses with consistent tone, and automates repetitive workflows like ticket categorization. Picture a support agent resolving a customer issue in one chat by using AI’s instant policy lookup and suggested reply. Why it matters: Happier customers, less agent burnout, and streamlined operations. Example: A call center uses AI to automate 40% of routine inquiries, freeing agents to handle complex cases and improving customer satisfaction by 20%."
    },
    analysts: {
      title: "Democratizing Data Insights with AI",
      body:
        "Who: Managers, marketers, and ops teams needing data insights without deep BI skills. What: AI answers spreadsheet queries, generates SQL, creates instant charts, summarizes dashboards, and writes narrative business updates. How it helps: AI turns raw data into clear insights in minutes, bypassing the need for data team bottlenecks. Imagine a manager uploading a messy CSV and getting a polished revenue trend chart with a written summary for the next team meeting. Why it matters: Non-analysts make data-driven decisions quickly, without waiting days for reports. Example: A sales manager uses AI to analyze a 10,000-row dataset, generating a weekly performance report in 15 minutes instead of three days."
    },
  },

  pricing: {
    title: "Pricing Plans",
    subtitle: "Scale intelligence in Thailand.",
    plans: [
      {
        id: "shared",
        title: "Shared",
        features: [
          "Thai residency",
          "Social login",
          "Shared DB/GPU",
          "Managed models",
          "Basic RBAC",
          "Standard backups",
          "Email support",
          "Low cost",
        ],
        buttonLabel: "Contact Sales",
      },
      {
        id: "enterprise",
        title: "Enterprise",
        features: [
          "Thai residency",
          "SAML / OIDC",
          "Single-tenant servers",
          "Private GPUs",
          "Custom model deploy",
          "SCIM / LDAP",
          "VPC / Private Link",
          "24/7 support",
          "SLA / Audit logs",
          "Custom pricing",
        ],
        buttonLabel: "Contact Sales",
      },
    ],
  },

  caseStudies: enCaseStudies,
  cta: {
    title: "Interested to unleash AI across your organization?",
    subtitle: "Tell us about your environment and goals. Let's plan a pilot.",
    primary: { label: "Get in touch", href: "mailto:sales@chaeth.com" },
  },
  footer: {
    brandName: "Chaeth",
    tagline: "Local‑first AI in Thailand",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Demo", href: "https://demo.chaeth.com", target: "_blank", rel: "noopener noreferrer" },
      { label: "Contact", href: "mailto:sales@chaeth.com" },
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
    ],
    legal: { copyrightBrand: "Chaeth" },
  },
};

export default en;
