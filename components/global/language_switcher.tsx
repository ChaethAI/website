"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { ChevronDownIcon } from "lucide-react"
import { useSiteContent } from "@/app/providers"

interface LanguageSwitcherProps {
  variant?: 'desktop' | 'mobile'
  className?: string
}

export default function LanguageSwitcher({ variant = 'desktop', className = '' }: LanguageSwitcherProps) {
  const { locale, setLocale } = useSiteContent()
  const [open, setOpen] = React.useState(false)
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!dropdownRef.current) return
      if (dropdownRef.current.contains(e.target as Node)) return
      setOpen(false)
    }
    if (open) {
      document.addEventListener("mousedown", onDocClick)
      return () => document.removeEventListener("mousedown", onDocClick)
    }
  }, [open])

  React.useEffect(() => {
    const onScroll = () => setOpen(false)
    if (open) {
      window.addEventListener("scroll", onScroll, { passive: true })
      return () => window.removeEventListener("scroll", onScroll)
    }
  }, [open])

  // Mobile version - inline dropdown like use-cases
  if (variant === 'mobile') {
    return (
      <div className={`space-y-2 ${className}`}>
        <Button
          variant="ghost"
          className="w-full justify-between text-white"
          onClick={() => setOpen(!open)}
        >
          {locale.toUpperCase()}
          <ChevronDownIcon className="size-4 text-white" />
        </Button>
        {open && (
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
    )
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        className="text-white flex items-center gap-1"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        {locale.toUpperCase()}
        <ChevronDownIcon className="size-4 transition-transform" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} />
      </Button>

      {open && (
        <div className="absolute top-full right-0 mt-0 min-w-40 bg-foreground/40 text-white shadow-lg rounded-none border-t border-white/20">
          <div className="p-0">
            {locale === 'en' ? (
              <button
                className="block w-full text-left px-4 py-3 text-sm bg-transparent hover:bg-white/10 transition-colors"
                onClick={() => {
                  setLocale('th')
                  setOpen(false)
                }}
              >
                ไทย (TH)
              </button>
            ) : (
              <button
                className="block w-full text-left px-4 py-3 text-sm bg-transparent hover:bg-white/10 transition-colors"
                onClick={() => {
                  setLocale('en')
                  setOpen(false)
                }}
              >
                English (EN)
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
