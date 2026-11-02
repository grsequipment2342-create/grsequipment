export type SeoFaq = {
  question: string
  answer: string
}

export type SeoPageContent = {
  path: string
  title: string
  description: string
  keywords: string
  h1: string
  intro: string
  image: string
  imageAlt: string
  applications: string[]
  highlights: Array<{ title: string; body: string }>
  specs: Array<{ label: string; value: string }>
  faqs: SeoFaq[]
  relatedPaths: string[]
  ctaNote: string
}

export const seoPages: SeoPageContent[] = [
  {
    path: "/hdd-machines-india",
    title: "HDD Machine in India | Best HDD Machine in India — STETON by GRS",
    description:
      "Buy the best HDD machine in India from GRS Equipments — authorized STETON dealer for horizontal directional drilling machines, trenchless projects and after-sales support.",
    keywords: "HDD Machine in India, Best HDD Machine in India, STETON HDD, GRS Equipments",
    h1: "Best HDD Machine in India — STETON Horizontal Directional Drilling",
    intro:
      "Looking for a reliable HDD machine in India? GRS Equipments supplies STETON horizontal directional drilling machines for municipal water, telecom, power and oil & gas crossings — with showroom support from Navi Mumbai and branch coordination across India.",
    image: "/images/grs/machines/009-27efcfe7-8f91-4797-bf22-e2f8c01ba107.jpg",
    imageAlt: "STETON HDD machine in India at GRS Equipments yard",
    applications: [
      "Municipal water and sewer pipeline crossings",
      "Fiber optic and telecom duct installation",
      "Power cable and industrial utility bores",
      "Road, rail and river trenchless crossings",
    ],
    highlights: [
      {
        title: "Authorized STETON supply",
        body: "GRS is the India channel for STETON HDD rigs — from compact S-series to heavy ST models for longer, deeper bores.",
      },
      {
        title: "Project-fit selection",
        body: "We match thrust, torque, mud flow and rod size to your geology, bore length and pipe diameter so you do not overbuy or under-spec the rig.",
      },
      {
        title: "India after-sales",
        body: "Spare parts readiness, commissioning guidance and engineer support help keep your HDD machine productive on Indian sites.",
      },
    ],
    specs: [
      { label: "Typical models", value: "S60 · S200 · S350 · S450 · S520 · S600A · S800A · S1350 · ST series" },
      { label: "Applications", value: "Water, sewage, telecom, power, oil & gas trenchless" },
      { label: "Support base", value: "Navi Mumbai showroom + Mahape warehouse" },
      { label: "Coverage", value: "Maharashtra, UP, MP, Chhattisgarh, Delhi NCR, East India" },
    ],
    faqs: [
      {
        question: "Which is the best HDD machine in India for mid-range projects?",
        answer:
          "For many Indian mid-range crossings, STETON S200–S520 class machines balance thrust, torque and mobility. Final selection depends on bore length, diameter and ground conditions — contact GRS for a model match.",
      },
      {
        question: "Do you sell HDD machines across India?",
        answer:
          "Yes. GRS Equipments supplies STETON HDD machines nationwide with primary stocking and showroom support from Navi Mumbai.",
      },
    ],
    relatedPaths: ["/horizontal-directional-drilling", "/hdd-machine-parts", "/hdd-machines-mumbai", "/products"],
    ctaNote: "Ask GRS for a STETON HDD machine quotation matched to your Indian project site.",
  },
  {
    path: "/horizontal-directional-drilling",
    title: "Horizontal Directional Drilling Machine | STETON HDD by GRS India",
    description:
      "Horizontal directional drilling machines from STETON via GRS Equipments — trenchless HDD for pipe, cable and utility installation without open-cut disruption.",
    keywords: "Horizontal Directional Drilling Machine, HDD, trenchless drilling, STETON",
    h1: "Horizontal Directional Drilling Machines for Trenchless Projects",
    intro:
      "Horizontal directional drilling (HDD) installs pipes and cables along a controlled underground path. STETON HDD machines from GRS Equipments are built for steerable bores under roads, rivers and built-up areas with less surface disruption than open cut.",
    image: "/images/grs/machines/013-3894871d-6ffd-4f61-affd-91d90fe0688f.jpg",
    imageAlt: "Horizontal directional drilling machine STETON at work site",
    applications: [
      "Guided pilot bore and reaming cycles",
      "Product pipe pullback for HDPE / steel",
      "Urban utility renewal with minimal traffic impact",
      "Sensitive crossings under highways and railways",
    ],
    highlights: [
      {
        title: "Steerable bore path",
        body: "Directional control keeps the drill string on plan grade and alignment for accurate utility placement.",
      },
      {
        title: "Mud-assisted drilling",
        body: "Pair the rig with proper mud flow and tooling to stabilize the bore and carry cuttings — GRS also supports mud systems and tools.",
      },
      {
        title: "Crew-ready layouts",
        body: "STETON machine layouts focus on practical rod handling, clamp systems and crawler mobility for Indian job sites.",
      },
    ],
    specs: [
      { label: "Process", value: "Pilot bore → ream → pullback" },
      { label: "Machine range", value: "Compact to heavy STETON HDD fleet" },
      { label: "Complementary gear", value: "Mud pumps, drill tools, rods, tracks" },
      { label: "Dealer", value: "GRS Equipments — STETON India" },
    ],
    faqs: [
      {
        question: "What is a horizontal directional drilling machine used for?",
        answer:
          "It drills a steered underground path and pulls pipe or conduit into place — ideal for utilities where open trenches are costly or disruptive.",
      },
      {
        question: "Can GRS help choose HDD tooling?",
        answer:
          "Yes. We advise on rods, bits, housings and reamers based on soil and bore design, alongside the STETON machine recommendation.",
      },
    ],
    relatedPaths: ["/hdd-machines-india", "/pipe-laying-machines", "/cable-laying-machines", "/knowledge"],
    ctaNote: "Talk to GRS about the right horizontal directional drilling machine for your crossing.",
  },
  {
    path: "/hdd-machine-parts",
    title: "HDD Machine Parts India | Rods, Tracks, Bits & Spares — GRS",
    description:
      "HDD machine parts from GRS Equipments — drill rods, rubber tracks, bits, housings, clamps and STETON-compatible spares stocked for Indian trenchless contractors.",
    keywords: "HDD Machine Parts, HDD spares, drill rods, rubber tracks, STETON parts",
    h1: "HDD Machine Parts and Spares for STETON Rigs",
    intro:
      "Downtime on an HDD machine often comes down to parts. GRS Equipments stocks supporting materials — rods, tracks, cutting tools and service parts — so STETON owners across India can keep bores moving.",
    image: "/images/grs/parts/011-2fd1d9bd-239f-486d-ae23-4f930701b672.jpg",
    imageAlt: "HDD machine parts and drill tools stocked by GRS Equipments",
    applications: [
      "Drill rod replacement and mixed string builds",
      "Rubber track and undercarriage service",
      "Pilot bits, housings and reamer changes",
      "Hydraulic and wear-part maintenance kits",
    ],
    highlights: [
      {
        title: "Ready stock focus",
        body: "Warehouse readiness in Mahape supports faster dispatch of common HDD wear items for active contractors.",
      },
      {
        title: "Matched to STETON fleets",
        body: "We help identify compatible rods, tools and spare parts for the STETON models GRS supplies.",
      },
      {
        title: "Site practical advice",
        body: "Beyond supply, our team shares practical guidance on when to replace tooling before it costs a stuck bore.",
      },
    ],
    specs: [
      { label: "Parts categories", value: "Rods, tracks, bits, housings, clamps, consumables" },
      { label: "Stocking", value: "Navi Mumbai / Mahape" },
      { label: "Related products", value: "Drill tools · mud systems · machine spares" },
      { label: "Order channel", value: "Call / WhatsApp / enquiry form" },
    ],
    faqs: [
      {
        question: "Do you stock HDD machine parts near Mumbai?",
        answer:
          "Yes. GRS maintains supporting stock around Navi Mumbai (showroom Ghansoli, warehouse Mahape) for STETON-related HDD parts and tools.",
      },
      {
        question: "Can I order only parts without buying a new machine?",
        answer:
          "Yes. Contractors running STETON and compatible fleets can enquire for rods, tracks, tools and service parts independently.",
      },
    ],
    relatedPaths: ["/hdd-machines-mumbai", "/products/drill-tools", "/service", "/contact"],
    ctaNote: "Send your machine model and part requirement — GRS will confirm availability.",
  },
  {
    path: "/hdd-machines-mumbai",
    title: "HDD Machine and Parts Near Mumbai | GRS Equipments Navi Mumbai",
    description:
      "HDD machine and parts near Mumbai — visit GRS Equipments in Ghansoli / Mahape, Navi Mumbai for STETON HDD rigs, spares, demos and trenchless support.",
    keywords: "HDD Machine and Parts Near Mumbai, HDD Navi Mumbai, STETON Mumbai, GRS Ghansoli",
    h1: "HDD Machines and Parts Near Mumbai — GRS Navi Mumbai",
    intro:
      "Contractors searching for an HDD machine and parts near Mumbai can visit GRS Equipments in Navi Mumbai. Our Ghansoli showroom and Mahape warehouse support STETON machine sales, spare parts and project discussions for the Mumbai MMR and western India.",
    image: "/images/grs/hero/banner.jpg",
    imageAlt: "GRS Equipments STETON HDD machines available near Mumbai Navi Mumbai",
    applications: [
      "Mumbai / Navi Mumbai municipal and metro-related trenchless work",
      "Coastal and creek crossings in the MMR region",
      "Fast parts pickup or dispatch from Mahape stock",
      "Local demos and machine walkthroughs by appointment",
    ],
    highlights: [
      {
        title: "Local showroom",
        body: "Show Room-2, Plot No-109, Sector-16, Ghansoli — see STETON positioning and discuss model fit face to face.",
      },
      {
        title: "Mahape warehouse",
        body: "Parts and supporting materials staged at TTC Industrial Area, Mahape for quicker western India logistics.",
      },
      {
        title: "Same-day conversation",
        body: "Call +91 8655886888 / 8922805992 to schedule a visit or parts check before you travel.",
      },
    ],
    specs: [
      { label: "Showroom", value: "Ghansoli, Navi Mumbai 400701" },
      { label: "Warehouse", value: "Mahape, Navi Mumbai 400710" },
      { label: "Phones", value: "+91 8655886888 · +91 8922805992" },
      { label: "Email", value: "grsequipments2023@gmail.com" },
    ],
    faqs: [
      {
        question: "Where can I see an HDD machine near Mumbai?",
        answer:
          "Contact GRS Equipments to arrange a visit at our Navi Mumbai (Ghansoli) showroom. Availability of specific models on the floor varies — we confirm before your visit.",
      },
      {
        question: "Do you deliver parts within Mumbai MMR?",
        answer:
          "Yes, we coordinate dispatch from Mahape / Navi Mumbai stock based on item availability and your site location.",
      },
    ],
    relatedPaths: ["/hdd-machine-parts", "/hdd-machines-india", "/contact", "/about"],
    ctaNote: "Book a Navi Mumbai visit or request a Mumbai-region quotation today.",
  },
  {
    path: "/pipe-laying-machines",
    title: "Pipe Laying Machine India | HDD Pipe Installation — STETON GRS",
    description:
      "Pipe laying machine solutions via STETON HDD from GRS Equipments — trenchless pipe installation for water, sewer, gas and industrial lines across India.",
    keywords: "Pipe Laying Machine, trenchless pipe laying, HDD pipe installation, STETON",
    h1: "Pipe Laying Machines for Trenchless Pipeline Installation",
    intro:
      "Modern pipe laying for utilities often means trenchless HDD rather than long open trenches. STETON horizontal directional drilling machines supplied by GRS Equipments pull HDPE and other product pipes into place after a guided bore — a practical pipe laying machine approach for Indian cities and crossings.",
    image: "/images/grs/machines/029-66da3930-6586-4c97-8873-39222cd28961.jpg",
    imageAlt: "STETON HDD pipe laying machine setup for pipeline pullback",
    applications: [
      "Water transmission and distribution pipe pulls",
      "Sewer and rising main trenchless installs",
      "Gas and industrial process lines (project dependent)",
      "River and road pipeline crossings",
    ],
    highlights: [
      {
        title: "Pullback-ready fleets",
        body: "Select STETON thrust/pullback capacity for your pipe diameter, length and friction assumptions.",
      },
      {
        title: "Less surface damage",
        body: "HDD pipe laying reduces excavation, reinstatement cost and traffic disruption versus open cut.",
      },
      {
        title: "Tooling support",
        body: "GRS helps pair reamers, swivels and rods so the pipe laying cycle stays smooth from pilot to pullback.",
      },
    ],
    specs: [
      { label: "Method", value: "HDD pilot + ream + pipe pullback" },
      { label: "Common pipes", value: "HDPE and project-specified carriers" },
      { label: "Machine partner", value: "STETON via GRS Equipments" },
      { label: "India base", value: "Navi Mumbai" },
    ],
    faqs: [
      {
        question: "Is an HDD rig considered a pipe laying machine?",
        answer:
          "For trenchless utility work, yes — HDD machines are widely used as pipe laying machines because they install pipe underground along a designed path.",
      },
      {
        question: "Can you help size the machine for pipe diameter?",
        answer:
          "Share bore length, pipe OD, ground info and grade requirements — GRS will recommend a suitable STETON class.",
      },
    ],
    relatedPaths: ["/horizontal-directional-drilling", "/cable-laying-machines", "/products", "/contact"],
    ctaNote: "Enquire for a STETON pipe laying / HDD package sized to your pipeline job.",
  },
  {
    path: "/cable-laying-machines",
    title: "Cable Laying Machine India | Power & OFC HDD — GRS STETON",
    description:
      "Cable laying machine solutions with STETON HDD from GRS Equipments — trenchless installation for power cables and optical fiber ducts across India.",
    keywords: "Cable Laying Machine, OFC HDD, power cable laying, trenchless cable",
    h1: "Cable Laying Machines for Power and Fiber Projects",
    intro:
      "Cable laying under roads and congested corridors is faster and cleaner with HDD. GRS Equipments provides STETON machines used as cable laying machines for power ducts and telecom/OFC routes — with tooling advice for duct size and ground conditions.",
    image: "/images/grs/machines/030-699227e0-a291-4f9f-9a7a-9f656f33474e.jpg",
    imageAlt: "Cable laying HDD machine for power and fiber duct installation",
    applications: [
      "Optical fiber duct and multi-duct packages",
      "Electrical cable and conduit crossings",
      "Urban last-mile trenchless cable routes",
      "Highway and railway cable crossings",
    ],
    highlights: [
      {
        title: "Duct-friendly bores",
        body: "Match ream size and mud program so ducts pull cleanly without ovaling or excessive friction.",
      },
      {
        title: "Telecom & power ready",
        body: "From compact STETON units for city ducts to larger classes for longer cable corridors.",
      },
      {
        title: "Contractor support",
        body: "GRS supports machine choice plus common HDD tools used on Indian cable projects.",
      },
    ],
    specs: [
      { label: "Use cases", value: "OFC, power cable, multi-utility ducts" },
      { label: "Approach", value: "Trenchless HDD cable laying" },
      { label: "Brand", value: "STETON" },
      { label: "Support", value: "GRS Equipments India" },
    ],
    faqs: [
      {
        question: "Which STETON model is used for cable laying?",
        answer:
          "Compact to mid STETON models are common for duct and cable work; longer crossings may need higher thrust classes. Share route length and duct OD for a recommendation.",
      },
      {
        question: "Do you support telecom HDD projects?",
        answer:
          "Yes — see also our telecom HDD page. GRS regularly discusses OFC and duct installation machine packages.",
      },
    ],
    relatedPaths: ["/telecom-hdd-machines", "/pipe-laying-machines", "/hdd-machines-india", "/contact"],
    ctaNote: "Request a cable laying HDD quotation with your duct size and route length.",
  },
  {
    path: "/telecom-hdd-machines",
    title: "Telecom HDD Machine India | OFC & Duct Installation — STETON GRS",
    description:
      "Telecom HDD machine supply from GRS Equipments — STETON rigs for optical fiber, duct banks and trenchless telecom network builds across India.",
    keywords: "Telecom HDD Machine, OFC HDD machine, fiber duct HDD, STETON telecom",
    h1: "Telecom HDD Machines for OFC and Duct Networks",
    intro:
      "Telecom networks need fast, accurate duct placement with minimal road cutting. STETON telecom-capable HDD machines from GRS Equipments help contractors install OFC ducts and multi-way packages under live corridors across Indian cities.",
    image: "/images/products/cards/s200.jpg",
    imageAlt: "STETON telecom HDD machine suitable for OFC duct installation",
    applications: [
      "City OFC backbone and access ducts",
      "FTTx feeder duct installs",
      "Multi-duct telecom packages",
      "Railway / highway telecom crossings",
    ],
    highlights: [
      {
        title: "Urban-friendly footprints",
        body: "Compact STETON models suit tight telecom worksites while still delivering controlled bore paths.",
      },
      {
        title: "Repeatable productivity",
        body: "Stable torque and practical rod handling help crews maintain daily duct meterage targets.",
      },
      {
        title: "Parts nearby",
        body: "Pair machines with GRS parts support so telecom crews are not waiting on basic consumables.",
      },
    ],
    specs: [
      { label: "Primary jobs", value: "OFC ducts, telecom multi-ways" },
      { label: "Suggested classes", value: "Compact to mid STETON S-series" },
      { label: "Dealer", value: "GRS Equipments" },
      { label: "Service area", value: "Pan-India with Mumbai base" },
    ],
    faqs: [
      {
        question: "What makes a good telecom HDD machine?",
        answer:
          "Accurate steering, suitable thrust for duct OD/length, reliable clamps/rod handling, and parts availability. GRS helps balance those factors for STETON models.",
      },
      {
        question: "Can one machine handle both telecom and water jobs?",
        answer:
          "Often yes within its design envelope — confirm pullback and ream capacity for the larger of your typical jobs.",
      },
    ],
    relatedPaths: ["/cable-laying-machines", "/hdd-machines-india", "/products", "/service"],
    ctaNote: "Tell us your duct count and route length for a telecom HDD machine proposal.",
  },
  {
    path: "/drilling-machines",
    title: "Drilling Machine & HDD Drilling Machine India | STETON GRS",
    description:
      "Drilling machine and HDD drilling machine solutions from GRS Equipments — STETON horizontal directional drilling rigs for Indian trenchless contractors.",
    keywords: "Drilling Machine, HDD Drilling Machine, STETON drilling, trenchless drilling machine",
    h1: "Drilling Machines and HDD Drilling Machines for India",
    intro:
      "When contractors search for a drilling machine for utilities, they often need an HDD drilling machine — a steerable trenchless rig rather than a vertical blast-hole drill. GRS Equipments supplies STETON HDD drilling machines designed for underground utility installation across India.",
    image: "/images/products/cards/s350.jpg",
    imageAlt: "STETON HDD drilling machine supplied by GRS Equipments India",
    applications: [
      "Utility drilling under obstacles",
      "Guided boring for pipes and ducts",
      "Infrastructure trenchless upgrades",
      "Contractor fleet expansion with STETON",
    ],
    highlights: [
      {
        title: "Purpose-built for HDD",
        body: "STETON drilling machines in our lineup focus on horizontal directional work — thrust, rotation, mud and rod handling as a system.",
      },
      {
        title: "Clear model ladder",
        body: "From lighter drilling machines for short urban bores to heavy ST classes for demanding crossings.",
      },
      {
        title: "Full package thinking",
        body: "Machine + mud + tools + parts advice from one India dealer team at GRS.",
      },
    ],
    specs: [
      { label: "Category", value: "HDD drilling machines" },
      { label: "Brand", value: "STETON / Steton" },
      { label: "India dealer", value: "GRS Equipments and Services LLP" },
      { label: "Contact", value: "grsequipments2023@gmail.com" },
    ],
    faqs: [
      {
        question: "What drilling machine do I need for underground cables or pipes?",
        answer:
          "For steered underground installs, choose an HDD drilling machine. Share soil, length and product size — GRS will suggest a STETON model.",
      },
      {
        question: "Do you offer only machines or complete drilling packages?",
        answer:
          "We can discuss machines alone or broader packages including mud systems, tools and spare-parts planning.",
      },
    ],
    relatedPaths: ["/hdd-machines-india", "/horizontal-directional-drilling", "/products", "/contact"],
    ctaNote: "Enquire now for STETON drilling machine options and pricing guidance.",
  },
]

export function getSeoPageByPath(pathname: string): SeoPageContent | undefined {
  const normalized = pathname.replace(/\/$/, "") || "/"
  return seoPages.find((page) => page.path === normalized)
}

export const seoPagePaths = seoPages.map((page) => page.path)
