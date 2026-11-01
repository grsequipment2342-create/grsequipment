import { BorePath } from "@/components/animations/borePath"
import { PageBanner } from "@/components/animations/pageBanner"
import { Reveal } from "@/components/animations/reveal"
import { StaggerChildren } from "@/components/animations/staggerChildren"
import { FaqAccordion } from "@/components/shared/faqAccordion"
import { company } from "@/data/company"
import { processSteps, stetonPartner, supportHighlights } from "@/data/content"
import { Link } from "react-router-dom"

export function ServicePage() {
  return (
    <>
      <PageBanner
        eyebrow="Service / 服务"
        title="HDD & Trenchless Support"
        subtitle="Presales assistance, order follow-through, training and spare-parts coordination — STETON process adapted for Indian project sites by GRS. Also HDD technical consultancy for clients, consultants and contractors."
      />

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <Reveal>
            <h2 className="section-title text-2xl">Our Limitless Support</h2>
            <p className="mt-3 max-w-3xl text-sm text-ink-soft">
              Advisors with decades of trenchless experience — wise advice, extreme support and practical ideas that
              keep machines productive on Indian sites.
            </p>
          </Reveal>
          <StaggerChildren className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
            {supportHighlights.map((item) => (
              <div key={item.title} className="h-full border border-line bg-surface p-5">
                <h3 className="text-sm font-bold uppercase tracking-wide">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{item.body}</p>
              </div>
            ))}
          </StaggerChildren>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {company.offeringPillars.map((pillar) => (
              <div key={pillar.title} className="overflow-hidden border border-line bg-surface">
                <img src={pillar.image} alt="" className="aspect-[16/10] w-full object-cover" />
                <div className="p-4">
                  <h3 className="text-sm font-bold">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{pillar.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <Reveal>
            <h2 className="section-title text-2xl">How Trenchless Works With Us</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 border border-line bg-paper p-4 md:p-6">
              <BorePath />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <StaggerChildren className="grid gap-4 md:grid-cols-2">
            {processSteps.map((step, i) => (
              <div key={step.title} className="h-full border border-line bg-surface p-6">
                <div className="font-display text-xs font-bold text-brand">0{i + 1}</div>
                <h3 className="mt-2 text-lg font-bold">{step.title}</h3>
                <p className="text-xs text-muted">{step.zh}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{step.body}</p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:px-6">
          <Reveal>
            <h2 className="section-title text-2xl">Warranty Notes</h2>
            <p className="mt-3 text-sm text-muted">Trustworthy after-sales service / 可靠售后</p>
            <StaggerChildren className="mt-5 space-y-3" y={16} stagger={0.06}>
              {stetonPartner.warranty.map((item) => (
                <div key={item} className="border-l-2 border-brand bg-surface px-4 py-3 text-sm text-ink-soft">
                  {item}
                </div>
              ))}
            </StaggerChildren>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="section-title text-2xl">FAQ</h2>
            <div className="mt-5">
              <FaqAccordion />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center lg:px-6">
          <div>
            <h2 className="font-display text-2xl font-bold">Need a site-fit recommendation?</h2>
            <p className="mt-2 text-white/65">
              +91 {company.phones[0]} / {company.phones[1]} · {company.address.city}
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex h-12 items-center rounded-sm bg-brand px-6 text-sm font-semibold uppercase tracking-wide"
          >
            Contact Service Desk
          </Link>
        </div>
      </section>
    </>
  )
}
