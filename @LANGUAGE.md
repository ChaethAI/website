# Language Switching Guide

This repo implements a simple, client‑side EN/TH language switcher designed for minimal changes, small bundles, and instant UI updates.

## Overview
- Default content is English, synchronously loaded for the smallest initial bundle.
- Thai content loads dynamically on demand, reducing initial JS size.
- Language choice is persisted via `localStorage` and restored on refresh.
- Components read a single `SiteContent` object from a React context, so switching updates the whole page without reloads or routing.

## Key Files
- `lib/content_loader.ts`
  - `get_default_content()`: returns English content synchronously.
  - `load_locale_content(locale)`: dynamic import for Thai when `locale === "th"`.
- `app/providers.tsx`
  - `SiteContentProvider`: owns `locale`, `content`, and `setLocale`.
  - Initializes from `localStorage` if set; otherwise uses browser hints (language or timezone) as a best‑effort default.
  - Updates `document.documentElement.lang` on changes for accessibility/SEO.
- `components/global/language_switcher.tsx`
  - Small dropdown that displays only the other language option (EN shows TH, TH shows EN).
  - Calls `setLocale('en' | 'th')` and closes.
- `components/global/navbar.tsx`
  - Renders the switcher on desktop alongside other ghost buttons.
- `components/global/mobile_nav.tsx`
  - Adds a collapsible “Language: EN/TH” section with a single action to switch to the other language.
- `content/en.ts`, `content/th.ts`
  - Pure content objects exported as default.
- `types/content.ts`
  - Strongly typed shape of site content for all components.

## How It Works
1. First render uses English content synchronously (`get_default_content`).
2. `SiteContentProvider` checks `localStorage.locale` on mount. If set, it uses that value.
3. If not set, it heuristically defaults to Thai when `navigator.language` starts with `th` or the timezone equals `Asia/Bangkok`; otherwise English.
4. When Thai is selected, the app dynamically imports `content/th.ts` and updates the context; UI updates instantly.
5. Choice is stored in `localStorage` under the key `locale`.

## Persistence
- Key: `locale`
- Values: `"en" | "th"`
- Source order on first load: `localStorage` → browser language/timezone heuristic → fallback to `"en"`.

## IP‑Based Default (Optional)
Client‑only apps cannot reliably detect country by IP without edge/server help. If you want TH to be the first‑visit default for Thailand users:
- Add a tiny Edge Middleware to read a country header (e.g., `x-vercel-ip-country`, `cf-ipcountry`) and set a cookie `locale=th` for visitors from TH.
- Modify `SiteContentProvider` to read `document.cookie` on first mount if `localStorage` is empty, and prefer the cookie value.
- This preserves the current client architecture and avoids route changes.

Example approach (pseudocode):
- `middleware.ts`: if `country === 'TH'` and no `locale` cookie → set `locale=th; Path=/; Max-Age=...`.
- `app/providers.tsx`: on mount, if `!localStorage.locale` → read cookie → use it.

## Adding More Languages
- Create `content/<code>.ts` exporting a default `SiteContent` for the locale.
- Extend `load_locale_content` to handle the new code with a dynamic import.
- Update the switcher UI to list the new options (keep it short; consider an inline two‑button pattern for 2–3 languages).

## Performance Notes
- English ships in the main bundle; Thai is code‑split. Switching to Thai pulls only the Thai content chunk.
- No async loading spinners are required; the swap is near‑instant and below 100ms for typical content sizes.

## Testing
- Desktop: toggle EN/TH from the header; verify navbar, hero, sections update.
- Mobile: open the hamburger menu; expand “Language” and switch.
- Refresh: confirm the selected language persists.
- Clear `localStorage.locale` and retest heuristic defaults.

## Conventions
- Keep logic and graphics separate; the switcher is pure UI and uses the provider for logic.
- Short, focused components (`language_switcher.tsx`).
- Library helpers in `lib/` with short, clear names (`content_loader.ts`).
- Follow existing typography and button styles.
- Use snake_case for multi‑word file names.

---
Questions or want the middleware added? See “IP‑Based Default (Optional)” and open an issue/PR to enable it.
