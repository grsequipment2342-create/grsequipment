import { cn } from "@/lib/utils"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

type TextRevealProps = {
  text: string
  className?: string
  as?: "h1" | "h2" | "h3" | "p" | "span"
  delay?: number
}

export function TextReveal({ text, className, as = "h2", delay = 0 }: TextRevealProps) {
  const rootRef = useRef<HTMLElement>(null)
  const Tag = as

  useGSAP(
    () => {
      const root = rootRef.current
      if (!root) return
      const words = root.querySelectorAll(".tr-word")

      gsap.from(words, {
        yPercent: 110,
        rotateX: -50,
        duration: 0.75,
        stagger: 0.05,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root,
          start: "top 90%",
          once: true,
        },
      })
    },
    { scope: rootRef, dependencies: [text, delay] }
  )

  return (
    <Tag ref={rootRef as never} className={cn(className)}>
      {text.split(" ").map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom pb-[0.08em]">
          <span className="tr-word inline-block origin-bottom will-change-transform">{word}&nbsp;</span>
        </span>
      ))}
    </Tag>
  )
}
