"use client";

import { Container } from "./global/container";
import { Typography } from "@/components/global/typography";
import Logo from "@/components/global/logo";
import { useSiteContent } from "@/app/providers";
import { IconBullet } from "@/components/global/icon_bullet";

export default function Intro() {
  const { content } = useSiteContent();
  return (
    <Container id="intro" outerClassName="relative overflow-hidden" bg="darker" pad_y="sm">
      {/* Background: layered, smooth, GPU-friendly */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* Base vignette to keep edges dark and content readable */}
        <div className="absolute inset-0 [mask-image:radial-gradient(75%_75%_at_50%_40%,black,transparent_85%)]" />

        {/* Soft color fields (multiple big radial gradients) */}
        <div
          className={[
            "absolute inset-[-10%] opacity-70 blur-3xl transform-gpu will-change-transform",
            "bg-[radial-gradient(45rem_45rem_at_50%_-10%,rgba(139,92,246,0.28),transparent_60%),",
            "radial-gradient(40rem_40rem_at_12%_25%,rgba(236,72,153,0.18),transparent_60%),",
            "radial-gradient(48rem_48rem_at_88%_70%,rgba(14,165,233,0.16),transparent_62%)]",
          ].join("")}
        />

        {/* Very subtle rotating conic glow for life */}
        <div
          className={[
            "absolute inset-0 mix-blend-screen opacity-25 transform-gpu will-change-transform",
            "[mask-image:radial-gradient(65%_65%_at_50%_50%,black,transparent_75%)]",
            "bg-[conic-gradient(from_180deg_at_50%_120%,rgba(99,102,241,0.20),rgba(236,72,153,0.20),rgba(99,102,241,0.20))]",
            "motion-safe:animate-[spin_60s_linear_infinite]",
          ].join(" ")}
        />

        {/* Gentle top highlight */}
        <div className="absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full opacity-35 blur-[100px] transform-gpu will-change-transform bg-[radial-gradient(closest-side,rgba(168,85,247,0.28),rgba(236,72,153,0.14),transparent_70%)]" />

        {/* Faint grid texture that fades toward the edges */}
        <div className="absolute inset-0 opacity-[0.06] [mask-image:radial-gradient(70%_70%_at_50%_45%,black,transparent_75%)] bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-5">
        <div className="scale-110 sm:scale-125">
          <Logo />
        </div>

        <Typography as="h2" variant="h2" className="max-w-3xl">
          Your private AI platform.
        </Typography>

        <Typography variant="subtitle" className="max-w-3xl">
          Local-first AI Chat and API to scale in the intelligence race.
        </Typography>

        {/* Intro highlights: icon + small text with dividers */}
        {content.introHighlights && content.introHighlights.length > 0 ? (
          <div className="mt-4 w-full max-w-3xl">
            <div className="flex flex-col items-stretch justify-center divide-y divide-white/10 sm:flex-row sm:divide-y-0 sm:divide-x">
              {content.introHighlights.map((item) => (
                <div key={item.id} className="flex-1">
                  <IconBullet iconKey={item.iconKey} label={item.label} />
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </Container>
  );
}
