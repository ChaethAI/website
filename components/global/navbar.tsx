"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Logo from "@/components/global/logo"
import { useSiteContent } from "@/app/providers"
import { GetInTouchButton } from "@/components/global/get_in_touch_button"
import { Menu, ChevronDownIcon } from "lucide-react"
import { useUcNav } from "@/lib/uc_store"
import LanguageSwitcher from "@/components/global/language_switcher"

// Shared navigation constants and logic
const useNavigationLogic = () => {
  const { content } = useSiteContent()
  const { set_active_id } = useUcNav()

  // Link targets from content for maintainability
  const FEATURES_HREF = content.navbar.links?.[0]?.href ?? "#features"
  const USE_CASES_HREF = content.navbar.links?.[1]?.href ?? "#use-cases"
  const PRICING_HREF = content.navbar.links?.[2]?.href ?? "#pricing"
  const WHY_AI_HREF = "/ai-readiness" // Static href for Why AI hub
  const THAI_READINESS_HREF = "/thai-readiness" // Static href for Thai readiness hub
  const DEMO_HREF = content.navbar.action?.href ?? "https://demo.chaeth.com"

  return {
    content,
    set_active_id,
    FEATURES_HREF,
    USE_CASES_HREF,
    PRICING_HREF,
    WHY_AI_HREF,
    THAI_READINESS_HREF,
    DEMO_HREF
  }
}

// Desktop navigation component
function DesktopNav() {
  const { content, set_active_id, FEATURES_HREF, USE_CASES_HREF, PRICING_HREF, WHY_AI_HREF, THAI_READINESS_HREF } = useNavigationLogic()
  const [useCasesOpen, setUseCasesOpen] = React.useState(false)
  const [whyAiOpen, setWhyAiOpen] = React.useState(false)
  const useCasesRef = React.useRef<HTMLDivElement>(null)
  const whyAiRef = React.useRef<HTMLDivElement>(null)
  const closeTimeoutRef = React.useRef<NodeJS.Timeout | undefined>(undefined)

  // Close dropdown function
  const closeDropdown = React.useCallback(() => {
    setUseCasesOpen(false)
    setWhyAiOpen(false)
  }, [])

  // Handle outside click
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        (useCasesRef.current && !useCasesRef.current.contains(event.target as Node)) &&
        (whyAiRef.current && !whyAiRef.current.contains(event.target as Node))
      ) {
        closeDropdown()
      }
    }

    if (useCasesOpen || whyAiOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [useCasesOpen, whyAiOpen, closeDropdown])

  // Handle scroll to close
  React.useEffect(() => {
    const handleScroll = () => {
      closeDropdown()
    }

    if (useCasesOpen || whyAiOpen) {
      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [useCasesOpen, whyAiOpen, closeDropdown])

  // Cleanup timeout on unmount
  React.useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current)
      }
    }
  }, [])

  return (
    <nav className="hidden md:flex items-center gap-2">
      <Button variant="ghost" className="text-white" asChild>
        <Link href={FEATURES_HREF}>{content.navbar.links?.[0]?.label ?? "Features"}</Link>
      </Button>

      {/* Use Cases Dropdown */}
      <div
        ref={useCasesRef}
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
            if (!useCasesOpen) {
              // Opening Use Cases - close Why AI if it's open
              setWhyAiOpen(false)
            }
            setUseCasesOpen(!useCasesOpen)
          }}
        >
          {content.navbar.links?.[1]?.label ?? "Use Cases"}
          <ChevronDownIcon className="size-4 transition-transform" style={{ transform: useCasesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
        </Button>

        {useCasesOpen && (
          <div
            className="absolute top-full left-0 mt-0 min-w-64 bg-foreground/40 text-white shadow-lg rounded-none border-t border-white/20 backdrop-blur-md"
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
                  onClick={() => {
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

      {/* Why AI Dropdown */}
      <div
        ref={whyAiRef}
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
          if (whyAiOpen) {
            closeTimeoutRef.current = setTimeout(() => {
              setWhyAiOpen(false)
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
            if (!whyAiOpen) {
              // Opening Why AI - close Use Cases if it's open
              setUseCasesOpen(false)
            }
            setWhyAiOpen(!whyAiOpen)
          }}
        >
          Why AI
          <ChevronDownIcon className="size-4 transition-transform" style={{ transform: whyAiOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
        </Button>

        {whyAiOpen && (
          <div
            className="absolute top-full left-0 mt-0 min-w-64 bg-foreground/40 text-white shadow-lg rounded-none border-t border-white/20 backdrop-blur-md"
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
                setWhyAiOpen(false)
              }, 200)
            }}
          >
            <div className="p-0">
              <Link
                href={WHY_AI_HREF}
                className="block w-full px-4 py-3 text-sm bg-transparent text-white hover:bg-white/10 rounded-none transition-colors"
                onClick={() => setWhyAiOpen(false)}
              >
                The AI Opportunity
              </Link>
              <Link
                href={THAI_READINESS_HREF}
                className="block w-full px-4 py-3 text-sm bg-transparent text-white hover:bg-white/10 rounded-none transition-colors"
                onClick={() => setWhyAiOpen(false)}
              >
                Thai AI Readiness
              </Link>
            </div>
          </div>
        )}
      </div>

      <Button variant="ghost" className="text-white" asChild>
        <Link href={PRICING_HREF}>{content.navbar.links?.[2]?.label ?? "Pricing"}</Link>
      </Button>
    </nav>
  )
}

// Mobile navigation component
function MobileNav() {
  const { content, set_active_id, FEATURES_HREF, PRICING_HREF, WHY_AI_HREF, THAI_READINESS_HREF } = useNavigationLogic()
  const [open, setOpen] = React.useState(false)
  const [useCasesOpen, setUseCasesOpen] = React.useState(false)
  const [whyAiOpen, setWhyAiOpen] = React.useState(false)

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        className="text-white"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Open menu"
      >
        <Menu className="size-5 text-white" />
      </Button>
      {open && (
        <div className="absolute left-0 right-0 top-full z-50 bg-foreground/60 backdrop-blur-md text-white shadow-lg rounded-none border-t border-white/10">
          <div className="px-5 py-4 space-y-3">
            <Button variant="ghost" className="w-full justify-start text-white" asChild onClick={() => setOpen(false)}>
              <Link href={FEATURES_HREF}>{content.navbar.links?.[0]?.label ?? "Features"}</Link>
            </Button>

            {/* Use Cases Section */}
            <div className="space-y-2">
              <Button
                variant="ghost"
                className="w-full justify-between text-white"
                onClick={() => {
                  if (!useCasesOpen) {
                    // Opening Use Cases - close Why AI if it's open
                    setWhyAiOpen(false)
                  }
                  setUseCasesOpen(!useCasesOpen)
                }}
              >
                {content.navbar.links?.[1]?.label ?? "Use Cases"}
                <ChevronDownIcon className="size-4 text-white" />
              </Button>
              {useCasesOpen && (
                <div className="pl-3 space-y-1">
                  {content.useCases?.map((uc) => (
                    <Button
                      key={uc.id}
                      variant="ghost"
                      className="w-full justify-start pl-4 text-white"
                      asChild
                      onClick={() => {
                        set_active_id(uc.id)
                        setOpen(false)
                      }}
                    >
                      <Link href="#use-cases">{uc.category}</Link>
                    </Button>
                  ))}
                </div>
              )}
            </div>

            {/* Why AI Section */}
            <div className="space-y-2">
              <Button
                variant="ghost"
                className="w-full justify-between text-white"
                onClick={() => {
                  if (!whyAiOpen) {
                    // Opening Why AI - close Use Cases if it's open
                    setUseCasesOpen(false)
                  }
                  setWhyAiOpen(!whyAiOpen)
                }}
              >
                Why AI
                <ChevronDownIcon className="size-4 text-white" />
              </Button>
              {whyAiOpen && (
                <div className="pl-3 space-y-1">
                  <Button
                    variant="ghost"
                    className="w-full justify-start pl-4 text-white"
                    asChild
                    onClick={() => setOpen(false)}
                  >
                    <Link href={WHY_AI_HREF}>AI Readiness</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start pl-4 text-white"
                    asChild
                    onClick={() => setOpen(false)}
                  >
                    <Link href={THAI_READINESS_HREF}>Thai Readiness</Link>
                  </Button>
                </div>
              )}
            </div>

            <Button variant="ghost" className="w-full justify-start text-white" asChild onClick={() => setOpen(false)}>
              <Link href={PRICING_HREF}>{content.navbar.links?.[2]?.label ?? "Pricing"}</Link>
            </Button>
            {/* Commenting out Try Now button as requested - AI do not delete */}
            {/*
            {content.navbar.action ? (
              <Button variant="ghost" className="w-full justify-start text-white" asChild onClick={() => setOpen(false)}>
                <Link href={DEMO_HREF} target="_blank" rel="noopener noreferrer">{content.navbar.action.label}</Link>
              </Button>
            ) : null}
            */}

            {/* Language section */}
            <LanguageSwitcher variant="mobile" />
          </div>
        </div>
      )}
    </div>
  )
}

export default function Navbar() {

  return (
    <header className="w-full absolute top-12 sm:top-14 left-0 z-20 text-white">
      <div className="w-full px-5 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <Logo />

        {/* Middle: Desktop navigation */}
        <DesktopNav />

        {/* Right: Demo + Mobile hamburger + Language + CTA */}
        <div className="flex items-center gap-2">
          {/* Mobile hamburger */}
          <MobileNav />
          {/* Language switcher - desktop only */}
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
          {/* Try Now visible on md+ only; on mobile it's inside hamburger */}
          {/* Commenting out Try Now button as requested - AI do not delete */}
          {/*
          {content.navbar.action ? (
            <Button variant="ghost" className="text-white hidden md:inline-flex" size="lg" asChild>
              <Link href={content.navbar.action.href} target={content.navbar.action.target} rel={content.navbar.action.rel}>{content.navbar.action.label}</Link>
            </Button>
          ) : null}
          */}
          <GetInTouchButton variant="primary" size="lg" />
        </div>
      </div>
    </header>
  )
}
