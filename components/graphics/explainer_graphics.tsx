"use client";

import * as React from "react";
import Image from "next/image";

type ExplainerId = "hosted" | "privacy" | "sso" | string;

const ASSET_MAP: Record<string, { src: string; type: "img" | "pdf"; alt: string } > = {
  hosted: { src: "/icons/thailand_map.svg", type: "img", alt: "Thailand map" },
  privacy: { src: "/icons/no_training.svg", type: "img", alt: "No training icon" },
  sso: { src: "/icons/SSO.svg", type: "img", alt: "SSO overview" },
};

export function ExplainerGraphic({ id }: { id: ExplainerId }) {
  const asset = ASSET_MAP[id];

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex h-[200px] w-[200px] items-center justify-center text-neutral-900">
        {asset ? (
          asset.type === "img" ? (
            <Image
              src={asset.src}
              alt={asset.alt}
              width={200}
              height={200}
              className="h-[200px] w-[200px] object-contain"
            />
          ) : (
            <object
              data={asset.src}
              type="application/pdf"
              width={200}
              height={200}
              aria-label={asset.alt}
              className="h-[200px] w-[200px]"
            >
              <a href={asset.src} className="underline">{asset.alt}</a>
            </object>
          )
        ) : (
          <div className="h-[200px] w-[200px] rounded border border-dashed text-center text-xs text-muted-foreground">
            <div className="flex h-full w-full items-center justify-center">No graphic</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExplainerGraphic;

