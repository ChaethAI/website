import Link from "next/link"
import { Typography } from "@/components/global/typography"
import ChaethLogo from "@/public/chaeth_logo.svg"

interface LogoProps {
  variant?: "black" | "white"
}

export default function Logo({ variant = "white" }: LogoProps) {
  const logoClass = variant === "white"
    ? "filter brightness-0 invert"
    : "filter brightness-0"

  return (
    <Link href="#" className="flex items-center gap-2 select-none">
      <ChaethLogo
        width="28"
        height="28"
        className={logoClass}
        aria-hidden
      />
      <Typography
        variant="h3"
        className={variant === "white" ? "text-white/95 font-extrabold" : "text-black/95 font-extrabold"}
      >
        CHAETH
      </Typography>
    </Link>
  )
}

