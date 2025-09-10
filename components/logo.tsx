import Link from "next/link"
import { Typography } from "@/components/global/typography"

export default function Logo() {
  return (
    <Link href="#" className="flex items-center gap-2 select-none">
      {/* Placeholder SVG for logo; replace with real asset when ready */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white/90"
        aria-hidden
      >
        <rect x="3" y="3" width="18" height="18" rx="4" className="fill-white/15" />
        <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <Typography variant="h3" className="text-white/95 font-extrabold">
        CHAETH
      </Typography>
    </Link>
  )
}

