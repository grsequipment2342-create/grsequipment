import { cn } from "@/lib/utils"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

type DrawLineProps = {
  className?: string
}

export function DrawLine({ className }: DrawLineProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = ref.current
      if (!el) return
      gsap.fromTo(
        el,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          ease: "power2.out",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            once: true,
          },
        }
      )
    },
    { scope: ref }
  )

  return <div ref={ref} className={cn("h-[3px] w-full origin-left bg-brand", className)} />
}
