"use client"

import * as React from "react"
import { UseCasePill } from "@/components/use_cases/pill"

export function MobilePills({
  labels,
  active,
  onSelect,
  delayMs,
  reducedMotion,
}: {
  labels: string[]
  active: number
  onSelect: (i: number) => void
  delayMs: number
  reducedMotion: boolean
}) {
  return (
    <div className="flex flex-wrap-reverse gap-3">
      {labels.map((label, i) => (
        <div key={label} className="shrink-0 basis-1/2 sm:basis-1/3">
          <UseCasePill
            label={label}
            active={i === active}
            onClick={() => onSelect(i)}
            delayMs={delayMs}
            reducedMotion={reducedMotion}
          />
        </div>
      ))}
    </div>
  )
}
