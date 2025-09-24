"use client"

import * as React from "react"

type Props = { active?: boolean; className?: string }

/**
 * SalesCTAFromNotesDemo v6 (full-bleed)
 * No centered wrapper, minimal side padding. Request + stream can use up to 80% width.
 */
export default function SalesCTAFromNotesDemo({ active = false, className = "" }: Props) {
  // Group = title + bars + inline request (right aligned)
  const [showGroup, setShowGroup] = React.useState(false)
  const [isShifting, setIsShifting] = React.useState(false)

  // After shift completes we pin the request at top-right as a bubble
  const [pinAsk, setPinAsk] = React.useState(false)

  // Stream
  const [showStream, setShowStream] = React.useState(false)
  const [streamText, setStreamText] = React.useState("")
  const [isTyping, setIsTyping] = React.useState(false)

  // Measure pinned ask height so stream starts under it
  const askPinnedRef = React.useRef<HTMLDivElement | null>(null)
  const [askH, setAskH] = React.useState(0)
  React.useLayoutEffect(() => {
    if (pinAsk && askPinnedRef.current) setAskH(askPinnedRef.current.offsetHeight)
  }, [pinAsk])

  // Timers
  const timers = React.useRef<number[]>([])
  const pushTimer = (id: number) => timers.current.push(id)
  const clearTimers = () => { timers.current.forEach((id) => clearTimeout(id)); timers.current = [] }
  React.useEffect(() => () => clearTimers(), [])

  // Copy
  const TITLE = "Meeting notes copied"
  const ASK_LINE = "Please create a clear call to action list based on these notes."
  const BULLETS = React.useMemo(() => [
    "• Send recap email today",
    "• Schedule security review",
    "• Share PDPA and SSO docs",
    "• Propose Enterprise plan for 200 seats",
    "• Loop in solutions architect for pilot",
    "• Confirm procurement contact and next steps",
  ], [])

  // Speeds
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(max-width: 768px)").matches

  const CPS = isMobile ? 38 : 42
  const delayPerChar = Math.max(10, Math.round(1000 / CPS))
  const GAP_BETWEEN_BULLETS = 380
  const SHIFT_MS = 520

  const sleep = React.useCallback((ms: number) => new Promise<void>((res) => pushTimer(window.setTimeout(res, ms))), [])

  const streamBullets = React.useCallback(async (lines: string[]) => {
    setIsTyping(true)
    setStreamText("")
    let acc = ""
    for (let i = 0; i < lines.length; i++) {
      const line = (i === 0 ? "" : "\n") + lines[i]
      for (let j = 0; j < line.length; j++) {
        acc += line[j]
        setStreamText(acc)
        await sleep(delayPerChar)
      }
      if (i < lines.length - 1) await sleep(GAP_BETWEEN_BULLETS)
    }
    setIsTyping(false)
  }, [sleep, delayPerChar])

  const run = React.useCallback(async () => {
    // Reset
    setShowGroup(false)
    setIsShifting(false)
    setPinAsk(false)
    setShowStream(false)
    setStreamText("")
    setIsTyping(false)

    await sleep(400)
    setShowGroup(true)
    await sleep(1500)

    setIsShifting(true)
    await sleep(SHIFT_MS)

    setPinAsk(true)
    setShowGroup(false)

    setShowStream(true)
    await streamBullets(BULLETS)

    await sleep(900)
  }, [sleep, streamBullets, BULLETS])

  const reset = React.useCallback(() => {
    setShowGroup(false)
    setIsShifting(false)
    setPinAsk(false)
    setShowStream(false)
    setStreamText("")
    setIsTyping(false)
  }, [])

  React.useEffect(() => {
    clearTimers()
    reset()
    if (active) run()
    return () => clearTimers()
  }, [active, run, reset])

  // Right-aligned skeleton bar
  const Bar = ({ w = "100%", h = 12 }: { w?: string; h?: number }) => (
    <div className="ml-auto rounded-full bg-neutral-200" style={{ width: w, height: h }} />
  )

  return (
    <div
      className={["relative size-full select-none overflow-hidden bg-white", className].join(" ")}
      aria-hidden
      role="img"
      aria-label="Sales CTA from notes demo"
    >
      <style>{`
        @keyframes caretNudge { 0%{transform:translateX(0)} 50%{transform:translateX(6px)} 100%{transform:translateX(0)} }
        .caret-dot { width:7px; height:7px; border-radius:9999px; display:inline-block; vertical-align:middle; margin-left:4px; animation: caretNudge 1.1s ease-in-out infinite; }
      `}</style>

      {/* Full-bleed stage, tiny side padding to avoid clipping */}
      <div className="absolute inset-0 px-2 sm:px-3">
        {/* Pinned request bubble at top-right */}
        {pinAsk && (
          <div ref={askPinnedRef} className="absolute inset-x-0 top-0 z-20 pt-3">
            <div className="ml-auto max-w-[80%] pr-1 sm:pr-2 text-right">
              <div className="inline-block rounded-2xl bg-neutral-100 px-3 py-2 text-base sm:text-lg md:text-xl leading-[1.5] text-neutral-900">
                {ASK_LINE}
              </div>
            </div>
          </div>
        )}

        {/* Right-aligned group that shifts up together. Title+bars fade during shift. */}
        {showGroup && (
          <div
            className={[
              "absolute inset-x-0 top-0 z-10 transition-transform duration-[520ms] ease-out",
              isShifting ? "-translate-y-[40%]" : "translate-y-0",
            ].join(" ")}
          >
            <div className="ml-auto max-w-[80%] pr-1 sm:pr-2 text-right">
              {/* Title */}
              <div className="mb-2 text-[14px] font-medium text-neutral-600 md:text-[15px]">
                {TITLE}
              </div>

              {/* Bars that fade while shifting */}
              <div
                className={[
                  "space-y-2 transition-opacity duration-[520ms]",
                  isShifting ? "opacity-0" : "opacity-100",
                ].join(" ")}
              >
                <Bar w="95%" h={14} />
                <Bar w="92%" />
                <Bar w="78%" />
                <Bar w="94%" />
                <Bar w="70%" />
                <Bar w="86%" />
                <Bar w="60%" />
                <Bar w="72%" />
              </div>

              {/* Inline request (moves with group). Hidden once pinned to avoid duplicates */}
              {!pinAsk && (
                <div className="mt-3">
                  <div className="inline-block rounded-2xl bg-neutral-100 px-3 py-2 text-[18px] md:text-[24px] leading-[1.5] text-neutral-900">
                    {ASK_LINE}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Stream area on the far left, starting under the pinned ask */}
        {showStream && (
          <div
            className="absolute inset-x-0 bottom-0 top-0 z-0"
            style={{ paddingTop: pinAsk ? askH + 8 : 0 }}
          >
            <div className="ml-1 sm:ml-2 mr-auto max-w-[80%] text-left text-base sm:text-lg md:text-xl leading-[1.5] text-neutral-900 whitespace-pre-wrap">
              {streamText}
              {isTyping && <span className="caret-dot bg-neutral-900" aria-hidden />}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
