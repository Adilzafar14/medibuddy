"use client"
import { Phone, MessageCircle } from "lucide-react"

const WHATSAPP = "919576368215"
const PHONE = "+919258966287"

export default function FloatingButtons() {
  return (
    <div className="fixed z-40 flex flex-col gap-3" style={{bottom:"24px", right:"16px", pointerEvents:"all"}}>
      <a href={"https://wa.me/"+WHATSAPP+"?text=Hello%2C%20I%20am%20interested%20in%20MBBS%20abroad%20admission%202026."} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="flex items-center justify-center rounded-full text-white shadow-xl" style={{backgroundColor:"#25D366", width:"56px", height:"56px"}}>
        <MessageCircle size={26} />
      </a>
      <a href={"tel:"+PHONE} aria-label="Call Now" className="flex items-center justify-center rounded-full text-white shadow-xl" style={{backgroundColor:"#0A2E65", width:"56px", height:"56px"}}>
        <Phone size={26} />
      </a>
    </div>
  )
}