"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Logo from "@/components/global/logo"
import { useSiteContent } from "@/app/providers"
import { GetInTouchButton } from "@/components/global/get_in_touch_button"

export default function Navbar() {
  const { content } = useSiteContent()
  // Static destinations (do not vary by locale)
  const FEATURES_HREF = "#features"
  const HOSTING_HREF = "#hosting"
  const DEMO_HREF = "https://demo.chaeth.com"
  return (
    <header className="w-full absolute top-0 left-0 z-20 text-white">
      <div className="w-full px-5 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <Logo />

        {/* Middle: Nav buttons */}
        <nav className="hidden md:flex items-center gap-2">
          <Button variant="ghost" className="text-white" asChild>
            <Link href={FEATURES_HREF}>{content.navbar.links?.[0]?.label ?? "Features"}</Link>
          </Button>
          <Button variant="ghost" className="text-white" asChild>
            <Link href={DEMO_HREF} target="_blank" rel="noopener noreferrer">{content.navbar.links?.[1]?.label ?? "Chat"}</Link>
          </Button>
          <Button variant="ghost" className="text-white" asChild>
            <Link href={HOSTING_HREF}>{content.navbar.links?.[2]?.label ?? "Hosting"}</Link>
          </Button>
        </nav>

        {/* Right: Demo */}
        <div>
          {content.navbar.action ? (
            <Button variant="ghost" className="text-white" size="lg" asChild>
              <Link href={DEMO_HREF} target="_blank" rel="noopener noreferrer">{content.navbar.action.label}</Link>
            </Button>
          ) : null}
          <GetInTouchButton variant="primary" size="lg" />
        </div>
      </div>
    </header>
  )
}
