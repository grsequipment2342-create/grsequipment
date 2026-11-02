import { writeFileSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const rootDir = path.dirname(fileURLToPath(import.meta.url))
const siteUrl = "https://www.grsequipment.in"
const today = new Date().toISOString().slice(0, 10)

const productSlugs = [
  "s60",
  "s200",
  "s350",
  "s450",
  "s520",
  "s600a",
  "s600al",
  "s800a",
  "s1350",
  "st2200",
  "st3800",
  "st12000",
  "sep-mud-pumps",
  "sec-800",
  "drill-tools",
]

const seoLandings = [
  "/hdd-machines-india",
  "/horizontal-directional-drilling-machines",
  "/steton-hdd-machines",
  "/hdd-machine-parts",
  "/hdd-machines-mumbai",
  "/pipe-laying-machines",
  "/cable-laying-machines",
  "/telecom-hdd-machines",
  "/drilling-machines",
]

const corePages = [
  "/",
  "/about",
  "/products",
  "/service",
  "/gallery",
  "/knowledge",
  "/news",
  "/download",
  "/contact",
  ...seoLandings,
  ...productSlugs.map((slug) => `/products/${slug}`),
]

function priorityFor(pathname) {
  if (pathname === "/") return "1.0"
  if (pathname === "/products" || pathname === "/contact") return "0.9"
  if (seoLandings.includes(pathname)) return "0.9"
  if (pathname.startsWith("/products/")) return "0.8"
  return "0.7"
}

function changefreqFor(pathname) {
  if (pathname === "/" || pathname === "/products") return "weekly"
  return "monthly"
}

const body = corePages
  .map((pathname) => {
    const loc = pathname === "/" ? `${siteUrl}/` : `${siteUrl}${pathname}`
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreqFor(pathname)}</changefreq>
    <priority>${priorityFor(pathname)}</priority>
  </url>`
  })
  .join("\n")

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`

writeFileSync(path.resolve(rootDir, "../public/sitemap.xml"), xml)
console.log(`sitemap.xml generated with ${corePages.length} URLs`)
