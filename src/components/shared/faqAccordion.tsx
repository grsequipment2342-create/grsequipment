import { faqs } from "@/data/content"
import { cn } from "@/lib/utils"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronDown } from "lucide-react"
import { useEffect, useRef, useState } from "react"

gsap.registerPlugin(ScrollTrigger)

export function FaqAccordion() {
  const [openId, setOpenId] = useState(0)
  const rootRef = useRef<HTMLDivElement>(null)
  const panelsRef = useRef<Array<HTMLDivElement | null>>([])

  useGSAP(
    () => {
      const root = rootRef.current
      if (!root) return
      gsap.from(root.querySelectorAll(".faq-item"), {
        y: 20,
        opacity: 0.2,
        stagger: 0.07,
        duration: 0.55,
        ease: "power3.out",
        clearProps: "opacity,transform",
        scrollTrigger: {
          trigger: root,
          start: "top 88%",
          once: true,
        },
      })
    },
    { scope: rootRef }
  )

  useEffect(() => {
    panelsRef.current.forEach((panel, index) => {
      if (!panel) return
      const open = openId === index
      gsap.to(panel, {
        height: open ? "auto" : 0,
        duration: 0.35,
        ease: "power2.inOut",
        overwrite: "auto",
      })
    })
  }, [openId])

  return (
    <div ref={rootRef} className="space-y-3">
      {faqs.map((item, index) => {
        const open = openId === index
        return (
          <div key={item.q} className="faq-item border border-line bg-paper">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
              onClick={() => setOpenId(open ? -1 : index)}
              aria-expanded={open}
            >
              <span className="text-sm font-bold text-ink md:text-base">{item.q}</span>
              <ChevronDown className={cn("h-4 w-4 shrink-0 text-brand transition", open && "rotate-180")} />
            </button>
            <div
              ref={(el) => {
                panelsRef.current[index] = el
              }}
              className="overflow-hidden"
              style={{ height: open ? "auto" : 0 }}
            >
              <p className="border-t border-line px-4 py-3 text-sm leading-relaxed text-ink-soft">{item.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
