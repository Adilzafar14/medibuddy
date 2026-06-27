import { writeFileSync } from 'fs'
import { join } from 'path'

const layout = `import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import FloatingButtons from "@/components/shared/FloatingButtons"

export const metadata: Metadata = {
  metadataBase: new URL('https://medibuddyglobal.com'),
  title: {
    default: "MediBuddy Global Education — MBBS Abroad 2026 | NMC Approved Universities",
    template: "%s | MediBuddy Global Education"
  },
  description: "Study MBBS abroad in Russia, Uzbekistan, Georgia, Kazakhstan, Kyrgyzstan, Nepal & Bangladesh. NMC approved universities. Low fees. Free counselling. Call +919258966287",
  keywords: ["MBBS abroad", "MBBS in Russia", "MBBS in Uzbekistan", "MBBS in Georgia", "NMC approved universities", "MBBS abroad 2026"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://medibuddyglobal.com",
    siteName: "MediBuddy Global Education",
    title: "MediBuddy Global Education — MBBS Abroad 2026",
    description: "Study MBBS abroad in NMC approved universities. Low fees, free counselling. 5000+ students placed.",
    images: [{ url: "/logo.png", width: 400, height: 400, alt: "MediBuddy Global Education" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MediBuddy Global Education — MBBS Abroad 2026",
    description: "Study MBBS abroad in NMC approved universities. Low fees, free counselling.",
    images: ["/logo.png"],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{overflowX:"hidden", maxWidth:"100vw"}}>
        <Navbar />
        <main className="pt-16" style={{overflowX:"hidden"}}>
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  )
}`

writeFileSync(join(process.cwd(), 'app', 'layout.tsx'), layout)
console.log('Layout fixed!')