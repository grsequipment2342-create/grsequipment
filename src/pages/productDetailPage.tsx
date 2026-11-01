import { Reveal } from "@/components/animations/reveal"
import { ProductMedia } from "@/components/products/productMedia"
import { getProductBySlug, products } from "@/data/products"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowLeft } from "lucide-react"
import { useRef } from "react"
import { Link, Navigate, useParams } from "react-router-dom"

gsap.registerPlugin(ScrollTrigger)

export function ProductDetailPage() {
  const { slug } = useParams()
  const product = slug ? getProductBySlug(slug) : undefined
  const rootRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!rootRef.current || !product) return
      gsap.fromTo(
        ".detail-visual",
        { x: -24, opacity: 0.25 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", clearProps: "opacity,transform" }
      )
      gsap.fromTo(
        ".detail-copy > *",
        { y: 20, opacity: 0.2 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.7, ease: "power3.out", clearProps: "opacity,transform" }
      )
      gsap.fromTo(
        ".spec-row",
        { y: 12, opacity: 0.2 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.04,
          duration: 0.45,
          clearProps: "opacity,transform",
          scrollTrigger: { trigger: ".spec-grid", start: "top 85%", once: true },
        }
      )
      gsap.from(".feature-item", {
        x: -18,
        opacity: 0.2,
        stagger: 0.07,
        duration: 0.55,
        ease: "power3.out",
        clearProps: "opacity,transform",
        scrollTrigger: { trigger: ".feature-list", start: "top 85%", once: true },
      })
    },
    { scope: rootRef, dependencies: [product?.id] }
  )

  if (!product) {
    return <Navigate to="/products" replace />
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3)

  return (
    <article ref={rootRef}>
      <section className="border-b border-line bg-surface">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-2 lg:px-6 lg:py-14">
          <ProductMedia
            src={`${product.image}?v=8`}
            alt={`${product.model} ${product.nameEn}`}
            className="detail-visual aspect-[4/3] w-full border border-line"
            priority
          />
          <div className="detail-copy">
            <Link to="/products" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand">
              <ArrowLeft className="h-3.5 w-3.5" /> Back to products
            </Link>
            <h1 className="mt-4 break-anywhere font-display text-[clamp(2rem,8vw,3rem)] font-bold tracking-wide text-brand">
              {product.model}
            </h1>
            <p className="mt-2 text-lg font-semibold text-ink">{product.nameEn}</p>
            <p className="text-sm text-muted">{product.nameZh}</p>
            <p className="mt-5 leading-relaxed text-ink-soft">{product.summary}</p>
            <Link
              to="/contact"
              className="mt-8 inline-flex h-12 items-center rounded-sm bg-brand px-6 text-sm font-semibold uppercase tracking-wide text-white hover:bg-brand-dark"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-paper py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:px-6">
          <Reveal>
            <h2 className="section-title text-xl">Main Performance Characteristics</h2>
            <p className="mt-2 text-xs uppercase tracking-wide text-muted">主要性能特点</p>
            <ul className="feature-list mt-5 space-y-3">
              {product.featuresEn.map((feature, i) => (
                <li key={feature} className="feature-item border-l-2 border-brand bg-surface px-4 py-3 text-sm">
                  <div className="font-medium text-ink">{feature}</div>
                  <div className="mt-1 text-xs text-muted">{product.featuresZh[i]}</div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="section-title text-xl">技术参数 Specifications</h2>
            <div className="spec-grid mt-5 overflow-hidden border border-line">
              {product.specs.map((spec) => (
                <div
                  key={spec.labelEn}
                  className="spec-row grid grid-cols-1 border-b border-line last:border-b-0 sm:grid-cols-[1.2fr_1fr]"
                >
                  <div className="bg-surface px-4 py-3 text-sm">
                    <div className="font-semibold">{spec.labelEn}</div>
                    <div className="text-xs text-muted">{spec.labelZh}</div>
                  </div>
                  <div className="px-4 py-3 text-sm font-bold text-brand sm:text-right">{spec.value}</div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted">
              We reserve the right to change parameters and design without prior notice. /
              因产品不断改进升级，技术参数及外观如有变更恕不另行通知。
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <Reveal>
            <h2 className="section-title text-xl">Catalog Sheet</h2>
            <div className="mt-6 overflow-hidden border border-line bg-paper">
              <img
                src={`${product.sheetImage}?v=8`}
                alt={`${product.model} catalog sheet`}
                className="mx-auto h-auto w-full max-w-4xl object-contain object-top"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="bg-paper py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-6">
            <h2 className="section-title text-xl">Related Models</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {related.map((item) => (
                <Link
                  key={item.id}
                  to={`/products/${item.slug}`}
                  className="rounded-sm border border-line px-4 py-2 text-sm font-semibold hover:border-brand hover:text-brand"
                >
                  {item.model}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </article>
  )
}
