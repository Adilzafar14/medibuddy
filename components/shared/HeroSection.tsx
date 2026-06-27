"use client"
import { MessageCircle, ChevronRight, Star, Users, GraduationCap, Award } from "lucide-react"

const trustBadges = [
  { icon: "🏥", text: "NMC Approved" },
  { icon: "🌍", text: "7 Countries" },
  { icon: "🎓", text: "50+ Universities" },
  { icon: "👨‍⚕️", text: "5000+ Students" },
  { icon: "⭐", text: "4.9 Rating" },
]

const WHATSAPP = "919576368215"

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col justify-center px-4 py-16" style={{background:"linear-gradient(135deg, #0A2E65 0%, #1a4a8a 50%, #0A2E65 100%)", minHeight:"100vh", overflowX:"hidden"}}>
      <div className="w-full" style={{maxWidth:"1280px", margin:"0 auto"}}>
        <div className="flex flex-col lg:flex-row items-center gap-8">

          <div className="w-full flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-xs font-medium mb-6" style={{backgroundColor:"rgba(212,175,55,0.2)", color:"#D4AF37", border:"1px solid rgba(212,175,55,0.3)"}}>
              <Star size={12} fill="#D4AF37" />
              MBBS Abroad Admission 2026 Open
            </div>

            <h1 className="font-bold text-white mb-4 leading-tight" style={{fontFamily:"Poppins, sans-serif", fontSize:"clamp(28px, 8vw, 56px)"}}>
              Study MBBS Abroad
              <span className="block" style={{color:"#D4AF37"}}>Start Your Dream</span>
              Medical Career
            </h1>

            <p className="text-white/80 mb-8 leading-relaxed w-full" style={{fontSize:"clamp(14px, 4vw, 18px)", maxWidth:"560px", margin:"0 auto 2rem auto"}}>
              Join 5000+ Indian students studying MBBS in NMC approved universities across Russia, Uzbekistan, Georgia & more. Low fees, world-class education.
            </p>

            <div className="flex flex-col gap-3 mb-8 w-full" style={{maxWidth:"400px", margin:"0 auto 2rem auto"}}>
              <a href="#contact" className="flex items-center justify-center gap-2 rounded-xl font-bold w-full" style={{backgroundColor:"#D4AF37", color:"#0A2E65", minHeight:"52px", fontSize:"16px", padding:"12px 24px"}}>
                Get Free Counselling <ChevronRight size={20} />
              </a>
              <a href={"https://wa.me/"+WHATSAPP+"?text=Hello%2C%20I%20am%20interested%20in%20MBBS%20abroad%20admission%202026."} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl font-bold text-white w-full border-2" style={{borderColor:"#D4AF37", minHeight:"52px", fontSize:"16px", padding:"12px 24px"}}>
                <MessageCircle size={20} /> WhatsApp Us
              </a>
            </div>

            <div className="flex overflow-x-auto gap-2 pb-2 w-full" style={{scrollbarWidth:"none", justifyContent:"center"}}>
              {trustBadges.map((badge) => (
                <div key={badge.text} className="flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium text-white" style={{backgroundColor:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.2)"}}>
                  <span>{badge.icon}</span>
                  <span className="whitespace-nowrap">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full flex-1" style={{maxWidth:"400px", margin:"0 auto"}}>
            <div className="rounded-3xl p-5" style={{backgroundColor:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.2)"}}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { Icon: GraduationCap, value: "50+", label: "Universities" },
                  { Icon: Users, value: "5000+", label: "Students" },
                  { Icon: Award, value: "7", label: "Countries" },
                  { Icon: Star, value: "4.9★", label: "Rating" },
                ].map(({ Icon, value, label }) => (
                  <div key={label} className="bg-white/10 rounded-2xl p-4 text-center">
                    <Icon size={26} className="mx-auto mb-2" style={{color:"#D4AF37"}} />
                    <p className="text-xl font-bold text-white">{value}</p>
                    <p className="text-xs text-white/70 mt-1">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 p-3 rounded-2xl text-center" style={{backgroundColor:"rgba(212,175,55,0.2)"}}>
                <p className="text-white font-semibold text-xs">🎯 Limited Seats for 2026 Batch</p>
                <p className="text-white/70 text-xs mt-1">Apply now to secure your admission</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}