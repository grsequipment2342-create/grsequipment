import { TextReveal } from "@/components/animations/textReveal"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

type PageBannerProps = {
  eyebrow: string
  title: string
  subtitle: string
}

export function PageBanner({ eyebrow, title, subtitle }: PageBannerProps) {
  const rootRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const root = rootRef.current
      if (!root) return

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
      tl.from(".pb-glow", { scale: 0.6, opacity: 0, duration: 1 })
        .from(".pb-eyebrow", { y: 18, opacity: 0, duration: 0.55 }, 0.15)
        .from(".pb-sub", { y: 22, opacity: 0, duration: 0.6 }, 0.35)
        .from(".pb-line", { scaleX: 0, duration: 0.8, transformOrigin: "left center" }, 0.25)
    },
    { scope: rootRef }
  )

  return (
    <section ref={rootRef} className="relative overflow-hidden bg-ink py-12 text-white sm:py-16 md:py-20">
      <div className="pb-glow pointer-events-none absolute -right-20 top-0 h-56 w-56 rounded-full bg-brand/30 blur-3xl sm:h-72 sm:w-72" />
      <div className="pointer-events-none absolute inset-0 indian-motif opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        <p className="pb-eyebrow font-display text-[10px] uppercase tracking-[0.22em] text-brand-light sm:text-xs sm:tracking-[0.25em]">
          {eyebrow}
        </p>
        <div className="pb-line mt-3 h-[2px] w-16 bg-brand sm:mt-4 sm:w-24" />
        <TextReveal
          text={title}
          as="h1"
          className="mt-3 break-anywhere font-display text-[clamp(1.6rem,4.5vw,3rem)] font-bold leading-tight tracking-wide sm:mt-4"
        />
        <p className="pb-sub mt-3 max-w-2xl text-sm leading-relaxed text-white/70 sm:mt-4 sm:text-base">
          {subtitle}
        </p>
      </div>
    </section>
  )
}
