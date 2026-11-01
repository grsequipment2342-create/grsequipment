import { company } from "@/data/company"
import { Mail, MessageCircle, Phone } from "lucide-react"

export function FloatingContact() {
  return (
    <>
      {/* Desktop / tablet side rail */}
      <div className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col overflow-hidden rounded-l-sm shadow-lg md:flex">
        <a
          href={`mailto:${company.email}`}
          className="grid h-12 w-12 place-items-center bg-brand text-white transition hover:bg-brand-dark"
          style={{ animation: "pulse-glow 2.4s ease-in-out infinite" }}
          aria-label="Email GRS"
        >
          <Mail className="h-5 w-5" />
        </a>
        <a
          href={`tel:+91${company.phones[0]}`}
          className="grid h-12 w-12 place-items-center bg-ink text-white transition hover:bg-brand"
          aria-label="Call GRS"
        >
          <Phone className="h-5 w-5" />
        </a>
        <a
          href={`https://wa.me/91${company.phones[0]}`}
          target="_blank"
          rel="noreferrer"
          className="grid h-12 w-12 place-items-center bg-[#1f1f1f] text-white transition hover:bg-brand"
          aria-label="WhatsApp GRS"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
      </div>

      {/* Mobile bottom dock */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] backdrop-blur-md md:hidden safe-pb">
        <div className="mx-auto grid max-w-lg grid-cols-3 gap-1 px-2 py-2">
          <a
            href={`tel:+91${company.phones[0]}`}
            className="flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-sm bg-ink px-2 text-white"
            aria-label="Call GRS"
          >
            <Phone className="h-4 w-4" />
            <span className="text-[10px] font-bold uppercase tracking-wide">Call</span>
          </a>
          <a
            href={`https://wa.me/91${company.phones[0]}`}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-sm bg-brand px-2 text-white"
            aria-label="WhatsApp GRS"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="text-[10px] font-bold uppercase tracking-wide">WhatsApp</span>
          </a>
          <a
            href={`mailto:${company.email}`}
            className="flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-sm border border-line bg-surface px-2 text-ink"
            aria-label="Email GRS"
          >
            <Mail className="h-4 w-4 text-brand" />
            <span className="text-[10px] font-bold uppercase tracking-wide">Email</span>
          </a>
        </div>
      </div>
    </>
  )
}
