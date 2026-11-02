import { mkdirSync, readFileSync, writeFileSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const rootDir = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(rootDir, "../dist")
const siteUrl = "https://www.grsequipment.in"

const seoPages = [
  {
    path: "/",
    title: "GRS Equipment | Steton HDD Machines & Drilling Equipment India",
    description:
      "Explore HDD machines, Steton drilling equipment, horizontal directional drilling solutions, HDD machine spare parts, pipe laying and cable laying equipment at GRS Equipment, India.",
    h1: "Steton HDD Machines and Horizontal Directional Drilling Equipment in India",
  },
  {
    path: "/hdd-machines-india",
    title: "HDD Machine in India | Best HDD Machine Options — GRS Equipments",
    description:
      "Explore HDD machines in India from GRS Equipments — STETON horizontal directional drilling machines for trenchless projects, with Navi Mumbai showroom support and pan-India coordination.",
    h1: "HDD Machines in India for Trenchless Utility Projects",
  },
  {
    path: "/horizontal-directional-drilling-machines",
    title: "Horizontal Directional Drilling Machines | GRS Equipments India",
    description:
      "Horizontal directional drilling machines from GRS Equipments — STETON HDD solutions for trenchless pipe, cable and utility installation across India.",
    h1: "Horizontal Directional Drilling Machines for Trenchless Projects",
  },
  {
    path: "/steton-hdd-machines",
    title: "Steton HDD Machines India | STETON Drilling Equipment — GRS",
    description:
      "Explore Steton HDD machines and STETON drilling equipment at GRS Equipments India — model range, applications, parts support and enquiry options from Navi Mumbai.",
    h1: "Steton HDD Machines and STETON Drilling Equipment in India",
  },
  {
    path: "/hdd-machine-parts",
    title: "HDD Machine Parts India | Rods, Tracks, Bits & Spares — GRS",
    description:
      "HDD machine parts from GRS Equipments — drill rods, rubber tracks, bits, housings, clamps and STETON-compatible spares stocked for Indian trenchless contractors.",
    h1: "HDD Machine Parts and Spares for STETON Rigs",
  },
  {
    path: "/hdd-machines-mumbai",
    title: "HDD Machine and Parts Near Mumbai | GRS Equipments Navi Mumbai",
    description:
      "HDD machine and parts near Mumbai — visit GRS Equipments in Ghansoli / Mahape, Navi Mumbai for STETON HDD rigs, spares, demos and trenchless support.",
    h1: "HDD Machines and Parts Near Mumbai — GRS Navi Mumbai",
  },
  {
    path: "/pipe-laying-machines",
    title: "Pipe Laying Machine India | HDD Pipe Installation — STETON GRS",
    description:
      "Pipe laying machine solutions via STETON HDD from GRS Equipments — trenchless pipe installation for water, sewer, gas and industrial lines across India.",
    h1: "Pipe Laying Machines for Trenchless Pipeline Installation",
  },
  {
    path: "/cable-laying-machines",
    title: "Cable Laying Machine India | Power & OFC HDD — GRS STETON",
    description:
      "Cable laying machine solutions with STETON HDD from GRS Equipments — trenchless installation for power cables and optical fiber ducts across India.",
    h1: "Cable Laying Machines for Power and Fiber Projects",
  },
  {
    path: "/telecom-hdd-machines",
    title: "Telecom HDD Machine India | OFC & Duct Installation — STETON GRS",
    description:
      "Telecom HDD machine supply from GRS Equipments — STETON rigs for optical fiber, duct banks and trenchless telecom network builds across India.",
    h1: "Telecom HDD Machines for OFC and Duct Networks",
  },
  {
    path: "/drilling-machines",
    title: "Drilling Machine & HDD Drilling Machine India | STETON GRS",
    description:
      "Drilling machine and HDD drilling machine solutions from GRS Equipments — STETON horizontal directional drilling rigs for Indian trenchless contractors.",
    h1: "Drilling Machines and HDD Drilling Machines for India",
  },
  {
    path: "/products",
    title: "HDD Machines & Drilling Equipment | GRS Equipment India",
    description:
      "Explore HDD drilling machines, directional drilling equipment and machinery solutions for telecom, infrastructure and underground cable installation.",
    h1: "HDD Machines & Drilling Equipment",
  },
  {
    path: "/about",
    title: "About GRS Equipment | HDD Equipment Solutions India",
    description:
      "Learn about GRS Equipment, our business, equipment solutions and commitment to serving the drilling and infrastructure industry.",
    h1: "About GRS Equipment",
  },
  {
    path: "/contact",
    title: "Contact GRS Equipment | HDD Machines & Parts Mumbai",
    description:
      "Contact GRS Equipment for enquiries about HDD machines, drilling equipment, spare parts and infrastructure equipment solutions.",
    h1: "Contact GRS Equipment",
  },
]

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
}

function injectMeta(html, page) {
  const canonical = `${siteUrl}${page.path === "/" ? "/" : page.path}`
  let next = html
  next = next.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(page.title)}</title>`)
  next = next.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/i,
    `<meta name="description" content="${escapeHtml(page.description)}" />`
  )
  next = next.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/i,
    `<link rel="canonical" href="${canonical}" />`
  )
  next = next.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/i,
    `<meta property="og:title" content="${escapeHtml(page.title)}" />`
  )
  next = next.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/i,
    `<meta property="og:description" content="${escapeHtml(page.description)}" />`
  )
  next = next.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/i,
    `<meta property="og:url" content="${canonical}" />`
  )

  const prerenderBlock = `
    <noscript>
      <main style="max-width:72rem;margin:2rem auto;padding:0 1rem;font-family:system-ui,sans-serif">
        <h1>${escapeHtml(page.h1)}</h1>
        <p>${escapeHtml(page.description)}</p>
        <p><a href="${siteUrl}/products">View products</a> · <a href="${siteUrl}/contact">Contact GRS Equipment</a></p>
      </main>
    </noscript>`

  next = next.replace('<div id="root"></div>', `<div id="root"></div>${prerenderBlock}`)
  return next
}

const template = readFileSync(path.join(distDir, "index.html"), "utf8")

for (const page of seoPages) {
  const html = injectMeta(template, page)
  if (page.path === "/") {
    writeFileSync(path.join(distDir, "index.html"), html)
    continue
  }
  const outDir = path.join(distDir, page.path.replace(/^\//, ""))
  mkdirSync(outDir, { recursive: true })
  writeFileSync(path.join(outDir, "index.html"), html)
  console.log("prerender meta:", page.path)
}

console.log("SEO meta prerender complete.")
