"use client";

import * as React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

import { Container } from "./global/container";
import { Typography } from "@/components/global/typography";
import { Button } from "@/components/ui/button";
import type { CaseStudy as CaseStudyType } from "@/types/content";
import { useSiteContent } from "@/app/providers";

export default function CaseStudies({
  items,
  title,
  ctaLabel = "Read Case Study",
}: {
  items?: CaseStudyType[];
  title?: string;
  ctaLabel?: string;
}) {
  const { content } = useSiteContent();
  const data = items ?? content.caseStudies;
  const heading = title ?? content.ui.headings.caseStudies;

  const [selected, setSelected] = React.useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  const scrollTo = (i: number) => emblaApi?.scrollTo(i);
  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") scrollNext();
    if (e.key === "ArrowLeft") scrollPrev();
  };

  return (
    <Container bg="dark">
      <Typography as="h2" variant="sectionTitle">
        {heading}
      </Typography>

      <section className="relative" role="region" aria-roledescription="carousel" aria-label="Customer case studies">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-24 bg-gradient-to-r from-neutral-900 via-neutral-900/70 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-24 bg-gradient-to-l from-neutral-900 via-neutral-900/70 to-transparent" />

        {/* Viewport */}
        <div ref={emblaRef} className="embla hide-scrollbar relative overflow-hidden px-6 sm:px-10" tabIndex={0} onKeyDown={onKeyDown} aria-live="polite">
          {/* Container */}
          <div className="embla__container flex touch-pan-y -mx-4 sm:-mx-6 py-2 will-change-transform">
            {data.map((item, i) => {
              const isActive = i === selected;
              return (
                <div
                  key={item.id}
                  className="embla__slide flex-[0_0_auto] px-4 sm:px-6 w-[88%] max-w-4xl shrink-0 sm:w-[72%] md:w-[62%] lg:w-[56%]"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Slide ${i + 1} of ${data.length}`}
                >
                  <article
                    className={[
                      "rounded-none bg-neutral-800/20 shadow-2xl transition-all duration-500",
                      isActive ? "scale-[1.0] opacity-100" : "scale-[0.98] opacity-60",
                    ].join(" ")}
                  >
                    {/* Square card with taller image and compact text */}
                    <div className="grid h-full aspect-square grid-rows-[5fr_1.4fr] md:grid-rows-[6fr_1.3fr] overflow-hidden">
                      {/* Media with CTA overlay */}
                      <div className="relative w-full h-full">
                        <Image
                          src={item.hero}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="(min-width:1024px) 800px, (min-width:640px) 600px, 90vw"
                          priority={i === 0}
                        />
                        {/* Legibility gradient */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/70" />

                        {/* Optional center logo */}
                        {item.logo ? (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Image src={item.logo} alt="logo" width={112} height={56} className="opacity-95 drop-shadow-md md:max-h-[150px]" />
                          </div>
                        ) : null}

                        {/* CTA over image */}
                        <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between p-4 sm:p-6">
                          <div className="pointer-events-auto">
                            <Button asChild variant="primary" className="whitespace-nowrap">
                              <a href={item.href || "#"} aria-label={`${ctaLabel}: ${item.title}`}>
                                {ctaLabel}
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Compact text area */}
                      <div className="flex h-full flex-col justify-center p-5 sm:p-6">
                        <div className="min-w-0">
                          {/* Smaller title via Typography */}
                          <Typography as="h3" variant="h3" className="!text-base sm:!text-lg !leading-snug line-clamp-2">
                            {item.title}
                          </Typography>
                          <p className="mt-2 text-sm leading-relaxed text-white/80 line-clamp-2">{item.body}</p>
                          {item.meta ? <p className="mt-1 text-xs text-white/50 line-clamp-1">{item.meta}</p> : null}
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        {/* Controls */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2 sm:px-6">
          <button
            aria-label="Previous slide"
            onClick={scrollPrev}
            className="pointer-events-auto inline-flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
          >
            <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            aria-label="Next slide"
            onClick={scrollNext}
            className="pointer-events-auto inline-flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
          >
            <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="mt-6 flex items-center justify-center gap-2" role="tablist" aria-label="Slide controls">
          {data.map((_, i) => {
            const active = i === selected;
            return (
              <button
                key={i}
                role="tab"
                aria-selected={active}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => scrollTo(i)}
                className={`h-2 rounded-full transition-all ${active ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/60"}`}
              />
            );
          })}
        </div>
      </section>
    </Container>
  );
}
