import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import type { CardItem } from "@/types/content";

export const ContentCard = React.memo(function ContentCard({ item, children }: { item: CardItem; children?: React.ReactNode }) {
  return (
    <Card className="m-0 h-full border-0 bg-transparent shadow-none justify-center">
      <CardContent className="p-6 md:p-10">
        <span className="mb-3 inline-flex items-center rounded-md bg-white/20 px-2 py-0.5 text-[11px] font-mono uppercase tracking-wider text-white">
          {item.category}
        </span>
        <h3 className="text-2xl font-semibold leading-tight sm:text-3xl text-white">{item.title}</h3>
        <p className="mt-3 max-w-prose text-neutral-300">{item.sentence}</p>
        {children ? <div className="mt-5">{children}</div> : null}
      </CardContent>
    </Card>
  );
});
