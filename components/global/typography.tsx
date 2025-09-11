import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "react"

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: "h1" | "h2" | "h3" | "subtitle" | "body" | "caption" | "sectionTitle" | "sectionSubtitle"
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div"
}

export function Typography({ variant = "body", as, className, children, ...props }: TypographyProps) {
  const Component = as || getDefaultElement(variant)

  return (
    <Component className={cn(getVariantStyles(variant), className)} {...props}>
      {children}
    </Component>
  )
}

function getDefaultElement(variant: string) {
  switch (variant) {
    case "h1":
      return "h1"
    case "h2":
      return "h2"
    case "h3":
      return "h3"
    case "subtitle":
      return "p"
    case "body":
      return "p"
    case "caption":
      return "span"
    default:
      return "p"
  }
}

function getVariantStyles(variant: string) {
  switch (variant) {
    case "h1":
      return "text-6xl md:text-7xl lg:text-8xl md:leading-tight tracking-tight font-light text-white"
    case "h2":
      return "text-4xl md:text-5xl lg:text-6xl tracking-tight font-light text-white"
    case "h3":
      return "text-2xl md:text-3xl lg:text-4xl tracking-tight font-light text-white"
    case "subtitle":
      return "text-lg md:text-xl font-light text-white/70 leading-relaxed"
    case "body":
      return "text-base font-light text-white/70 leading-relaxed"
    case "caption":
      return "text-sm font-light text-white/90"
    case "sectionTitle":
      return "text-center text-2xl sm:text-3xl lg:text-5xl font-light tracking-tight text-white mb-24 sm:mb-18 lg:mb-32"
    case "sectionSubtitle":
      return "text-center text-base sm:text-lg text-neutral-200 leading-relaxed max-w-3xl mx-auto mb-12 sm:mb-14"
    default:
      return "text-base font-light text-white/70"
  }
}
