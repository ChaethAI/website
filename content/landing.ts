import { SiteContent } from "@/types/content";

const en: SiteContent = {
  ui: {
    readMore: "Read more",
    headings: {
      features: "Augment All of Your Work on One Integrated, Secure Platform",
      useCases: "How Local AI Helps Your Teams",
      compact: "Enterprise-ready local AI",
      caseStudies: "Case Studies",
    },
  },
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
      title: "Executive & Knowledge Work Acceleration",
      body:
        "Who: executives, chiefs of staff, PMs, analysts. What: briefings, meeting prep, first‑draft docs and policy memos, decision tables, board packs, email replies, and Thai/English translation. Why AI: faster research and ideation with structured outputs on demand and fewer handoffs. Proof: OpenAI’s enterprise guides highlight ‘research’ and ‘ideation/strategy’ as core primitives and show document uploads + web research producing structured briefings quickly. Source: OpenAI CDN.",
    },
    sales: {
      title: "Sales & Marketing Acceleration",
      body:
        "Who: sales, presales, marketing. What: RFP answers, proposals, discovery call summaries, follow‑ups, campaign briefs, localized copy, CRM notes. Why AI: reduces drafting time, keeps tone on‑brand, reuses best content, and localizes for Thai buyers. Proof: OpenAI case examples include teams drafting campaigns and sales materials; Promega saved 135 hours in six months on first‑draft email campaigns. Source: OpenAI CDN.",
    },
    dev: {
      title: "Software Development & IT Productivity",
      body:
        "Who: engineers, DevOps, IT service desks. What: code generation in unfamiliar languages, debugging, API review, doc writing, infra scripts, runbook lookups, incident summaries. Why AI: shortens feedback loops and unblocks tasks that usually wait for specialists. Proof: OpenAI positions ‘coding’ as a core primitive and showcases engineering teams using ChatGPT to speed debugging and syntax in non‑intuitive stacks. Source: OpenAI CDN.",
    },
    support: {
      title: "Customer Support & Internal Operations",
      body:
        "Who: contact center, operations, HR help desks, finance ops. What: agent assist during chats, suggested replies, ticket triage, policy lookups, resolution summaries, weekly ops digests. Why AI: faster first response, higher first‑contact resolution, standardized tone. Proof: ‘Content creation’ and ‘Automations’ primitives map cleanly to reply drafting, summarization, and recurring digests; teams standardize prompts and policies, then automate repeatable workflows. Source: OpenAI CDN.",
    },
    analysts: {
      title: "Data Analysis & Reporting for Non-Analysts",
      body:
        "Who: BI‑light users across every team. What: spreadsheet Q&A, SQL generation, quick charts, narrative summaries for dashboards, weekly business updates. Why AI: turns messy sheets and screenshots into insights and presentable outputs without waiting on data teams. Proof: OpenAI highlights ‘data analysis’ as a core primitive; examples include automating Python to reconcile large datasets and generating weekly performance reports. Source: OpenAI CDN.",
    },
  },

  explainers: [
    {
      id: "hosted",
      category: "Residency",
      title: "Hosted in Thailand",
      sentence: "Deployed on Thai cloud/GPU providers; data at rest stays in Thailand. Shared or dedicated options",
      href: "/residency",
      graphicSide: "left",
      graphicLabel: "Thailand + lock",
    },
    {
      id: "privacy",
      category: "Privacy",
      title: "Your data stays yours",
      sentence: "No training on your data by default, with retention controls and a full audit trail.",
      href: "/privacy",
      graphicSide: "right",
      graphicLabel: "No training icon",
    },
    {
      id: "sso",
      category: "Identity",
      title: "Single sign‑on (SSO) that fits",
      sentence: "SAML 2.0 / OIDC integration, optional SCIM or LDAP sync, and granular RBAC.",
      href: "/sso",
      graphicSide: "left",
      graphicLabel: "SSO flow",
    },
  ],
  explainerDialogs: {
    hosted: {
      title: "Hosted in Thailand",
      body:
        "Hosted on Thai cloud and GPU servers so data at rest remains in Thailand by default. We host and manage the AI models ourselves, offering shared or dedicated servers and GPUs based on your workload needs and performance expectations. Scaling is handled automatically to match your usage patterns. Options include VPC peering or Private Link, private subnets with no public egress, and customer‑managed keys (KMS/BYOK) where supported by your provider. Encryption in transit (TLS 1.2+) and at rest (AES‑256) are standard. Controls support PDPA (Thailand) data residency and cross‑border transfer requirements (e.g., defined purposes, consent or other legal basis). Retention policies, in‑country disaster recovery, and detailed audit logs support compliance reviews.",
    },
    privacy: {
      title: "Your data stays yours",
      body:
        "No training on your prompts or outputs by default—your data stays your data. Retrieval is restricted to the sources you configure and can be kept in your network. Fine‑grained retention windows, export, and deletion help meet PDPA obligations (consent, purpose limitation, DSAR). Full audit trail captures who accessed what, when, and with which model/integration. Optional safeguards include prompt/output redaction, content logging controls, DLP checks, and outbound egress restrictions so information never leaves your control.",
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

  caseStudies: [
    {
      id: "pwc",
      hero: "/image.png",
      logo: "/image.png",
      title: "Generative AI transforms advisory services",
      body: "We positioned to capitalize on the opportunity and lead across tax, legal, and HR.",
      meta: "Bivek Sharma, Chief AI Officer • UK & EMEA",
      href: "#",
    },
    {
      id: "health",
      hero: "/image.png",
      logo: "/image.png",
      title: "Clinical workflows accelerated with copilots",
      body: "Care teams use tailored assistants to summarize notes and surface insights in real time.",
      meta: "Cleveland, OH • Healthcare",
      href: "#",
    },
    {
      id: "finance",
      hero: "/image.png",
      logo: "/image.png",
      title: "Risk analysis with private RAG",
      body: "Analysts query internal docs securely to speed diligence and reduce research time.",
      meta: "New York, NY • Finance",
      href: "#",
    },
  ],
};

export function getContent(locale: string | undefined): SiteContent {
  // For now only English is populated; fallback always returns English.
  // Hook here for future `th` content.
  return en;
}
