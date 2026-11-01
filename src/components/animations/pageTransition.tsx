import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import type { ReactNode } from "react"
import { useRef } from "react"
import { useLocation } from "react-router-dom"

type PageTransitionProps = {
  children: ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation()
  const rootRef = useRef<HTMLDivElement>(null)
  const curtainRef = useRef<HTMLDivElement>(null)
  const firstLoad = useRef(true)

  useGSAP(
    () => {
      const root = rootRef.current
      const curtain = curtainRef.current
      if (!root || !curtain) return

      if (firstLoad.current) {
        firstLoad.current = false
        gsap.set(curtain, { yPercent: -100 })
        gsap.fromTo(root, { y: 16, opacity: 0.35 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" })
        return
      }

      const tl = gsap.timeline()
      gsap.set(curtain, { yPercent: -100 })
      tl.to(curtain, { yPercent: 0, duration: 0.28, ease: "power2.in" })
        .set(root, { opacity: 0.15, y: 20 })
        .to(curtain, { yPercent: 100, duration: 0.4, ease: "power3.inOut" })
        .to(root, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, "-=0.18")
        .set(curtain, { yPercent: -100 })
    },
    { dependencies: [location.pathname] }
  )

  return (
    <div className="relative">
      <div
        ref={curtainRef}
        className="pointer-events-none fixed inset-0 z-[70] bg-brand"
        style={{ transform: "translateY(-100%)" }}
        aria-hidden="true"
      />
      <div ref={rootRef} key={location.pathname}>
        {children}
      </div>
    </div>
  )
}
