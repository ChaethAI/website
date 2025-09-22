"use client";

import type { ReactNode } from "react";
import { FinalCta } from "@/components/readiness/final_cta";
import type { FinalCtaContent } from "@/content/readiness/types";

interface ThaiFinalCtaProps {
  content: FinalCtaContent;
  action?: ReactNode;
}

export function ThaiFinalCta({ content, action }: ThaiFinalCtaProps) {
  return (
    <FinalCta
      title={content.title}
      message={content.message}
      bullets={content.bullets}
      closing={content.closing}
      action={action}
    />
  );
}
