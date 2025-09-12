"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/global/typography"

export function UseCasePill({ label, active, onClick, delayMs = 10000, reducedMotion = false }: {
  label: string
  active: boolean
  onClick: () => void
  delayMs?: number
  reducedMotion?: boolean
}) {
  return (
    <Button
      onClick={onClick}
      aria-pressed={active}
      aria-label={`Show ${label}`}
      variant="ghosty"
      data-active={active}
      className={[
        "relative overflow-hidden rounded-none px-3 py-1.5",
        "transition-colors whitespace-nowrap focus:outline-none",
        "border border-white/15",
        "text-white hover:text-neutral-900",
        active ? "bg-white/15" : "bg-white/5",
        "hover:bg-white",
      ].join(" ")}
      style={!reducedMotion ? ({ ['--delay' as any]: `${delayMs}ms` } as React.CSSProperties) : undefined}
    >
      {!reducedMotion && <div className="uc__bar absolute left-0 top-0 z-0 h-full w-full bg-white/30 pointer-events-none" />}
      <Typography as="span" variant="caption" className="relative z-[1] text-current">
        {label}
      </Typography>
    </Button>
  )
}
