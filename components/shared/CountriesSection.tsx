import Link from "next/link"

const countries = [
  { name: "Uzbekistan", emoji: "🇺🇿", fee: "20-25 Lakhs", duration: "6 Years", highlight: "Most Affordable", color: "#1a6b3a" },
  { name: "Russia", emoji: "🇷🇺", fee: "25-35 Lakhs", duration: "6 Years", highlight: "Top Ranked", color: "#8B0000" },
  { name: "Georgia", emoji: "🇬🇪", fee: "30-40 Lakhs", duration: "6 Years", highlight: "European Standard", color: "#c8102e" },
  { name: "Kyrgyzstan", emoji: "🇰🇬", fee: "18-22 Lakhs", duration: "6 Years", highlight: "Budget Friendly", color: "#e8112d" },
  { name: "Kazakhstan", emoji: "🇰🇿", fee: "22-30 Lakhs", duration: "6 Years", highlight: "WHO Listed", color: "#00afca" },
  { name: "Nepal", emoji: "🇳🇵", fee: "35-45 Lakhs", duration: "5.5 Years", highlight: "Nearest Abroad", color: "#003893" },
  { name: "Bangladesh", emoji: "🇧🇩", fee: "30-40 Lakhs", duration: "5 Years", highlight: "Same Culture", color: "#006a4e" },
]

export default function CountriesSection() {
  return (
    <section id="countries" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{fontFamily:"Poppins, sans-serif", color:"#0A2E65"}}>
            MBBS Abroad Destinations
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose from 7 top countries with NMC approved universities and affordable fees
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {countries.map((country) => (
            <Link key={country.name} href={"/mbbs-in/" + country.name.toLowerCase()} className="group block">
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-3 w-full" style={{backgroundColor: country.color}} />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{country.emoji}</span>
                    <div>
                      <h3 className="font-bold text-lg" style={{color:"#0A2E65", fontFamily:"Poppins, sans-serif"}}>
                        {country.name}
                      </h3>
                      <span className="text-xs font-medium px-2 py-1 rounded-full text-white" style={{backgroundColor: country.color}}>
                        {country.highlight}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Total Fees</span>
                      <span className="font-semibold" style={{color:"#0A2E65"}}>{country.fee}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Duration</span>
                      <span className="font-semibold" style={{color:"#0A2E65"}}>{country.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-sm font-medium" style={{color:"#D4AF37"}}>View Details</span>
                    <span className="text-lg" style={{color:"#D4AF37"}}>→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}