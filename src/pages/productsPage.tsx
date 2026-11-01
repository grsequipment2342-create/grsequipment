import { PageBanner } from "@/components/animations/pageBanner"
import { Reveal } from "@/components/animations/reveal"
import { StaggerChildren } from "@/components/animations/staggerChildren"
import { ProductCard } from "@/components/products/productCard"
import { accessoryCatalog } from "@/data/content"
import { categoryLabels, products, type Product } from "@/data/products"
import { cn } from "@/lib/utils"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Search } from "lucide-react"
import { useMemo, useRef, useState } from "react"
import { Link } from "react-router-dom"

const filters: Array<"all" | Product["category"]> = ["all", "hdd", "pump", "power", "tools"]

export function ProductsPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("all")
  const [query, setQuery] = useState("")
  const gridRef = useRef<HTMLDivElement>(null)

  const list = useMemo(() => {
    const q = query.trim().toLowerCase()
    return products.filter((p) => {
      const categoryOk = filter === "all" || p.category === filter
      if (!categoryOk) return false
      if (!q) return true
      return (
        p.model.toLowerCase().includes(q) ||
        p.nameEn.toLowerCase().includes(q) ||
        p.nameZh.includes(q) ||
        p.summary.toLowerCase().includes(q)
      )
    })
  }, [filter, query])

  useGSAP(
    () => {
      const grid = gridRef.current
      if (!grid) return
      const cards = grid.querySelectorAll(".product-anim")
      gsap.fromTo(
        cards,
        { y: 28, opacity: 0.15, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.55,
          stagger: 0.05,
          ease: "power3.out",
          clearProps: "opacity,transform",
        }
      )
    },
    { dependencies: [filter, query, list.length], scope: gridRef }
  )

  return (
    <>
      <PageBanner
        eyebrow="Products / 产品中心"
        title="STETON Product Line"
        subtitle="Full catalog from GRS — HDD rigs, mud pumps, hybrid power and trenchless tooling with bilingual specifications."
      />

      <section className="bg-paper py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 scrollbar-none sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
              {filters.map((key) => (
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
                  {key === "all" ? "All" : categoryLabels[key].en}
                </button>
              ))}
            </div>
            <label className="relative block w-full max-w-full sm:max-w-sm">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search model / 搜索型号..."
                className="h-11 w-full rounded-sm border border-line bg-surface pl-10 pr-3 text-sm outline-none focus:border-brand"
              />
            </label>
          </div>

          <p className="mt-4 text-xs text-muted">
            Showing {list.length} of {products.length} products
          </p>

          <div ref={gridRef} className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((product) => (
              <div key={product.id} className="product-anim">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {list.length === 0 ? (
            <div className="mt-10 border border-dashed border-line p-10 text-center text-sm text-muted">
              No products match your search. Try another model name or clear filters.
            </div>
          ) : null}
        </div>
      </section>

      <section className="bg-surface py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <Reveal>
            <h2 className="section-title text-2xl">Accessories & Supporting Parts</h2>
            <p className="mt-2 max-w-3xl text-sm text-muted">
              Drill rods, rubber tracks, bits and machinery parts for STETON fleets and popular multi-brand HDD
              platforms — stocked for Indian sites.
            </p>
          </Reveal>
          <StaggerChildren className="mt-8 grid gap-5 md:grid-cols-2" stagger={0.06}>
            {accessoryCatalog.map((item) => (
              <article key={item.id} className="overflow-hidden border border-line bg-paper">
                <div className="relative aspect-[16/9] overflow-hidden bg-[#f2f2f2]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 m-auto h-full w-full object-contain object-center p-3"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-xs text-muted">{item.titleZh}</p>
                  <p className="mt-3 text-sm text-ink-soft">{item.body}</p>
                  <ul className="mt-4 space-y-1 text-sm text-ink-soft">
                    {item.items.map((row) => (
                      <li key={row} className="flex gap-2">
                        <span className="text-brand">•</span>
                        <span>{row}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </StaggerChildren>
          <Reveal>
            <Link
              to="/contact"
              className="mt-8 inline-flex h-11 items-center rounded-sm bg-brand px-5 text-sm font-semibold uppercase tracking-wide text-white"
            >
              Enquire Accessories
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
