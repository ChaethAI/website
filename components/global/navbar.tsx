"use client"

import Link from "next/link"
import { Button, buttonVariants } from "@/components/ui/button"
import Logo from "@/components/global/logo"
import { useSiteContent } from "@/app/providers"
import { GetInTouchButton } from "@/components/global/get_in_touch_button"
import MobileNav from "@/components/global/mobile_nav"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const { content } = useSiteContent()
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
          <NavigationMenu viewport={true}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(buttonVariants({ variant: "ghost", size: "default" }), "text-white")}> 
                  {content.navbar.links?.[1]?.label ?? "Use Cases"}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-1 gap-1 p-1 min-w-64">
                    {content.useCases?.map((uc) => (
                      <NavigationMenuLink key={uc.id} asChild>
                        <Link href={`#use-cases-${uc.id}`}>
                          {uc.category}
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button variant="ghost" className="text-white" asChild>
            <Link href={PRICING_HREF}>{content.navbar.links?.[2]?.label ?? "Pricing"}</Link>
          </Button>
        </nav>

        {/* Right: Demo + Mobile hamburger */}
        <div className="flex items-center gap-2">
          {/* Mobile hamburger (ghost) */}
          <MobileNav />
          {/* Try Now visible on md+ only; on mobile it’s inside hamburger */}
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
