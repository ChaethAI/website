"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useSiteContent } from "@/app/providers"

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

  return (
    <Button variant={variant} size={size} className={className} asChild>
      <Link href={finalHref} target={target} rel={rel}>
        {finalLabel}
      </Link>
    </Button>
  )
}
