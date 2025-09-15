"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useSiteContent } from "@/app/providers"
import { cn } from "@/lib/utils"

type Props = {
  variant?: React.ComponentProps<typeof Button>["variant"]
  size?: React.ComponentProps<typeof Button>["size"]
  className?: string
  href?: string
  label?: string
  target?: string
  rel?: string
}

export function GetInTouchButton({
  variant = "primary",
  size = "lg",
  className,
  href,
  label,
  target,
  rel,
}: Props) {
  const { content } = useSiteContent()
  // Destination should be static across languages
  const STATIC_CONTACT = "/contact"
  const finalHref = href ?? STATIC_CONTACT
  const finalLabel = label ?? content.cta.primary.label

  // Dynamic border color based on variant
  const getBorderColor = (variant: string) => {
    switch (variant) {
      case "primary":
      case "default":
        return "border-primary"
      case "secondary":
        return "border-secondary"
      case "destructive":
        return "border-destructive"
      case "outline":
        return "border-border"
      case "ghost":
        return "border-primary/50"
      case "ghosty":
        return "border-white/50"
      case "link":
        return "border-primary"
      default:
        return "border-primary"
    }
  }

  const borderColor = getBorderColor(variant)

  return (
    <div className="relative group inline-block">
      {/* Outer border effect - matches button shape (square corners) */}
      <div
        className={cn(
          "absolute inset-0 border-2 border-transparent transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-102",
          borderColor
        )}
      />

      {/* Fixed-size container to prevent layout shift */}
      <div className="relative p-1">
        <Button variant={variant} size={size} className={cn("relative z-10", className)} asChild>
          <Link href={finalHref} target={target} rel={rel}>
            {finalLabel}
          </Link>
        </Button>
      </div>
    </div>
  )
}
