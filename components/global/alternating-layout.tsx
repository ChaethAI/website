import * as React from "react";
import { ContentCard } from "./content-card";
import type { CardItem, DialogCopy } from "@/types/content";

/**
 * Simple light graphic placeholder.
 * Replace with Lottie, image, or your own JSX.
 */
function Graphic({ label = "Animation / Graphic" }: { label?: string }) {
  return (
    <div className="flex size-full items-center justify-center">
      <div className="w-[85%] max-w-[520px] rounded-xl border bg-card p-6 text-center text-sm text-muted-foreground shadow-sm">
        {label}
      </div>
    </div>
  );
}

/**
 * Reusable alternating two-panel layout (graphic + content)
 * Can be used by any section that needs this pattern
 */
export const AlternatingExplainer = React.memo(function AlternatingExplainer({
  item,
  dialogs,
  readMoreLabel,
}: {
  item: CardItem;
  dialogs: Record<string, DialogCopy>;
  readMoreLabel?: string;
}) {
  const leftGraphic = item.graphicSide === "left";
  const dialog = dialogs[item.id];
  return (
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Graphic panel: mobile first, square on desktop */}
        <div
          className={
            `${"order-1 bg-card p-0 md:p-6 md:aspect-square"} ${leftGraphic ? "md:order-1" : "md:order-2"}`
          }
        >
          <div className="aspect-[4/3] md:aspect-auto size-full">
            <Graphic label={item.graphicLabel} />
          </div>
        </div>

        {/* Text panel: always after on mobile, square on desktop */}
        <div
          className={
            `${"order-2 bg-neutral-800 text-neutral-100 md:aspect-square"} ${leftGraphic ? "md:order-2" : "md:order-1"}`
          }
        >
          <ContentCard item={item} dialog={dialog} readMoreLabel={readMoreLabel} />
        </div>
      </div>
  );
});
