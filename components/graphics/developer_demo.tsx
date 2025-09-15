"use client"

import * as React from "react"

type Props = {
  active?: boolean
  className?: string
}

/**
 * DevLintFixDemo
 * Minimal full-bleed on white. Header with dots • filename • transient ESLint error.
 * Two-line error -> two-line green fix streams in, then wrong lines collapse and header error fades.
 * No scrolling. Code may clip below viewport to imply more content.
 */
export function DevLintFixDemo({ active = false, className = "" }: Props) {
  // Sequence state
  const [showHeaderError, setShowHeaderError] = React.useState(true)
  const [showErr1, setShowErr1] = React.useState(true)
  const [showErr2, setShowErr2] = React.useState(true)
  const [errorTintOn, setErrorTintOn] = React.useState(false)

  const [showFix1, setShowFix1] = React.useState(false)
  const [showFix2, setShowFix2] = React.useState(false)
  const [fixTintOn, setFixTintOn] = React.useState(false)

  const [typed1, setTyped1] = React.useState(0)
  const [typed2, setTyped2] = React.useState(0)

  // Timers
  const timers = React.useRef<number[]>([])
  const pushTimer = (id: number) => timers.current.push(id)
  const clearTimers = () => {
    timers.current.forEach((id) => clearTimeout(id))
    timers.current = []
  }
  React.useEffect(() => () => clearTimers(), [])

  // Speeds
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(max-width: 768px)").matches

  const CPS = isMobile ? 30 : 42 // keep type speed the same
  const delayPerChar = Math.max(10, Math.round(1000 / CPS))
  const FX = 2 // slow non-typing steps by 2x
  const RED_HOLD_MS = 1200 // extra time after red highlight appears (multiplied by FX)
  const sleep = (ms: number) => new Promise<void>((res) => pushTimer(window.setTimeout(res, ms)))

  // Token colors (light editor vibe)
  const cls = {
    kw: "text-blue-700",
    type: "text-purple-700",
    str: "text-emerald-700",
    num: "text-amber-700",
    fn: "text-emerald-700",
    ns: "text-fuchsia-700",
    id: "text-sky-800",
    var: "text-slate-800",
    com: "text-slate-500",
    op: "text-slate-700",
    pun: "text-slate-600",
    dim: "text-slate-500",
  } as const

  // Wrong lines (two lines stacked)
  // 5: const payload: any = JSON.parse(body)
  const WRONG1 = [
    { t: "  ", c: "" },
    { t: "const ", c: cls.kw },
    { t: "payload", c: cls.id },
    { t: ": ", c: cls.dim },
    { t: "any", c: `underline decoration-wavy decoration-red-500 [text-underline-offset:2px] ${cls.type}` },
    { t: " = ", c: cls.op },
    { t: "JSON", c: cls.id },
    { t: ".", c: cls.pun },
    { t: "parse", c: cls.fn },
    { t: "(", c: cls.pun },
    { t: "body", c: cls.var },
    { t: ")", c: cls.pun },
  ] as const

  // 6: const items: any[] = payload.items
  const WRONG2 = [
    { t: "  ", c: "" },
    { t: "const ", c: cls.kw },
    { t: "items", c: cls.id },
    { t: ": ", c: cls.dim },
    { t: "any[]", c: `underline decoration-wavy decoration-red-500 [text-underline-offset:2px] ${cls.type}` },
    { t: " = ", c: cls.op },
    { t: "payload", c: cls.var },
    { t: ".", c: cls.pun },
    { t: "items", c: cls.id },
  ] as const

  // Fix lines that stream in
  // 7: const payload: z.infer<typeof Invoice> = Invoice.parse(JSON.parse(body))
  const FIX1 = [
    { t: "  ", c: "" },
    { t: "const ", c: cls.kw },
    { t: "payload", c: cls.id },
    { t: ": ", c: cls.dim },
    { t: "z", c: cls.ns },
    { t: ".", c: cls.pun },
    { t: "infer", c: cls.fn },
    { t: "<", c: cls.pun },
    { t: "typeof", c: cls.kw },
    { t: " ", c: cls.dim },
    { t: "Invoice", c: cls.type },
    { t: ">", c: cls.pun },
    { t: " = ", c: cls.op },
    { t: "Invoice", c: cls.type },
    { t: ".", c: cls.pun },
    { t: "parse", c: cls.fn },
    { t: "(", c: cls.pun },
    { t: "JSON", c: cls.id },
    { t: ".", c: cls.pun },
    { t: "parse", c: cls.fn },
    { t: "(", c: cls.pun },
    { t: "body", c: cls.var },
    { t: ")", c: cls.pun },
    { t: ")", c: cls.pun },
  ] as const

  // 8: const items = Items.parse(payload.items)
  const FIX2 = [
    { t: "  ", c: "" },
    { t: "const ", c: cls.kw },
    { t: "items", c: cls.id },
    { t: " = ", c: cls.op },
    { t: "Items", c: cls.type },
    { t: ".", c: cls.pun },
    { t: "parse", c: cls.fn },
    { t: "(", c: cls.pun },
    { t: "payload", c: cls.var },
    { t: ".", c: cls.pun },
    { t: "items", c: cls.id },
    { t: ")", c: cls.pun },
  ] as const

  const FIX1_FULL = React.useMemo(() => FIX1.map((x) => x.t).join(""), [])
  const FIX2_FULL = React.useMemo(() => FIX2.map((x) => x.t).join(""), [])
  const FIX1_LEN = FIX1_FULL.length
  const FIX2_LEN = FIX2_FULL.length

  // Static lines before and after wrong region to reach 24 lines total
  const HEAD = [
    [
      { t: "import ", c: cls.kw },
      { t: "{ ", c: cls.pun },
      { t: "z", c: cls.ns },
      { t: " } ", c: cls.pun },
      { t: "from", c: cls.kw },
      { t: " ", c: "" },
      { t: "'zod'", c: cls.str },
    ],
    [
      { t: "import type ", c: cls.kw },
      { t: "{ NextRequest }", c: cls.type },
      { t: " from ", c: cls.kw },
      { t: "'next/server'", c: cls.str },
    ],
    [
      { t: "const ", c: cls.kw },
      { t: "Invoice", c: cls.type },
      { t: " = ", c: cls.op },
      { t: "z", c: cls.ns },
      { t: ".", c: cls.pun },
      { t: "object", c: cls.fn },
      { t: "({ id: z.string(), amount: z.number() })", c: cls.pun },
    ],
    [
      { t: "const ", c: cls.kw },
      { t: "Items", c: cls.type },
      { t: " = ", c: cls.op },
      { t: "z", c: cls.ns },
      { t: ".", c: cls.pun },
      { t: "array", c: cls.fn },
      { t: "(", c: cls.pun },
      { t: "z", c: cls.ns },
      { t: ".", c: cls.pun },
      { t: "object", c: cls.fn },
      { t: "({ id: z.string(), qty: z.number() })", c: cls.pun },
      { t: ")", c: cls.pun },
    ],
    [
      { t: "export ", c: cls.kw },
      { t: "async ", c: cls.kw },
      { t: "function ", c: cls.kw },
      { t: "handleWebhook", c: cls.fn },
      { t: "(", c: cls.pun },
      { t: "body", c: cls.var },
      { t: ": ", c: cls.dim },
      { t: "string", c: cls.type },
      { t: ")", c: cls.pun },
      { t: " {", c: cls.pun },
    ],
  ]

  const TAIL: Array<Array<{ t: string; c: string }>> = [
    // 9..
    [
      { t: "  ", c: "" },
      { t: "if ", c: cls.kw },
      { t: "(!", c: cls.pun },
      { t: "payload", c: cls.var },
      { t: ".", c: cls.pun },
      { t: "id", c: cls.id },
      { t: ") ", c: cls.pun },
      { t: "throw ", c: cls.kw },
      { t: "new ", c: cls.kw },
      { t: "Error", c: cls.type },
      { t: "(", c: cls.pun },
      { t: "'missing id'", c: cls.str },
      { t: ")", c: cls.pun },
    ],
    [
      { t: "  ", c: "" },
      { t: "const ", c: cls.kw },
      { t: "amount", c: cls.id },
      { t: " = ", c: cls.op },
      { t: "payload", c: cls.var },
      { t: ".", c: cls.pun },
      { t: "amount", c: cls.id },
    ],
    [
      { t: "  ", c: "" },
      { t: "const ", c: cls.kw },
      { t: "vat", c: cls.id },
      { t: " = ", c: cls.op },
      { t: "Math", c: cls.id },
      { t: ".", c: cls.pun },
      { t: "round", c: cls.fn },
      { t: "(", c: cls.pun },
      { t: "amount", c: cls.id },
      { t: " * ", c: cls.op },
      { t: "0.07", c: cls.num },
      { t: ")", c: cls.pun },
    ],
    [
      { t: "  ", c: "" },
      { t: "const ", c: cls.kw },
      { t: "net", c: cls.id },
      { t: " = ", c: cls.op },
      { t: "amount", c: cls.id },
      { t: " - ", c: cls.op },
      { t: "vat", c: cls.id },
    ],
    [
      { t: "  ", c: "" },
      { t: "return ", c: cls.kw },
      { t: "{ ok: true, amount: net }", c: cls.pun },
    ],
    [{ t: "}", c: cls.pun }],
    [{ t: "", c: "" }],
    [{ t: "// helpers", c: cls.com }],
    [
      { t: "export ", c: cls.kw },
      { t: "const ", c: cls.kw },
      { t: "id", c: cls.id },
      { t: " = ", c: cls.op },
      { t: "()", c: cls.pun },
      { t: " => ", c: cls.op },
      { t: "Math", c: cls.id },
      { t: ".", c: cls.pun },
      { t: "random", c: cls.fn },
      { t: "()", c: cls.pun },
    ],
    [{ t: "", c: "" }],
    [{ t: "// end", c: cls.com }],
    [{ t: "", c: "" }],
  ]

  // Render helpers
  const renderTokens = (tokens: readonly { t: string; c: string }[]) => (
    <code>
      {tokens.map((seg, i) => (
        <span key={i} className={seg.c}>
          {seg.t}
        </span>
      ))}
    </code>
  )

  const renderTyped = (tokens: readonly { t: string; c: string }[], count: number) => {
    const full = tokens.map((x) => x.t).join("")
    const total = full.length
    let remaining = Math.min(count, total)
    return (
      <code>
        {tokens.map((seg, i) => {
          const take = Math.min(seg.t.length, Math.max(0, remaining))
          const txt = seg.t.slice(0, take)
          remaining -= take
          return (
            <span key={i} className={seg.c}>
              {txt}
            </span>
          )
        })}
        {count < total && (
          <span className="ml-[1px] inline-block h-4 w-[7px] translate-y-[1px] animate-pulse rounded-sm bg-slate-700 align-middle" />
        )}
      </code>
    )
  }

  // Sequence
  const run = React.useCallback(async () => {
    // Start: only wrong two lines with curly underlines
    setShowHeaderError(true)
    setShowErr1(true)
    setShowErr2(true)
    setErrorTintOn(false)

    setShowFix1(false)
    setShowFix2(false)
    setFixTintOn(false)
    setTyped1(0)
    setTyped2(0)

    await sleep(600 * FX)

    // Red highlight appears and holds a bit longer for clarity
    setErrorTintOn(true)
    await sleep(RED_HOLD_MS * FX)

    // Open two fix lines, type line 1 then line 2
    setShowFix1(true)
    setShowFix2(true)
    setFixTintOn(true)
    await sleep(140 * FX)

    for (let i = 1; i <= FIX1_LEN; i++) {
      setTyped1(i)
      await sleep(delayPerChar)
    }

    await sleep(200 * FX)

    for (let i = 1; i <= FIX2_LEN; i++) {
      setTyped2(i)
      await sleep(delayPerChar)
    }

    await sleep(500 * FX)

    // Collapse wrong lines, clear tint, hide header error
    setShowErr1(false)
    setShowErr2(false)

    await sleep(320 * FX)

    setFixTintOn(false)
    setShowHeaderError(false)
  }, [delayPerChar])

  const reset = React.useCallback(() => {
    setShowHeaderError(true)
    setShowErr1(true)
    setShowErr2(true)
    setErrorTintOn(false)
    setShowFix1(false)
    setShowFix2(false)
    setFixTintOn(false)
    setTyped1(0)
    setTyped2(0)
  }, [])

  React.useEffect(() => {
    clearTimers()
    reset()
    if (active) run()
    return () => clearTimers()
  }, [active, run, reset])

  return (
    <div className={["relative size-full select-none bg-white", className].join(" ")}>
      <style>{`
        .line-enter { max-height: 0; opacity: 0; }
        .line-enter-active { max-height: 40px; opacity: 1; transition: max-height 260ms ease-out, opacity 260ms ease-out; }
        .line-exit-active { max-height: 0; opacity: 0; transition: max-height 220ms ease-in, opacity 200ms ease-in; }
      `}</style>

      {/* Header */}
      <div className="flex h-9 items-center gap-3 px-3 text-[12px] text-slate-700">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <div className="font-medium text-slate-800">api/webhook.ts</div>
        <div className="ml-auto">
          <span
            className={[
              "rounded-full border px-2 py-0.5 text-[11px]",
              "transition-opacity duration-300",
              showHeaderError ? "opacity-100 border-red-300 text-red-600 bg-red-50" : "opacity-0 border-transparent bg-transparent",
            ].join(" ")}
          >
            ESLint: Unexpected any
          </span>
        </div>
      </div>
      <div className="h-px w-full bg-slate-200" />

      {/* Code canvas. No scroll. Clipping allowed. */}
      <div className="h-[calc(100%-37px)] w-full overflow-hidden px-3 pb-3 font-mono text-xs sm:text-sm md:text-base leading-[1.65] text-slate-900">
        <div className="grid grid-cols-[auto_1fr] gap-x-3">
          {/* Gutter 1..24 */}
          <div className="select-none pr-2 text-right text-xs text-slate-400 sm:text-sm md:text-base">
            {Array.from({ length: 24 }).map((_, i) => {
              const n = i + 1
              const clsNum =
                n === 5
                  ? showErr1
                    ? "line-enter-active"
                    : "line-exit-active"
                  : n === 6
                  ? showErr2
                    ? "line-enter-active"
                    : "line-exit-active"
                  : n === 7 || n === 8
                  ? (n === 7 ? showFix1 : showFix2) ? "line-enter-active" : "line-enter"
                  : undefined
              return (
                <div key={n} className={clsNum}>
                  {n}
                </div>
              )
            })}
          </div>

          {/* Code column */}
          <div className="min-w-0">
            {/* 1..4 */}
            {HEAD.map((ln, i) => (
              <div key={`h-${i}`} className="whitespace-pre">
                {renderTokens(ln)}
              </div>
            ))}

            {/* 5 wrong */}
            {showErr1 && (
              <div
                className={[
                  "relative whitespace-pre rounded-[3px] px-1 transition-colors",
                  errorTintOn ? "bg-red-500/10" : "",
                ].join(" ")}
              >
                {renderTokens(WRONG1)}
              </div>
            )}

            {/* 6 wrong */}
            {showErr2 && (
              <div
                className={[
                  "relative whitespace-pre rounded-[3px] px-1 transition-colors",
                  errorTintOn ? "bg-red-500/10" : "",
                ].join(" ")}
              >
                {renderTokens(WRONG2)}
              </div>
            )}

            {/* 7 fix (streams) */}
            <div
              className={[
                "relative whitespace-pre rounded-[3px] px-1",
                showFix1 ? "line-enter-active" : "line-enter",
                fixTintOn ? "bg-emerald-500/10 transition-colors" : "transition-colors",
              ].join(" ")}
            >
              {typed1 > 0 ? renderTyped(FIX1, typed1) : <span className="text-transparent">.</span>}
            </div>

            {/* 8 fix (streams) */}
            <div
              className={[
                "relative whitespace-pre rounded-[3px] px-1",
                showFix2 ? "line-enter-active" : "line-enter",
                fixTintOn ? "bg-emerald-500/10 transition-colors" : "transition-colors",
              ].join(" ")}
            >
              {typed2 > 0 ? renderTyped(FIX2, typed2) : <span className="text-transparent">.</span>}
            </div>

            {/* 9..24 */}
            {TAIL.map((ln, i) => (
              <div key={`t-${i}`} className="whitespace-pre">
                {renderTokens(ln)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
