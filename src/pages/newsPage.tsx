import { PageBanner } from "@/components/animations/pageBanner"
import { Reveal } from "@/components/animations/reveal"
import { StaggerChildren } from "@/components/animations/staggerChildren"
import { newsItems } from "@/data/content"
import { Link } from "react-router-dom"

export function NewsPage() {
  return (
    <>
      <PageBanner
        eyebrow="News / 新闻动态"
        title="News & Events"
        subtitle="STETON brand updates, India trenchless milestones and HDD knowledge — curated by GRS Equipments."
      />

      <section className="bg-paper py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <StaggerChildren className="grid gap-5" y={40} stagger={0.1}>
            {newsItems.map((item) => (
              <article
                key={item.id}
                className="grid gap-4 overflow-hidden border border-line bg-surface transition hover:border-brand md:grid-cols-[220px_1fr]"
              >
                {"image" in item && item.image ? (
                  <div className="aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[160px]">
                    <img src={item.image} alt="" className="h-full w-full object-cover" loading="lazy" />
                  </div>
                ) : (
                  <div className="hidden bg-ink md:block" />
                )}
                <div className="p-5 md:p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="font-display text-sm font-bold text-brand">{item.date}</div>
                    <span className="bg-ink px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                      {item.tag}
                    </span>
                  </div>
                  <h2 className="mt-3 text-lg font-bold text-ink md:text-xl">{item.title}</h2>
                  <p className="mt-1 text-xs text-muted">{item.titleZh}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </StaggerChildren>
          <Reveal>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/gallery" className="text-sm font-semibold uppercase tracking-wide text-brand hover:underline">
                View photo & video gallery →
              </Link>
              <Link to="/contact" className="text-sm font-semibold uppercase tracking-wide text-brand hover:underline">
                Ask GRS about the latest updates →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
