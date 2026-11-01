import { cn } from "@/lib/utils"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import type { ReactNode } from "react"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}

export function Reveal({ children, className, delay = 0, y = 28 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = ref.current
      if (!el) return

      gsap.fromTo(
        el,
        { y, opacity: 0.01 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay,
          ease: "power3.out",
          overwrite: "auto",
          scrollTrigger: {
            trigger: el,
            start: "top 93%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      )
    },
    { scope: ref, dependencies: [delay, y] }
  )

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  )
}
