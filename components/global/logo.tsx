"use client"

import Link from "next/link"

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

  // SVG cropped to remove top/bottom padding
  // Original mark spans y=4..13 in a 17x17 box => height 9
  // Keep aspect ratio: width = H * (17/9)
  const W = Math.round(H * (17 / 9))

  // Middle line of the logo
  const MID = H / 2

  // Positions
  const CHAETH_TOP = 0
  const CHAETH_TOP_HOVER = MID - CHAETH_SIZE / 2

  const PRIVATE_TOP = CHAETH_SIZE + TEXT_GAP
  // Shift up toward the middle and fade out
  const PRIVATE_TOP_HOVER = MID - PRIVATE_SIZE / 2

  const logoClass = variant === "white" ? "text-white" : "text-black"
  const textClass = variant === "white" ? "text-white/95" : "text-black/95"

  return (
    <Link
      href="/"
      aria-label="Chaeth - Private AI"
      className="group flex items-center select-none"
      style={{ gap: "8px" }}
    >
      {/* Logo Mark — cropped viewBox so there is no vertical gap */}
      <svg
        width={W}
        height={H}
        viewBox="0 4 17 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${logoClass} transition-transform duration-300 ease-out group-hover:scale-105 flex-shrink-0`}
        aria-hidden
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.5751 8.5C11.5751 10.985 9.59406 13 7.15056 13C4.70756 13 2.72656 10.985 2.72656 8.5C2.72656 6.015 4.70756 4 7.15056 4C9.59406 4 11.5751 6.015 11.5751 8.5ZM9.75706 8.5C9.75706 9.964 8.59006 11.1505 7.15056 11.1505C5.71156 11.1505 4.54456 9.964 4.54456 8.5C4.54456 7.036 5.71156 5.8495 7.15056 5.8495C8.59056 5.8495 9.75706 7.036 9.75706 8.5Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.2751 4H12.5781V13H14.2751V4Z"
          fill="currentColor"
        />
      </svg>

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
              ["--chaeth-top" as any]: `${CHAETH_TOP}px`,
              ["--chaeth-top-hover" as any]: `${CHAETH_TOP_HOVER}px`,
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
              ["--private-top" as any]: `${PRIVATE_TOP}px`,
            } as React.CSSProperties
          }
        >
          Private AI
        </span>
      </div>
    </Link>
  )
}
