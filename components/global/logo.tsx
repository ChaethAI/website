"use client"

import Link from "next/link"
import { Typography } from "@/components/global/typography"
import { useState } from "react"

interface LogoProps {
  variant?: "black" | "white"
}

export default function Logo({ variant = "white" }: LogoProps) {
  const [isHovered, setIsHovered] = useState(false)

  const logoClass = variant === "white"
    ? "text-white"
    : "text-black"

  const textClass = variant === "white"
    ? "text-white/95 font-extrabold transition-all duration-300 ease-in-out"
    : "text-black/95 font-extrabold transition-all duration-300 ease-in-out"

  return (
    <Link
      href="#"
      className="flex items-center gap-2 select-none group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        width="56"
        height="56"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${logoClass} transition-transform duration-300 ease-in-out group-hover:scale-105`}
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
      <div className="relative overflow-hidden">
        <Typography
          variant="h3"
          className={`${textClass} transform transition-transform duration-300 ease-in-out ${
            isHovered ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
          }`}
        >
          chaeth
        </Typography>
        <Typography
          variant="h3"
          className={`${textClass} absolute top-0 left-0 transform transition-transform duration-300 ease-in-out ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          แชท
        </Typography>
      </div>
    </Link>
  )
}

