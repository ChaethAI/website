"use client";

import * as React from "react";
import { Container } from "./global/container";
import { Typography } from "@/components/global/typography";
import type { LucideIcon } from "lucide-react";
import { Shield, Smartphone, Server, Bot, Brain, Headphones, ScrollText } from "lucide-react";
import { useSiteContent } from "@/app/providers";

const ICONS: Record<string, LucideIcon> = {
  server: Server,
  smartphone: Smartphone,
  shield: Shield,
  bot: Bot,
  brain: Brain,
  headphones: Headphones,
  scrollText: ScrollText,
};

// Icons are specified per card above to match content.

export function CompactExplainers() {
  const scrollerRef = React.useRef<HTMLDivElement | null>(null);
  const [paused, setPaused] = React.useState(false);
  const { content } = useSiteContent();
  const { compactFeatures, ui } = content;
  const doubled = React.useMemo(() => [...compactFeatures, ...compactFeatures], [compactFeatures]);

  React.useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let rafId: number;
    const speed = 0.9; // pixels per frame (~54px/s at 60fps)

    const step = () => {
      const node = scrollerRef.current;
      if (node && !paused) {
        // Only advance if the content actually overflows horizontally
        if (node.scrollWidth > node.clientWidth + 1) {
          node.scrollLeft += speed;
          const half = node.scrollWidth / 2;
          if (node.scrollLeft >= half) node.scrollLeft -= half;
        }
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [paused]);

  const onWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    const el = scrollerRef.current;
    if (!el) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    }
  };

  return (
    <Container bg="dark">
      {/* Section title */}
      <Typography as="h2" variant="sectionTitle">{ui.headings.compact}</Typography>

      {/* Marquee wrapper (edge overlays stay fixed) */}
      <div
        className="relative overflow-hidden group"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Scroll container handles horizontal scroll; vertical wheel mapped */}
        <div
          ref={scrollerRef}
          onWheel={onWheel}
          className="hide-scrollbar overflow-x-auto overflow-y-hidden"
        >
          <div className="relative z-0 flex whitespace-nowrap gap-4 md:gap-6 lg:gap-8 min-w-max">
            {doubled.map((c, idx) => {
              const Icon = ICONS[c.iconKey || "shield"];
              return (
                <div key={idx} className="flex-none">
                  <div className="w-56 md:w-60 lg:w-64 whitespace-normal rounded-none bg-neutral-800/40 p-4">
                    <Icon className="h-6 w-6 text-white mb-2" />
                    <h4 className="text-white text-base md:text-lg font-medium truncate">{c.title}</h4>
                    {c.blurb && (
                      <p className="text-neutral-300 text-sm mt-1 line-clamp-2">{c.blurb}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Edge gradients tied to the non-scrolling frame */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-24 bg-gradient-to-r from-neutral-900 via-neutral-900/70 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-24 bg-gradient-to-l from-neutral-900 via-neutral-900/70 to-transparent" />
      </div>

      {/**
       * Backup (previous grid version):
       *
       * <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
       *   {COMPACT.map((c, i) => (
       *     <Card key={i} className="border-0 bg-neutral-800 shadow-none">
       *       <CardContent className="p-6 md:p-10">
       *         <span className="mb-3 inline-flex items-center bg-white/10 px-2 py-0.5 text-[11px] font-mono uppercase tracking-wider text-white">{c.category}</span>
       *         <h4 className="text-lg font-semibold text-white sm:text-xl">{c.title}</h4>
       *         {c.blurb && <p className="mt-3 text-neutral-300">{c.blurb}</p>}
       *       </CardContent>
       *     </Card>
       *   ))}
       * </div>
       */}
    </Container>
  );
}
