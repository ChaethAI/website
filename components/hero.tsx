"use client"

import ShaderBackground from "@/components/hero_bg"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/global/typography"
import Link from "next/link"
import { GetInTouchButton } from "@/components/global/get_in_touch_button"
import { useSiteContent } from "@/app/providers"

export default function HeroContent() {
  const { content } = useSiteContent()
  const hero = content.hero
  // Static destination (demo link does not vary by locale)
  const DEMO_HREF = "https://demo.chaeth.com"

  return (
    <ShaderBackground>
      <main className="absolute bottom-5 left-5 z-20 max-w-4xl">
      <div className="text-left">
        <div
          className="inline-flex items-center px-3 py-1 rounded-full bg-black/20 backdrop-blur-sm mb-4 relative border border-white/10"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
          {hero.badge ? (
            <Typography variant="caption" className="relative z-10 text-white">
              {hero.badge}
            </Typography>
          ) : null}
        </div>

        <Typography variant="h1" className="mb-4">
          {hero.title.preEmphasis ? (
            <span className="font-medium italic font-serif">{hero.title.preEmphasis}</span>
          ) : null} {hero.title.main}
          <br />
          {hero.title.postLine ? (
            <span className="font-light tracking-tight text-white">{hero.title.postLine}</span>
          ) : null}
        </Typography>

        {hero.subtitle ? (
          <Typography variant="subtitle" className="mb-6">
            {hero.subtitle}
          </Typography>
        ) : null}

        <div className="flex items-center gap-4 flex-wrap">
          <GetInTouchButton variant="primary" size="lg" />
          {hero.demo ? (
            <Button variant="ghost" className="text-white" size="lg" asChild>
              <Link href={DEMO_HREF} target="_blank" rel="noopener noreferrer">{hero.demo.label}</Link>
            </Button>
          ) : null}
        </div>
      </div>
      </main>
    </ShaderBackground>
  )
}
