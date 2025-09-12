"use client";

import * as React from "react";
import { Container } from "./global/container";
import { Typography } from "@/components/global/typography";
import { AlternatingLayout } from "@/components/global/alternating_layout";
import { ContentCard } from "@/components/global/content_card";
import { ContentDialogTrigger } from "@/components/global/content_dialog";
import ExplainerGraphic from "@/components/graphics/explainer_graphics";
import { useSiteContent } from "@/app/providers";

// types and content moved out to @/types/content and @/content/site

export function MainExplainers() {
  const { content } = useSiteContent();
  const { explainers, explainerDialogs, ui } = content;
  return (
    <div className="space-y-48">
      {explainers.map((m) => (
        <AlternatingLayout
          key={m.id}
          leftGraphic={m.graphicSide === "left"}
          graphic={<ExplainerGraphic id={m.id} />}
          content={
            <ContentCard item={m}>
              {explainerDialogs[m.id] ? (
                <ContentDialogTrigger dialog={explainerDialogs[m.id]} label={ui.readMore} />
              ) : null}
            </ContentCard>
          }
        />
      ))}
    </div>
  );
}


export default function ChaethExplainers() {
  const { content } = useSiteContent();
  const { ui } = content;
  return (
    <Container id="features" bg="dark" className="space-y-48">
      <Typography as="h2" variant="sectionTitle">
        {ui.headings.features}
      </Typography>
      {/* Pass readMoreLabel via UI strings if desired in future */}
      <MainExplainers />
    </Container>
  );
}
