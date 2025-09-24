"use client"

import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  variant?: "black" | "white"
}

export default function Logo({ variant = "white" }: LogoProps) {
  // MD-only sizing
  const CHAETH_SIZE = 24
  const PRIVATE_SIZE = 14
  const TEXT_GAP = 2

  // Text block height = chaeth font + gap + Private AI font
  const H = CHAETH_SIZE + TEXT_GAP + PRIVATE_SIZE

  // Logo image dimensions
  const LOGO_SIZE = H

  // Middle line of the logo
  const MID = H / 2

  // Positions
  const CHAETH_TOP = 0
  const CHAETH_TOP_HOVER = MID - CHAETH_SIZE / 2

  const PRIVATE_TOP = CHAETH_SIZE + TEXT_GAP

  const logoClass = variant === "white" ? "text-white" : "text-black"
  const textClass = variant === "white" ? "text-white/95" : "text-black/95"

  return (
    <Link
      href="/"
      aria-label="Chaeth - Private AI"
      className="group flex items-center select-none"
      style={{ gap: "8px" }}
    >
      {/* Logo Mark */}
      <Image
        src="/chaeth_logo_w.svg"
        alt=""
        width={LOGO_SIZE}
        height={LOGO_SIZE}
        className={`${logoClass} transition-transform duration-300 ease-out group-hover:scale-105 flex-shrink-0`}
        aria-hidden
      />

      {/* Text Block — height equals text stack; overflow hides the moving lines cleanly */}
      <div
        className="relative overflow-hidden whitespace-nowrap"
        style={{ height: `${H}px` }}
      >
        {/* Sizer to lock intrinsic width from real text metrics */}
        <div className="invisible leading-none" aria-hidden>
          <span className="block font-normal tracking-tight" style={{ fontSize: `${CHAETH_SIZE}px` }}>
            chaeth
          </span>
          <span className="block font-light" style={{ fontSize: `${PRIVATE_SIZE}px` }}>
            Private AI
          </span>
        </div>

        {/* chaeth — moves to logo midline on hover */}
        <span
          className={`${textClass} absolute left-0 leading-none font-normal tracking-tight transition-all duration-300 ease-out
                      top-[var(--chaeth-top)] group-hover:top-[var(--chaeth-top-hover)]`}
          style={
            {
              fontSize: `${CHAETH_SIZE}px`,
              // CSS vars drive synced animation
              "--chaeth-top": `${CHAETH_TOP}px`,
              "--chaeth-top-hover": `${CHAETH_TOP_HOVER}px`,
            } as React.CSSProperties
          }
        >
          chaeth
        </span>

        {/* Private AI — fades out in-place from bottom to top */}
        <span
          className={`${textClass} absolute left-0 leading-none font-light transition-all duration-300 ease-out
                      opacity-90 group-hover:opacity-0
                      top-[var(--private-top)]`}
          style={
            {
              fontSize: `${PRIVATE_SIZE}px`,
              "--private-top": `${PRIVATE_TOP}px`,
            } as React.CSSProperties
          }
        >
          Private AI
        </span>
      </div>
    </Link>
  )
}
