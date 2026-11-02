import { Reveal } from "@/components/animations/reveal"
import { company } from "@/data/company"
import { getSeoPageByPath, seoPages } from "@/data/seoPages"
import { products } from "@/data/products"
import { Link, Navigate, useLocation } from "react-router-dom"

export function SeoLandingPage() {
  const { pathname } = useLocation()
  const page = getSeoPageByPath(pathname)

  if (!page) {
    return <Navigate to="/" replace />
  }

  const relatedProducts = products.filter((item) => item.category === "hdd").slice(0, 4)
  const relatedPages = seoPages.filter((item) => page.relatedPaths.includes(item.path))

  return (
    <article>
      <section className="border-b border-line bg-ink py-12 text-white sm:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <p className="font-display text-[10px] uppercase tracking-[0.22em] text-brand-light sm:text-xs">
            GRS Equipments · STETON India
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(1.6rem,4.5vw,2.75rem)] font-bold leading-tight tracking-wide">
            {page.h1}
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">{page.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex h-11 items-center rounded-sm bg-brand px-5 text-xs font-semibold uppercase tracking-wide text-white hover:bg-brand-dark"
            >
              Enquire / Get Quote
            </Link>
            <Link
              to="/products"
              className="inline-flex h-11 items-center rounded-sm border border-white/40 px-5 text-xs font-semibold uppercase tracking-wide text-white hover:border-white"
            >
              View STETON Products
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-paper py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1.1fr_0.9fr] lg:px-6">
          <Reveal>
            <img
              src={page.image}
              alt={page.imageAlt}
              className="aspect-[16/10] w-full border border-line object-cover"
              loading="eager"
              decoding="async"
            />
            <p className="mt-3 text-xs text-muted">{page.imageAlt}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="section-title text-xl">Why contractors choose GRS</h2>
            <div className="mt-5 space-y-4">
              {page.highlights.map((item) => (
                <div key={item.title} className="border border-line border-l-4 border-l-brand bg-surface p-4">
                  <h3 className="text-sm font-bold uppercase tracking-wide">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{item.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:px-6">
          <Reveal>
            <h2 className="section-title text-xl">Applications</h2>
            <ul className="mt-5 space-y-3">
              {page.applications.map((item) => (
                <li key={item} className="border border-line bg-paper px-4 py-3 text-sm text-ink-soft">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="section-title text-xl">Key specifications & facts</h2>
            <div className="mt-5 overflow-hidden border border-line">
              {page.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="grid grid-cols-1 border-b border-line last:border-b-0 sm:grid-cols-[0.9fr_1.1fr]"
                >
                  <div className="bg-paper px-4 py-3 text-sm font-semibold">{spec.label}</div>
                  <div className="px-4 py-3 text-sm text-ink-soft">{spec.value}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <Reveal>
            <h2 className="section-title text-xl">Featured STETON HDD models</h2>
            <p className="mt-2 max-w-3xl text-sm text-muted">
              Explore real product pages with specifications. GRS Equipments helps you pick the right STETON class for
              Indian ground conditions and bore design.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.slug}`}
                className="group border border-line bg-surface transition hover:border-brand"
              >
                <img
                  src={product.image}
                  alt={`${product.model} STETON ${product.nameEn}`}
                  className="aspect-[4/3] w-full object-contain bg-[#f2f2f2] p-3"
                  loading="lazy"
                  decoding="async"
                />
                <div className="border-t border-line p-3">
                  <div className="font-display text-lg font-bold text-brand">{product.model}</div>
                  <div className="mt-1 text-xs text-ink-soft">{product.nameEn}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <Reveal>
            <h2 className="section-title text-xl">Frequently asked questions</h2>
          </Reveal>
          <div className="mt-6 space-y-4">
            {page.faqs.map((faq) => (
              <div key={faq.question} className="border border-line bg-paper p-5">
                <h3 className="text-sm font-bold">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <Reveal>
            <h2 className="section-title text-xl">Related guides</h2>
          </Reveal>
          <div className="mt-6 flex flex-wrap gap-3">
            {relatedPages.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="rounded-sm border border-line px-4 py-2 text-sm font-semibold hover:border-brand hover:text-brand"
              >
                {item.h1.split("—")[0]?.trim() || item.h1}
              </Link>
            ))}
            {page.relatedPaths
              .filter(
                (path) =>
                  path.startsWith("/products") ||
                  path === "/contact" ||
                  path === "/service" ||
                  path === "/about" ||
                  path === "/knowledge"
              )
              .map((path) => {
                const labels: Record<string, string> = {
                  "/products": "All Products",
                  "/products/drill-tools": "Drill Tools",
                  "/contact": "Contact / Enquire",
                  "/service": "Service",
                  "/about": "About GRS",
                  "/knowledge": "HDD Knowledge",
                }
                return (
                  <Link
                    key={path}
                    to={path}
                    className="rounded-sm border border-line px-4 py-2 text-sm font-semibold hover:border-brand hover:text-brand"
                  >
                    {labels[path] ?? path}
                  </Link>
                )
              })}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-ink py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between lg:px-6">
          <div>
            <h2 className="font-display text-xl font-bold tracking-wide">Ready to enquire?</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/70">{page.ctaNote}</p>
            <p className="mt-3 text-sm text-white/55">
              {company.tradeName} · +91 {company.phones[0]} · {company.email}
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex h-11 w-full items-center justify-center rounded-sm bg-brand px-6 text-xs font-semibold uppercase tracking-wide text-white hover:bg-brand-dark sm:w-auto"
          >
            Contact GRS
          </Link>
        </div>
      </section>
    </article>
  )
}
