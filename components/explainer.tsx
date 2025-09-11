"use client";

import * as React from "react";
import { Container } from "./global/container";
import { Typography } from "@/components/global/typography";
import { AlternatingExplainer } from "@/components/global/alternating-layout";
import { useSiteContent } from "@/app/providers";

// types and content moved out to @/types/content and @/content/site

export function MainExplainers() {
  const { content } = useSiteContent();
  const { explainers, explainerDialogs, ui } = content;
  return (
    <div className="space-y-48">
      {explainers.map((m) => (
        <AlternatingExplainer key={m.id} item={m} dialogs={explainerDialogs} readMoreLabel={ui.readMore} />
      ))}
    </div>
  );
}


export default function ChaethExplainers() {
  const { content } = useSiteContent();
  const { ui } = content;
  return (
    <Container
      id="features"
      outerClassName="bg-neutral-900"
      className="space-y-48 py-24 sm:py-28 lg:py-32"
    >
      <Typography as="h2" variant="sectionTitle">
        {ui.headings.features}
      </Typography>
      {/* Pass readMoreLabel via UI strings if desired in future */}
      <MainExplainers />
    </Container>
  );
}
