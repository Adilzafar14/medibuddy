import Link from "next/link"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

const countries = ["Uzbekistan", "Russia", "Georgia", "Kyrgyzstan", "Kazakhstan", "Nepal", "Bangladesh"]
const WHATSAPP = "919576368215"
const PHONE = "+919258966287"
const EMAIL = "medibuddyglobal1@gmail.com"
const ADDRESS = "B-128, B Block, Noida Sector 2, Gautam Buddha Nagar, Uttar Pradesh 201301"

export default function Footer() {
  return (
    <footer style={{backgroundColor:"#0A2E65"}} className="text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-white/20">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg bg-white/20">M</div>
              <div>
                <h3 className="text-lg font-bold">MediBuddy</h3>
                <p className="text-xs" style={{color:"#D4AF37"}}>Global Education</p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">India's trusted MBBS abroad consultancy. NMC approved universities across 7 countries.</p>
          </div>
          <div>
            <h4 style={{color:"#D4AF37"}} className="font-semibold mb-4 text-sm uppercase tracking-wide">MBBS Abroad</h4>
            <div className="flex flex-col gap-2">
              {countries.map((c) => (<Link key={c} href={"/mbbs-in/"+c.toLowerCase()} className="text-sm text-white/70 hover:text-white transition-colors">MBBS in {c}</Link>))}
            </div>
          </div>
          <div>
            <h4 style={{color:"#D4AF37"}} className="font-semibold mb-4 text-sm uppercase tracking-wide">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link href="/universities" className="text-sm text-white/70 hover:text-white">Universities</Link>
              <Link href="/blog" className="text-sm text-white/70 hover:text-white">Blog</Link>
              <Link href="/about" className="text-sm text-white/70 hover:text-white">About Us</Link>
              <Link href="/#contact" className="text-sm text-white/70 hover:text-white">Free Counselling</Link>
            </div>
          </div>
          <div>
            <h4 style={{color:"#D4AF37"}} className="font-semibold mb-4 text-sm uppercase tracking-wide">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a href={"tel:"+PHONE} className="flex items-center gap-2 text-sm text-white/70 hover:text-white"><Phone size={14}/>{PHONE}</a>
              <a href={"mailto:"+EMAIL} className="flex items-center gap-2 text-sm text-white/70 hover:text-white"><Mail size={14}/>{EMAIL}</a>
              <div className="flex items-start gap-2 text-sm text-white/70"><MapPin size={14} className="mt-0.5 shrink-0"/>{ADDRESS}</div>
              <a href={"https://wa.me/"+WHATSAPP+"?text=Hello%2C%20I%20am%20interested%20in%20MBBS%20abroad%20admission%202026."} target="_blank" rel="noopener noreferrer" style={{backgroundColor:"#25D366", minHeight:"48px"}} className="flex items-center gap-2 px-4 py-3 rounded-lg text-white text-sm font-semibold"><MessageCircle size={16}/>WhatsApp Us</a>
            </div>
          </div>
        </div>
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">© {new Date().getFullYear()} MediBuddy Global Education. All rights reserved.</p>
          <p className="text-xs text-white/50">NMC Approved | WHO Listed | ECFMG Recognized</p>
        </div>
      </div>
    </footer>
  )
}