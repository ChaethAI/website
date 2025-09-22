"use client";

import { FinalCta } from "@/components/readiness_components";
import { GetInTouchButton } from "@/components/global/get_in_touch_button";
import { finalCta } from "@/content/readiness/why_ai";

export function AiReadinessFinalCTA() {
  return (
    <FinalCta
      title={finalCta.title}
      message={finalCta.message}
      bullets={finalCta.bullets}
      closing={finalCta.closing}
      action={<GetInTouchButton variant="secondary" size="lg" />}
    />
  );
}
