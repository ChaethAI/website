"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Logo from "@/components/global/logo"
import { useSiteContent } from "@/app/providers"
import { GetInTouchButton } from "@/components/global/get_in_touch_button"
import MobileNav from "@/components/global/mobile_nav"
import { ChevronDownIcon } from "lucide-react"

export default function Navbar() {
  const { content } = useSiteContent()
  const [useCasesOpen, setUseCasesOpen] = React.useState(false)

  // Static destinations (do not vary by locale)
  const FEATURES_HREF = "#features"
  const USE_CASES_HREF = "#use-cases"
  const PRICING_HREF = "#pricing"
  const DEMO_HREF = "https://demo.chaeth.com"

  return (
    <header className="w-full absolute top-0 left-0 z-20 text-white">
      <div className="w-full px-5 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <Logo />

        {/* Middle: Desktop navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <Button variant="ghost" className="text-white" asChild>
            <Link href={FEATURES_HREF}>{content.navbar.links?.[0]?.label ?? "Features"}</Link>
          </Button>

          {/* Use Cases Dropdown */}
          <div className="relative" onMouseEnter={() => {}} onMouseLeave={() => setUseCasesOpen(false)}>
            <Button
              variant="ghost"
              className="text-white flex items-center gap-1"
              onClick={() => setUseCasesOpen(!useCasesOpen)}
            >
              {content.navbar.links?.[1]?.label ?? "Use Cases"}
              <ChevronDownIcon className="size-4 transition-transform" style={{ transform: useCasesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </Button>

            {useCasesOpen && (
              <div
                className="absolute top-full left-0 mt-1 min-w-64 bg-foreground/40 text-white shadow-lg rounded-none"
              >
                <div className="p-0">
                  {content.useCases?.map((uc) => (
                    <Link
                      key={uc.id}
                      href={`#use-cases-${uc.id}`}
                      className="block w-full px-4 py-3 text-sm bg-transparent text-white hover:bg-white/10 rounded-none transition-colors"
                      onClick={() => setUseCasesOpen(false)}
                    >
                      {uc.category}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Button variant="ghost" className="text-white" asChild>
            <Link href={PRICING_HREF}>{content.navbar.links?.[2]?.label ?? "Pricing"}</Link>
          </Button>
        </nav>

        {/* Right: Demo + Mobile hamburger */}
        <div className="flex items-center gap-2">
          {/* Mobile hamburger (ghost) */}
          <MobileNav />
          {/* Try Now visible on md+ only; on mobile it's inside hamburger */}
          {content.navbar.action ? (
            <Button variant="ghost" className="text-white hidden md:inline-flex" size="lg" asChild>
              <Link href={DEMO_HREF} target="_blank" rel="noopener noreferrer">{content.navbar.action.label}</Link>
            </Button>
          ) : null}
          <GetInTouchButton variant="primary" size="lg" />
        </div>
      </div>
    </header>
  )
}
