import { countriesData } from "@/lib/countriesData"
import { notFound } from "next/navigation"
import { Phone, MessageCircle, CheckCircle } from "lucide-react"

type Props = { params: Promise<{ country: string }> }

export async function generateMetadata({ params }: Props) {
  const { country } = await params
  const data = countriesData[country]
  if (!data) return { title: "Not Found" }
  return {
    title: data.heroTitle + " | MediBuddy Global Education",
    description: data.heroDesc,
  }
}

export async function generateStaticParams() {
  return Object.keys(countriesData).map((country) => ({ country }))
}

export default async function CountryPage({ params }: Props) {
  const { country } = await params
  const data = countriesData[country]
  if (!data) notFound()
  return (
    <main>
      <section className="py-16 px-4 text-white" style={{background:"linear-gradient(135deg, #0A2E65 0%, #1a4a8a 100%)"}}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-4">{data.emoji}</div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{fontFamily:"Poppins, sans-serif"}}>{data.heroTitle}</h1>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">{data.heroDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#inquiry" className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold" style={{backgroundColor:"#D4AF37", color:"#0A2E65", minHeight:"56px"}}><Phone size={20}/>Apply Now Free</a>
            <a href="https://wa.me/919576368215?text=Hello%2C%20I%20am%20interested%20in%20MBBS%20abroad." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold border-2 text-white" style={{borderColor:"#D4AF37", minHeight:"56px"}}><MessageCircle size={20}/>WhatsApp Us</a>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {[{label:"Total Fees",value:data.totalFee},{label:"Duration",value:data.duration},{label:"Language",value:data.language},{label:"Capital",value:data.capital},{label:"Climate",value:data.climate},{label:"Currency",value:data.currency}].map((item) => (
              <div key={item.label} className="bg-white rounded-2xl p-4 text-center shadow-sm">
                <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                <p className="font-bold text-sm" style={{color:"#0A2E65"}}>{item.value}</p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
            <h2 className="text-xl font-bold mb-4" style={{color:"#0A2E65"}}>Key Highlights</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {data.highlights.map((h: string) => (<div key={h} className="flex items-center gap-2"><CheckCircle size={16} style={{color:"#D4AF37"}} /><span className="text-sm text-gray-700">{h}</span></div>))}
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
            <h2 className="text-xl font-bold mb-4" style={{color:"#0A2E65"}}>Year-wise Fee Structure</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr style={{backgroundColor:"#0A2E65"}} className="text-white"><th className="px-4 py-3 text-left">Year</th><th className="px-4 py-3 text-center">Tuition</th><th className="px-4 py-3 text-center">Hostel</th><th className="px-4 py-3 text-center">Total</th></tr></thead>
                <tbody>{data.fees.map((fee: {year: string, tuition: string, hostel: string, total: string}, i: number) => (<tr key={fee.year} className={i%2===0?"bg-gray-50":"bg-white"}><td className="px-4 py-3 font-medium" style={{color:"#0A2E65"}}>{fee.year}</td><td className="px-4 py-3 text-center text-gray-600">{fee.tuition}</td><td className="px-4 py-3 text-center text-gray-600">{fee.hostel}</td><td className="px-4 py-3 text-center font-bold" style={{color:"#D4AF37"}}>{fee.total}</td></tr>))}</tbody>
              </table>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
            <h2 className="text-xl font-bold mb-4" style={{color:"#0A2E65"}}>Top Universities</h2>
            <div className="flex flex-col gap-3">
              {data.universities.map((uni: string, i: number) => (<div key={uni} className="flex items-center gap-3 p-3 rounded-xl" style={{backgroundColor:"#f8f9ff"}}><span className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0" style={{backgroundColor:"#0A2E65"}}>{i+1}</span><span className="text-sm font-medium text-gray-800">{uni}</span></div>))}
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
            <h2 className="text-xl font-bold mb-4" style={{color:"#0A2E65"}}>FAQs</h2>
            <div className="flex flex-col gap-4">
              {data.faqs.map((faq: {q: string, a: string}) => (<details key={faq.q} className="border border-gray-200 rounded-xl overflow-hidden"><summary className="px-4 py-4 cursor-pointer font-medium text-sm" style={{color:"#0A2E65"}}>{faq.q}</summary><p className="px-4 pb-4 text-sm text-gray-600">{faq.a}</p></details>))}
            </div>
          </div>
        </div>
      </section>
      <section id="inquiry" className="py-16 px-4" style={{background:"linear-gradient(135deg, #0A2E65 0%, #1a4a8a 100%)"}}>
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Apply for MBBS in {data.name}</h2>
          <p className="text-white/70 mb-8">Get free counselling from our experts today</p>
          <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold" style={{backgroundColor:"#D4AF37", color:"#0A2E65", minHeight:"56px"}}>Get Free Counselling →</a>
        </div>
      </section>
    </main>
  )
}