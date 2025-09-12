import * as React from "react";

export const AlternatingLayout = React.memo(function AlternatingLayout({
  leftGraphic,
  graphic,
  content,
  className = "",
}: {
  leftGraphic: boolean
  graphic: React.ReactNode
  content: React.ReactNode
  className?: string
}) {
  return (
    <div className={["grid grid-cols-1 md:grid-cols-2", className].join(" ")}> 
      <div className={["order-1 bg-card p-0 md:p-6 md:aspect-square", leftGraphic ? "md:order-1" : "md:order-2"].join(" ")}> 
        <div className="aspect-[4/3] md:aspect-auto size-full">{graphic}</div>
      </div>
      <div className={["order-2 bg-neutral-800 text-neutral-100 md:aspect-square", leftGraphic ? "md:order-2" : "md:order-1"].join(" ")}>
        {content}
      </div>
    </div>
  )
}, (a, b) => {
  return a.leftGraphic === b.leftGraphic && a.graphic === b.graphic && a.content === b.content && a.className === b.className
})
