"use client"

import * as React from "react"

type UseCaseNavContextValue = {
  active_id: string | null
  set_active_id: (id: string | null) => void
}

const UseCaseNavContext = React.createContext<UseCaseNavContextValue | null>(null)

export function UseCaseNavProvider({ children }: { children: React.ReactNode }) {
  const [active_id, set_active_id] = React.useState<string | null>(null)

  const value = React.useMemo(() => ({ active_id, set_active_id }), [active_id])
  return <UseCaseNavContext.Provider value={value}>{children}</UseCaseNavContext.Provider>
}

export function use_uc_nav() {
  const ctx = React.useContext(UseCaseNavContext)
  if (!ctx) throw new Error("use_uc_nav must be used within UseCaseNavProvider")
  return ctx
}

