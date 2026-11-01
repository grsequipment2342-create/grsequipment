import { cn } from "@/lib/utils"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import type { ReactNode } from "react"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

type StaggerChildrenProps = {
  children: ReactNode
  className?: string
  itemSelector?: string
  y?: number
  stagger?: number
}

export function StaggerChildren({
  children,
  className,
  itemSelector = ":scope > *",
  y = 36,
  stagger = 0.08,
}: StaggerChildrenProps) {
  const rootRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const root = rootRef.current
      if (!root) return
      const items = root.querySelectorAll(itemSelector)
      if (!items.length) return

      gsap.from(items, {
        y,
        opacity: 0.15,
        duration: 0.7,
        stagger,
        ease: "power3.out",
        clearProps: "opacity,transform",
        scrollTrigger: {
          trigger: root,
          start: "top 88%",
          once: true,
        },
      })
    },
    { scope: rootRef, dependencies: [itemSelector, y, stagger] }
  )

  return (
    <div ref={rootRef} className={cn(className)}>
      {children}
    </div>
  )
}
