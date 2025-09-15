"use client"

import * as React from "react"
import { Container } from "./global/container"
import { Typography } from "@/components/global/typography"
import { useSiteContent } from "@/app/providers"
import { use_embla_basic } from "@/lib/carousel"
import { UC_DELAY_MS } from "@/lib/uc"
import { AlternatingLayout } from "@/components/global/alternating_layout"
import { ContentCard } from "@/components/global/content_card"
import { ContentDialogTrigger } from "@/components/global/content_dialog"
import { UseCasePill } from "@/components/use_cases/pill"
import { GraphicPlaceholder } from "@/components/graphics/placeholder"
import { ExecBriefingDemo } from "@/components/graphics/exec_briefing_demo"
import { DevLintFixDemo } from "@/components/graphics/developer_demo"
import SupportDemo from "@/components/graphics/support_demo"
import { default as SalesCTAFromNotesDemo } from "@/components/graphics/sales_demo"
import AnalystDemo from "@/components/graphics/analyst_demo"
import { use_uc_nav } from "@/lib/uc_store"

export default function UseCases() {
  const { content } = useSiteContent()
  const { useCases: USE_CASES, useCaseDialogs, useCasePills: pills, ui } = content
  const { active_id } = use_uc_nav()

  // Simple Embla setup - endless loop carousel
  const { viewportRef, api, selected, scrollTo, scrollNext } = use_embla_basic({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
    duration: 12,
  })

  // Simple autoplay with setInterval
  React.useEffect(() => {
    if (!api) return
    const interval = setInterval(() => {
      scrollNext?.()
    }, UC_DELAY_MS)
    return () => clearInterval(interval)
  }, [api, scrollNext])

  // Sync carousel to global selection (from nav)
  React.useEffect(() => {
    if (!api || !active_id) return
    const index = USE_CASES.findIndex((uc) => uc.id === active_id)
    if (index >= 0) {
      // Defer to ensure Embla is ready
      requestAnimationFrame(() => scrollTo?.(index))
    }
  }, [active_id, USE_CASES, api, scrollTo])

  return (
    <div id="use-cases">
      <Container bg="dark" className="space-y-12" pad_top="md" pad_bottom="xs">
      <Typography as="h2" variant="sectionTitle" className="!mb-6">{ui.headings.useCases}</Typography>
      {ui.subtitles?.useCases ? (
        <Typography variant="sectionSubtitle">{ui.subtitles.useCases}</Typography>
      ) : null}

      {/* Pills - responsive: mobile grid (2–3 cols), desktop single row */}
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-6 max-w-md sm:max-w-lg md:max-w-none mx-auto place-items-center">
        {pills.map((label, i) => (
          <div key={label} className="flex justify-center">
            <UseCasePill
              label={label}
              active={i === selected}
              onClick={() => scrollTo?.(i)}
              delayMs={UC_DELAY_MS}
              reducedMotion={false}
            />
          </div>
        ))}
      </div>

      {/* Embla carousel - responsive heights */}
      <div className="mx-auto max-w-6xl">
        <div
          className="embla relative overflow-hidden min-h-[24rem] sm:min-h-[28rem] md:min-h-[32rem]"
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
                className="embla__slide mr-6 md:mr-8 w-full flex-shrink-0"
                data-active={i === selected}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${USE_CASES.length}`}
              >
                <AlternatingLayout
                  leftGraphic={uc.graphicSide === "left"}
                  graphic={
                    uc.id === "exec" ? (
                      <ExecBriefingDemo active={i === selected} />
                    ) : uc.id === "dev" ? (
                      <DevLintFixDemo active={i === selected} />
                    ) : uc.id === "sales" ? (
                      <SalesCTAFromNotesDemo active={i === selected} />
                    ) : uc.id === "support" ? (
                      <SupportDemo active={i === selected} />
                    ) : uc.id === "analysts" ? (
                      <AnalystDemo active={i === selected} />
                    ) : (
                      <GraphicPlaceholder label={uc.graphicLabel} />
                    )
                  }
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
    </Container>
    </div>
  )
}
