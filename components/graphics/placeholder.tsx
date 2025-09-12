"use client"

import * as React from "react"

export function GraphicPlaceholder({ label = "Animation / Graphic" }: { label?: string }) {
  return (
    <div className="flex size-full items-center justify-center">
      <div className="w-[85%] max-w-[520px] rounded-xl border bg-card p-6 text-center text-sm text-muted-foreground shadow-sm">
        {label}
      </div>
    </div>
  )
}

