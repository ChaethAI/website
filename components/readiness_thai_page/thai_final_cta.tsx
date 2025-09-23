"use client";

import type { ReactNode } from "react";
import { FinalCta } from "@/components/readiness_components/final_cta";
import { GetInTouchButton } from "@/components/global/get_in_touch_button";
import type { FinalCtaContent } from "@/content/readiness/types";

interface ThaiFinalCtaProps {
  content: FinalCtaContent;
  action?: ReactNode;
}

export function ThaiFinalCta({ content, action }: ThaiFinalCtaProps) {
  const finalAction = action ?? <GetInTouchButton variant="secondary" size="lg" />;

  return (
    <FinalCta
      title={content.title}
      message={content.message}
      bullets={content.bullets}
      closing={content.closing}
      action={finalAction}
    />
  );
}
