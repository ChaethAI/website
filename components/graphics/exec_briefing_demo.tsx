"use client"

import * as React from "react"
import { FileText } from "lucide-react"

type Props = { active?: boolean; className?: string }

export function ExecBriefingDemo({ active = false, className = "" }: Props) {
  // typing + streaming state
  const [typedQ, setTypedQ] = React.useState("")
  const [showAttach, setShowAttach] = React.useState(false)
  const [streamOn, setStreamOn] = React.useState(false)
  const [streamText, setStreamText] = React.useState("")
  const [isTyping, setIsTyping] = React.useState(false)

  // timers + scrolling
  const timers = React.useRef<number[]>([])
  const pushTimer = (id: number) => timers.current.push(id)
  const clearTimers = () => { timers.current.forEach((t) => clearTimeout(t)); timers.current = [] }
  React.useEffect(() => () => clearTimers(), [])
  const containerRef = React.useRef<HTMLDivElement | null>(null)

  // copy (no em dash)
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

  const sleep = (ms: number) => new Promise<void>((res) => pushTimer(window.setTimeout(res, ms)))

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
    // reset
    setTypedQ("")
    setShowAttach(false)
    setStreamOn(false)
    setStreamText("")
    setIsTyping(false)

    // user message types in the right bubble
    await typeText(QUESTION, setTypedQ, 24)

    // attachment chip appears right under the bubble
    setShowAttach(true)
    await sleep(500)

    // start streaming the AI answer on the left
    setStreamOn(true)
    await sleep(300)

    // stream with gentle auto scroll
    setIsTyping(true)
    setStreamText("")
    const cps = 40
    const delay = Math.max(6, Math.round(1000 / cps))
    let acc = ""
    let batch = 0
    const batchSize = 6

    for (let i = 0; i < STREAM.length; i++) {
      const ch = STREAM[i]
      acc += ch
      batch++
      setStreamText(acc)

      if (batch >= batchSize || ch === "\n" || i === STREAM.length - 1) {
        // let DOM paint then scroll
        await new Promise<void>((res) =>
          pushTimer(
            window.setTimeout(() => {
              if (containerRef.current) {
                containerRef.current.scrollTo({ top: containerRef.current.scrollHeight, behavior: "smooth" })
              }
              res()
            }, 30)
          )
        )
        batch = 0
      }

      // slight extra pause at sentence breaks and new paragraphs
      let extra = 0
      if (ch === "." || ch === "\n") extra = 50
      await sleep(delay + extra)
    }
    setIsTyping(false)
  }, [])

  const reset = React.useCallback(() => {
    setTypedQ("")
    setShowAttach(false)
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
    <div className={["relative size-full select-none", className].join(" ")} aria-hidden role="img">
      <style>{`
        @keyframes caretNudge { 0%{transform:translateX(0)} 50%{transform:translateX(6px)} 100%{transform:translateX(0)} }
        .caret-dot { width:7px; height:7px; border-radius:9999px; display:inline-block; vertical-align:middle; margin-left:6px; animation: caretNudge 1.1s ease-in-out infinite; }
        .bubble-brown { background-color: rgba(101,67,33,0.08); color: rgb(80,48,22); }
      `}</style>

      {/* Full bleed stage, minimal padding, no side bounding box */}
      <div ref={containerRef} className="absolute inset-0 px-3 sm:px-4 py-4 overflow-auto">
        {/* User chat message (right) */}
        <div className="w-full flex justify-end">
          <div className="max-w-[80%]">
              <div className="inline-block rounded-2xl bubble-brown px-4 py-2 text-base sm:text-lg md:text-xl leading-[1.5] text-right">
              {typedQ || <span className="opacity-40">...</span>}
            </div>

            {/* attachment chip under the bubble */}
            <div
              className={[
                "mt-2 flex items-center justify-end gap-2 text-[12px] md:text-[13px]",
                showAttach ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1",
                "transition-all duration-200",
              ].join(" ")}
            >
              <span className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-2 py-1 text-neutral-700">
                <FileText className="h-4 w-4 text-blue-600" />
                <span className="font-medium">Q3_report.pdf</span>
              </span>
            </div>
          </div>
        </div>

        {/* spacing before AI */}
        <div className="h-3" />

        {/* AI streamed answer (left) */}
        {streamOn && (
          <div className="w-full text-left">
            <div className="max-w-[80%] text-base sm:text-lg md:text-xl leading-[1.5] text-neutral-900 whitespace-pre-wrap">
              {streamText}
              {isTyping && <span className="caret-dot bg-neutral-900" aria-hidden />}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
