import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

const steps = [
  { n: "01", en: "Survey & Select", zh: "勘察选型" },
  { n: "02", en: "Quote & Order", zh: "报价下单" },
  { n: "03", en: "Deliver & Train", zh: "交付培训" },
  { n: "04", en: "Support & Spares", zh: "售后配件" },
]

export function ProcessStrip() {
  const rootRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const root = rootRef.current
      if (!root) return
      const line = root.querySelector(".process-line")
      const nodes = root.querySelectorAll(".process-node")

      gsap.set(line, { scaleX: 0, transformOrigin: "left center" })
      gsap.to(line, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top 75%",
          end: "bottom 55%",
          scrub: 0.6,
        },
      })

      gsap.from(nodes, {
        y: 36,
        opacity: 0.15,
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out",
        clearProps: "opacity,transform",
        scrollTrigger: {
          trigger: root,
          start: "top 80%",
          once: true,
        },
      })

      nodes.forEach((node) => {
        gsap.to(node.querySelector(".process-dot"), {
          scale: 1.35,
          boxShadow: "0 0 0 10px rgba(198,40,40,0.15)",
          repeat: -1,
          yoyo: true,
          duration: 1.4,
          ease: "sine.inOut",
        })
      })
    },
    { scope: rootRef }
  )

  return (
    <div ref={rootRef} className="relative py-4">
      <div className="process-line absolute left-0 right-0 top-[34px] hidden h-[2px] bg-brand/30 md:block" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <div key={step.n} className="process-node relative">
            <div className="process-dot mb-4 h-3 w-3 rounded-full bg-brand" />
            <div className="font-display text-xs font-bold text-brand">{step.n}</div>
            <div className="mt-1 text-sm font-bold uppercase tracking-wide">{step.en}</div>
            <div className="text-xs text-muted">{step.zh}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
