import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import { initFirebaseAnalytics } from "./lib/firebase"
import "./index.css"

const rootElement = document.getElementById("root")

if (!rootElement) {
  throw new Error("Root element #root not found")
}

void initFirebaseAnalytics()

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
