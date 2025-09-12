"use client";

import React from "react";
import Link from "next/link";
import { Container } from "./global/container";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/global/typography";
import { Card } from "@/components/ui/card";
import { useSiteContent } from "@/app/providers";
import { GetInTouchButton } from "@/components/global/get_in_touch_button";

export default function FinalCTA() {
  const { content } = useSiteContent();
  // Subtle pointer spotlight (reduced intensity)
  const onMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  };

  const onLeave: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const el = e.currentTarget;
    el.style.setProperty("--mx", `50%`);
    el.style.setProperty("--my", `50%`);
  };

  return (
    <Container bg="dark" pad_top="xs" pad_bottom="md" className="text-center">
      {/* Gradient border wrapper */}
      <div className="relative mx-auto max-w-2xl rounded-3xl p-[1px] bg-gradient-to-r from-violet-500/30 via-fuchsia-500/20 to-cyan-400/30 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
        <Card
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className={[
            "relative overflow-hidden rounded-[calc(theme(borderRadius.3xl)-1px)]",
            "bg-neutral-950/95 border-neutral-800 px-8 py-12 sm:px-12 sm:py-16",
            "ring-1 ring-white/10",
          ].join(" ")}
        >
          {/* Background layers inside the card */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            {/* Softer pointer spotlight */}
            <div
              className={[
                "absolute inset-0 opacity-50", // reduced from 0.9
                "bg-[radial-gradient(32rem_32rem_at_var(--mx,50%)_var(--my,50%),rgba(139,92,246,0.12),transparent_60%)]",
                "bg-no-repeat",
              ].join(" ")}
            />
            {/* Corner glows (lighter) */}
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-20 bg-fuchsia-500/20" />
            <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full blur-3xl opacity-15 bg-cyan-400/20" />
            {/* Slow conic shimmer (lighter) */}
            <div
              className={[
                "absolute inset-0 mix-blend-screen opacity-12",
                "[mask-image:radial-gradient(65%_65%_at_50%_50%,black,transparent_75%)]",
                "bg-[conic-gradient(from_180deg_at_50%_120%,rgba(99,102,241,0.15),rgba(236,72,153,0.15),rgba(99,102,241,0.15))]",
                "motion-safe:animate-[spin_60s_linear_infinite]",
              ].join(" ")}
            />
            {/* Faint grid */}
            <div className="absolute inset-0 opacity-[0.05] [mask-image:radial-gradient(80%_80%_at_50%_50%,black,transparent_85%)] bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:26px_26px]" />
            {/* Grain */}
            <div
              className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,\
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 140 140'>\
<filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/></filter>\
<rect width='100%' height='100%' filter='url(#n)' opacity='0.9'/>\
</svg>\")",
                backgroundSize: "140px 140px",
              }}
            />
          </div>

          {/* Content */}
          <Typography as="h2" variant="sectionTitle">
            {content.cta.title}
          </Typography>
          {content.cta.subtitle ? (
            <Typography as="p" variant="sectionSubtitle" className="mb-8 sm:mb-10">
              {content.cta.subtitle}
            </Typography>
          ) : null}

          {/* CTA buttons, with gentler hover */}
          <div className="relative flex items-center justify-center gap-4 flex-wrap">
            <GetInTouchButton
              variant="secondary"
              size="lg"
              className="transition-transform duration-150 will-change-transform hover:translate-y-[-0.5px] active:translate-y-0"
            />
          </div>
        </Card>
      </div>
    </Container>
  );
}
