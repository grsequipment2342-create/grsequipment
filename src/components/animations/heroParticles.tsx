import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useMemo, useRef } from "react"

export function HeroParticles() {
  const rootRef = useRef<HTMLDivElement>(null)
  const dots = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        left: `${(i * 17) % 100}%`,
        top: `${(i * 29) % 100}%`,
        size: 2 + (i % 4),
        delay: (i % 7) * 0.2,
      })),
    []
  )

  useGSAP(
    () => {
      const root = rootRef.current
      if (!root) return
      const items = root.querySelectorAll(".hero-dot")

      items.forEach((item, i) => {
        gsap.to(item, {
          y: i % 2 === 0 ? -18 : 16,
          x: i % 3 === 0 ? 10 : -8,
          opacity: 0.15 + (i % 5) * 0.08,
          duration: 2.4 + (i % 4) * 0.4,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          delay: Number((item as HTMLElement).dataset.delay ?? 0),
        })
      })
    },
    { scope: rootRef }
  )

  return (
    <div ref={rootRef} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {dots.map((dot) => (
        <span
          key={dot.id}
          data-delay={dot.delay}
          className="hero-dot absolute rounded-full bg-brand-light"
          style={{
            left: dot.left,
            top: dot.top,
            width: dot.size,
            height: dot.size,
            opacity: 0.25,
          }}
        />
      ))}
    </div>
  )
}
