"use client"

import * as React from "react"
import { Plus, FileText, Loader2, Search } from "lucide-react"

type Props = {
  active?: boolean
  className?: string
}

export function ExecBriefingDemo({ active = false, className = "" }: Props) {
  const [showForm, setShowForm] = React.useState(true)
  const [formEntered, setFormEntered] = React.useState(false)
  const [dzGlow, setDzGlow] = React.useState(false)
  const [chipIn, setChipIn] = React.useState(false)
  const [chipSpin, setChipSpin] = React.useState(false)
  const [pressed, setPressed] = React.useState(false)
  const [typedQ, setTypedQ] = React.useState("")

  const [streamOn, setStreamOn] = React.useState(false)
  const [streamText, setStreamText] = React.useState("")
  const [isTyping, setIsTyping] = React.useState(false)

  const timers = React.useRef<number[]>([])
  const pushTimer = (id: number) => timers.current.push(id)
  const clearTimers = () => {
    timers.current.forEach((id) => clearTimeout(id))
    timers.current = []
  }
  React.useEffect(() => () => clearTimers(), [])

  const QUESTION = "Summarize Q3 performance for the board."

  const STREAM = [
    "Summary: Q3 grew and margins improved while supply risk remains under watch.",
    "• Revenue up 7% QoQ",
    "• Gross margin +120 bps",
    "• Pipeline up 15% vs Q2",
    "• Cash conversion 94%",
    "• Top risk: supply delays",
    "",
    "Next: approve two vendors to protect Q4, hold guidance, and continue cost discipline."
  ].join("\n")

  const sleep = (ms: number) =>
    new Promise<void>((res) => pushTimer(window.setTimeout(res, ms)))

  async function typeText(text: string, set: (s: string) => void, cps = 22) {
    setIsTyping(true)
    set("")
    const delay = Math.max(10, Math.round(1000 / cps))
    for (let i = 1; i <= text.length; i++) {
      set(text.slice(0, i))
      await sleep(delay)
    }
    setIsTyping(false)
  }

  const run = React.useCallback(async () => {

    setFormEntered(true)
    await sleep(650)

    // Faster drop-zone glow
    setDzGlow(true)
    await sleep(560)

    // Faster file attach spin
    setChipIn(true)
    setChipSpin(true)
    await sleep(600)
    setChipSpin(false)

    // Question typing slowed by ~20% vs prior 64 cps
    await typeText(QUESTION, setTypedQ, 20)

    // Visible invert on click
    setPressed(true)
    await sleep(260)
    setPressed(false)

    setShowForm(false)
    setStreamOn(true)
    await sleep(420)

    // Keep fast stream so it completes within the slide
    await typeText(STREAM, setStreamText, 48)
  }, [])
  const reset = React.useCallback(() => {
    setShowForm(true)
    setFormEntered(false)
    setDzGlow(false)
    setChipIn(false)
    setChipSpin(false)
    setPressed(false)
    setTypedQ("")
    setStreamOn(false)
    setStreamText("")
    setIsTyping(false)
  }, [])

  React.useEffect(() => {
    clearTimers()
    reset()
    if (active) run()
    return () => clearTimers()
  }, [active, run, reset])

  return (
    <div
      className={["relative size-full select-none", className].join(" ")}
      data-active={active}
      aria-hidden
      role="img"
      aria-label="Executive demo: form to streaming summary"
    >
      <style>{`
        @keyframes dotNudge { 0%{ transform: translateX(0) } 50%{ transform: translateX(6px) } 100%{ transform: translateX(0) } }
        @keyframes askPulse { 0%{ opacity:.35; transform: scale(1)} 100%{ opacity:0; transform: scale(1.6)} }
        .animate-askPulse { animation: askPulse 360ms ease-out; }
      `}</style>

      <div className="flex size-full items-center justify-center">
        <div className="relative w-[92%] max-w-[760px] aspect-[4/3] md:w-[86%] md:aspect-square">
          {/* FORM */}
          <div
            className={[
              "absolute inset-0 rounded-2xl border border-neutral-200 bg-white/95 p-5 md:p-6 shadow-sm",
              "flex h-full flex-col items-stretch justify-center gap-4",
              "transition-all duration-500",
              showForm ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none",
            ].join(" ")}
            style={{
              transform: formEntered ? undefined : "translateY(6px) scale(1.03)",
              opacity: formEntered ? undefined : 0,
            }}
          >
            {/* Two-line input, same font size as stream */}
            <div className="flex items-start gap-2 rounded-xl border border-neutral-200 bg-neutral-50/70 px-3 py-2 text-[22px] md:text-[24px] leading-[1.45] text-black h-20 md:h-24">
              <Search className="mt-1 size-5 opacity-60" aria-hidden />
              <div className="flex-1">
                {typedQ ? <span>{typedQ}</span> : <span className="opacity-50">Enter your query…</span>}
              </div>
            </div>

            {/* Compact drop zone */}
            <div
              className={[
                "flex items-center justify-between gap-3 rounded-xl border border-dashed px-3 py-3 text-[14px] leading-[1.35]",
                dzGlow ? "border-neutral-400 bg-neutral-50 text-black" : "border-neutral-300 bg-white/70 text-black/70",
                "transition-colors",
              ].join(" ")}
            >
              <div className="flex items-center gap-2">
                <Plus className="size-5 opacity-70" />
                <span className="opacity-70">Add file</span>
              </div>

              <div
                className={[
                  "flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-[12px] text-black",
                  chipIn ? "opacity-100 scale-100" : "opacity-0 scale-110",
                  "transition-all duration-200 ease-out",
                ].join(" ")}
              >
                <FileText className="size-4 text-blue-600" />
                <span className="font-medium">Q3_report.pdf</span>
                {chipSpin ? (
                  <Loader2 className="size-4 animate-spin text-neutral-400" />
                ) : (
                  <span className="ml-1 rounded bg-neutral-100 px-1.5 py-0.5 text-[11px] font-semibold text-black">
                    PDF
                  </span>
                )}
              </div>
            </div>

            {/* Ask button with visible invert on click */}
            <div
              className={[
                "relative inline-flex h-11 items-center justify-center rounded-xl border border-neutral-200 bg-white px-5 text-[16px] font-medium text-black",
                "transition-all duration-200 ease-out",
                pressed
                  ? "scale-[0.98] bg-black text-white ring-2 ring-neutral-900 shadow-inner"
                  : "hover:ring-1 hover:ring-neutral-400",
              ].join(" ")}
            >
              {pressed && (
                <span className="pointer-events-none absolute inset-0 rounded-xl bg-white/20 animate-askPulse" />
              )}
              Ask Chaeth
            </div>
          </div>

          {/* STREAM */}
          <div
            className={[
              "absolute inset-0 px-5 py-5 md:px-6 md:py-6 transition-opacity duration-500",
              streamOn ? "opacity-100" : "opacity-0",
            ].join(" ")}
          >
            <div className="flex h-full flex-col">
              <div className="text-[22px] md:text-[24px] leading-[1.45] text-black whitespace-pre-wrap pr-8 max-w-[64ch]">
                {streamText}
                {isTyping && (
                  <span
                    aria-hidden
                    className="ml-1 inline-block h-[7px] w-[7px] rounded-full bg-black align-middle"
                    style={{ animation: "dotNudge 1.1s ease-in-out infinite" }}
                  />
                )}
              </div>

              <div
                className="pointer-events-none mt-auto h-[24%] md:h-[26%]"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 60%, rgba(255,255,255,1) 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
