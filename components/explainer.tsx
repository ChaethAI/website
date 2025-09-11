import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Container } from "./container";

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
  href: string;
  graphicSide: "left" | "right";
  graphicLabel?: string;
};

const MAIN: MainCard[] = [
  {
    category: "Enterprise",
    title: "Single sign-on that fits your stack",
    sentence:
      "Connect with SAML or OIDC, sync users with SCIM or LDAP, and enforce RBAC with clear audit trails.",
    href: "/enterprise",
    graphicSide: "left",
    graphicLabel: "SSO flow",
  },
  {
    category: "Experience",
    title: "Built for mobile work",
    sentence:
      "Responsive UI, passkeys where supported, and PWA install so teams can act fast on the go.",
    href: "/mobile",
    graphicSide: "right",
    graphicLabel: "Phone mockup",
  },
  {
    category: "Compliance",
    title: "Your data stays in Thailand",
    sentence:
      "Storage, backups, and keys remain in Thai data centers with PDPA controls for retention, consent, and DSAR.",
    href: "/compliance",
    graphicSide: "left",
    graphicLabel: "Thailand + lock",
  },
];


function AlternatingExplainer({
  item,
}: {
  item: MainCard;
}) {
  const leftGraphic = item.graphicSide === "left";
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
              <div className="mt-5">
                <Button asChild variant="link" className="gap-1 text-neutral-300 hover:text-neutral-100">
                  <a href={item.href}>
                    Read more
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
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
      <h2 className="section-title">Augment All of Your Work on One Integrated, Secure Platform</h2>
      <MainExplainers />
    </Container>
  );
}
