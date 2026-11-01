import { ProductCard } from "@/components/products/productCard"
import type { Product } from "@/data/products"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

type FeaturedRailProps = {
  products: Product[]
}

export function FeaturedRail({ products }: FeaturedRailProps) {
  const rootRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const root = rootRef.current
      if (!root) return
      const track = root.querySelector(".rail-track")
      const cards = root.querySelectorAll(".rail-card")
      if (!track || !cards.length) return

      const mm = gsap.matchMedia()

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const amount = Math.max(0, (track as HTMLElement).scrollWidth - root.clientWidth + 48)
        if (amount <= 0) return
        gsap.to(track, {
          x: -amount,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top 70%",
            end: () => `+=${amount}`,
            scrub: 1,
            pin: false,
          },
        })
      })

      gsap.from(cards, {
        y: 40,
        opacity: 0.2,
        stagger: 0.08,
        duration: 0.7,
        ease: "power3.out",
        clearProps: "opacity,transform",
        scrollTrigger: {
          trigger: root,
          start: "top 85%",
          once: true,
        },
      })
    },
    { scope: rootRef, dependencies: [products.length] }
  )

  return (
    <div ref={rootRef} className="relative">
      <p className="mb-3 text-xs text-muted lg:hidden">Swipe sideways to browse machines →</p>
      <div className="-mx-4 overflow-x-auto overscroll-x-contain px-4 pb-2 scrollbar-thin lg:mx-0 lg:overflow-hidden lg:px-0 lg:pb-0">
        <div className="rail-track flex w-max snap-x snap-mandatory gap-4 pe-4 sm:gap-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="rail-card w-[min(78vw,280px)] shrink-0 snap-start sm:w-[300px] md:w-[320px]"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
