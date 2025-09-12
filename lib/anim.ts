"use client"

import * as React from "react"

export function use_reduced_motion() {
  const [reduced, setReduced] = React.useState(false)
  React.useEffect(() => {
    try {
      const m = window.matchMedia?.("(prefers-reduced-motion: reduce)")
      const onChange = () => setReduced(!!m?.matches)
      onChange()
      m?.addEventListener?.("change", onChange)
      return () => m?.removeEventListener?.("change", onChange)
    } catch {}
  }, [])
  return reduced
}

export function use_autoplay_timer({
  enabled,
  delayMs,
  onTick,
  resetKey,
}: {
  enabled: boolean
  delayMs: number
  onTick: () => void
  resetKey: any
}) {
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)
  React.useEffect(() => {
    if (!enabled) return
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
    timerRef.current = setTimeout(onTick, delayMs)
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
        timerRef.current = null
      }
    }
  }, [enabled, delayMs, onTick, resetKey])
}

