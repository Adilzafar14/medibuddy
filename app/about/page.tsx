import { Shield, Users, Award, Phone, MessageCircle, CheckCircle, Star, LucideIcon } from "lucide-react"

export const metadata = {
  title: "About Us | MediBuddy Global Education",
  description: "MediBuddy Global Education is India's trusted MBBS abroad consultancy based in Noida. Expert guidance for MBBS admissions in 7 countries.",
}

const stats = [
  { number: "5000+", label: "Students Placed" },
  { number: "50+", label: "Universities" },
  { number: "7", label: "Countries" },
  { number: "10+", label: "Years Experience" },
]

interface Value {
  icon: LucideIcon
  title: string
  desc: string
}

const values: Value[] = [
  { icon: Shield, title: "Trusted & Transparent", desc: "No hidden charges. We only recommend NMC approved universities." },
  { icon: Users, title: "Student First", desc: "Every decision we make is in the best interest of the student." },
  { icon: Award, title: "Quality Education", desc: "We partner only with WHO listed, NMC approved universities." },
  { icon: Star, title: "End-to-End Support", desc: "From counselling to visa to post-arrival support." },
]

const team = [
  { name: "Tarique Aman", role: "Founder & CEO", initial: "T", desc: "Leading MediBuddy Global Education with a vision to make quality medical education accessible to every Indian student." },
  { name: "Dr. Saniya", role: "Head of Counselling", initial: "S", desc: "Expert medical education counsellor helping students choose the right university and country for their MBBS journey." },
  { name: "Adil Zafar", role: "Visa & Documentation Head", initial: "A", desc: "Specialist in student visa processing for all 7 countries. Ensuring smooth documentation for every student." },
  { name: "Dr. Nilesh Anand", role: "Academic Advisor", initial: "N", desc: "MBBS graduate with expertise in NMC guidelines and helping students prepare for FMGE/NExT exams." },
]

const WHATSAPP = "919576368215"
const PHONE = "+919258966287"

export default function AboutPage() {
  return (
    <main>
      <section className="py-16 px-4 text-white" style={{background:"linear-gradient(135deg, #0A2E65 0%, #1a4a8a 100%)"}}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{fontFamily:"Poppins, sans-serif"}}>About MediBuddy Global Education</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">India's trusted MBBS abroad consultancy since 2015. Based in Noida, UP.</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl" style={{backgroundColor:"#f8f9ff"}}>
                <p className="text-3xl md:text-4xl font-bold mb-2" style={{color:"#0A2E65", fontFamily:"Poppins, sans-serif"}}>{stat.number}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{color:"#0A2E65", fontFamily:"Poppins, sans-serif"}}>Who We Are</h2>
              <p className="text-gray-600 leading-relaxed mb-4">MediBuddy Global Education is a premier MBBS abroad consultancy based in Noida, Uttar Pradesh. We have helped thousands of students secure admissions in top medical universities across Russia, Uzbekistan, Georgia, Kyrgyzstan, Kazakhstan, Nepal and Bangladesh.</p>
              <p className="text-gray-600 leading-relaxed mb-6">Our experienced team ensures every student gets the best guidance — from choosing the right university to settling in their destination country.</p>
              <div className="flex flex-col gap-3">
                {["NMC Approved Universities Only","Zero Hidden Charges","Free Visa Assistance","24/7 Student Support","On-ground Support in Each Country"].map((point) => (
                  <div key={point} className="flex items-center gap-2">
                    <CheckCircle size={18} style={{color:"#D4AF37", flexShrink:0}} />
                    <span className="text-gray-700 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl p-8 text-center" style={{background:"linear-gradient(135deg, #0A2E65 0%, #1a4a8a 100%)"}}>
              <div className="text-6xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">To make quality medical education accessible to every Indian student through transparent, affordable and trustworthy MBBS abroad guidance.</p>
              <div className="flex flex-col gap-3">
                <a href={"tel:"+PHONE} className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm" style={{backgroundColor:"#D4AF37", color:"#0A2E65", minHeight:"48px"}}><Phone size={16}/>{PHONE}</a>
                <a href={"https://wa.me/"+WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border-2 text-white" style={{borderColor:"#D4AF37", minHeight:"48px"}}><MessageCircle size={16}/>WhatsApp Us</a>
              </div>
            </div>
          </div>
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{color:"#0A2E65", fontFamily:"Poppins, sans-serif"}}>Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => {
                const IconComponent = value.icon
                return (
                  <div key={value.title} className="p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all text-center">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{backgroundColor:"#0A2E6515"}}>
                      <IconComponent size={28} style={{color:"#0A2E65"}} />
                    </div>
                    <h3 className="font-bold mb-2" style={{color:"#0A2E65"}}>{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{color:"#0A2E65", fontFamily:"Poppins, sans-serif"}}>Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <div key={member.name} className="p-6 rounded-2xl text-center hover:shadow-lg transition-all" style={{backgroundColor:"#f8f9ff"}}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white" style={{backgroundColor:"#0A2E65"}}>{member.initial}</div>
                  <h3 className="font-bold mb-1" style={{color:"#0A2E65"}}>{member.name}</h3>
                  <p className="text-sm font-medium mb-2" style={{color:"#D4AF37"}}>{member.role}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{member.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl p-8 text-center" style={{background:"linear-gradient(135deg, #0A2E65 0%, #1a4a8a 100%)"}}>
            <h2 className="text-2xl font-bold text-white mb-2" style={{fontFamily:"Poppins, sans-serif"}}>Visit Our Office</h2>
            <p className="text-white/70 mb-2">B-128, B Block, Noida Sector 2</p>
            <p className="text-white/70 mb-6">Gautam Buddha Nagar, Uttar Pradesh 201301</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={"tel:"+PHONE} className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold" style={{backgroundColor:"#D4AF37", color:"#0A2E65", minHeight:"56px"}}><Phone size={20}/>Call Us Now</a>
              <a href={"https://wa.me/"+WHATSAPP+"?text=Hello%2C%20I%20want%20to%20visit%20your%20office%20for%20MBBS%20counselling."} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold border-2 text-white" style={{borderColor:"#D4AF37", minHeight:"56px"}}><MessageCircle size={20}/>WhatsApp Us</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}