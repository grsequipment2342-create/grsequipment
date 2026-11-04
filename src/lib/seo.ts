import { company } from "@/data/company"
import { products } from "@/data/products"
import { getSeoPageByPath } from "@/data/seoPages"
import { DEFAULT_OG_IMAGE, SITE_BRAND, SITE_NAME, SITE_URL } from "@/lib/siteConfig"

type JsonLdPrimitive = string | number | boolean | null
type JsonLdValue = JsonLdPrimitive | JsonLdValue[] | { [key: string]: JsonLdValue }
type JsonLdObject = { [key: string]: JsonLdValue }

export type PageSeoConfig = {
  title: string
  description: string
  path: string
  keywords?: string
  image?: string
  type?: "website" | "article" | "product"
  noIndex?: boolean
  jsonLd?: JsonLdObject[]
}

const brandKeywords =
  "HDD machine, Best HDD machine, Best HDD machine India, STETON, Steton, STETON HDD, STETON HDD machine, GRS Equipments, GRS Equipments and Services, GRS Equipment, STETON India, 思特通, horizontal directional drilling, HDD machine India, trenchless drilling Navi Mumbai, HDD rig dealer India"

export const defaultSeo: PageSeoConfig = {
  title: "GRS Equipment | Steton HDD Machines & Drilling Equipment India",
  description:
    "Explore HDD machines, Steton drilling equipment, horizontal directional drilling solutions, HDD machine spare parts, pipe laying and cable laying equipment at GRS Equipment, India.",
  path: "/",
  keywords: "Steton, Steton HDD Machine, HDD machines India, GRS Equipment, horizontal directional drilling",
  image: DEFAULT_OG_IMAGE,
  type: "website",
}

const staticPages: Record<string, Omit<PageSeoConfig, "path">> = {
  "/": {
    title: defaultSeo.title,
    description: defaultSeo.description,
    keywords: defaultSeo.keywords,
  },
  "/about": {
    title: "About GRS Equipment | HDD Equipment Solutions India",
    description:
      "Learn about GRS Equipment, our business, equipment solutions and commitment to serving the drilling and infrastructure industry from Navi Mumbai.",
    keywords: `${brandKeywords}, about GRS Equipment, HDD equipment India`,
  },
  "/products": {
    title: "HDD Machines & Drilling Equipment | GRS Equipment India",
    description:
      "Explore HDD drilling machines, directional drilling equipment and machinery solutions for telecom, infrastructure and underground cable installation.",
    keywords: `${brandKeywords}, STETON catalog, HDD products India`,
  },
  "/service": {
    title: `HDD Service & Consultancy | ${SITE_NAME} × ${SITE_BRAND}`,
    description:
      "GRS Equipments provides STETON HDD after-sales service, spare parts, training and trenchless technical consultancy across India.",
    keywords: `${brandKeywords}, HDD service India, STETON spare parts, trenchless consultancy`,
  },
  "/gallery": {
    title: `${SITE_BRAND} Machines Gallery | ${SITE_NAME}`,
    description:
      "Photo gallery of STETON HDD machines, accessories and GRS Equipments field work across India.",
    keywords: `${brandKeywords}, STETON machine photos, HDD gallery`,
  },
  "/knowledge": {
    title: `HDD Knowledge Guide | ${SITE_NAME} & ${SITE_BRAND}`,
    description:
      "Understand horizontal directional drilling with GRS Equipments — characteristics of HDD and STETON rig structure for Indian utility projects.",
    keywords: `${brandKeywords}, what is HDD, trenchless technology India`,
  },
  "/news": {
    title: `News & Events | ${SITE_NAME} · ${SITE_BRAND}`,
    description:
      "Latest news from GRS Equipments and STETON — trenchless exhibitions, awards and HDD industry updates in India.",
    keywords: `${brandKeywords}, STETON news, trenchless India news`,
  },
  "/download": {
    title: `Download ${SITE_BRAND} Catalog | ${SITE_NAME}`,
    description:
      "Download the GRS × STETON product catalog and request HDD datasheets from GRS Equipments India.",
    keywords: `${brandKeywords}, STETON catalog PDF, HDD brochure download`,
  },
  "/contact": {
    title: "Contact GRS Equipment | HDD Machines & Parts Mumbai",
    description:
      "Contact GRS Equipment for enquiries about HDD machines, drilling equipment, spare parts and infrastructure equipment solutions in Mumbai / Navi Mumbai.",
    keywords: `${brandKeywords}, GRS Equipment contact, HDD parts Mumbai, Ghansoli HDD`,
  },
}

function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`
}

function organizationJsonLd(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: company.legalName,
    alternateName: ["GRS Equipments", "GRS Equipments and Services", "GRS Equipment", "STETON India Dealer"],
    url: SITE_URL,
    logo: `${SITE_URL}/favicon-512.png`,
    image: DEFAULT_OG_IMAGE,
    email: company.email,
    telephone: company.phones.map((p) => `+91${p}`),
    vatID: company.gstin,
    slogan: company.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.line1,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      postalCode: company.address.pin,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.1197,
      longitude: 73.0054,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    brand: {
      "@type": "Brand",
      name: "STETON",
      alternateName: "思特通",
    },
    sameAs: [`https://${company.website}`],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: `+91-${company.phones[0]}`,
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
      {
        "@type": "ContactPoint",
        telephone: `+91-${company.phones[1]}`,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
  }
}

function websiteJsonLd(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: `${SITE_NAME} | ${SITE_BRAND} HDD India`,
    description: defaultSeo.description,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-IN",
  }
}

export function resolvePageSeo(pathname: string): PageSeoConfig {
  const productMatch = pathname.match(/^\/products\/([^/]+)\/?$/)
  if (productMatch) {
    const slug = productMatch[1]
    const product = products.find((p) => p.slug === slug)
    if (product) {
      const title = `${product.model} STETON / Steton HDD Machine | ${SITE_NAME}`
      const description = `${product.model} STETON / Steton HDD machine — ${product.nameEn} from GRS Equipments India. Best HDD machine option for trenchless projects. ${product.summary}`
      return {
        title,
        description,
        path: `/products/${product.slug}`,
        keywords: `${product.model}, STETON ${product.model}, Steton ${product.model}, HDD machine, best HDD machine, ${product.nameEn}, GRS Equipments, STETON HDD, ${brandKeywords}`,
        image: absoluteUrl(product.image),
        type: "product",
        jsonLd: [
          organizationJsonLd(),
          websiteJsonLd(),
          {
            "@context": "https://schema.org",
            "@type": "Product",
            name: `${SITE_BRAND} ${product.model} ${product.nameEn}`,
            model: product.model,
            description: product.summary,
            image: absoluteUrl(product.image),
            brand: { "@type": "Brand", name: "STETON" },
            sku: product.model,
            category: "Horizontal Directional Drilling Machine",
            url: absoluteUrl(`/products/${product.slug}`),
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/products` },
              {
                "@type": "ListItem",
                position: 3,
                name: product.model,
                item: absoluteUrl(`/products/${product.slug}`),
              },
            ],
          },
        ],
      }
    }
  }

  const normalized = pathname.replace(/\/$/, "") || "/"
  const seoLanding = getSeoPageByPath(normalized)
  if (seoLanding) {
    return {
      title: seoLanding.title,
      description: seoLanding.description,
      path: seoLanding.path,
      keywords: seoLanding.keywords,
      image: absoluteUrl(seoLanding.image),
      type: "article",
      jsonLd: [
        organizationJsonLd(),
        websiteJsonLd(),
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: seoLanding.h1,
          description: seoLanding.description,
          url: absoluteUrl(seoLanding.path),
          isPartOf: { "@id": `${SITE_URL}/#website` },
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: seoLanding.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            {
              "@type": "ListItem",
              position: 2,
              name: seoLanding.h1,
              item: absoluteUrl(seoLanding.path),
            },
          ],
        },
      ],
    }
  }

  const page = staticPages[normalized] ?? {
    title: defaultSeo.title,
    description: defaultSeo.description,
    keywords: brandKeywords,
  }

  const crumbName = page.title.split("|")[0]?.trim() ?? "Page"

  return {
    ...page,
    path: normalized,
    image: page.image ?? DEFAULT_OG_IMAGE,
    type: page.type ?? "website",
    jsonLd: [
      organizationJsonLd(),
      websiteJsonLd(),
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement:
          normalized === "/"
            ? [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }]
            : [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: crumbName,
                  item: absoluteUrl(normalized),
                },
              ],
      },
    ],
  }
}

function upsertMeta(selector: string, attributes: Record<string, string>): void {
  const existing = document.head.querySelector(selector)
  const el = existing instanceof HTMLMetaElement ? existing : document.createElement("meta")
  if (!(existing instanceof HTMLMetaElement)) {
    document.head.appendChild(el)
  }
  Object.entries(attributes).forEach(([key, value]) => {
    el.setAttribute(key, value)
  })
}

function upsertLink(rel: string, href: string): void {
  const existing = document.head.querySelector(`link[rel="${rel}"]`)
  const el = existing instanceof HTMLLinkElement ? existing : document.createElement("link")
  if (!(existing instanceof HTMLLinkElement)) {
    el.setAttribute("rel", rel)
    document.head.appendChild(el)
  }
  el.setAttribute("href", href)
}

function upsertJsonLd(blocks: JsonLdObject[]): void {
  document.head.querySelectorAll('script[data-seo-jsonld="true"]').forEach((node) => node.remove())
  blocks.forEach((block) => {
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.setAttribute("data-seo-jsonld", "true")
    script.textContent = JSON.stringify(block)
    document.head.appendChild(script)
  })
}

/** Apply document title, meta tags, canonical URL and JSON-LD for the current route. */
export function applyPageSeo(config: PageSeoConfig): void {
  const url = absoluteUrl(config.path)
  const image = config.image ? absoluteUrl(config.image) : DEFAULT_OG_IMAGE

  document.title = config.title

  upsertMeta('meta[name="description"]', { name: "description", content: config.description })
  upsertMeta('meta[name="keywords"]', {
    name: "keywords",
    content: config.keywords ?? brandKeywords,
  })
  upsertMeta('meta[name="author"]', { name: "author", content: company.legalName })
  upsertMeta('meta[name="robots"]', {
    name: "robots",
    content: config.noIndex ? "noindex,nofollow" : "index,follow,max-image-preview:large",
  })
  upsertMeta('meta[name="googlebot"]', {
    name: "googlebot",
    content: config.noIndex ? "noindex,nofollow" : "index,follow",
  })

  upsertMeta('meta[property="og:type"]', { property: "og:type", content: config.type ?? "website" })
  upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: SITE_NAME })
  upsertMeta('meta[property="og:locale"]', { property: "og:locale", content: "en_IN" })
  upsertMeta('meta[property="og:title"]', { property: "og:title", content: config.title })
  upsertMeta('meta[property="og:description"]', {
    property: "og:description",
    content: config.description,
  })
  upsertMeta('meta[property="og:url"]', { property: "og:url", content: url })
  upsertMeta('meta[property="og:image"]', { property: "og:image", content: image })

  upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" })
  upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: config.title })
  upsertMeta('meta[name="twitter:description"]', {
    name: "twitter:description",
    content: config.description,
  })
  upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: image })

  upsertMeta('meta[name="geo.region"]', { name: "geo.region", content: "IN-MH" })
  upsertMeta('meta[name="geo.placename"]', {
    name: "geo.placename",
    content: "Navi Mumbai, Maharashtra",
  })

  upsertLink("canonical", url)
  upsertJsonLd(config.jsonLd ?? [organizationJsonLd(), websiteJsonLd()])
}
