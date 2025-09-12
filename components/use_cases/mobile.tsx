"use client"

import * as React from "react"
import { use_reduced_motion, use_autoplay_timer } from "@/lib/anim"
import { use_embla_basic } from "@/lib/carousel"
import { MobilePills } from "@/components/use_cases/mobile_pills"
import { MobileCarousel } from "@/components/use_cases/mobile_carousel"
import { use_pause_on_interact, use_uc_nav } from "@/lib/uc_state"
import { UC_DELAY_MS } from "@/lib/uc"

export function MobileUseCases({
  items,
  pills,
  dialogs,
  readMoreLabel,
}: {
  items: Array<any>
  pills: string[]
  dialogs: Record<string, { title: string; body: string } | undefined>
  readMoreLabel: string
}) {
  const reducedMotion = use_reduced_motion()
  const { viewportRef, api, selected, scrollTo, scrollNext, jumpTo } = use_embla_basic({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
    duration: 12,
  })

  const paused = use_pause_on_interact(api)

  use_autoplay_timer({
    enabled: !!api && !reducedMotion && !paused,
    delayMs: UC_DELAY_MS,
    onTick: () => scrollNext?.(),
    resetKey: selected,
  })

  // Deep link navigation: #use-cases-<id>
  const ids = React.useMemo(() => items.map((x: any) => x.id), [items])
  use_uc_nav({ ids, goTo: (i) => (jumpTo?.(i), undefined) as unknown as void })

  return (
    <div className="space-y-6">
      <MobilePills
        labels={pills}
        active={selected}
        onSelect={(i) => scrollTo?.(i)}
        delayMs={UC_DELAY_MS}
        reducedMotion={reducedMotion || paused}
      />
      <MobileCarousel
        viewportRef={viewportRef}
        selected={selected}
        items={items}
        dialogs={dialogs}
        readMoreLabel={readMoreLabel}
      />
    </div>
  )
}

