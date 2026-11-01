import { BorePath } from "@/components/animations/borePath"
import { CountUp } from "@/components/animations/countUp"
import { DrawLine } from "@/components/animations/drawLine"
import { Marquee } from "@/components/animations/marquee"
import { Reveal } from "@/components/animations/reveal"
import { StaggerChildren } from "@/components/animations/staggerChildren"
import { ProcessStrip } from "@/components/home/processStrip"
import { ProductCard } from "@/components/products/productCard"
import { company } from "@/data/company"
import {
  applications,
  galleryPhotos,
  hddCharacteristics,
  newsItems,
  testimonials,
} from "@/data/content"
import { products } from "@/data/products"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, Gauge, ShieldCheck, Wrench, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

const heroBanner = "/images/grs/hero/banner.jpg?v=3"

gsap.registerPlugin(ScrollTrigger)

const pillars = [
  { icon: Gauge, title: "High Performance", zh: "高性能" },
  { icon: Zap, title: "Advanced Technology", zh: "先进技术" },
  { icon: ShieldCheck, title: "Durable & Reliable", zh: "可靠耐用" },
  { icon: Wrench, title: "After-Sales Service", zh: "售后服务" },
]

const serviceItems = [
  {
    title: "Presales Technical Assistance",
    body: "Best-fit STETON solution for your crossing length, diameter and geology.",
  },
  {
    title: "Production & Delivery",
    body: "Order tracking with clear milestones from factory to Navi Mumbai showroom.",
  },
  {
    title: "Customer Training",
    body: "Hands-on guidance so your crew uses the rig the right way from day one.",
  },
  {
    title: "Service Centre",
    body: "Technical support and spare parts with fast response across Maharashtra & India.",
  },
]

export function HomePage() {
  const heroRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const serviceRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)
  const [ready, setReady] = useState(() => sessionStorage.getItem("grs-splash-seen") === "1")

  useEffect(() => {
    if (ready) return
    const onDone = () => setReady(true)
    window.addEventListener("grs-splash-done", onDone)
    return () => window.removeEventListener("grs-splash-done", onDone)
  }, [ready])

  useGSAP(
    () => {
      const root = heroRef.current
      if (!root || !ready) return
      const brand = root.querySelector(".hero-brand-bar")
      gsap.fromTo(
        brand,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65, ease: "power3.out", clearProps: "opacity,transform" }
      )
    },
    { scope: heroRef, dependencies: [ready] }
  )

  useGSAP(
    () => {
      const about = aboutRef.current
      if (!about) return
      gsap.from(".about-panel", {
        x: 40,
        opacity: 0.2,
        duration: 0.9,
        ease: "power3.out",
        clearProps: "opacity,transform",
        scrollTrigger: { trigger: about, start: "top 75%", once: true },
      })
    },
    { scope: aboutRef }
  )

  useGSAP(
    () => {
      const service = serviceRef.current
      if (!service) return
      gsap.from(".service-card", {
        y: 48,
        opacity: 0.15,
        stagger: 0.1,
        duration: 0.75,
        ease: "power3.out",
        clearProps: "opacity,transform",
        scrollTrigger: { trigger: service, start: "top 78%", once: true },
      })
      gsap.to(".service-glow", {
        xPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: service,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
    },
    { scope: serviceRef }
  )

  useGSAP(
    () => {
      const cta = ctaRef.current
      if (!cta) return
      gsap.fromTo(
        cta.querySelectorAll(".cta-anim"),
        { y: 34, opacity: 0.15 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: cta, start: "top 82%", once: true },
        }
      )
      gsap.to(".cta-orb", {
        y: -24,
        x: 18,
        ease: "none",
        scrollTrigger: {
          trigger: cta,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
    },
    { scope: ctaRef }
  )

  return (
    <>
      {/* Full photo hero — scales for phone / tablet / desktop */}
      <section
        ref={heroRef}
        className="relative aspect-[16/10] w-full overflow-hidden bg-[#1a1a1a] min-[480px]:aspect-[21/10] sm:aspect-[21/9] md:min-h-[320px] lg:min-h-[380px]"
      >
        <img
          src={heroBanner}
          alt="STETON HDD machines lineup at factory"
          className="absolute inset-0 h-full w-full object-cover object-[center_60%] sm:object-center"
          decoding="async"
          fetchPriority="high"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 via-black/25 to-transparent sm:h-28" />
        <div className="hero-brand-bar absolute inset-x-0 bottom-0 z-10">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 pb-4 pt-3 safe-px sm:flex-row sm:items-end sm:justify-between sm:pb-5 lg:px-6">
            <div className="max-w-md text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]">
              <p className="font-display text-[9px] font-semibold uppercase tracking-[0.2em] sm:text-[10px] sm:tracking-[0.26em] md:text-xs">
                GRS · STETON 思特通 · India
              </p>
              <p className="mt-1 text-[11px] leading-snug text-white/95 sm:text-xs md:text-sm">
                Horizontal Directional Drilling — Navi Mumbai
              </p>
            </div>
            <div className="flex w-full flex-wrap gap-2 sm:w-auto">
              <Link
                to="/products"
                className="inline-flex h-10 min-h-10 flex-1 items-center justify-center gap-1.5 rounded-sm bg-brand px-3.5 text-[11px] font-semibold uppercase tracking-wide text-white transition hover:bg-brand-dark sm:h-10 sm:flex-none sm:text-xs"
              >
                View Products
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex h-10 min-h-10 flex-1 items-center justify-center rounded-sm border border-white/75 bg-black/30 px-3.5 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm transition hover:bg-black/45 sm:h-10 sm:flex-none sm:text-xs"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-paper py-10 sm:py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 safe-px lg:px-6">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-3">
                <span className="h-7 w-1 shrink-0 bg-brand sm:h-8" aria-hidden />
                <h2 className="font-display text-lg font-bold uppercase tracking-[0.12em] text-ink sm:text-xl sm:tracking-[0.14em] md:text-2xl">
                  Products
                </h2>
              </div>
              <Link
                to="/products"
                className="text-xs font-semibold uppercase tracking-wide text-brand hover:underline sm:text-sm"
              >
                All Products →
              </Link>
            </div>
          </Reveal>

          <StaggerChildren className="mt-6 grid grid-cols-1 gap-3 xs:grid-cols-2 sm:mt-8 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
            {products
              .filter((product) => product.category === "hdd")
              .map((product) => (
                <ProductCard key={product.id} product={product} className="bg-paper" />
              ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="border-b border-line bg-ink">
        <div className="mx-auto grid max-w-7xl sm:grid-cols-2 lg:grid-cols-3">
          {company.offeringPillars.map((pillar, i) => (
            <Link
              key={pillar.title}
              to={i === 2 ? "/products" : i === 1 ? "/service" : "/products"}
              className={
                i === 1
                  ? "group relative min-h-[150px] overflow-hidden bg-brand px-5 py-6 text-white transition hover:bg-brand-dark sm:min-h-[180px] sm:px-6 sm:py-8 sm:col-span-2 lg:col-span-1"
                  : "group relative min-h-[150px] overflow-hidden bg-ink-soft px-5 py-6 text-white transition hover:bg-ink sm:min-h-[180px] sm:px-6 sm:py-8"
              }
            >
              <img
                src={pillar.image}
                alt=""
                className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25 transition duration-500 group-hover:scale-105 group-hover:opacity-35"
              />
              <div className="relative">
                <h3 className="font-display text-lg font-bold tracking-wide">{pillar.title}</h3>
                <p className="mt-3 text-sm text-white/75">{pillar.body}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Marquee items={products.filter((p) => p.category === "hdd").map((p) => `${p.model} HDD`)} />

      <section className="border-b border-line bg-paper py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden border border-line bg-surface p-5 transition duration-400 hover:-translate-y-1.5 hover:border-brand hover:shadow-[0_18px_40px_rgba(198,40,40,0.12)]"
              >
                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-brand/5 transition group-hover:bg-brand/10" />
                <item.icon className="relative h-6 w-6 text-brand transition duration-400 group-hover:scale-110 group-hover:rotate-6" />
                <div className="relative mt-4 text-sm font-bold uppercase tracking-wide">{item.title}</div>
                <div className="relative text-xs text-muted">{item.zh}</div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="bg-surface py-14">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <Reveal>
            <h2 className="section-title text-2xl md:text-3xl">By The Numbers</h2>
          </Reveal>
          <DrawLine className="mt-4 max-w-xs" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <CountUp value={12} suffix="+" label="HDD Models" zh="钻机型号" />
            <CountUp value={2015} label="India HDD Since" zh="印度非开挖起步" />
            <CountUp value={150} label="Factory Capacity / Yr" zh="年产能约台套" />
            <CountUp value={7} suffix="+" label="Cities Covered" zh="覆盖城市" />
          </div>
        </div>
      </section>

      <section ref={aboutRef} className="overflow-hidden bg-surface py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2 lg:px-6">
          <Reveal>
            <h2 className="section-title text-2xl md:text-3xl">About GRS</h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">{company.about.english}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{company.about.chinese}</p>
            <div className="mt-8">
              <ProcessStrip />
            </div>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand"
            >
              Company Profile <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <div className="about-panel border border-line bg-paper p-4 md:p-6">
            <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.2em] text-brand">
              Trenchless Path / 非开挖轨迹
            </p>
            <BorePath />
          </div>
        </div>
      </section>

      <section ref={serviceRef} className="relative overflow-hidden bg-ink py-16 text-white md:py-20">
        <div className="service-glow pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-brand/25 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
          <Reveal>
            <h2 className="font-display text-2xl font-bold tracking-wide md:text-3xl">Service / 服务</h2>
            <p className="mt-3 max-w-2xl text-white/70">
              Presales technical assistance, production follow-through, operator training, and spare-parts support —
              tuned for Indian HDD project sites.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {serviceItems.map((item, i) => (
              <div
                key={item.title}
                className="service-card group h-full border border-white/10 bg-white/5 p-5 transition duration-400 hover:-translate-y-2 hover:border-brand hover:bg-white/10"
              >
                <div className="font-display text-xs font-bold text-brand-light transition group-hover:tracking-[0.22em]">
                  0{i + 1}
                </div>
                <h3 className="mt-3 text-sm font-bold uppercase tracking-wide">{item.title}</h3>
                <p className="mt-2 text-sm text-white/65">{item.body}</p>
              </div>
            ))}
          </div>
          <Reveal>
            <Link
              to="/service"
              className="mt-8 inline-flex h-11 items-center rounded-sm bg-brand px-5 text-sm font-semibold uppercase tracking-wide transition hover:shadow-[0_0_24px_rgba(198,40,40,0.45)]"
            >
              Explore Service
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="section-title text-2xl">Applications</h2>
                <p className="mt-2 text-sm text-muted">应用领域</p>
              </div>
              <Link to="/knowledge" className="text-sm font-semibold uppercase tracking-wide text-brand hover:underline">
                Why HDD →
              </Link>
            </div>
          </Reveal>
          <DrawLine className="mt-4 max-w-xs" />
          <StaggerChildren className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((item) => (
              <div
                key={item.title}
                className="group h-full border border-line bg-surface p-5 transition duration-300 hover:-translate-y-1 hover:border-brand"
              >
                <div className="h-1 w-8 bg-brand transition group-hover:w-14" />
                <h3 className="mt-4 font-bold">{item.title}</h3>
                <p className="mt-1 text-xs text-muted">{item.zh}</p>
                <p className="mt-2 text-sm text-ink-soft">{item.body}</p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <Reveal>
            <h2 className="section-title text-2xl">Characteristics of HDD</h2>
            <p className="mt-3 max-w-2xl text-sm text-muted">
              水平定向钻机施工特点 — trenchless advantages for Indian cities and corridors.
            </p>
          </Reveal>
          <StaggerChildren className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {hddCharacteristics.map((item) => (
              <div key={item.title} className="h-full border-t-4 border-brand bg-paper p-5">
                <h3 className="text-sm font-bold uppercase tracking-wide">{item.title}</h3>
                <p className="mt-1 text-xs text-muted">{item.zh}</p>
                <p className="mt-3 text-sm text-ink-soft">{item.body}</p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="section-title text-2xl">Happy Customers</h2>
                <p className="mt-2 text-sm text-muted">India contractors on support & service</p>
              </div>
              <Link to="/about" className="text-sm font-semibold uppercase tracking-wide text-brand hover:underline">
                About GRS →
              </Link>
            </div>
          </Reveal>
          <StaggerChildren className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
            {testimonials.slice(0, 6).map((item) => (
              <blockquote key={item.name} className="h-full border border-line border-l-4 border-l-brand bg-surface p-5">
                <p className="text-sm leading-relaxed text-ink-soft">“{item.quote}”</p>
                <footer className="mt-4">
                  <div className="text-sm font-bold">{item.name}</div>
                  <div className="text-xs text-muted">
                    {item.company} · {item.place}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-wide text-brand">{item.machines}</div>
                </footer>
              </blockquote>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="section-title text-2xl">From The Field</h2>
                <p className="mt-2 text-sm text-muted">Machines, accessories & events</p>
              </div>
              <Link to="/gallery" className="text-sm font-semibold uppercase tracking-wide text-brand hover:underline">
                Full Gallery →
              </Link>
            </div>
          </Reveal>
          <StaggerChildren className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4" stagger={0.04} y={20}>
            {galleryPhotos.slice(0, 8).map((photo) => (
              <Link
                key={photo.src}
                to="/gallery"
                className="group relative aspect-[4/3] overflow-hidden border border-line"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-2 py-2 text-[10px] font-bold uppercase tracking-wider text-white">
                  {photo.category}
                </span>
              </Link>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="section-title text-2xl">Latest News</h2>
              <Link to="/news" className="text-sm font-semibold uppercase tracking-wide text-brand hover:underline">
                More →
              </Link>
            </div>
          </Reveal>
          <StaggerChildren className="mt-8 grid gap-4 md:grid-cols-3">
            {newsItems.slice(0, 3).map((item) => (
              <article
                key={item.id}
                className="group h-full overflow-hidden border border-line bg-surface transition hover:-translate-y-1 hover:border-brand"
              >
                {"image" in item && item.image ? (
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={item.image}
                      alt=""
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ) : null}
                <div className="p-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-brand">{item.date}</span>
                    <span className="bg-ink px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="mt-3 text-base font-bold transition group-hover:text-brand">{item.title}</h3>
                  <p className="mt-1 text-xs text-muted">{item.titleZh}</p>
                  <p className="mt-3 line-clamp-3 text-sm text-ink-soft">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </StaggerChildren>
          <Reveal>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/download"
                className="inline-flex h-11 items-center rounded-sm border border-brand px-5 text-sm font-semibold uppercase tracking-wide text-brand transition hover:bg-brand hover:text-white"
              >
                Download Catalog
              </Link>
              <Link
                to="/news"
                className="inline-flex h-11 items-center rounded-sm bg-ink px-5 text-sm font-semibold uppercase tracking-wide text-white"
              >
                All News
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section ref={ctaRef} className="relative overflow-hidden bg-ink py-16 text-white md:py-20">
        <div className="cta-orb pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-brand/30 blur-3xl" />
        <div className="cta-orb pointer-events-none absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-brand/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 indian-motif opacity-25" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 md:flex-row md:items-center lg:px-6">
          <div className="cta-anim max-w-xl">
            <p className="font-display text-xs uppercase tracking-[0.28em] text-brand-light">Ready when you are</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-wide md:text-4xl">Ready to bore smarter?</h2>
            <p className="mt-3 text-white/65">
              Call +91 {company.phones[0]} / {company.phones[1]} · Ghansoli, Navi Mumbai
            </p>
          </div>
          <div className="cta-anim flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex h-12 items-center rounded-sm bg-brand px-6 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-brand-dark hover:shadow-[0_0_28px_rgba(198,40,40,0.5)]"
            >
              Talk to GRS
            </Link>
            <Link
              to="/products"
              className="inline-flex h-12 items-center rounded-sm border border-white/25 px-6 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white"
            >
              Browse Machines
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
