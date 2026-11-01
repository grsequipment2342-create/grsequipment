import { PageTransition } from "@/components/animations/pageTransition"
import { ScrollProgress } from "@/components/animations/scrollProgress"
import { BackToTop } from "@/components/layout/backToTop"
import { FloatingContact } from "@/components/layout/floatingContact"
import { SiteFooter } from "@/components/layout/siteFooter"
import { SiteHeader } from "@/components/layout/siteHeader"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useEffect, useRef } from "react"
import { Outlet, useLocation } from "react-router-dom"

export function SiteLayout() {
  const location = useLocation()
  const floatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useGSAP(
    () => {
      const el = floatRef.current
      if (!el) return
      if (window.matchMedia("(max-width: 767px)").matches) {
        gsap.set(el, { clearProps: "all" })
        return
      }
      gsap.fromTo(
        el,
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, delay: 0.2, ease: "power3.out", clearProps: "opacity,transform" }
      )
    },
    { dependencies: [location.pathname] }
  )

  return (
    <div className="flex min-h-dvh flex-col overflow-x-clip">
      <ScrollProgress />
      <SiteHeader />
      <main className="flex-1 pb-[calc(4.25rem+env(safe-area-inset-bottom))] md:pb-0">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <SiteFooter />
      <div ref={floatRef}>
        <FloatingContact />
      </div>
      <BackToTop />
    </div>
  )
}
