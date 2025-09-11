"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { Button } from "@/components/ui/button"
import { Container } from "./global/container"
import { Typography } from "@/components/global/typography"
import { AlternatingExplainer } from "@/components/global/alternating-layout"
import { useSiteContent } from "@/app/providers"
// Reduced motion: simple inline detection to keep things self-contained

const DELAY_MS = 10000

export default function UseCases() {
  const { content } = useSiteContent()
  const { useCases: USE_CASES, useCaseDialogs, useCasePills: pills, ui } = content

  // Desktop carousel
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, duration: 20 })
  const viewportElRef = React.useRef<HTMLDivElement | null>(null)
  const setViewportRef = React.useCallback((node: HTMLDivElement | null) => {
    viewportElRef.current = node
    // Pass through to Embla's ref
    ;(emblaRef as (node: HTMLDivElement | null) => void)(node)
  }, [emblaRef])
  const [index, setIndex] = React.useState(0)
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)
  const barRefs = React.useRef<HTMLDivElement[]>([])
  const [reducedMotion, setReducedMotion] = React.useState(false)
  const prevIndexRef = React.useRef(0)

  React.useEffect(() => {
    try {
      const m = window.matchMedia?.("(prefers-reduced-motion: reduce)")
      const onChange = () => setReducedMotion(!!m?.matches)
      onChange()
      m?.addEventListener?.("change", onChange)
      return () => m?.removeEventListener?.("change", onChange)
    } catch {}
  }, [])

  // Embla -> keep index in sync
  React.useEffect(() => {
    if (!embla) return
    const onSelect = () => setIndex(embla.selectedScrollSnap())
    embla.on("select", onSelect)
    onSelect()
    return () => {
      embla.off("select", onSelect)
    }
  }, [embla])

  // Stabilize viewport height to max slide height (prevents reflow during motion)
  React.useEffect(() => {
    const viewport = viewportElRef.current
    if (!viewport) return
    const update = () => {
      const slides = viewport.querySelectorAll<HTMLElement>(".embla__slide")
      let max = 0
      slides.forEach((s) => { max = Math.max(max, s.offsetHeight) })
      if (max > 0) viewport.style.minHeight = `${max}px`
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  // Progress bar: only touch prev/current, avoid forced reflow
  React.useEffect(() => {
    if (reducedMotion) return
    const prev = prevIndexRef.current
    const curr = index
    const prevBar = barRefs.current[prev]
    const currBar = barRefs.current[curr]

    if (prevBar) {
      prevBar.style.transition = "none"
      prevBar.style.transform = "translateX(-101%)"
    }

    if (currBar) {
      currBar.style.transition = "none"
      currBar.style.transform = "translateX(-101%)"
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          currBar.style.transition = `transform ${DELAY_MS}ms linear`
          currBar.style.transform = "translateX(0)"
        })
      })
    }

    prevIndexRef.current = curr
  }, [index, reducedMotion])

  // Timer that advances the slide
  React.useEffect(() => {
    if (!embla || reducedMotion) return
    clearTimer(timerRef)
    timerRef.current = setTimeout(() => embla.scrollNext(), DELAY_MS)
    return () => clearTimer(timerRef)
  }, [embla, index, reducedMotion])

  const goTo = (i: number) => {
    if (!embla) return
    clearTimer(timerRef)
    embla.scrollTo(i)
    // timer and bar restart via effects
  }

  return (
    <Container id="use-cases" outerClassName="bg-neutral-900" className="space-y-12 py-24 sm:py-28 lg:py-32">
      <Typography as="h2" variant="sectionTitle">{ui.headings.useCases}</Typography>

      {/* Pills + Carousel on md+ */}
      <div className="hidden md:block">
        {/* Pills row */}
        <div className="mb-6 flex flex-wrap justify-center gap-3">
          {pills.map((label, i) => {
            const active = i === index
            return (
              <Button
                key={label}
                onClick={() => goTo(i)}
                aria-pressed={active}
                aria-label={`Show ${label}`}
                variant="ghosty"
                className={[
                  "relative overflow-hidden rounded-full px-3 py-1.5",
                  "transition-colors whitespace-nowrap focus:outline-none",
                  "border border-white/15",
                  "text-white hover:text-neutral-900",
                  active ? "bg-white/15" : "bg-white/5",
                  "hover:bg-white",
                ].join(" ")}
              >
                {!reducedMotion && (
                  <div
                    ref={(el) => {
                      if (el) barRefs.current[i] = el
                    }}
                    className="absolute left-0 top-0 z-0 h-full w-full bg-white/30 will-change-transform pointer-events-none"
                    style={{ transform: "translate3d(-101%,0,0)" }}
                    data-progress
                  />
                )}
                <Typography as="span" variant="caption" className="relative z-[1] text-current">
                  {label}
                </Typography>
              </Button>
            )
          })}
        </div>

        {/* Embla carousel */}
        <div
          className="embla relative overflow-hidden"
          role="region"
          aria-roledescription="carousel"
          aria-label="Use cases carousel"
          ref={setViewportRef}
        >
          <div className="embla__container flex touch-pan-y transform-gpu will-change-transform [backface-visibility:hidden]">
            {USE_CASES.map((uc, i) => (
              <div
                key={uc.id}
                className="embla__slide mr-8 w-full min-w-full flex-shrink-0 contain-paint"
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${USE_CASES.length}`}
              >
                {/* Reuse two-panel explainer layout with use-case dialogs */}
                <AlternatingExplainer item={uc} dialogs={useCaseDialogs} readMoreLabel={ui.readMore} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile stacked fallback, same data, no duplication of content */}
      <div className="space-y-12 md:hidden">
        {USE_CASES.map((uc) => (
          <AlternatingExplainer key={uc.id} item={uc} dialogs={useCaseDialogs} readMoreLabel={ui.readMore} />
        ))}
      </div>
    </Container>
  )
}

/* utils */

function clearTimer(ref: React.MutableRefObject<ReturnType<typeof setTimeout> | null>) {
  if (ref.current) {
    clearTimeout(ref.current)
    ref.current = null
  }
}

// reduced motion handled inline above
