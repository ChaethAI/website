"use client";

import * as React from "react";
import { Container } from "@/components/global/container";
import { Typography } from "@/components/global/typography";
import { PlanCard } from "@/components/pricing/plan_card";
import { useSiteContent } from "@/app/providers";

export default function PricingPlans() {
  const { content } = useSiteContent();
  const { pricing } = content;

  return (
    <Container id="pricing" bg="dark">
      <Typography as="h2" variant="sectionTitle">{pricing.title}</Typography>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 place-items-center items-stretch">
        {pricing.plans.map((plan) => (
          <div key={plan.id} className="w-full xl:aspect-square h-full">
            <PlanCard title={plan.title} features={plan.features} buttonLabel={plan.buttonLabel} />
          </div>
        ))}
      </div>
      {pricing.subtitle ? (
        <Typography as="p" variant="sectionSubtitle" className="mb-16 pt-16">{pricing.subtitle}</Typography>
      ) : null}
    </Container>
  );
}
