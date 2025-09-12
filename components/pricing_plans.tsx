"use client";

import * as React from "react";
import { Container } from "@/components/global/container";
import { Typography } from "@/components/global/typography";
import { PlanCard } from "@/components/pricing/plan_card";

export default function PricingPlans() {
  // Keep copy local for fast iteration
  const title = "Hosting Plans";
  const subtitle = "Scale intelligence in Thailand.";

  const shared = {
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
  } as const;

  const enterprise = {
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
  } as const;

  return (
    <Container id="hosting" outerClassName="bg-neutral-900" className="py-24 sm:py-28 lg:py-32">
      <Typography as="h2" variant="sectionTitle">{title}</Typography>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 place-items-center">
        {/* Shared */}
        <div className="aspect-square w-full">
          <PlanCard title={shared.title} features={shared.features} buttonLabel={shared.buttonLabel} />
        </div>

        {/* Enterprise */}
        <div className="aspect-square w-full">
          <PlanCard title={enterprise.title} features={enterprise.features} buttonLabel={enterprise.buttonLabel} />
        </div>
      </div>
      <Typography as="p" variant="sectionSubtitle" className="mb-16 pt-16">{subtitle}</Typography>
    </Container>
  );
}
