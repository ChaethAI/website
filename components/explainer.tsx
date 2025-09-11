import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Container } from "./container";
import { Typography } from "@/components/global/typography";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

/**
 * Simple light graphic placeholder.
 * Replace with Lottie, image, or your own JSX.
 */
function Graphic({ label = "Animation / Graphic" }: { label?: string }) {
  return (
    <div className="flex size-full items-center justify-center">
      <div className="w-[85%] max-w-[520px] rounded-xl border bg-card p-6 text-center text-sm text-muted-foreground shadow-sm">
        {label}
      </div>
    </div>
  );
}

type MainCard = {
  category: string;
  title: string;
  sentence: string;
  href: string; // kept for future deep pages; not used in this pass
  graphicSide: "left" | "right";
  graphicLabel?: string;
};

// Dialog copy lives here for easy edits
const DIALOG_COPY: Record<string, { title: string; body: string }> = {
  "Hosted in Thailand": {
    title: "Hosted in Thailand",
    body:
      "Hosted on Thai cloud and GPU servers so data at rest remains in Thailand by default. We host and manage the AI models ourselves, offering shared or dedicated servers and GPUs based on your workload needs and performance expectations. Scaling is handled automatically to match your usage patterns. Options include VPC peering or Private Link, private subnets with no public egress, and customer‑managed keys (KMS/BYOK) where supported by your provider. Encryption in transit (TLS 1.2+) and at rest (AES‑256) are standard. Controls support PDPA (Thailand) data residency and cross‑border transfer requirements (e.g., defined purposes, consent or other legal basis). Retention policies, in‑country disaster recovery, and detailed audit logs support compliance reviews.",
  },
  "Your data stays yours": {
    title: "Your data stays yours",
    body:
      "No training on your prompts or outputs by default—your data stays your data. Retrieval is restricted to the sources you configure and can be kept in your network. Fine‑grained retention windows, export, and deletion help meet PDPA obligations (consent, purpose limitation, DSAR). Full audit trail captures who accessed what, when, and with which model/integration. Optional safeguards include prompt/output redaction, content logging controls, DLP checks, and outbound egress restrictions so information never leaves your control.",
  },
  "Single sign‑on (SSO) that fits": {
    title: "Single sign‑on (SSO) that fits",
    body:
      "Integrate with your identity provider via SAML 2.0 or OpenID Connect (OIDC). Map groups/attributes to roles for least‑privilege RBAC. Support for SCIM 2.0 or LDAP directory sync where available enables automated provisioning and de‑provisioning. Enforce enterprise policies such as MFA at the IdP, session timeouts, IP allowlists, and device posture checks. Tested with common IdPs (e.g., Azure AD/Microsoft Entra, Google Workspace, Okta). Clear, exportable audit logs support compliance and internal review.",
  },
};

const MAIN: MainCard[] = [
  {
    category: "Residency",
    title: "Hosted in Thailand",
    sentence:
      "Deployed on Thai cloud/GPU providers; data at rest stays in Thailand. Shared or dedicated options",
    href: "/residency",
    graphicSide: "left",
    graphicLabel: "Thailand + lock",
  },
  {
    category: "Privacy",
    title: "Your data stays yours",
    sentence:
      "No training on your data by default, with retention controls and a full audit trail.",
    href: "/privacy",
    graphicSide: "right",
    graphicLabel: "No training icon",
  },
  {
    category: "Identity",
    title: "Single sign‑on (SSO) that fits",
    sentence:
      "SAML 2.0 / OIDC integration, optional SCIM or LDAP sync, and granular RBAC.",
    href: "/sso",
    graphicSide: "left",
    graphicLabel: "SSO flow",
  },
];

function AlternatingExplainer({
  item,
}: {
  item: MainCard;
}) {
  const leftGraphic = item.graphicSide === "left";
  const dialog = DIALOG_COPY[item.title] || { title: item.title, body: "More details coming soon." };
  return (
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Graphic panel: mobile first, square on desktop */}
        <div
          className={
            `${"order-1 bg-card p-0 md:p-6 md:aspect-square"} ${leftGraphic ? "md:order-1" : "md:order-2"}`
          }
        >
          <div className="aspect-[4/3] md:aspect-auto size-full">
            <Graphic label={item.graphicLabel} />
          </div>
        </div>

        {/* Text panel: always after on mobile, square on desktop */}
        <div
          className={
            `${"order-2 bg-neutral-800 text-neutral-100 md:aspect-square"} ${leftGraphic ? "md:order-2" : "md:order-1"}`
          }
        >
          <Card className="m-0 h-full border-0 bg-transparent shadow-none justify-center">
            <CardContent className="p-6 md:p-10">
              <span className="mb-3 inline-flex items-center rounded-md bg-white/20 px-2 py-0.5 text-[11px] font-mono uppercase tracking-wider text-white">
                {item.category}
              </span>
              <h3 className="text-2xl font-semibold leading-tight sm:text-3xl text-white">
                {item.title}
              </h3>
              <p className="mt-3 max-w-prose text-neutral-300">{item.sentence}</p>
              {/* Hosting & Residency anchor near data residency explainer */}
              {item.title === "Hosted in Thailand" }
              <div className="mt-5">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="link" className="gap-1 text-neutral-300 hover:text-neutral-100">
                      Read more
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent
                    className="bg-neutral-800 text-neutral-100 border border-white/15 p-6 sm:p-8 md:p-10 w-[calc(100%-2rem)] max-w-[calc(100%-2rem)] max-h-[calc(100vh-2rem)] overflow-auto sm:rounded-lg md:aspect-square md:w-[36rem] md:max-w-[min(36rem,calc(100vw-2rem))] md:max-h-[80vh] md:overflow-auto"
                  >
                    <DialogHeader>
                      <DialogTitle className="text-white font-semibold">
                        {dialog.title}
                      </DialogTitle>
                      <DialogDescription className="text-neutral-300">
                        {dialog.body}
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
  );
}

export function MainExplainers() {
  return (
    <div className="space-y-48">
      {MAIN.map((m, i) => (
        <AlternatingExplainer key={i} item={m} />
      ))}
    </div>
  );
}


export default function ChaethExplainers() {
  return (
    <Container
      id="features"
      outerClassName="bg-neutral-900"
      className="space-y-48 py-24 sm:py-28 lg:py-32"
    >
      <Typography as="h2" variant="sectionTitle">
        Augment All of Your Work on One Integrated, Secure Platform
      </Typography>
      <MainExplainers />
    </Container>
  );
}
