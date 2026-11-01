import { cn } from "@/lib/utils"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

type ParallaxMediaProps = {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  speed?: number
}

export function ParallaxMedia({
  src,
  alt,
  className,
  imgClassName,
  speed = 12,
}: ParallaxMediaProps) {
  const rootRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const root = rootRef.current
      if (!root) return
      const img = root.querySelector("img")
      if (!img) return

      gsap.fromTo(
        img,
        { yPercent: -speed },
        {
          yPercent: speed,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      )
    },
    { scope: rootRef, dependencies: [speed, src] }
  )

  return (
    <div ref={rootRef} className={cn("overflow-hidden", className)}>
      <img src={src} alt={alt} className={cn("h-full w-full scale-110 object-cover", imgClassName)} />
    </div>
  )
}
