"use client"
import { Phone, MessageCircle } from "lucide-react"

const WHATSAPP = "919576368215"
const PHONE = "+919258966287"

export default function FloatingButtons() {
  return (
    <div className="fixed z-50 flex flex-col gap-3" style={{bottom:"24px", right:"16px"}}>
      <a href={"https://wa.me/"+WHATSAPP+"?text=Hello%2C%20I%20am%20interested%20in%20MBBS%20abroad%20admission%202026.%20Please%20guide%20me."} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="flex items-center gap-2 px-4 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all" style={{backgroundColor:"#25D366", minHeight:"52px"}}>
        <MessageCircle size={22} />
        <span className="text-sm font-bold hidden sm:inline">WhatsApp</span>
      </a>
      <a href={"tel:"+PHONE} aria-label="Call Now" className="flex items-center gap-2 px-4 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all" style={{backgroundColor:"#0A2E65", minHeight:"52px"}}>
        <Phone size={22} />
        <span className="text-sm font-bold hidden sm:inline">Call Now</span>
      </a>
    </div>
  )
}