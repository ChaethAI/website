import * as React from "react"
import { get_icon } from "@/lib/icons"

type Props = {
  iconKey: string
  label: string
}

export function IconBullet({ iconKey, label }: Props) {
  return (
    <div className="flex flex-col items-center gap-4 px-6 py-4 text-center">
      <div className="text-white opacity-90">{get_icon(iconKey)}</div>
      <div className="text-sm text-neutral-200">{label}</div>
    </div>
  )
}
