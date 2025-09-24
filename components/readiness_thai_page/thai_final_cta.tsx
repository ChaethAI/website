"use client";

import { FinalCTA } from "@/components/cta";

interface ThaiFinalCtaProps {
  content: {
    title: string;
    subtitle?: string;
    madeBy: string;
  };
}

export function ThaiFinalCta({ content }: ThaiFinalCtaProps) {
  return (
    <FinalCTA content={content} />
  );
}
