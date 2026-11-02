import { SplashScreen } from "@/components/animations/splashScreen"
import { SiteLayout } from "@/components/layout/siteLayout"
import { AboutPage } from "@/pages/aboutPage"
import { ContactPage } from "@/pages/contactPage"
import { DownloadPage } from "@/pages/downloadPage"
import { GalleryPage } from "@/pages/galleryPage"
import { HomePage } from "@/pages/homePage"
import { KnowledgePage } from "@/pages/knowledgePage"
import { NewsPage } from "@/pages/newsPage"
import { ProductDetailPage } from "@/pages/productDetailPage"
import { ProductsPage } from "@/pages/productsPage"
import { ServicePage } from "@/pages/servicePage"
import { SeoLandingPage } from "@/pages/seoLandingPage"
import { seoPagePaths } from "@/data/seoPages"
import { useState } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

export default function App() {
  const [splashDone, setSplashDone] = useState(() => {
    if (typeof window === "undefined") return false
    return sessionStorage.getItem("grs-splash-seen") === "1"
  })

  return (
    <BrowserRouter>
      {!splashDone ? <SplashScreen onComplete={() => setSplashDone(true)} /> : null}
      <div
        className={
          splashDone
            ? "opacity-100 transition-opacity duration-500"
            : "pointer-events-none opacity-0"
        }
      >
        <Routes>
          <Route element={<SiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="products/:slug" element={<ProductDetailPage />} />
            <Route path="service" element={<ServicePage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="knowledge" element={<KnowledgePage />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="download" element={<DownloadPage />} />
            <Route path="contact" element={<ContactPage />} />
            {seoPagePaths.map((path) => (
              <Route key={path} path={path.slice(1)} element={<SeoLandingPage />} />
            ))}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
