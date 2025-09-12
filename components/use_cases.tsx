"use client"

import * as React from "react"
import { Container } from "./global/container"
import { Typography } from "@/components/global/typography"
import { useSiteContent } from "@/app/providers"
import { use_reduced_motion, use_autoplay_timer } from "@/lib/anim"
import { use_embla_basic } from "@/lib/carousel"
import { use_pause_on_interact, use_uc_nav } from "@/lib/uc_state"
import { UC_DELAY_MS } from "@/lib/uc"
import { MobileUseCases } from "@/components/use_cases/mobile"
import { AlternatingLayout } from "@/components/global/alternating_layout"
import { ContentCard } from "@/components/global/content_card"
import { ContentDialogTrigger } from "@/components/global/content_dialog"
import { UseCasePill } from "@/components/use_cases/pill"
import { GraphicPlaceholder } from "@/components/graphics/placeholder"

export default function UseCases() {
  const { content } = useSiteContent()
  const { useCases: USE_CASES, useCaseDialogs, useCasePills: pills, ui } = content
  const reducedMotion = use_reduced_motion()

  // Embla basic wrapper
  const { viewportRef, api, selected, scrollTo, scrollNext, jumpTo } = use_embla_basic({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
    duration: 12,
  })

  // Autoplay driven by simple timer (CSS handles the pill progress)
  const paused = use_pause_on_interact(api)
  use_autoplay_timer({ enabled: !!api && !reducedMotion && !paused, delayMs: UC_DELAY_MS, onTick: () => scrollNext?.(), resetKey: selected })

  // Deep-link navigation: #use-cases-<id>
  const ids = React.useMemo(() => USE_CASES.map((x: any) => x.id), [USE_CASES])
  use_uc_nav({ ids, goTo: (i) => jumpTo?.(i) })

  return (
    <Container id="use-cases" bg="dark" className="space-y-12" pad_top="md" pad_bottom="xs">
      <Typography as="h2" variant="sectionTitle" className="!mb-6">{ui.headings.useCases}</Typography>
      <Typography variant="sectionSubtitle">Discover how Chaeth transforms customer interactions across various industries</Typography>

      {/* Pills + Carousel on md+ */}
      <div className="hidden md:block">
        {/* Pills row */}
        <div className="mb-6 flex flex-wrap justify-center gap-3">
          {pills.map((label, i) => (
            <UseCasePill key={label} label={label} active={i === selected} onClick={() => scrollTo?.(i)} delayMs={UC_DELAY_MS} reducedMotion={reducedMotion || paused} />
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
                  id={`use-cases-${uc.id}`}
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

      {/* Mobile: pills grid + swipeable carousel */}
      <div className="md:hidden">
        <MobileUseCases
          items={USE_CASES}
          pills={pills}
          dialogs={useCaseDialogs}
          readMoreLabel={ui.readMore}
        />
      </div>
    </Container>
  )
}
