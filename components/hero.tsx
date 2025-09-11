"use client"

import ShaderBackground from "@/components/hero_bg"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/global/typography"
import Link from "next/link"

const CONTACT_LINK = "mailto:hello@chaeth.com"
const DEMO_LINK = "https://demo.chaeth.com"

export default function HeroContent() {
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
          <Typography variant="caption" className="relative z-10 text-white">
            🇹🇭 Data residency in Thailand
          </Typography>
        </div>

        <Typography variant="h1" className="mb-4">
          <span className="font-medium italic font-serif">Local-first</span> AI
          <br />
          <span className="font-light tracking-tight text-white">for Thai enterprises</span>
        </Typography>

        <Typography variant="subtitle" className="mb-6">
          Professional Class AI for Your Enterprise
        </Typography>

        <div className="flex items-center gap-4 flex-wrap">
          <Button variant="ghosty" size="lg" asChild>
            <Link href={CONTACT_LINK}>Get in touch</Link>
          </Button>
          <Button variant="primary" size="lg" asChild>
            <Link href={DEMO_LINK} target="_blank" rel="noopener noreferrer">Try now</Link>
          </Button>
        </div>
      </div>
      </main>
    </ShaderBackground>
  )
}
