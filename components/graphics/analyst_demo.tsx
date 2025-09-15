"use client";

import * as React from "react";

type Props = { active?: boolean; className?: string };

/**
 * AnalystDemo (chat-style)
 *
 * - Right-side user bubble (faded brown), max width 80% of row
 * - Left-side AI: Thinking (pulse) -> Searching the web (blink) -> streamed answer
 * - Status lines are same font size as the streamed text and get replaced by it
 * - While streaming, container auto-scrolls so the user question scrolls out of view
 */
export default function AnalystDemo({ active = false, className = "" }: Props) {
  // "idle" | "thinking" | "searching" | "streaming" | "done"
  const [status, setStatus] = React.useState<"idle" | "thinking" | "searching" | "streaming" | "done">(
    "idle"
  );
  const [streamText, setStreamText] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);

  const timers = React.useRef<number[]>([]);
  const pushTimer = (id: number) => timers.current.push(id);
  const clearTimers = () => {
    timers.current.forEach((t) => clearTimeout(t));
    timers.current = [];
  };

  const containerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => () => clearTimers(), []);

  // Content to stream (no em dashes)
  const CONTENT =
    "TLDR - Three rapid experiments: per-user (best for small teams), per-data-volume (best for scaled usage), and freemium upgrade (best for PLG adoption); pick one as primary and run quick A/B tests to learn willingness to pay BUT [source: Forrester - SaaS Pricing Frameworks]\n\n" +
    "1) Per-user pricing\n• What - charge a flat seat fee per active user per month.\n• Ideal customer profile - small product/growth teams (3-20 users) who need immediate, repeatable access and share insights inside the team.\n• Quick validation metric - conversion rate from free trial to paid per-seat at proposed price (target: >=6% trial->paid within 14 days).\n\n" +
    "2) Per-data-volume (or usage) pricing\n• What - charge by data ingested or queries executed (GB / queries / chart exports).\n• Ideal customer profile - analytics-heavy teams or data platforms with many low-frequency users but high volume (finance, ad-ops).\n• Quick validation metric - $ revenue per MAU (or $ per GB) elasticity: run two pilot tiers and measure revenue per customer and churn delta over 30 days.\n\n" +
    "3) Freemium -> paid upgrade (feature gated)\n• What - free tier with core Q&A + small exports; paid unlocks higher limits, one-click deckables, and historical exports.\n• Ideal customer profile - product-led SMBs and PMs who try tools before buying; many one-person shops.\n• Quick validation metric - upgrade rate from active free users to paid within 30 days (target: 2-5%) and engagement lift (weekly active users double before upgrade).\n\n" +
    "Fast execution plan:\n• A/B two price points per approach on a 2-week pilot.\n• Use short landing pages + clear value metric (exports per month / charts per team) and measure click to pay.\n• Readout: choose approach with highest revenue per acquisition and acceptable churn after 30 days.\n\n" +
    "Want me to draft the two landing-page variants and the exact A/B test measurement plan for the approach you pick?\n\n[source: Forrester - SaaS Pricing Frameworks]";

  // Typing speed
  const CPS_DESKTOP = 40;
  const CPS_MOBILE = 30;
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(max-width: 768px)").matches;
  const CPS = isMobile ? CPS_MOBILE : CPS_DESKTOP;
  const delayPerChar = Math.max(6, Math.round(1000 / CPS));

  const start = React.useCallback(async () => {
    clearTimers();
    setStreamText("");
    setIsTyping(false);

    // Status lines appear in the stream area with the same font size
    setStatus("thinking");
    await new Promise<void>((res) => pushTimer(window.setTimeout(res, 1800))); // longer thinking

    setStatus("searching");
    await new Promise<void>((res) => pushTimer(window.setTimeout(res, 1500))); // longer searching

    // Replace status line with the streamed answer
    setStatus("streaming");
    setIsTyping(true);

    const batchSize = 6;
    let acc = "";
    let batchCounter = 0;

    for (let i = 0; i < CONTENT.length; i++) {
      const ch = CONTENT[i];
      acc += ch;
      batchCounter++;

      setStreamText(acc);

      // smooth auto-scroll as the text grows
      const shouldScroll = batchCounter >= batchSize || ch === "\n" || i === CONTENT.length - 1;
      if (shouldScroll) {
        await new Promise<void>((res) =>
          pushTimer(
            window.setTimeout(() => {
              if (containerRef.current) {
                containerRef.current.scrollTo({
                  top: containerRef.current.scrollHeight,
                  behavior: "smooth",
                });
              }
              res();
            }, 40)
          )
        );
        batchCounter = 0;
      }

      let extra = 0;
      if (ch === "." || ch === "\n") extra = 60;
      await new Promise<void>((res) => pushTimer(window.setTimeout(res, delayPerChar + extra)));
    }

    setIsTyping(false);
    setStatus("done");

    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [CONTENT, delayPerChar]);

  React.useEffect(() => {
    if (!active) {
      clearTimers();
      setStatus("idle");
      setStreamText("");
      setIsTyping(false);
      if (containerRef.current) containerRef.current.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
    start();
    return () => clearTimers();
  }, [active, start]);

  // Animations
  const pulseStyle = { animation: "pulseOpacity 900ms infinite" } as React.CSSProperties;
  const blinkStyle = { animation: "blinkVis 420ms steps(2,end) infinite" } as React.CSSProperties;

  return (
    <div
      className={["relative w-full max-w-full bg-white overflow-hidden", className].join(" ")} // border removed
      aria-live="polite"
    >
      <style>{`
        @keyframes pulseOpacity { 0%{opacity:.6} 50%{opacity:1} 100%{opacity:.6} }
        @keyframes blinkVis { 0%{opacity:1} 50%{opacity:0} 100%{opacity:1} }
        .caret-dot { width:7px; height:7px; border-radius:9999px; display:inline-block; vertical-align:middle; margin-left:6px; animation: caretMove 1.1s ease-in-out infinite; }
        @keyframes caretMove { 0%{transform:translateX(0)} 50%{transform:translateX(6px)} 100%{transform:translateX(0)} }
        .faded-brown { background-color: rgba(101,67,33,0.08); color: rgb(80,48,22); }
      `}</style>

      {/* Scroll container */}
      <div
        ref={containerRef}
        className="relative w-full h-[420px] md:h-[520px] overflow-auto px-3 py-4"
        role="region"
        aria-label="Pricing experiment streaming demo"
      >
        {/* User message row */}
        <div className="w-full flex justify-end">
          <div
            className="inline-block rounded-2xl px-4 py-2 text-base sm:text-lg md:text-xl leading-[1.5] faded-brown max-w-[80%] text-left"
          >
            {"Propose 3 pricing approaches (per-user, per-data-volume, freemium upgrade). For each, list ideal customer profile and a quick metric to validate pricing."}
          </div>
        </div>

        <div className="h-4" />

        {/* AI area - statuses (same font size) then streamed answer */}
        <div className="w-full text-left text-base sm:text-lg md:text-xl leading-[1.5] text-neutral-900 whitespace-pre-wrap font-sans pr-3">
          {status === "thinking" && (
            <div className="text-neutral-800" style={pulseStyle}>
              Thinking
            </div>
          )}

          {status === "searching" && (
            <div className="flex items-center gap-2 text-neutral-800" style={pulseStyle}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden focusable="false">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
                <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              Searching the web
            </div>
          )}

          {(status === "streaming" || status === "done") && (
            <div>
              {streamText}
              {isTyping && <span className="caret-dot bg-neutral-900" aria-hidden />}
            </div>
          )}

          {status === "done" && (
            <div className="mt-4 text-sm text-neutral-500">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="underline"
              >
                [source: Forrester - SaaS Pricing Frameworks]
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
