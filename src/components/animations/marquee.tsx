import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

type MarqueeProps = {
  items: string[]
}

export function Marquee({ items }: MarqueeProps) {
  const rootRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const root = rootRef.current
      if (!root) return
      const track = root.querySelector(".mq-track")
      if (!track) return

      const width = (track as HTMLElement).scrollWidth / 2
      gsap.fromTo(
        track,
        { x: 0 },
        {
          x: -width,
          duration: Math.max(18, width / 60),
          ease: "none",
          repeat: -1,
        }
      )
    },
    { scope: rootRef, dependencies: [items.join("|")] }
  )

  const loop = [...items, ...items]

  return (
    <div ref={rootRef} className="overflow-hidden border-y border-line bg-ink py-3 text-white sm:py-4">
      <div className="mq-track flex w-max items-center gap-6 whitespace-nowrap will-change-transform sm:gap-10">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-6 font-display text-[11px] tracking-[0.16em] sm:gap-10 sm:text-sm sm:tracking-[0.2em]"
          >
            <span className="text-brand-light">◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
