"use client";

import { Container } from "@/components/global/container";
import { Typography } from "@/components/global/typography";
import { GetInTouchButton } from "@/components/global/get_in_touch_button";

export function AiReadinessHero() {
  return (
    <Container bg="darker" pad_y="lg">
      <div className="text-center max-w-4xl mx-auto">
        <Typography variant="h1" className="mb-6">
          The AI Revolution:
          <br />
          <span className="font-medium italic font-serif">Empowering Thai Businesses</span>
          <br />
          to Lead
        </Typography>

        <Typography variant="subtitle" className="mb-8">
          A Wake-Up Call to Thai Leaders: The World Is Accelerating with AI - Time to Buckle Up and Integrate It into Your Tech Stack Now!
        </Typography>

        <div className="flex justify-center">
          <GetInTouchButton variant="secondary" size="lg" />
        </div>
      </div>
    </Container>
  );
}
