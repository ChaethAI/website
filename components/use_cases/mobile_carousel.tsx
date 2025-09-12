"use client"

import * as React from "react"
import { AlternatingLayout } from "@/components/global/alternating_layout"
import { ContentCard } from "@/components/global/content_card"
import { ContentDialogTrigger } from "@/components/global/content_dialog"
import { GraphicPlaceholder } from "@/components/graphics/placeholder"

export function MobileCarousel({
  viewportRef,
  selected,
  items,
  dialogs,
  readMoreLabel,
}: {
  viewportRef: React.RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void)
  selected: number
  items: Array<any>
  dialogs: Record<string, { title: string; body: string } | undefined>
  readMoreLabel: string
}) {
  return (
    <div
      className="embla relative overflow-hidden min-h-[24rem]"
      ref={viewportRef as any}
    >
      <div className="embla__container flex touch-pan-y transform-gpu will-change-transform [backface-visibility:hidden]">
        {items.map((uc: any, i: number) => (
          <div
            key={uc.id}
            id={`use-cases-${uc.id}`}
            className="embla__slide mr-6 w-full flex-shrink-0"
            data-active={i === selected}
          >
            <AlternatingLayout
              leftGraphic={uc.graphicSide === "left"}
              graphic={<GraphicPlaceholder label={uc.graphicLabel} />}
              content={
                <ContentCard item={uc}>
                  {dialogs[uc.id] ? (
                    <ContentDialogTrigger dialog={dialogs[uc.id]!} label={readMoreLabel} />
                  ) : null}
                </ContentCard>
              }
            />
          </div>
        ))}
      </div>
    </div>
  )
}
