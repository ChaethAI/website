"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { GetInTouchButton } from "@/components/global/get_in_touch_button";
import { Typography } from "@/components/global/typography";

type PlanCardProps = {
  title: string;
  features: ReadonlyArray<string>;
  className?: string;
  buttonLabel?: string;
};

export function PlanCard({ title, features, className, buttonLabel = "Contact Sales" }: PlanCardProps) {
  return (
    <Card
      className={cn(
        "relative h-full bg-neutral-800 shadow-sm rounded-none border-0",
        "flex flex-col",
        "transition-transform duration-150 will-change-transform hover:translate-y-[-1px]",
        className
      )}
    >
      <CardContent className="p-6 sm:p-8 pb-6 md:pb-20 flex h-full flex-col gap-4">
        <Typography as="h3" variant="h3" className="font-light text-center">{title}</Typography>

        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 min-h-0">
          {/* Left column: bullet list */}
          <div className="min-h-0">
            <ul className="space-y-3 w-full text-left">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-neutral-100">
                  <Check className="mt-[2px] h-5 w-5 text-white shrink-0" />
                  <span className="text-sm sm:text-base leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Spacer column to maintain two-column layout */}
          <div className="hidden md:block" />
        </div>

        {/* Mobile CTA: centered at the end of content */}
        <div className="mt-6 flex justify-center md:hidden">
          <GetInTouchButton
            variant="outline"
            size="lg"
            className="bg-white text-black hover:bg-white/90 border-0"
            label={buttonLabel}
          />
        </div>
      </CardContent>
      {/* Desktop CTA: absolute bottom-right */}
      <div className="hidden md:block absolute bottom-8 right-8">
        <GetInTouchButton
          variant="outline"
          size="lg"
          className="bg-white text-black hover:bg-white/90 border-0"
          label={buttonLabel}
        />
      </div>
    </Card>
  );
}
