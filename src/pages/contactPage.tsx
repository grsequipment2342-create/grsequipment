import { PageBanner } from "@/components/animations/pageBanner"
import { Reveal } from "@/components/animations/reveal"
import { StaggerChildren } from "@/components/animations/staggerChildren"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { company } from "@/data/company"
import { sendEnquiry } from "@/lib/sendEnquiry"
import { zodResolver } from "@hookform/resolvers/zod"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Clock, Mail, MapPin, Phone, Warehouse } from "lucide-react"
import { useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(8, "Please enter a valid phone"),
  email: z.string().email("Please enter a valid email"),
  companyName: z.string().optional(),
  message: z.string().min(10, "Tell us a bit more about your project"),
})

type ContactFormValues = z.infer<typeof contactSchema>

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const formRef = useRef<HTMLFormElement>(null)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      companyName: "",
      message: "",
    },
  })

  useGSAP(
    () => {
      const form = formRef.current
      if (!form) return
      gsap.from(form.querySelectorAll(".form-field"), {
        y: 22,
        opacity: 0.15,
        stagger: 0.07,
        duration: 0.55,
        ease: "power3.out",
        clearProps: "opacity,transform",
        delay: 0.15,
      })
    },
    { scope: formRef }
  )

  const onSubmit = handleSubmit(async (values) => {
    setSubmitError("")
    setSubmitted(false)
    const result = await sendEnquiry(values)
    if (!result.ok) {
      setSubmitError(result.error)
      return
    }
    setSubmitted(true)
    reset()
  })

  return (
    <>
      <PageBanner
        eyebrow="Contact Us / 联系我们"
        title="Contact GRS Equipments"
        subtitle="Showroom in Ghansoli & warehouse in Mahape, Navi Mumbai — call GRS Equipments for STETON HDD machines, mud systems, tooling and trenchless support across India."
      />

      <section className="relative overflow-hidden">
        <img
          src="/images/grs/parts/006-14b5ff7f-d3ac-4f54-adfc-9ff8717bc20b.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="relative mx-auto grid max-w-7xl gap-4 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">
          <div className="border border-line bg-paper/95 p-4">
            <Phone className="h-4 w-4 text-brand" />
            <div className="mt-2 text-xs uppercase tracking-wide text-muted">Call</div>
            <div className="mt-1 text-sm font-bold">+91 {company.phones[0]}</div>
            <div className="text-sm font-bold">+91 {company.phones[1]}</div>
          </div>
          <div className="border border-line bg-paper/95 p-4">
            <Mail className="h-4 w-4 text-brand" />
            <div className="mt-2 text-xs uppercase tracking-wide text-muted">Email</div>
            <div className="mt-1 text-sm font-bold">{company.email}</div>
          </div>
          <div className="border border-line bg-paper/95 p-4">
            <Clock className="h-4 w-4 text-brand" />
            <div className="mt-2 text-xs uppercase tracking-wide text-muted">Hours</div>
            <div className="mt-1 text-sm font-bold">{company.hours.weekdays}</div>
            <div className="text-xs text-muted">{company.hours.sunday}</div>
          </div>
          <div className="border border-line bg-paper/95 p-4">
            <MapPin className="h-4 w-4 text-brand" />
            <div className="mt-2 text-xs uppercase tracking-wide text-muted">Head Office</div>
            <div className="mt-1 text-sm font-bold">{company.address.city}</div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-14 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:px-6">
          <Reveal>
            <StaggerChildren className="space-y-5 border border-line bg-surface p-6" y={24} stagger={0.08}>
              <div className="flex gap-3">
                <Phone className="mt-1 h-5 w-5 text-brand" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-muted">Phone</div>
                  <a href={`tel:+91${company.phones[0]}`} className="mt-1 block text-lg font-bold text-ink hover:text-brand">
                    +91 {company.phones[0]}
                  </a>
                  <a href={`tel:+91${company.phones[1]}`} className="block text-lg font-bold text-ink hover:text-brand">
                    +91 {company.phones[1]}
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="mt-1 h-5 w-5 text-brand" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-muted">Email</div>
                  <a href={`mailto:${company.email}`} className="mt-1 block font-semibold hover:text-brand">
                    {company.email}
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 text-brand" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-muted">Head Office / Showroom</div>
                  <p className="mt-1 text-sm leading-relaxed">
                    {company.address.line1}
                    <br />
                    {company.address.city}, {company.address.district}
                    <br />
                    {company.address.state} {company.address.pin}, {company.address.country}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Warehouse className="mt-1 h-5 w-5 text-brand" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-muted">{company.warehouse.label}</div>
                  <p className="mt-1 text-sm leading-relaxed">
                    {company.warehouse.line1}
                    <br />
                    {company.warehouse.line2}
                    <br />
                    {company.warehouse.city} {company.warehouse.pin}
                  </p>
                </div>
              </div>
              <div className="border-t border-line pt-4 text-sm text-muted">
                <div>GSTIN: {company.gstin}</div>
                <div className="mt-1">{company.website}</div>
                <div className="mt-1">
                  {company.hours.weekdays} · {company.hours.sunday}
                </div>
              </div>
            </StaggerChildren>
          </Reveal>

          <Reveal delay={0.08}>
            <form
              ref={formRef}
              onSubmit={onSubmit}
              className="border border-line bg-paper p-6 shadow-[0_16px_40px_rgba(0,0,0,0.04)]"
            >
              <h2 className="form-field font-display text-xl font-bold tracking-wide">Enquiry Form</h2>
              <p className="form-field mt-1 text-sm text-muted">Tell us about your HDD / trenchless requirement.</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="form-field">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" {...register("name")} />
                  {errors.name ? <p className="mt-1 text-xs text-brand">{errors.name.message}</p> : null}
                </div>
                <div className="form-field">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" {...register("phone")} />
                  {errors.phone ? <p className="mt-1 text-xs text-brand">{errors.phone.message}</p> : null}
                </div>
                <div className="form-field">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" {...register("email")} />
                  {errors.email ? <p className="mt-1 text-xs text-brand">{errors.email.message}</p> : null}
                </div>
                <div className="form-field">
                  <Label htmlFor="companyName">Company</Label>
                  <Input id="companyName" {...register("companyName")} />
                </div>
              </div>
              <div className="form-field mt-4">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" {...register("message")} placeholder="Model interest, bore length, pipe size..." />
                {errors.message ? <p className="mt-1 text-xs text-brand">{errors.message.message}</p> : null}
              </div>

              <Button type="submit" className="form-field mt-6" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Enquiry"}
              </Button>
              {submitted ? (
                <p className="mt-3 text-sm font-medium text-ink-soft">
                  Thanks — your enquiry was sent to grsequipments2023@gmail.com. We will get back to you shortly.
                </p>
              ) : null}
              {submitError ? <p className="mt-3 text-sm font-medium text-brand">{submitError}</p> : null}
            </form>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-14">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <Reveal>
            <h2 className="section-title text-2xl">Branch Offices</h2>
            <p className="mt-2 text-sm text-muted">Reach us for queries, info or feedback</p>
          </Reveal>
          <StaggerChildren className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
            {company.branches.map((branch) => (
              <div key={branch.city} className="border border-line bg-paper p-5">
                <h3 className="font-bold">{branch.city}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{branch.address}</p>
                <div className="mt-3 space-y-1 text-sm font-semibold text-brand">
                  {branch.phones.map((phone) => (
                    <a key={phone} href={`tel:+91${phone}`} className="block hover:underline">
                      +91 {phone}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </>
  )
}
