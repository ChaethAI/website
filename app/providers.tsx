"use client";

import * as React from "react";
import type { Locale, SiteContent } from "@/types/content";
import { getContent } from "@/content/en";

type SiteContentContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: SiteContent;
};

const SiteContentContext = React.createContext<SiteContentContextValue | null>(null);

export function SiteContentProvider({
  children,
  initialLocale = "en",
}: {
  children: React.ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocale] = React.useState<Locale>(initialLocale);

  const content = React.useMemo(() => getContent(locale), [locale]);

  const value = React.useMemo(
    () => ({ locale, setLocale, content }),
    [locale, content]
  );

  return <SiteContentContext.Provider value={value}>{children}</SiteContentContext.Provider>;
}

export function useSiteContent() {
  const ctx = React.useContext(SiteContentContext);
  if (!ctx) throw new Error("useSiteContent must be used within SiteContentProvider");
  return ctx;
}

