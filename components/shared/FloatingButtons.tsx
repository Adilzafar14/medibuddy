"use client"
import { Phone, MessageCircle } from "lucide-react"

const WHATSAPP = "919576368215"
const PHONE = "+919258966287"

export default function FloatingButtons() {
  return (
    <div className="fixed z-40 flex flex-col gap-3" style={{bottom:"100px", right:"16px"}}>
      <a href={"https://wa.me/"+WHATSAPP+"?text=Hello%2C%20I%20am%20interested%20in%20MBBS%20abroad."} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-full text-white shadow-lg" style={{backgroundColor:"#25D366", width:"48px", height:"48px"}}><MessageCircle size={22} /></a>
      <a href={"tel:"+PHONE} className="flex items-center justify-center rounded-full text-white shadow-lg" style={{backgroundColor:"#0A2E65", width:"48px", height:"48px"}}><Phone size={22} /></a>
    </div>
  )
}