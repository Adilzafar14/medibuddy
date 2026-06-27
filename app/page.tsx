import { Metadata } from "next"
import HeroSection from "@/components/shared/HeroSection"
import CountriesSection from "@/components/shared/CountriesSection"
import WhyChooseUs from "@/components/shared/WhyChooseUs"
import LeadForm from "@/components/shared/LeadForm"

export const metadata: Metadata = {
  title: "MBBS Abroad 2026 — Study Medicine in NMC Approved Universities",
  description: "MediBuddy Global Education — India's trusted MBBS abroad consultancy. Study MBBS in Russia, Uzbekistan, Georgia & more. NMC approved. Fees from 20 Lakhs. Free counselling: +919258966287",
  openGraph: {
    title: "MBBS Abroad 2026 | MediBuddy Global Education",
    description: "Study MBBS in NMC approved universities abroad. Fees from 20 Lakhs. 5000+ students placed. Free counselling.",
    url: "https://medibuddyglobal.com",
  },
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CountriesSection />
      <WhyChooseUs />
      <LeadForm />
    </main>
  )
}