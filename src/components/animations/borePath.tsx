import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

type BorePathProps = {
  className?: string
}

export function BorePath({ className }: BorePathProps) {
  const rootRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const root = rootRef.current
      if (!root) return

      const path = root.querySelector<SVGPathElement>(".bore-line")
      const bit = root.querySelector(".drill-bit")
      const pipe = root.querySelector(".pipe-fill")
      const pulses = root.querySelectorAll(".scan-pulse")

      if (!path || !bit || !pipe) return

      const length = path.getTotalLength()
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      })
      gsap.set(bit, { x: 70, y: 70 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 80%",
          end: "bottom 45%",
          scrub: 1,
        },
      })

      tl.to(path, { strokeDashoffset: 0, duration: 1.4, ease: "none" }, 0)
        .to(
          bit,
          {
            motionPath: {
              path,
              align: path,
              alignOrigin: [0.5, 0.5],
              autoRotate: true,
            },
            duration: 1.4,
            ease: "none",
          },
          0
        )
        .fromTo(
          pipe,
          { scaleX: 0 },
          { scaleX: 1, duration: 1.1, ease: "power1.inOut", transformOrigin: "left center" },
          0.2
        )
        .fromTo(
          pulses,
          { opacity: 0, scale: 0.5 },
          { opacity: 0.75, scale: 1, stagger: 0.12, duration: 0.35 },
          0.25
        )

      gsap.to(".bit-core", {
        rotate: 360,
        duration: 1.1,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      })
    },
    { scope: rootRef }
  )

  return (
    <div ref={rootRef} className={className}>
      <svg viewBox="0 0 900 220" className="h-auto w-full" aria-hidden="true">
        <defs>
          <linearGradient id="boreGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c62828" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#c62828" stopOpacity="1" />
            <stop offset="100%" stopColor="#c62828" stopOpacity="0.35" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="900" height="90" fill="#f4f4f4" />
        <rect x="0" y="90" width="900" height="130" fill="#1a1a1a" />
        <text x="24" y="36" fill="#666" fontSize="12" fontFamily="Manrope, sans-serif">
          SURFACE / 地表
        </text>
        <text x="24" y="128" fill="#999" fontSize="12" fontFamily="Manrope, sans-serif">
          TRENCHLESS BORE PATH / 非开挖轨迹
        </text>
        <rect className="pipe-fill" x="70" y="148" width="720" height="10" rx="4" fill="#c62828" opacity="0.35" />
        <path
          className="bore-line"
          d="M70 70 C 180 70, 220 160, 340 160 S 520 70, 640 70 S 760 160, 830 150"
          fill="none"
          stroke="url(#boreGlow)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle className="scan-pulse" cx="220" cy="150" r="8" fill="none" stroke="#c62828" strokeWidth="1.5" />
        <circle className="scan-pulse" cx="430" cy="100" r="8" fill="none" stroke="#c62828" strokeWidth="1.5" />
        <circle className="scan-pulse" cx="680" cy="90" r="8" fill="none" stroke="#c62828" strokeWidth="1.5" />
        <g className="drill-bit">
          <g className="bit-core">
            <circle cx="0" cy="0" r="9" fill="#c62828" />
            <circle cx="0" cy="0" r="3.5" fill="#fff" />
          </g>
        </g>
      </svg>
    </div>
  )
}
