import { company, navLinks } from "@/data/company"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Mail, MapPin, Phone } from "lucide-react"
import { useRef } from "react"
import { Link } from "react-router-dom"

gsap.registerPlugin(ScrollTrigger)

export function SiteFooter() {
  const footerRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const root = footerRef.current
      if (!root) return
      gsap.from(root.querySelectorAll(".footer-col"), {
        y: 28,
        opacity: 0.2,
        stagger: 0.08,
        duration: 0.65,
        ease: "power3.out",
        clearProps: "opacity,transform",
        scrollTrigger: {
          trigger: root,
          start: "top 92%",
          once: true,
        },
      })
    },
    { scope: footerRef }
  )

  return (
    <footer ref={footerRef} className="bg-ink text-white pb-[calc(4.25rem+env(safe-area-inset-bottom))] md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:gap-10 sm:py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-6">
        <div className="footer-col">
          <div className="font-display text-xl font-bold tracking-wide">{company.shortName}</div>
          <p className="mt-2 text-sm text-white/65">{company.tagline}</p>
          <p className="mt-4 text-xs uppercase tracking-[0.18em] text-brand-light">
            STETON 思特通 · Built for Indian infrastructure
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link to="/download" className="rounded-sm border border-white/20 px-3 py-1.5 text-[11px] uppercase tracking-wide hover:border-brand hover:text-brand-light">
              Catalog
            </Link>
            <Link to="/knowledge" className="rounded-sm border border-white/20 px-3 py-1.5 text-[11px] uppercase tracking-wide hover:border-brand hover:text-brand-light">
              HDD Guide
            </Link>
            <Link to="/news" className="rounded-sm border border-white/20 px-3 py-1.5 text-[11px] uppercase tracking-wide hover:border-brand hover:text-brand-light">
              News
            </Link>
          </div>
        </div>

        <div className="footer-col">
          <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white/50">Navigate</h3>
          <ul className="mt-4 columns-2 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="hover:text-brand-light">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white/50">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" />
              <span>
                +91 {company.phones[0]}
                <br />
                +91 {company.phones[1]}
              </span>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" />
              <a href={`mailto:${company.email}`} className="hover:text-brand-light">
                {company.email}
              </a>
            </li>
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" />
              <span>
                {company.address.line1}
                <br />
                {company.address.city}, {company.address.state} {company.address.pin}
              </span>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white/50">Company</h3>
          <p className="mt-4 text-sm text-white/75">{company.legalName}</p>
          <p className="mt-2 text-xs text-white/45">GSTIN: {company.gstin}</p>
          <p className="mt-4 text-sm italic text-white/55">
            Strong machines. Stronger support. Lasting partnership.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between lg:px-6">
          <span>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</span>
          <span>{company.website}</span>
        </div>
      </div>
    </footer>
  )
}
