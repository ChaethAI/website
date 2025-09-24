"use client"

import * as React from "react"

type Props = { active?: boolean; className?: string }

// helpers - moved outside component since they don't depend on props/state
const sleep = (ms: number) => new Promise<void>((res) => setTimeout(res, ms))

async function stream(text: string, set: (s: string) => void, cps = 28) {
  set("")
  const delay = Math.max(6, Math.round(1000 / cps))
  for (let i = 1; i <= text.length; i++) {
    set(text.slice(0, i))
    await sleep(delay)
  }
}

/**
 * SupportAssistDemoSimpler - thinking pulse on left, immediate black pasted reply
 *
 * Changes:
 * - "thinking..." is left aligned (where the stream starts) and italic
 * - thinking pulse sped up (2x): animation duration 0.5s
 * - on hover card: first show English error only, then the pasted reply appears below-left
 *   already with black background (no white->black transition)
 */
export default function SupportAssistDemoSimpler({ active = false, className = "" }: Props) {
  const stageRef = React.useRef<HTMLDivElement | null>(null)
  const [squareSide, setSquareSide] = React.useState(0)

  // timers - only for cleanup on unmount
  const timers = React.useRef<number[]>([])
  const clearTimers = () => {
    timers.current.forEach((t) => clearTimeout(t))
    timers.current = []
  }
  React.useEffect(() => () => clearTimers(), [])

  // content
  const CUSTOMER_ONLY = 'I tried to upload the CSV but got `ERR_CONSTRAINT: users_email_unique`. I do not speak Thai.'
  const THAI_OPENING = `ลูกค้าแจ้งว่า:
"I tried to upload the CSV but got ERR_CONSTRAINT: users_email_unique. I do not speak Thai." 

ช่วยแชร์ข้อผิดพลาดและภาพหน้าจอให้หน่อยได้ไหมครับ เดี๋ยวผมจะจัดการให้เองครับ`

  const AI_REPLY = "Could you please share the error details and a screenshot? I will investigate and assist you further."

  // UI state
  const [showRightPrompt, setShowRightPrompt] = React.useState(false)
  const [showThinking, setShowThinking] = React.useState(false)
  const [showFreeStream, setShowFreeStream] = React.useState(false)
  const [freeStreamText, setFreeStreamText] = React.useState("")
  const [blinkFreeCopy, setBlinkFreeCopy] = React.useState(false)

  const [showHoverReturn, setShowHoverReturn] = React.useState(false)
  const [hoverReplyText, setHoverReplyText] = React.useState("") // appears after hover opens
  // No white->black transition: when hoverReplyText is set, render black bubble immediately

  // sizing: square hover card
  React.useEffect(() => {
    if (!stageRef.current) return
    const ro = new ResizeObserver((entries) => {
      const r = entries[0].contentRect
      setSquareSide(Math.floor(Math.min(r.width, r.height) * 0.85))
    })
    ro.observe(stageRef.current)
    return () => ro.disconnect()
  }, [])

  // main sequence with explicit timing variables
  const run = React.useCallback(async () => {
    clearTimers()

    // tweak these if you want slower/faster behavior
    const initialHoldMs = 900    // keep initial prompt visible before thinking
    const thinkingMs = 1000      // duration of pulsing "thinking..." before starting stream
    const postThinkingPauseMs = 180 // small pause before stream begins
    const pasteDelayAfterHoverMs = 600 // delay after hover opens before pasted reply appears (black)

    // reset UI
    setShowRightPrompt(false)
    setShowThinking(false)
    setShowFreeStream(false)
    setFreeStreamText("")
    setBlinkFreeCopy(false)
    setShowHoverReturn(false)
    setHoverReplyText("")

    // 1) show right-side prompt (no hover card at start)
    setShowRightPrompt(true)
    await sleep(initialHoldMs)

    // 2) show pulsing "thinking..." on the left while assistant prepares
    setShowThinking(true)
    await sleep(thinkingMs)

    // short pause to make the transition smoother
    setShowThinking(false)
    await sleep(postThinkingPauseMs)

    // 3) AI streams free-floating (reply). Show stream and keep it visible afterwards.
    setShowFreeStream(true)
    await stream(AI_REPLY, setFreeStreamText, 32)

    // 4) pause after stream finishes, then blink free stream to imply copy (do not remove the free stream)
    await sleep(800) // add pause after stream finishes
    setBlinkFreeCopy(true)
    await sleep(600)
    setBlinkFreeCopy(false)

    // 5) open hover card - show English error at top-right only initially
    setShowHoverReturn(true)

    // 6) after a short deliberate delay, paste the reply below-left in black (no transition)
    await sleep(pasteDelayAfterHoverMs)
    setHoverReplyText(AI_REPLY)

    // leave hover card open
  }, [])

  const reset = React.useCallback(() => {
    clearTimers()
    setShowRightPrompt(false)
    setShowThinking(false)
    setShowFreeStream(false)
    setFreeStreamText("")
    setBlinkFreeCopy(false)
    setShowHoverReturn(false)
    setHoverReplyText("")
  }, [])

  React.useEffect(() => {
    reset()
    if (active) run()
    return () => clearTimers()
  }, [active, run, reset])

  return (
    <div
      ref={stageRef}
      className={["relative size-full select-none overflow-hidden bg-white", className].join(" ")}
      aria-hidden
      role="img"
      aria-label="Support chat demo simpler"
    >
      <style>{`
        @keyframes caretNudge { 0%{transform:translateX(0)} 50%{transform:translateX(6px)} 100%{transform:translateX(0)} }
        .caret-dot { width:7px; height:7px; border-radius:9999px; display:inline-block; vertical-align:middle; margin-left:6px; animation: caretNudge 1.1s ease-in-out infinite; }

        @keyframes blinkBlue {
          0%, 100% { background-color: transparent; }
          50% { background-color: rgba(59, 130, 246, 0.25); }
        }
        .blink-blue { animation: blinkBlue 700ms ease-in-out 2; border-radius: 6px; }

        @keyframes pulseOpacity { 0%{opacity:.65} 50%{opacity:1} 100%{opacity:.65} }
        .thinking { animation: pulseOpacity 900ms infinite; color: rgba(17,24,39,0.6); }

        .hover-shadow { box-shadow: 0 25px 50px -12px rgba(0,0,0,0.35), 0 8px 24px rgba(0,0,0,0.18); }

        .black-bubble { background: #0b1220; color: #fff; border: none; padding: 10px 12px; border-radius: 14px; display: inline-block; }
        .free-stream { font-size:16px; line-height:1.45; max-width:78%; white-space:pre-wrap; }
        @media (min-width: 640px) { .free-stream { font-size:18px; } }
        @media (min-width: 768px) { .free-stream { font-size:20px; } }
      `}</style>

      {/* Base area: right-side prompt bubble (Thai instruction + English error) */}
      <div className="absolute inset-0 px-3 sm:px-4 py-4 overflow-hidden">
        {showRightPrompt && (
          <div className="w-full flex justify-end">
            <div className="text-right" style={{ maxWidth: "94%" }}>
              <div className="inline-block rounded-2xl bg-neutral-100 px-6 py-4 text-base sm:text-lg md:text-xl leading-[1.5] text-neutral-900 whitespace-pre-wrap text-left">
                {THAI_OPENING}
              </div>
            </div>
          </div>
        )}

        {/* thinking pulse - LEFT aligned where stream will start */}
        {showThinking && (
          <div className="mt-3 w-full flex">
            <div className="max-w-[60%]">
              <div className="thinking">Thinking</div>
            </div>
          </div>
        )}

        {/* Free-floating AI stream (no bubble). Shows caret while streaming. */}
        {showFreeStream && (
          <div className="mt-6 w-full">
            <div
              className="free-stream text-left"
              style={{ color: blinkFreeCopy ? "rgba(59,130,246,0.95)" : "#111827" }}
            >
              {freeStreamText}
              {freeStreamText && !blinkFreeCopy && <span className="caret-dot bg-neutral-900" aria-hidden />}
            </div>
          </div>
        )}
      </div>

      {/* Hover card opens after copy. Correct order: English error at top-right first,
          then the pasted reply appears below-left as a black bubble (no color change). */}
      {showHoverReturn && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-30">
          <div
            className="rounded-2xl bg-white border border-neutral-200 overflow-hidden hover-shadow"
            style={{ width: squareSide, height: squareSide }}
          >
            <div className="h-10 flex items-center justify-between px-3 border-b border-neutral-200">
              <div className="text-[14px] font-medium text-neutral-800">Support Chat</div>
              <div className="flex gap-2">
                <div className="h-2 w-2 rounded-full bg-neutral-300" />
                <div className="h-2 w-2 rounded-full bg-neutral-300" />
                <div className="h-2 w-2 rounded-full bg-neutral-300" />
              </div>
            </div>

            <div className="relative p-3 sm:p-4 size-full">
              <div className="absolute inset-0 p-3 sm:p-4 flex flex-col">
                {/* 1) Top-right: English error */}
                <div className="w-full flex justify-end">
                  <div className="max-w-[75%] text-right">
                    <div className="inline-block rounded-2xl bg-neutral-200 text-neutral-800 px-3 py-2 text-sm sm:text-base md:text-lg leading-[1.4]">
                      {CUSTOMER_ONLY}
                    </div>
                  </div>
                </div>

                {/* Spacer */}
                <div className="mt-3" />

                {/* 2) Below-left: pasted reply appears in black when hoverReplyText is set */}
                {hoverReplyText && (
                  <div className="w-full flex">
                    <div className="max-w-[75%]">
                      <div className="black-bubble whitespace-pre-wrap text-base sm:text-lg md:text-xl leading-[1.4]">
                        {hoverReplyText}
                      </div>
                    </div>
                  </div>
                )}

                {/* subtle thread filler */}
                <div className="mt-4 h-3 w-[55%] rounded-full bg-neutral-100" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
