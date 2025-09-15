import type { Locale, SiteContent } from "@/types/content";
import en from "@/content/en";

// Synchronous default content (English) to keep initial bundle simple.
export function get_default_content(): SiteContent {
  return en;
}

// Dynamically load Thai content only when requested to reduce bundle size.
export async function load_locale_content(locale: Locale): Promise<SiteContent> {
  if (locale === "th") {
    const mod = await import("@/content/th");
    return mod.default;
  }
  return en;
}

