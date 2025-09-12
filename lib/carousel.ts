"use client"

import * as React from "react"
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react"

export function use_embla_basic(options?: Parameters<typeof useEmblaCarousel>[0]) {
  const [viewportRef, api] = useEmblaCarousel(options)
  const [selected, setSelected] = React.useState(0)

  React.useEffect(() => {
    if (!api) return
    const onSelect = () => setSelected(api.selectedScrollSnap())
    onSelect()
    api.on("select", onSelect)
    api.on("reInit", onSelect)
    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api])

  const scrollTo = React.useCallback((i: number) => api?.scrollTo(i), [api])
  const scrollNext = React.useCallback(() => api?.scrollNext(), [api])
  const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api])

  // Instant jump variants (no tween) to avoid side bounce
  const jumpTo = React.useCallback((i: number) => api?.scrollTo(i, true), [api])
  const jumpNext = React.useCallback(() => api?.scrollNext(true), [api])
  const jumpPrev = React.useCallback(() => api?.scrollPrev(true), [api])

  return { viewportRef, api, selected, scrollTo, scrollNext, scrollPrev, jumpTo, jumpNext, jumpPrev }
}

export type EmblaApi = NonNullable<ReturnType<typeof use_embla_basic>["api"]>
