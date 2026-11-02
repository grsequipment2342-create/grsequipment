import { initializeApp } from "firebase/app"
import { getAnalytics, isSupported, type Analytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAfIl9rIoYX4BdwgaFC3d10V-YcJEMXcx8",
  authDomain: "grs-780bb.firebaseapp.com",
  projectId: "grs-780bb",
  storageBucket: "grs-780bb.firebasestorage.app",
  messagingSenderId: "341873671559",
  appId: "1:341873671559:web:e2253cb2c08a346c46e722",
  measurementId: "G-0QM7L1H7PC",
}

export const firebaseApp = initializeApp(firebaseConfig)
export const firestoreDb = getFirestore(firebaseApp)

let analyticsInstance: Analytics | null = null

/** Initializes Analytics only when the browser environment supports it. */
export async function initFirebaseAnalytics(): Promise<Analytics | null> {
  if (analyticsInstance) return analyticsInstance
  if (typeof window === "undefined") return null

  const supported = await isSupported()
  if (!supported) return null

  analyticsInstance = getAnalytics(firebaseApp)
  return analyticsInstance
}

export function getFirebaseAnalytics(): Analytics | null {
  return analyticsInstance
}
