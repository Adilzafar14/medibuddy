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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="MediBuddy Global Education Logo" width={44} height={44} className="object-contain" priority />
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium hover:text-yellow-600 transition-colors" style={{color:"#0A2E65"}}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href={"https://wa.me/"+WHATSAPP+"?text=Hello%2C%20I%20am%20interested%20in%20MBBS%20abroad%20admission%202026.%20Please%20guide%20me."} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 rounded-lg text-white text-sm font-semibold" style={{backgroundColor:"#25D366", minHeight:"48px"}} aria-label="Chat on WhatsApp">
              <MessageCircle size={18} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <button className="md:hidden flex items-center justify-center" style={{color:"#0A2E65", width:"48px", height:"48px"}} onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="px-4 py-3 rounded-lg text-base font-medium hover:bg-blue-50 transition-colors" style={{color:"#0A2E65", minHeight:"48px", display:"flex", alignItems:"center"}}>
                  {link.label}
                </Link>
              ))}
              <a href={"tel:"+PHONE} className="mx-4 mt-3 flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold" style={{backgroundColor:"#0A2E65", minHeight:"48px"}}>
                <Phone size={18} />
                Call: {PHONE}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}