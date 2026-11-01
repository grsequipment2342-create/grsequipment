import { company } from "@/data/company"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef, useState } from "react"

const SPLASH_KEY = "grs-splash-seen"

type SplashScreenProps = {
  onComplete: () => void
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(() => {
    if (typeof window === "undefined") return true
    return sessionStorage.getItem(SPLASH_KEY) !== "1"
  })

  useGSAP(
    () => {
      if (!active || !rootRef.current) {
        onComplete()
        return
      }

      document.body.style.overflow = "hidden"

      const root = rootRef.current
      const ring = root.querySelector(".splash-ring")
      const core = root.querySelector(".splash-core")
      const bore = root.querySelector(".splash-bore")
      const letters = root.querySelectorAll(".splash-letter")
      const sub = root.querySelector(".splash-sub")
      const tag = root.querySelector(".splash-tag")
      const bar = root.querySelector(".splash-bar-fill")
      const scan = root.querySelector(".splash-scan")
      const sparks = root.querySelectorAll(".splash-spark")
      const panels = root.querySelectorAll(".splash-panel")

      gsap.set(letters, { y: 80, opacity: 0, rotateX: -40 })
      gsap.set([sub, tag], { y: 24, opacity: 0 })
      gsap.set(bar, { scaleX: 0, transformOrigin: "left center" })
      gsap.set(ring, { scale: 0.4, opacity: 0, rotate: -90 })
      gsap.set(core, { scale: 0, opacity: 0 })
      gsap.set(bore, { strokeDasharray: 420, strokeDashoffset: 420 })
      gsap.set(scan, { scaleY: 0, transformOrigin: "top center" })
      gsap.set(sparks, { scale: 0, opacity: 0 })
      gsap.set(panels, { scaleY: 1 })

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          sessionStorage.setItem(SPLASH_KEY, "1")
          document.body.style.overflow = ""
          setActive(false)
          onComplete()
          window.dispatchEvent(new CustomEvent("grs-splash-done"))
        },
      })

      tl.to(scan, { scaleY: 1, duration: 0.55, ease: "power2.inOut" })
        .to(ring, { scale: 1, opacity: 1, rotate: 0, duration: 0.85 }, 0.15)
        .to(bore, { strokeDashoffset: 0, duration: 1.05, ease: "power2.inOut" }, 0.2)
        .to(core, { scale: 1, opacity: 1, duration: 0.55, ease: "back.out(1.8)" }, 0.45)
        .to(
          sparks,
          {
            scale: 1,
            opacity: 1,
            stagger: 0.05,
            duration: 0.35,
            ease: "back.out(2)",
          },
          0.55
        )
        .to(
          sparks,
          {
            x: (i) => (i % 2 === 0 ? 40 : -40) * (1 + (i % 3)),
            y: (i) => -30 - i * 12,
            opacity: 0,
            duration: 0.7,
            stagger: 0.04,
          },
          0.85
        )
        .to(
          letters,
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            stagger: 0.08,
            duration: 0.7,
            ease: "back.out(1.4)",
          },
          0.7
        )
        .to(sub, { y: 0, opacity: 1, duration: 0.55 }, 1.15)
        .to(tag, { y: 0, opacity: 1, duration: 0.55 }, 1.25)
        .to(bar, { scaleX: 1, duration: 1.1, ease: "power1.inOut" }, 0.9)
        .to(core, { rotate: 360, duration: 1.2, ease: "power1.inOut" }, 0.9)
        .to(ring, { rotate: 180, duration: 1.3, ease: "power1.inOut" }, 0.9)
        .to(
          panels,
          {
            scaleY: 0,
            stagger: { each: 0.08, from: "center" },
            duration: 0.7,
            ease: "power3.inOut",
            transformOrigin: "center top",
          },
          2.35
        )
        .to(
          root,
          {
            autoAlpha: 0,
            duration: 0.35,
            ease: "power2.in",
          },
          2.7
        )

      return () => {
        document.body.style.overflow = ""
      }
    },
    { dependencies: [active] }
  )

  if (!active) return null

  const name = company.shortName

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-ink text-white"
      aria-hidden="true"
    >
      <div className="splash-scan pointer-events-none absolute inset-x-0 top-0 h-full bg-[linear-gradient(180deg,rgba(198,40,40,0.18),transparent_35%,transparent_65%,rgba(198,40,40,0.12))]" />

      <div className="pointer-events-none absolute inset-0 indian-motif opacity-30" />

      <div className="absolute inset-0 flex">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="splash-panel h-full flex-1 bg-ink" />
        ))}
      </div>

      <div className="relative z-10 flex max-w-full flex-col items-center px-4 text-center sm:px-6">
        <div className="relative mb-6 grid h-28 w-28 place-items-center sm:mb-8 sm:h-36 sm:w-36 md:h-44 md:w-44">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 160 160" fill="none" aria-hidden="true">
            <circle className="splash-ring" cx="80" cy="80" r="68" stroke="#c62828" strokeWidth="2" />
            <circle cx="80" cy="80" r="56" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
            <path
              className="splash-bore"
              d="M28 80 C 48 52, 70 118, 90 78 S 122 48, 132 80"
              stroke="#e53935"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>

          <div className="splash-core relative grid h-16 w-16 place-items-center rounded-sm bg-brand font-display text-xl font-bold tracking-wider shadow-[0_0_40px_rgba(198,40,40,0.55)] sm:h-20 sm:w-20 sm:text-2xl md:h-24 md:w-24 md:text-3xl">
            GRS
            <span className="splash-spark absolute -right-1 -top-1 h-2 w-2 rounded-full bg-white" />
            <span className="splash-spark absolute -bottom-1 left-2 h-1.5 w-1.5 rounded-full bg-brand-light" />
            <span className="splash-spark absolute right-3 top-0 h-1.5 w-1.5 rounded-full bg-white" />
            <span className="splash-spark absolute bottom-3 -left-1 h-2 w-2 rounded-full bg-brand-light" />
          </div>
        </div>

        <div
          className="flex justify-center gap-1 perspective-[800px] sm:gap-2"
          style={{ perspective: "800px" }}
        >
          {name.split("").map((letter, i) => (
            <span
              key={`${letter}-${i}`}
              className="splash-letter inline-block font-display text-[clamp(2.4rem,12vw,4.5rem)] font-bold tracking-[0.12em] sm:tracking-[0.18em]"
            >
              {letter}
            </span>
          ))}
        </div>

        <p className="splash-sub mt-4 max-w-md font-display text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70 sm:text-xs">
          {company.tradeName}
        </p>
        <p className="splash-tag mt-2 text-xs uppercase tracking-[0.22em] text-brand-light sm:text-sm">
          {company.partnerBrand} 思特通 · HDD India
        </p>

        <div className="mt-10 h-[2px] w-48 overflow-hidden bg-white/15 sm:w-64">
          <div className="splash-bar-fill h-full w-full bg-brand" />
        </div>
        <p className="mt-3 text-[10px] uppercase tracking-[0.28em] text-white/40">Loading trenchless power</p>
      </div>
    </div>
  )
}
