import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed z-40 grid h-11 w-11 place-items-center rounded-sm bg-brand text-white shadow-lg transition",
        "right-4 bottom-[calc(4.75rem+env(safe-area-inset-bottom))] md:bottom-8 md:right-16",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      )}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  )
}
