import { PageBanner } from "@/components/animations/pageBanner"
import { ParallaxMedia } from "@/components/animations/parallaxMedia"
import { Reveal } from "@/components/animations/reveal"
import { StaggerChildren } from "@/components/animations/staggerChildren"
import { company } from "@/data/company"
import { stetonPartner, testimonials } from "@/data/content"
import { Award, CheckCircle2, Factory, MapPin, Shield } from "lucide-react"

export function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="About Us / 关于我们"
        title="GRS Equipments — STETON Dealer India"
        subtitle={`${company.tagline}. HDD & trenchless sales, spare parts and service from Navi Mumbai.`}
      />

      <section className="bg-paper py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:px-6">
          <Reveal>
            <h2 className="section-title text-2xl">Company Profile</h2>
            <p className="mt-5 leading-relaxed text-ink-soft">{company.about.english}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{company.about.chinese}</p>
            <p className="mt-4 border-l-2 border-brand bg-surface px-4 py-3 text-sm leading-relaxed text-ink-soft">
              {company.heritage}
            </p>
            <StaggerChildren className="mt-6 grid gap-3 sm:grid-cols-2" stagger={0.05} y={18}>
              {[
                "Horizontal Directional Drilling Machines",
                "Mud Pump Stations",
                "Hybrid Power Stations",
                "Drill Tools, Rods & Tracks",
                "India-wide after-sales support",
                "Project-fit technical consulting",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span>{item}</span>
                </div>
              ))}
            </StaggerChildren>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border border-line bg-surface p-6">
              <ParallaxMedia
                src="/images/grs/machines/009-27efcfe7-8f91-4797-bf22-e2f8c01ba107.jpg"
                alt="HDD machine at GRS network"
                className="mb-6 aspect-[16/10] border border-line"
                speed={8}
              />
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between gap-4 border-b border-line pb-2">
                  <dt className="text-muted">Legal Name</dt>
                  <dd className="text-right font-semibold">{company.legalName}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-line pb-2">
                  <dt className="text-muted">GSTIN</dt>
                  <dd className="text-right font-semibold">{company.gstin}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-line pb-2">
                  <dt className="text-muted">Hours</dt>
                  <dd className="text-right font-semibold">
                    {company.hours.weekdays}
                    <br />
                    {company.hours.sunday}
                  </dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-line pb-2">
                  <dt className="text-muted">Location</dt>
                  <dd className="text-right font-semibold">
                    {company.address.city}, {company.address.state}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Partner Brand</dt>
                  <dd className="text-right font-semibold">
                    {company.partnerBrand} {company.chinesePartner}
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <Reveal>
            <h2 className="section-title text-2xl">Why Choose GRS?</h2>
            <p className="mt-3 max-w-3xl text-sm text-ink-soft">
              Focused on best services, on-time deliveries and customer satisfaction — with a supportive HDD
              engineering team and strong stock of supporting materials.
            </p>
          </Reveal>
          <StaggerChildren className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {company.whyChoose.map((item) => (
              <div key={item.title} className="h-full border border-line bg-paper p-5">
                <div className="h-1 w-8 bg-brand" />
                <h3 className="mt-4 text-sm font-bold uppercase tracking-wide">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{item.body}</p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <Reveal>
            <h2 className="section-title text-2xl">Offices & Reach</h2>
            <p className="mt-2 text-sm text-muted">Head office, warehouse and branch coordination across India</p>
          </Reveal>
          <StaggerChildren className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
            {company.branches.map((branch) => (
              <div key={branch.city} className="border border-line bg-surface p-5">
                <MapPin className="h-4 w-4 text-brand" />
                <h3 className="mt-3 font-bold">{branch.city}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{branch.address}</p>
                <p className="mt-3 text-xs font-semibold text-brand">
                  {branch.phones.map((p) => `+91 ${p}`).join(" · ")}
                </p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <Reveal>
            <h2 className="section-title text-2xl">Recognition</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden border border-line bg-paper">
              <img
                src="/images/grs/machines/013-3894871d-6ffd-4f61-affd-91d90fe0688f.jpg"
                alt="STETON HDD at industry exhibition"
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="p-5">
                <h3 className="font-bold">STETON HDD on the exhibition floor</h3>
                <p className="mt-2 text-sm text-ink-soft">
                  Real STETON platforms from industry showcases — the same machine pedigree GRS brings to Indian
                  trenchless projects.
                </p>
              </div>
            </div>
            <div className="overflow-hidden border border-line bg-paper">
              <img
                src="/images/grs/machines/029-66da3930-6586-4c97-8873-39222cd28961.jpg"
                alt="STETON HDD machine showcase"
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="p-5">
                <h3 className="font-bold">Heavy HDD platforms for India projects</h3>
                <p className="mt-2 text-sm text-ink-soft">
                  From mid-range to heavy STETON fleets — machines, mud systems and parts stocked and supported
                  through GRS Navi Mumbai.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <Reveal>
            <h2 className="section-title text-2xl">About STETON Partner</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-ink-soft">{stetonPartner.profile}</p>
            <p className="mt-3 max-w-3xl text-sm text-muted">{stetonPartner.profileZh}</p>
          </Reveal>
          <StaggerChildren className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="border border-line bg-surface p-5">
              <Factory className="h-5 w-5 text-brand" />
              <div className="mt-3 font-display text-2xl font-bold text-brand">{stetonPartner.founded}</div>
              <div className="text-xs uppercase tracking-wide text-muted">Founded</div>
            </div>
            <div className="border border-line bg-surface p-5">
              <Award className="h-5 w-5 text-brand" />
              <div className="mt-3 font-display text-2xl font-bold text-brand">{stetonPartner.capacity}</div>
              <div className="text-xs uppercase tracking-wide text-muted">Production capacity</div>
            </div>
            <div className="border border-line bg-surface p-5">
              <Shield className="h-5 w-5 text-brand" />
              <div className="mt-3 text-sm font-bold uppercase tracking-wide">
                {stetonPartner.coreValues.join(" · ")}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wide text-muted">Core values</div>
            </div>
          </StaggerChildren>

          <StaggerChildren className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stetonPartner.series.map((series) => (
              <div key={series.code} className="h-full border border-line bg-surface p-5">
                <div className="font-display text-2xl font-bold text-brand">{series.code}</div>
                <div className="mt-2 text-sm font-bold">{series.nameEn}</div>
                <div className="text-xs text-muted">{series.nameZh}</div>
                <p className="mt-3 text-sm text-ink-soft">{series.note}</p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:px-6">
          <Reveal>
            <h2 className="section-title text-2xl">Certification Focus</h2>
            <p className="mt-4 text-sm text-ink-soft">
              STETON has obtained multiple professional qualification certifications. GRS presents this quality
              pedigree to Indian buyers with local sales and support.
            </p>
            <ul className="mt-5 space-y-2">
              {stetonPartner.certifications.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <Reveal>
            <h2 className="section-title text-2xl">Customer Voices</h2>
          </Reveal>
          <StaggerChildren className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3" stagger={0.04}>
            {testimonials.map((item) => (
              <blockquote key={`${item.name}-${item.place}`} className="border border-line bg-surface p-5">
                <p className="text-sm text-ink-soft">“{item.quote}”</p>
                <footer className="mt-3 text-sm font-bold">
                  {item.name}
                  <span className="mt-1 block text-xs font-normal text-muted">
                    {item.company} · {item.place} · {item.machines}
                  </span>
                </footer>
              </blockquote>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </>
  )
}
