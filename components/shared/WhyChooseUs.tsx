import { Shield, DollarSign, Users, Phone, Award, Clock, FileCheck, HeartHandshake, LucideIcon } from "lucide-react"

interface Reason {
  icon: LucideIcon
  title: string
  desc: string
  color: string
}

const reasons: Reason[] = [
  { icon: Shield, title: "NMC Approved Only", desc: "We only recommend universities recognized by National Medical Commission India.", color: "#0A2E65" },
  { icon: DollarSign, title: "Lowest Fees Guaranteed", desc: "Direct admission with no hidden charges. Best fees in the market guaranteed.", color: "#D4AF37" },
  { icon: Users, title: "5000+ Students Placed", desc: "Trusted by thousands of Indian students and parents since 2015.", color: "#0A2E65" },
  { icon: Phone, title: "24/7 Support", desc: "Our counsellors are available round the clock via WhatsApp, call and email.", color: "#D4AF37" },
  { icon: Award, title: "WHO & ECFMG Listed", desc: "All universities are WHO listed and ECFMG recognized for global practice.", color: "#0A2E65" },
  { icon: Clock, title: "Fast Admission Process", desc: "Get your admission letter within 7 working days. Visa assistance included.", color: "#D4AF37" },
  { icon: FileCheck, title: "Complete Documentation", desc: "We handle all paperwork — visa, travel, hostel, and university registration.", color: "#0A2E65" },
  { icon: HeartHandshake, title: "Post Arrival Support", desc: "Our team is present in each country to help students settle in comfortably.", color: "#D4AF37" },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{fontFamily:"Poppins, sans-serif", color:"#0A2E65"}}>
            Why Choose MediBuddy?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We are India's most trusted MBBS abroad consultancy with a proven track record
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => {
            const IconComponent = reason.icon
            return (
              <div key={reason.title} className="p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{backgroundColor: reason.color + "15"}}>
                  <IconComponent size={28} style={{color: reason.color}} />
                </div>
                <h3 className="font-bold text-base mb-2" style={{color:"#0A2E65", fontFamily:"Poppins, sans-serif"}}>
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}