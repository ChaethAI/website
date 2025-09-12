import * as React from "react";

type PadToken = "none" | "xs" | "sm" | "md" | "lg";
type BgToken = "none" | "dark" | "darker";

interface ContainerProps {
  children: React.ReactNode;
  className?: string; // inner container (width + padding)
  outerClassName?: string; // outer full-width wrapper (e.g., background)
  id?: string; // optional anchor id on the outer wrapper
  // Centralized spacing controls
  pad_y?: PadToken; // symmetric vertical padding (default: "md")
  pad_top?: PadToken; // overrides top padding if provided
  pad_bottom?: PadToken; // overrides bottom padding if provided
  // Centralized background controls
  bg?: BgToken; // maps to standard background tokens (default: "none")
}

const padYMap: Record<Exclude<PadToken, "none">, string> = {
  xs: "py-12 sm:py-14 lg:py-16",
  sm: "py-16 sm:py-20 lg:py-24",
  md: "py-24 sm:py-28 lg:py-32",
  lg: "py-32 sm:py-36 lg:py-40",
};

const padTopMap: Record<Exclude<PadToken, "none">, string> = {
  xs: "pt-12 sm:pt-14 lg:pt-16",
  sm: "pt-16 sm:pt-20 lg:pt-24",
  md: "pt-24 sm:pt-28 lg:pt-32",
  lg: "pt-32 sm:pt-36 lg:pt-40",
};

const padBottomMap: Record<Exclude<PadToken, "none">, string> = {
  xs: "pb-12 sm:pb-14 lg:pb-16",
  sm: "pb-16 sm:pb-20 lg:pb-24",
  md: "pb-24 sm:pb-28 lg:pb-32",
  lg: "pb-32 sm:pb-36 lg:pb-40",
};

const bgMap: Record<Exclude<BgToken, "none">, string> = {
  dark: "bg-neutral-900",
  darker: "bg-neutral-950",
};

export function Container({
  children,
  className = "",
  outerClassName = "",
  id,
  pad_y = "md",
  pad_top = "none",
  pad_bottom = "none",
  bg = "none",
}: ContainerProps) {
  // Base inner container width + base padding (mostly horizontal)
  const baseInner = "mx-auto max-w-6xl p-4 sm:p-6 lg:p-10";

  // Compose vertical spacing classes
  const y = pad_y !== "none" ? padYMap[pad_y] : "";
  const pt = pad_top !== "none" ? padTopMap[pad_top] : "";
  const pb = pad_bottom !== "none" ? padBottomMap[pad_bottom] : "";

  // Compose outer background
  const bgClass = bg !== "none" ? bgMap[bg] : "";

  return (
    <section id={id} className={[bgClass, outerClassName].filter(Boolean).join(" ")}>
      <div className={[baseInner, y, pt, pb, className].filter(Boolean).join(" ")}>{children}</div>
    </section>
  );
}
