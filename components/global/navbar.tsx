"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Logo from "@/components/global/logo"
import { useSiteContent } from "@/app/providers"
import { GetInTouchButton } from "@/components/global/get_in_touch_button"
import MobileNav from "@/components/global/mobile_nav"
import { ChevronDownIcon } from "lucide-react"
import { use_uc_nav } from "@/lib/uc_store"

export default function Navbar() {
  const { content } = useSiteContent()
  const [useCasesOpen, setUseCasesOpen] = React.useState(false)
  const { set_active_id } = use_uc_nav()
  const dropdownRef = React.useRef<HTMLDivElement>(null)
  const closeTimeoutRef = React.useRef<NodeJS.Timeout | undefined>(undefined)

  // Close dropdown function
  const closeDropdown = React.useCallback(() => {
    setUseCasesOpen(false)
  }, [])

  // Handle outside click
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown()
      }
    }

    if (useCasesOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [useCasesOpen, closeDropdown])

  // Handle scroll to close
  React.useEffect(() => {
    const handleScroll = () => {
      closeDropdown()
    }

    if (useCasesOpen) {
      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [useCasesOpen, closeDropdown])

  // Cleanup timeout on unmount
  React.useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current)
      }
    }
  }, [])

  // Link targets from content for maintainability
  const FEATURES_HREF = content.navbar.links?.[0]?.href ?? "#features"
  const USE_CASES_HREF = content.navbar.links?.[1]?.href ?? "#use-cases"
  const PRICING_HREF = content.navbar.links?.[2]?.href ?? "#pricing"

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
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => {
              // Clear any pending close timeout when hovering back in
              if (closeTimeoutRef.current) {
                clearTimeout(closeTimeoutRef.current)
                closeTimeoutRef.current = undefined
              }
            }}
            onMouseLeave={() => {
              // Only close with delay if opened by click (not hover)
              if (useCasesOpen) {
                closeTimeoutRef.current = setTimeout(() => {
                  setUseCasesOpen(false)
                }, 200)
              }
            }}
          >
            <Button
              variant="ghost"
              className="text-white flex items-center gap-1"
              onClick={() => {
                // Clear any pending timeout when clicking
                if (closeTimeoutRef.current) {
                  clearTimeout(closeTimeoutRef.current)
                  closeTimeoutRef.current = undefined
                }
                setUseCasesOpen(!useCasesOpen)
              }}
            >
              {content.navbar.links?.[1]?.label ?? "Use Cases"}
              <ChevronDownIcon className="size-4 transition-transform" style={{ transform: useCasesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </Button>

            {useCasesOpen && (
              <div
                className="absolute top-full left-0 mt-0 min-w-64 bg-foreground/40 text-white shadow-lg rounded-none border-t border-white/20"
                onMouseEnter={() => {
                  // Clear close timeout when hovering dropdown
                  if (closeTimeoutRef.current) {
                    clearTimeout(closeTimeoutRef.current)
                    closeTimeoutRef.current = undefined
                  }
                }}
                onMouseLeave={() => {
                  // Set timeout to close when leaving dropdown
                  closeTimeoutRef.current = setTimeout(() => {
                    setUseCasesOpen(false)
                  }, 200)
                }}
              >
                <div className="p-0">
                  {content.useCases?.map((uc) => (
                    <Link
                      key={uc.id}
                      href={USE_CASES_HREF}
                      className="block w-full px-4 py-3 text-sm bg-transparent text-white hover:bg-white/10 rounded-none transition-colors"
                      onClick={(e) => {
                        // Native anchor scroll via href; set global state for carousel selection
                        set_active_id(uc.id)
                        setUseCasesOpen(false)
                      }}
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
              <Link href={content.navbar.action.href} target={content.navbar.action.target} rel={content.navbar.action.rel}>{content.navbar.action.label}</Link>
            </Button>
          ) : null}
          <GetInTouchButton variant="primary" size="lg" />
        </div>
      </div>
    </header>
  )
}
