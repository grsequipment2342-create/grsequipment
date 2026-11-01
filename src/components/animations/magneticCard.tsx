import { cn } from "@/lib/utils"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import type { ReactNode } from "react"
import { useRef } from "react"

type MagneticCardProps = {
  children: ReactNode
  className?: string
}

export function MagneticCard({ children, className }: MagneticCardProps) {
  const rootRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const root = rootRef.current
      if (!root) return
      if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return

      const shine = root.querySelector(".mag-shine")

      const onMove = (event: MouseEvent) => {
        const rect = root.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        const midX = rect.width / 2
        const midY = rect.height / 2
        const rotateY = ((x - midX) / midX) * 6
        const rotateX = ((midY - y) / midY) * 6

        gsap.to(root, {
          rotateX,
          rotateY,
          transformPerspective: 900,
          transformOrigin: "center",
          duration: 0.35,
          ease: "power2.out",
        })

        if (shine) {
          gsap.to(shine, {
            opacity: 0.35,
            x: x - 80,
            y: y - 80,
            duration: 0.25,
          })
        }
      }

      const onLeave = () => {
        gsap.to(root, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.55,
          ease: "power3.out",
        })
        if (shine) gsap.to(shine, { opacity: 0, duration: 0.35 })
      }

      root.addEventListener("mousemove", onMove)
      root.addEventListener("mouseleave", onLeave)

      return () => {
        root.removeEventListener("mousemove", onMove)
        root.removeEventListener("mouseleave", onLeave)
      }
    },
    { scope: rootRef }
  )

  return (
    <div ref={rootRef} className={cn("relative will-change-transform", className)} style={{ transformStyle: "preserve-3d" }}>
      <div className="mag-shine pointer-events-none absolute left-0 top-0 z-20 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(198,40,40,0.35),transparent_70%)] opacity-0" />
      {children}
    </div>
  )
}
