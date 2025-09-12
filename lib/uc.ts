"use client"

// Shared Use Cases helpers and constants

export const UC_DELAY_MS = 10000

// Create a stable hash for a given use case id
export function make_uc_hash(id: string) {
  return `#use-cases-${id}`
}

// Parse window.location.hash into a use case id, supporting a few common patterns
export function parse_uc_hash(hash: string): string | null {
  if (!hash) return null
  const raw = hash.replace(/^#/, "").trim()
  if (!raw || raw.toLowerCase() === "use-cases") return null
  // Supported forms: use-cases-<id>, use-cases/<id>, use-cases:<id>
  const m = raw.match(/^use-cases[-:\/](.+)$/i) || raw.match(/^use-case[-:\/](.+)$/i)
  if (m && m[1]) return m[1]
  return null
}

