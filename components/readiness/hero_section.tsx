"use client";

import { Container } from "@/components/global/container";
import { Typography } from "@/components/global/typography";
import type { ReactNode } from "react";

interface HeroSectionProps {
  background?: "dark" | "darker";
  accent?: string;
  title: string;
  subtitle?: string;
  bullets?: string[];
  actions?: ReactNode;
}

export function HeroSection({
  background = "darker",
  accent,
  title,
  subtitle,
  bullets,
  actions,
}: HeroSectionProps) {
  return (
    <Container bg={background} pad_y="lg">
      <div className="mx-auto max-w-5xl text-center space-y-10">
        {accent ? (
          <Typography variant="caption" className="uppercase tracking-[0.4em] text-violet-300/80">
            {accent}
          </Typography>
        ) : null}

        <Typography variant="h1">
          {title}
        </Typography>

        {subtitle ? (
          <Typography variant="subtitle" className="max-w-3xl mx-auto">
            {subtitle}
          </Typography>
        ) : null}

        {bullets && bullets.length ? (
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            {bullets.map((bullet) => (
              <div
                key={bullet}
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-left sm:text-center"
              >
                <span className="block h-2 w-2 rounded-full bg-violet-400" />
                <Typography variant="body" className="text-sm text-neutral-100 sm:text-base">
                  {bullet}
                </Typography>
              </div>
            ))}
          </div>
        ) : null}

        {actions ? <div className="pt-2 flex justify-center">{actions}</div> : null}
      </div>
    </Container>
  );
}
