"use client";

import * as React from "react";
import type { Locale, SiteContent } from "@/types/content";
import { get_default_content, load_locale_content } from "@/lib/content_loader";

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
  const [locale, setLocaleState] = React.useState<Locale>(initialLocale);
  const [content, setContent] = React.useState<SiteContent>(get_default_content());

  // Set html lang attribute when locale changes
  React.useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  // Initialize from localStorage or simple client heuristics (language/timezone)
  React.useEffect(() => {
    let preferred: Locale | null = null;
    try {
      const stored = localStorage.getItem("locale");
      if (stored === "en" || stored === "th") preferred = stored;
    } catch {}

    if (!preferred) {
      // Commented out timezone-based language detection for now
      // const navLang = typeof navigator !== "undefined" ? navigator.language?.toLowerCase() : "";
      // const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      // if (navLang?.startsWith("th") || tz === "Asia/Bangkok") {
      //   preferred = "th";
      // } else {
      //   preferred = initialLocale;
      // }

      // Default to English
      preferred = "en";
    }

    if (preferred === "th") {
      load_locale_content("th").then((c) => setContent(c)).catch(() => setContent(get_default_content()));
    } else {
      setContent(get_default_content());
    }
    setLocaleState(preferred);
    try {
      localStorage.setItem("locale", preferred);
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLocale = React.useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem("locale", next);
    } catch {}
    if (next === "th") {
      load_locale_content("th").then((c) => setContent(c)).catch(() => setContent(get_default_content()));
    } else {
      setContent(get_default_content());
    }
  }, []);

  const value = React.useMemo(
    () => ({ locale, setLocale, content }),
    [locale, setLocale, content]
  );

  return <SiteContentContext.Provider value={value}>{children}</SiteContentContext.Provider>;
}

export function useSiteContent() {
  const ctx = React.useContext(SiteContentContext);
  if (!ctx) throw new Error("useSiteContent must be used within SiteContentProvider");
  return ctx;
}
