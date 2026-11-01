import { applyPageSeo, resolvePageSeo } from "@/lib/seo"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

/** Keeps document head in sync with the active route for Google / social crawlers. */
export function SeoHead() {
  const { pathname } = useLocation()

  useEffect(() => {
    applyPageSeo(resolvePageSeo(pathname))
  }, [pathname])

  return null
}
