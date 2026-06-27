"use client"
import { useState } from "react"

const countries = ["Uzbekistan", "Russia", "Georgia", "Kyrgyzstan", "Kazakhstan", "Nepal", "Bangladesh"]

interface FormState {
  name: string
  phone: string
  email: string
  country: string
  neet_score: string
}

export default function LeadForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [form, setForm] = useState<FormState>({ name: "", phone: "", email: "", country: "", neet_score: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const validatePhone = (phone: string) => /^[6-9]\d{9}$/.test(phone)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validatePhone(form.phone)) {
      setError("Please enter a valid 10-digit Indian mobile number")
      return
    }
    setLoading(true)
    setError("")
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Something went wrong")
      setSuccess(true)
      setForm({ name: "", phone: "", email: "", country: "", neet_score: "" })
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 px-4" style={{background:"linear-gradient(135deg, #0A2E65 0%, #1a4a8a 100%)"}}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{fontFamily:"Poppins, sans-serif"}}>Get Free Counselling</h2>
          <p className="text-white/80 text-lg">Fill the form below and our expert counsellor will call you within 24 hours</p>
        </div>
        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          {success ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold mb-2" style={{color:"#0A2E65"}}>Thank You!</h3>
              <p className="text-gray-600">Our counsellor will call you within 24 hours.</p>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl text-white font-semibold" style={{backgroundColor:"#25D366"}}>WhatsApp Us Now</a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{color:"#0A2E65"}}>Full Name *</label>
                <input id="name" name="name" value={form.name} onChange={handleChange} required placeholder="Enter your full name" className="w-full px-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-blue-500 text-gray-800" style={{minHeight:"52px", fontSize:"16px"}} />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2" style={{color:"#0A2E65"}}>Phone Number *</label>
                <input id="phone" name="phone" value={form.phone} onChange={handleChange} required placeholder="10-digit mobile number" type="tel" maxLength={10} className="w-full px-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-blue-500 text-gray-800" style={{minHeight:"52px", fontSize:"16px"}} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{color:"#0A2E65"}}>Email Address</label>
                <input id="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" type="email" className="w-full px-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-blue-500 text-gray-800" style={{minHeight:"52px", fontSize:"16px"}} />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-semibold mb-2" style={{color:"#0A2E65"}}>Preferred Country</label>
                <select id="country" name="country" value={form.country} onChange={handleChange} className="w-full px-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-blue-500 text-gray-800 bg-white" style={{minHeight:"52px", fontSize:"16px"}}>
                  <option value="">Select a country</option>
                  {countries.map((c) => (<option key={c} value={c}>{c}</option>))}
                </select>
              </div>
              <div>
                <label htmlFor="neet_score" className="block text-sm font-semibold mb-2" style={{color:"#0A2E65"}}>NEET Score (Optional)</label>
                <input id="neet_score" name="neet_score" value={form.neet_score} onChange={handleChange} placeholder="e.g. 450" type="number" className="w-full px-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-blue-500 text-gray-800" style={{minHeight:"52px", fontSize:"16px"}} />
              </div>
              {error && (<p role="alert" className="text-red-500 text-sm text-center">{error}</p>)}
              <button type="submit" disabled={loading} className="w-full py-4 rounded-xl text-white font-bold text-lg transition-all" style={{backgroundColor: loading ? "#999" : "#0A2E65", minHeight:"56px"}}>
                {loading ? "Submitting..." : "Get Free Counselling →"}
              </button>
              <p className="text-center text-xs text-gray-400">🔒 Your information is 100% safe and secure</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}