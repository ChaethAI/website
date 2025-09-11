import { Container } from "./global/container";
import { Typography } from "@/components/global/typography";
import Logo from "@/components/global/logo";

export default function Intro() {
  return (
    <Container
      id="intro"
      outerClassName="relative overflow-hidden bg-neutral-950"
      className="py-16 sm:py-20 lg:py-28"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5" />
        <div className="absolute -top-40 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-violet-500/10 via-fuchsia-500/5 to-transparent blur-3xl" />
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
          Local‑first AI Chat and API to scale in the intelligence race. 
        </Typography>

        {/* Feature chips */}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
          {[
            "Local‑first AI",
            "Thai language",
            "PDPA compliance",
            "Enterprise security",
          ].map((label) => (
            <span
              key={label}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-neutral-200"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </Container>
  );
}
