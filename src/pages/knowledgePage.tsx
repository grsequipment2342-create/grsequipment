import { BorePath } from "@/components/animations/borePath"
import { DrawLine } from "@/components/animations/drawLine"
import { PageBanner } from "@/components/animations/pageBanner"
import { Reveal } from "@/components/animations/reveal"
import { StaggerChildren } from "@/components/animations/staggerChildren"
import { hddCharacteristics, rigStructure } from "@/data/content"
import { Link } from "react-router-dom"

export function KnowledgePage() {
  return (
    <>
      <PageBanner
        eyebrow="Knowledge / 水平定向钻机特点"
        title="Characteristics of HDD"
        subtitle="Why trenchless horizontal directional drilling is preferred for modern Indian utility projects — adapted from STETON technical knowledge for GRS customers."
      />

      <section className="bg-paper py-14">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <Reveal>
            <div className="border border-line bg-surface p-4 md:p-6">
              <BorePath />
            </div>
          </Reveal>
          <DrawLine className="mt-8 max-w-md" />
          <StaggerChildren className="mt-8 grid gap-4 md:grid-cols-2">
            {hddCharacteristics.map((item) => (
              <div key={item.title} className="h-full border-l-4 border-brand bg-surface p-5">
                <h2 className="text-lg font-bold">{item.title}</h2>
                <p className="mt-1 text-xs text-muted">{item.zh}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.body}</p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="bg-surface py-14">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <Reveal>
            <h2 className="section-title text-2xl">Structure of an HDD Rig</h2>
            <p className="mt-3 max-w-3xl text-sm text-muted">
              水平定向钻机结构 — drilling, power, guidance, mud, tools and auxiliaries working as one system.
            </p>
          </Reveal>
          <StaggerChildren className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rigStructure.map((item, i) => (
              <div key={item.title} className="h-full border border-line bg-paper p-5">
                <div className="font-display text-xs font-bold text-brand">0{i + 1}</div>
                <h3 className="mt-2 font-bold">{item.title}</h3>
                <p className="text-xs text-muted">{item.zh}</p>
                <p className="mt-2 text-sm text-ink-soft">{item.body}</p>
              </div>
            ))}
          </StaggerChildren>
          <Reveal>
            <Link
              to="/products"
              className="mt-8 inline-flex h-11 items-center rounded-sm bg-brand px-5 text-sm font-semibold uppercase tracking-wide text-white"
            >
              Browse Matching Machines
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
