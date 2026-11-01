import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

type CountUpProps = {
  value: number
  suffix?: string
  label: string
  zh: string
}

export function CountUp({ value, suffix = "", label, zh }: CountUpProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const numRef = useRef<HTMLSpanElement>(null)

  useGSAP(
    () => {
      const root = rootRef.current
      const num = numRef.current
      if (!root || !num) return

      const state = { n: 0 }
      gsap.to(state, {
        n: value,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: root,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          num.textContent = `${Math.floor(state.n)}${suffix}`
        },
      })

      gsap.from(root, {
        y: 24,
        opacity: 0.2,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root,
          start: "top 85%",
          once: true,
        },
      })
    },
    { scope: rootRef, dependencies: [value, suffix] }
  )

  return (
    <div ref={rootRef} className="border border-line bg-surface p-5 text-center">
      <span ref={numRef} className="font-display text-3xl font-bold text-brand md:text-4xl">
        0{suffix}
      </span>
      <div className="mt-2 text-xs font-bold uppercase tracking-wide text-ink">{label}</div>
      <div className="text-[11px] text-muted">{zh}</div>
    </div>
  )
}
