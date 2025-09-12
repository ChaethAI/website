"use client"

import * as React from "react"
import { Container } from "./global/container"
import { Typography } from "@/components/global/typography"
import { useSiteContent } from "@/app/providers"
import { use_reduced_motion, use_autoplay_timer } from "@/lib/anim"
import { use_embla_basic } from "@/lib/carousel"
import { AlternatingLayout } from "@/components/global/alternating_layout"
import { ContentCard } from "@/components/global/content_card"
import { ContentDialogTrigger } from "@/components/global/content_dialog"
import { UseCasePill } from "@/components/use_cases/pill"
import { GraphicPlaceholder } from "@/components/graphics/placeholder"

const DELAY_MS = 10000

export default function UseCases() {
  const { content } = useSiteContent()
  const { useCases: USE_CASES, useCaseDialogs, useCasePills: pills, ui } = content
  const reducedMotion = use_reduced_motion()

  // Embla basic wrapper
  const { viewportRef, api, selected, scrollTo, scrollNext } = use_embla_basic({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
    duration: 12,
  })

  // Autoplay driven by simple timer (CSS handles the pill progress)
  use_autoplay_timer({ enabled: !!api && !reducedMotion, delayMs: DELAY_MS, onTick: () => scrollNext?.(), resetKey: selected })

  return (
    <Container id="use-cases" outerClassName="bg-neutral-900" className="space-y-12 pt-24 pb-12 sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-16">
      <Typography as="h2" variant="sectionTitle">{ui.headings.useCases}</Typography>

      {/* Pills + Carousel on md+ */}
      <div className="hidden md:block">
        {/* Pills row */}
        <div className="mb-6 flex flex-wrap justify-center gap-3">
          {pills.map((label, i) => (
            <UseCasePill key={label} label={label} active={i === selected} onClick={() => scrollTo?.(i)} delayMs={DELAY_MS} reducedMotion={reducedMotion} />
          ))}
        </div>

        {/* Embla carousel */}
        <div className="mx-auto max-w-6xl">
          <div
            className="embla relative overflow-hidden min-h-[28rem] sm:min-h-[32rem]"
            role="region"
            aria-roledescription="carousel"
            aria-label="Use cases carousel"
            ref={viewportRef}
          >
            <div className="embla__container flex touch-pan-y transform-gpu will-change-transform [backface-visibility:hidden]">
              {USE_CASES.map((uc, i) => (
                <div
                  key={uc.id}
                  className="embla__slide mr-8 w-full flex-shrink-0"
                  data-active={i === selected}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${USE_CASES.length}`}
                >
                  <AlternatingLayout
                    leftGraphic={uc.graphicSide === "left"}
                    graphic={<GraphicPlaceholder label={uc.graphicLabel} />}
                    content={
                      <ContentCard item={uc}>
                        {useCaseDialogs[uc.id] ? (
                          <ContentDialogTrigger dialog={useCaseDialogs[uc.id]} label={ui.readMore} />
                        ) : null}
                      </ContentCard>
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile stacked fallback */}
      <div className="space-y-12 md:hidden">
        {USE_CASES.map((uc) => (
          <AlternatingLayout
            key={uc.id}
            leftGraphic={uc.graphicSide === "left"}
            graphic={<GraphicPlaceholder label={uc.graphicLabel} />}
            content={
              <ContentCard item={uc}>
                {useCaseDialogs[uc.id] ? (
                  <ContentDialogTrigger dialog={useCaseDialogs[uc.id]} label={ui.readMore} />
                ) : null}
              </ContentCard>
            }
          />
        ))}
      </div>
    </Container>
  )
}
