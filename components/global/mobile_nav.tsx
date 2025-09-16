"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useSiteContent } from "@/app/providers"
import { Menu, ChevronDownIcon } from "lucide-react"
import { use_uc_nav } from "@/lib/uc_store"

export default function MobileNav() {
  const { content, locale, setLocale } = useSiteContent()
  const [open, setOpen] = React.useState(false)
  const [useCasesOpen, setUseCasesOpen] = React.useState(false)
  const [langOpen, setLangOpen] = React.useState(false)
  const { set_active_id } = use_uc_nav()

  const FEATURES_HREF = "#features"
  const USE_CASES_HREF = "#use-cases"
  const PRICING_HREF = "#pricing"
  const DEMO_HREF = content.navbar.action?.href ?? "https://demo.chaeth.com"

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
                onClick={() => setUseCasesOpen(!useCasesOpen)}
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

            <Button variant="ghost" className="w-full justify-start text-white" asChild onClick={() => setOpen(false)}>
              <Link href={PRICING_HREF}>{content.navbar.links?.[2]?.label ?? "Pricing"}</Link>
            </Button>
            {content.navbar.action ? (
              <Button variant="ghost" className="w-full justify-start text-white" asChild onClick={() => setOpen(false)}>
                <Link href={DEMO_HREF} target="_blank" rel="noopener noreferrer">{content.navbar.action.label}</Link>
              </Button>
            ) : null}

            {/* Language section */}
            <div className="space-y-2">
              <Button
                variant="ghost"
                className="w-full justify-between text-white"
                onClick={() => setLangOpen(!langOpen)}
              >
                Language: {locale.toUpperCase()}
                <ChevronDownIcon className="size-4 text-white" />
              </Button>
              {langOpen && (
                <div className="pl-3 space-y-1">
                  {locale === 'en' ? (
                    <Button
                      variant="ghost"
                      className="w-full justify-start pl-4 text-white"
                      onClick={() => {
                        setLocale('th')
                        setOpen(false)
                      }}
                    >
                      ไทย (TH)
                    </Button>
                  ) : (
                    <Button
                      variant="ghost"
                      className="w-full justify-start pl-4 text-white"
                      onClick={() => {
                        setLocale('en')
                        setOpen(false)
                      }}
                    >
                      English (EN)
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
