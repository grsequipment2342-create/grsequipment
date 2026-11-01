import { company, navLinks } from "@/data/company"
import { cn } from "@/lib/utils"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Menu, Phone, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useGSAP(
    () => {
      const root = headerRef.current
      if (!root) return
      gsap.from(root, { y: -24, opacity: 0.4, duration: 0.7, ease: "power3.out", clearProps: "opacity,transform" })
    },
    { scope: headerRef }
  )

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <header ref={headerRef} className="sticky top-0 z-50 safe-pt">
      <div
        className={cn(
          "border-b border-line bg-paper transition-shadow",
          scrolled && "shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-2.5 safe-px sm:gap-3 sm:px-4 sm:py-3 lg:px-6">
          <Link to="/" className="flex min-w-0 items-center gap-2 sm:gap-3" onClick={() => setOpen(false)}>
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-sm bg-brand font-display text-xs font-bold text-white sm:h-11 sm:w-11 sm:text-sm">
              GRS
            </div>
            <div className="min-w-0 leading-tight">
              <div className="font-display truncate text-sm font-bold tracking-wide text-ink sm:text-base">
                {company.shortName}
              </div>
              <div className="truncate text-[9px] font-semibold uppercase tracking-[0.12em] text-muted sm:text-[11px] sm:tracking-[0.14em]">
                {company.partnerBrand} 思特通 · HDD India
              </div>
            </div>
          </Link>

          <nav className="hidden items-center lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    "whitespace-nowrap px-2 py-2 text-[10px] font-semibold uppercase tracking-wide transition-colors xl:px-2.5 xl:text-[11px]",
                    isActive ? "text-brand" : "text-ink-soft hover:text-brand"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Link
              to="/contact"
              className="hidden h-10 items-center justify-center rounded-sm bg-brand px-3 text-[11px] font-semibold uppercase tracking-wide text-white transition hover:bg-brand-dark xl:inline-flex xl:px-4 xl:text-xs"
            >
              Get Quote
            </Link>

            <a
              href={`tel:+91${company.phones[0]}`}
              className="grid h-10 w-10 place-items-center rounded-sm border border-line text-brand lg:hidden"
              aria-label="Call GRS"
            >
              <Phone className="h-4 w-4" />
            </a>

            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-sm border border-line lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Close menu overlay"
        className={cn(
          "fixed inset-0 z-40 bg-ink/45 transition lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setOpen(false)}
      />

      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-[min(100%,22rem)] flex-col border-l border-line bg-paper shadow-2xl transition duration-300 lg:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between border-b border-line px-4 py-3 safe-pt">
          <div className="font-display text-sm font-bold tracking-wide">Menu</div>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-sm border border-line"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto overscroll-contain px-3 py-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  "block rounded-sm px-3 py-3.5 text-sm font-semibold uppercase tracking-wide",
                  isActive ? "bg-surface text-brand" : "text-ink"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="space-y-3 border-t border-line p-4 safe-pb">
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="flex h-12 items-center justify-center rounded-sm bg-brand text-sm font-semibold uppercase tracking-wide text-white"
          >
            Get Quote
          </Link>
          <a href={`tel:+91${company.phones[0]}`} className="block text-center text-sm font-semibold text-brand">
            +91 {company.phones[0]} / {company.phones[1]}
          </a>
        </div>
      </div>
    </header>
  )
}
