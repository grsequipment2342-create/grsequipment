import { PageBanner } from "@/components/animations/pageBanner"
import { StaggerChildren } from "@/components/animations/staggerChildren"
import { downloads } from "@/data/content"
import { Download, FileText } from "lucide-react"
import { Link } from "react-router-dom"

export function DownloadPage() {
  return (
    <>
      <PageBanner
        eyebrow="Download / 资料下载"
        title="Catalogs & Resources"
        subtitle="Download the GRS × STETON product catalog or request datasheets for your project shortlist."
      />

      <section className="bg-paper py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <StaggerChildren className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {downloads.map((item) => (
              <div
                key={item.id}
                className="flex h-full flex-col border border-line bg-surface p-6 transition hover:border-brand hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)]"
              >
                <FileText className="h-8 w-8 text-brand" />
                <h2 className="mt-4 text-lg font-bold">{item.title}</h2>
                <p className="mt-1 text-xs text-muted">{item.titleZh}</p>
                <p className="mt-3 flex-1 text-sm text-ink-soft">{item.description}</p>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted">{item.size}</span>
                  {item.href.endsWith(".pdf") ? (
                    <a
                      href={item.href}
                      download
                      className="inline-flex h-10 items-center gap-2 rounded-sm bg-brand px-4 text-xs font-semibold uppercase tracking-wide text-white hover:bg-brand-dark"
                    >
                      <Download className="h-3.5 w-3.5" /> Download
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="inline-flex h-10 items-center gap-2 rounded-sm border border-brand px-4 text-xs font-semibold uppercase tracking-wide text-brand hover:bg-brand hover:text-white"
                    >
                      Open
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </>
  )
}
