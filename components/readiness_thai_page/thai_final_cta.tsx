"use client";

import type { ReactNode } from "react";
import { FinalCTA } from "@/components/cta";

interface ThaiFinalCtaProps {
  content: {
    title: string;
    subtitle?: string;
    madeBy: string;
  };
  action?: ReactNode;
}

export function ThaiFinalCta({ content, action }: ThaiFinalCtaProps) {
  const finalAction = action ?? null;

  return (
    <FinalCTA content={content} />
  );
}
