"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, MessageCircle } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "MBBS Abroad", href: "/#countries" },
  { label: "Universities", href: "/universities" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
]

const WHATSAPP = "919576368215"
const PHONE = "+919258966287"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md" style={{maxWidth:"100vw"}}>
      <div className="mx-auto px-4" style={{maxWidth:"1280px"}}>
        <div className="flex items-center justify-between" style={{height:"64px"}}>

          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image src="/logo.png" alt="MediBuddy Global Education" width={40} height={40} className="object-contain flex-shrink-0" priority />
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-sm sm:text-base whitespace-nowrap" style={{color:"#0A2E65", fontFamily:"Poppins, sans-serif"}}>MediBuddy</span>
              <span className="text-xs whitespace-nowrap" style={{color:"#D4AF37", fontFamily:"Poppins, sans-serif"}}>Global Education</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium hover:text-yellow-600 transition-colors whitespace-nowrap" style={{color:"#0A2E65"}}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <a href={"https://wa.me/"+WHATSAPP+"?text=Hello%2C%20I%20am%20interested%20in%20MBBS%20abroad%20admission%202026."} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-lg text-white font-semibold" style={{backgroundColor:"#25D366", minHeight:"40px", minWidth:"40px", padding:"8px 12px"}} aria-label="WhatsApp">
              <MessageCircle size={18} />
              <span className="hidden sm:inline ml-1 text-sm">WhatsApp</span>
            </a>
            <button className="md:hidden flex items-center justify-center rounded-lg" style={{color:"#0A2E65", width:"40px", height:"40px"}} onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>

        {isOpen && (
          <div className="md:hidden border-t border-gray-100 py-3" style={{backgroundColor:"white"}}>
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="px-4 py-3 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors flex items-center" style={{color:"#0A2E65", minHeight:"48px"}}>
                  {link.label}
                </Link>
              ))}
              <a href={"tel:"+PHONE} className="mx-4 mt-2 mb-1 flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold text-sm" style={{backgroundColor:"#0A2E65", minHeight:"48px"}}>
                <Phone size={16} />
                {PHONE}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}