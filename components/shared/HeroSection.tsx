"use client"
import { Phone, MessageCircle, ChevronRight, Star, Users, GraduationCap, Award } from "lucide-react"

const trustBadges = [
  { icon: "🏥", text: "NMC Approved" },
  { icon: "🌍", text: "7 Countries" },
  { icon: "🎓", text: "50+ Universities" },
  { icon: "👨‍⚕️", text: "5000+ Students" },
  { icon: "⭐", text: "4.9 Rating" },
]

const WHATSAPP = "919576368215"
const PHONE = "+919258966287"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 py-20" style={{background:"linear-gradient(135deg, #0A2E65 0%, #1a4a8a 50%, #0A2E65 100%)"}}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10">

          <div className="flex-1 text-center lg:text-left w-full">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6" style={{backgroundColor:"rgba(212,175,55,0.2)", color:"#D4AF37", border:"1px solid rgba(212,175,55,0.3)"}}>
              <Star size={12} fill="#D4AF37" />
              MBBS Abroad Admission 2026 Open
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight" style={{fontFamily:"Poppins, sans-serif"}}>
              Study MBBS Abroad
              <span className="block" style={{color:"#D4AF37"}}>Start Your Dream</span>
              Medical Career
            </h1>

            <p className="text-base sm:text-lg text-white/80 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed px-2 lg:px-0">
              Join 5000+ Indian students studying MBBS in NMC approved universities across Russia, Uzbekistan, Georgia & more. Low fees, world-class education.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8 px-2 lg:px-0">
              <a href="#contact" className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-bold w-full sm:w-auto" style={{backgroundColor:"#D4AF37", color:"#0A2E65", minHeight:"56px"}}>
                Get Free Counselling
                <ChevronRight size={20} />
              </a>
              <a href={"https://wa.me/"+WHATSAPP+"?text=Hello%2C%20I%20am%20interested%20in%20MBBS%20abroad%20admission%202026."} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-bold border-2 text-white w-full sm:w-auto" style={{borderColor:"#D4AF37", minHeight:"56px"}}>
                <MessageCircle size={20} />
                WhatsApp Us
              </a>
            </div>

            <div className="flex overflow-x-auto gap-2 pb-2 justify-start px-2 lg:px-0">
              {trustBadges.map((badge) => (
                <div key={badge.text} className="flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium text-white" style={{backgroundColor:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.2)"}}>
                  <span>{badge.icon}</span>
                  <span className="whitespace-nowrap">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full max-w-sm lg:max-w-lg mx-auto">
            <div className="rounded-3xl p-6" style={{backgroundColor:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.2)", backdropFilter:"blur(10px)"}}>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-2xl p-4 text-center">
                  <GraduationCap size={28} className="mx-auto mb-2" style={{color:"#D4AF37"}} />
                  <p className="text-2xl font-bold text-white">50+</p>
                  <p className="text-xs text-white/70 mt-1">Universities</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-4 text-center">
                  <Users size={28} className="mx-auto mb-2" style={{color:"#D4AF37"}} />
                  <p className="text-2xl font-bold text-white">5000+</p>
                  <p className="text-xs text-white/70 mt-1">Students</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-4 text-center">
                  <Award size={28} className="mx-auto mb-2" style={{color:"#D4AF37"}} />
                  <p className="text-2xl font-bold text-white">7</p>
                  <p className="text-xs text-white/70 mt-1">Countries</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-4 text-center">
                  <Star size={28} className="mx-auto mb-2" style={{color:"#D4AF37"}} />
                  <p className="text-2xl font-bold text-white">4.9★</p>
                  <p className="text-xs text-white/70 mt-1">Rating</p>
                </div>
              </div>
              <div className="mt-4 p-3 rounded-2xl text-center" style={{backgroundColor:"rgba(212,175,55,0.2)"}}>
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