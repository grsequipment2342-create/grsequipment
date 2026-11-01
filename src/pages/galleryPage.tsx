import { PageBanner } from "@/components/animations/pageBanner"
import { Reveal } from "@/components/animations/reveal"
import { StaggerChildren } from "@/components/animations/staggerChildren"
import { galleryPhotos, galleryVideos } from "@/data/content"
import { cn } from "@/lib/utils"
import { useMemo, useState } from "react"

const photoFilters = ["All", "Machines", "Pumps", "Accessories", "Parts"] as const

export function GalleryPage() {
  const [filter, setFilter] = useState<(typeof photoFilters)[number]>("All")

  const photos = useMemo(() => {
    if (filter === "All") return galleryPhotos
    return galleryPhotos.filter((p) => p.category === filter)
  }, [filter])

  return (
    <>
      <PageBanner
        eyebrow="Gallery / 图集"
        title="Machines, Sites & Events"
        subtitle="STETON machines, accessories, parts and GRS India coverage — showroom, stock and field photos."
      />

      <section className="bg-paper py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <Reveal>
            <h2 className="section-title text-2xl">Photo Gallery</h2>
            <p className="mt-2 text-sm text-muted">Filter by category</p>
          </Reveal>
          <div className="-mx-4 mt-5 flex gap-2 overflow-x-auto px-4 pb-1 scrollbar-none sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
            {photoFilters.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setFilter(key)}
                className={cn(
                  "h-10 shrink-0 rounded-sm border px-3 text-[11px] font-semibold uppercase tracking-wide transition sm:px-4 sm:text-xs",
                  filter === key
                    ? "border-brand bg-brand text-white"
                    : "border-line bg-surface text-ink hover:border-brand"
                )}
              >
                {key}
              </button>
            ))}
          </div>
          <StaggerChildren className="mt-8 grid grid-cols-1 gap-3 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" stagger={0.04} y={24}>
            {photos.map((photo) => (
              <figure key={photo.src} className="group overflow-hidden border border-line bg-surface">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="flex items-center justify-between gap-2 px-3 py-2 text-xs">
                  <span className="truncate text-ink-soft">{photo.alt}</span>
                  <span className="shrink-0 font-bold uppercase tracking-wider text-brand">{photo.category}</span>
                </figcaption>
              </figure>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {galleryVideos.length > 0 ? (
        <section className="bg-surface py-14 md:py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-6">
            <Reveal>
              <h2 className="section-title text-2xl">Video Gallery</h2>
              <p className="mt-2 max-w-2xl text-sm text-muted">
                Watch STETON HDD machines in action — demos and field footage from GRS India projects.
              </p>
            </Reveal>
            <StaggerChildren className="mt-8 grid gap-4 sm:gap-5 md:grid-cols-2" stagger={0.06} y={28}>
              {galleryVideos.map((video) => (
                <article key={video.id} className="overflow-hidden border border-line bg-paper">
                  <div className="media-frame aspect-video bg-ink">
                    <iframe
                      title={video.title}
                      src={`https://www.youtube.com/embed/${video.id}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  </div>
                  <div className="break-anywhere px-3 py-3 text-sm font-semibold sm:px-4">{video.title}</div>
                </article>
              ))}
            </StaggerChildren>
          </div>
        </section>
      ) : null}
    </>
  )
}
