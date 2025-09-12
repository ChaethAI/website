"use client"

import * as React from "react"
import type { EmblaApi } from "@/lib/carousel"
import { parse_uc_hash } from "@/lib/uc"

// Pause autoplay when user interacts with the carousel (e.g., touch/drag)
export function use_pause_on_interact(api?: EmblaApi) {
  const [paused, setPaused] = React.useState(false)
  React.useEffect(() => {
    if (!api) return
    const onDown = () => setPaused(true)
    const onUp = () => setPaused(false)
    api.on("pointerDown", onDown)
    api.on("pointerUp", onUp)
    api.on("reInit", onUp)
    return () => {
      api.off("pointerDown", onDown)
      api.off("pointerUp", onUp)
      api.off("reInit", onUp)
    }
  }, [api])
  return paused
}

// Listen for hash changes like #use-cases-<id> and navigate to the matching index
export function use_uc_nav({ ids, goTo }: { ids: string[]; goTo: (i: number) => void }) {
  React.useEffect(() => {
    const apply = () => {
      try {
        const id = parse_uc_hash(window.location.hash)
        if (!id) return
        const idx = ids.indexOf(id)
        if (idx >= 0) goTo(idx)
      } catch {}
    }
    apply()
    const onHashChange = () => apply()
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [ids, goTo])
}

