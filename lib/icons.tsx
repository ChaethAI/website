import * as React from "react"
import Image from "next/image"

// Simple white SVG icons with consistent sizing
// Expand this map with short keys as needed
export function get_icon(key: string, props: React.SVGProps<SVGSVGElement> = {}) {
  const common: React.SVGProps<SVGSVGElement> = {
    width: 30,
    height: 30,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    className: "text-white",
    ...props,
  }

  switch (key) {
    case "thai":
      // Use provided flag asset; cap height to 30px
      return <Image src="/icons/thai_flag.svg" alt="Thai language" width={30} height={30} className="h-[30px] w-auto" />
    case "pdpa":
      // Use provided PDPA asset; cap height to 30px
      return <Image src="/icons/pdpa.svg" alt="PDPA compliance" width={30} height={30} className="h-[30px] w-auto" />
    case "shield":
      return (
        <svg {...common} className={`h-[30px] w-[30px] text-white ${props.className ?? ""}`}>
          <path d="M12 3l7 3v5c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    default:
      return (
        <svg {...common} className={`h-[30px] w-[30px] text-white ${props.className ?? ""}`}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      )
  }
}
