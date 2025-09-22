"use client";

import type { MouseEventHandler, ReactNode } from "react";
import { Container } from "@/components/global/container";
import { Typography } from "@/components/global/typography";
import { Card } from "@/components/ui/card";

interface FinalCtaProps {
  title: string;
  message: string;
  bullets?: string[];
  closing?: string;
  action?: ReactNode;
}

export function FinalCta({ title, message, bullets, closing, action }: FinalCtaProps) {
  const handleMove: MouseEventHandler<HTMLDivElement> = (event) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  };

  const handleLeave: MouseEventHandler<HTMLDivElement> = (event) => {
    const el = event.currentTarget;
    el.style.setProperty("--mx", "50%");
    el.style.setProperty("--my", "50%");
  };

  return (
    <Container bg="dark" pad_y="lg" className="text-center">
      <div className="relative mx-auto max-w-2xl rounded-3xl p-[1px] bg-gradient-to-r from-violet-500/30 via-fuchsia-500/20 to-cyan-400/30 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
        <Card
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          className="relative overflow-hidden rounded-[calc(theme(borderRadius.3xl)-1px)] bg-neutral-950/95 border-neutral-800 px-8 py-12 sm:px-12 sm:py-16 ring-1 ring-white/10"
        >
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div
              className="absolute inset-0 opacity-30 bg-[radial-gradient(32rem_32rem_at_var(--mx,50%)_var(--my,50%),rgba(139,92,246,0.08),transparent_60%)] bg-no-repeat"
            />
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-15 bg-fuchsia-500/20" />
            <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full blur-3xl opacity-12 bg-cyan-400/20" />
            <div
              className="absolute inset-0 mix-blend-screen opacity-8 [mask-image:radial-gradient(65%_65%_at_50%_50%,black,transparent_75%)] bg-[conic-gradient(from_180deg_at_50%_120%,rgba(99,102,241,0.12),rgba(236,72,153,0.12),rgba(99,102,241,0.12))] motion-safe:animate-[spin_60s_linear_infinite]"
            />
            <div className="absolute inset-0 opacity-[0.03] [mask-image:radial-gradient(80%_80%_at_50%_50%,black,transparent_85%)] bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:26px_26px]" />
            <div
              className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
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

          <Typography as="h2" variant="sectionTitle" className="mb-6">
            {title}
          </Typography>

          <Typography variant="sectionSubtitle" className="mb-8">
            {message}
          </Typography>

          {bullets && bullets.length > 0 ? (
            <div className="mb-8 grid gap-3 text-left sm:grid-cols-3 sm:text-center">
              {bullets.map((item) => (
                <div key={item} className="flex items-start gap-3 sm:flex-col sm:items-center sm:gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-violet-400 sm:mt-0" />
                  <Typography variant="body" className="text-sm text-neutral-200 sm:text-base">
                    {item}
                  </Typography>
                </div>
              ))}
            </div>
          ) : null}

          {action ? <div className="flex justify-center">{action}</div> : null}

          {closing ? (
            <Typography variant="body" className="mt-6 text-sm text-neutral-300">
              {closing}
            </Typography>
          ) : null}
        </Card>
      </div>
    </Container>
  );
}
