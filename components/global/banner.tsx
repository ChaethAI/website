"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/global/typography";

interface BannerProps {
  className?: string;
}

export function Banner({ className }: BannerProps) {
  return (
    <div className={cn(
      "w-full bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600",
      "text-center py-3 px-4 sm:py-4",
      "border-b border-white/10",
      "relative z-30 h-12 sm:h-14 flex items-center justify-center", // Fixed height and center content
      className
    )}>
      <Link
        href="/ai-education"
        className="inline-flex items-center gap-2 text-white hover:text-white/90 transition-all group"
      >
        <Typography
          variant="caption"
          className="hover:underline decoration-2 underline-offset-4 font-medium"
        >
          Read our AI Readiness report for Thai businesses
        </Typography>
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </div>
  );
}
