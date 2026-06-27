import Link from "next/link"
import { MapPin, Clock, DollarSign, Award, Phone, MessageCircle } from "lucide-react"

export const metadata = {
  title: "Top MBBS Universities Abroad 2026 | MediBuddy Global Education",
  description: "Explore NMC approved MBBS universities in Russia, Uzbekistan, Georgia and more.",
}

const universities = [
  { name: "Tashkent Medical Academy", country: "Uzbekistan", emoji: "🇺🇿", fee: "3.5 Lakhs/year", duration: "6 Years", established: "1919", recognition: "NMC, WHO, ECFMG", highlight: "Oldest Medical University" },
  { name: "Samarkand State Medical University", country: "Uzbekistan", emoji: "🇺🇿", fee: "3.2 Lakhs/year", duration: "6 Years", established: "1930", recognition: "NMC, WHO", highlight: "Most Affordable" },
  { name: "Kazan Federal University", country: "Russia", emoji: "🇷🇺", fee: "4.5 Lakhs/year", duration: "6 Years", established: "1804", recognition: "NMC, WHO, ECFMG", highlight: "Top Ranked" },
  { name: "Peoples Friendship University", country: "Russia", emoji: "🇷🇺", fee: "5.0 Lakhs/year", duration: "6 Years", established: "1960", recognition: "NMC, WHO, ECFMG", highlight: "International Campus" },
  { name: "Tbilisi State Medical University", country: "Georgia", emoji: "🇬🇪", fee: "5.5 Lakhs/year", duration: "6 Years", established: "1918", recognition: "NMC, WHO, ECFMG", highlight: "European Standard" },
  { name: "Kyrgyz State Medical Academy", country: "Kyrgyzstan", emoji: "🇰🇬", fee: "2.8 Lakhs/year", duration: "6 Years", established: "1939", recognition: "NMC, WHO", highlight: "Budget Friendly" },
  { name: "Asian Medical Institute", country: "Kyrgyzstan", emoji: "🇰🇬", fee: "2.5 Lakhs/year", duration: "6 Years", established: "1996", recognition: "NMC, WHO", highlight: "Lowest Fees" },
  { name: "Kazakh National Medical University", country: "Kazakhstan", emoji: "🇰🇿", fee: "3.8 Lakhs/year", duration: "6 Years", established: "1930", recognition: "NMC, WHO, ECFMG", highlight: "Top in Kazakhstan" },
  { name: "Manipal College of Medical Sciences", country: "Nepal", emoji: "🇳🇵", fee: "6.5 Lakhs/year", duration: "5.5 Years", established: "1994", recognition: "NMC, WHO", highlight: "Indian Management" },
  { name: "Dhaka Medical College", country: "Bangladesh", emoji: "🇧🇩", fee: "5.5 Lakhs/year", duration: "5 Years", established: "1946", recognition: "NMC, WHO", highlight: "Most Reputed" },
]

export default function UniversitiesPage() {
  return (
    <main>
      <section className="py-16 px-4 text-white" style={{background:"linear-gradient(135deg, #0A2E65 0%, #1a4a8a 100%)"}}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{fontFamily:"Poppins, sans-serif"}}>Top MBBS Universities Abroad</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">Explore NMC approved, WHO listed universities across 7 countries.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {["NMC Approved","WHO Listed","ECFMG Recognized","English Medium"].map((badge) => (
              <span key={badge} className="px-4 py-2 rounded-full text-sm font-medium" style={{backgroundColor:"rgba(212,175,55,0.2)",color:"#D4AF37",border:"1px solid rgba(212,175,55,0.3)"}}>✓ {badge}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {universities.map((uni) => (
              <div key={uni.name} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{uni.emoji}</span>
                      <span className="text-xs font-medium px-2 py-1 rounded-full text-white" style={{backgroundColor:"#0A2E65"}}>{uni.country}</span>
                    </div>
                    <span className="text-xs font-medium px-2 py-1 rounded-full" style={{backgroundColor:"#D4AF3720",color:"#b8941e"}}>{uni.highlight}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-4 leading-tight" style={{color:"#0A2E65",fontFamily:"Poppins, sans-serif"}}>{uni.name}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600"><DollarSign size={14} style={{color:"#D4AF37",flexShrink:0}} /><span>Fees: <strong>{uni.fee}</strong></span></div>
                    <div className="flex items-center gap-2 text-sm text-gray-600"><Clock size={14} style={{color:"#D4AF37",flexShrink:0}} /><span>Duration: <strong>{uni.duration}</strong></span></div>
                    <div className="flex items-center gap-2 text-sm text-gray-600"><MapPin size={14} style={{color:"#D4AF37",flexShrink:0}} /><span>Est: <strong>{uni.established}</strong></span></div>
                    <div className="flex items-center gap-2 text-sm text-gray-600"><Award size={14} style={{color:"#D4AF37",flexShrink:0}} /><span>{uni.recognition}</span></div>
                  </div>
                </div>
                <div className="px-6 pb-6 flex gap-3">
                  <a href="/#contact" className="flex-1 flex items-center justify-center py-3 rounded-xl text-white text-sm font-semibold" style={{backgroundColor:"#0A2E65",minHeight:"48px"}}>Apply Now</a>
                  <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-4 py-3 rounded-xl text-white text-sm font-semibold" style={{backgroundColor:"#25D366",minHeight:"48px"}}><MessageCircle size={18} /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-4" style={{background:"linear-gradient(135deg, #0A2E65 0%, #1a4a8a 100%)"}}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4" style={{fontFamily:"Poppins, sans-serif"}}>Need Help Choosing the Right University?</h2>
          <p className="text-white/70 mb-8">Our expert counsellors will help you find the perfect match</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact" className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold" style={{backgroundColor:"#D4AF37",color:"#0A2E65",minHeight:"56px"}}><Phone size={20} />Free Counselling</a>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold border-2 text-white" style={{borderColor:"#D4AF37",minHeight:"56px"}}><MessageCircle size={20} />WhatsApp Us</a>
          </div>
        </div>
      </section>
    </main>
  )
}