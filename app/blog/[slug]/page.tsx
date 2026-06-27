import Link from "next/link"
import { Clock, User, ArrowLeft, Phone, MessageCircle } from "lucide-react"

interface BlogBlock {
  type: string
  text?: string
  items?: string[]
}

interface BlogPost {
  title: string
  category: string
  date: string
  readTime: string
  author: string
  content: BlogBlock[]
}

interface BlogContent {
  [key: string]: BlogPost
}

const blogContent: BlogContent = {
  "mbbs-in-uzbekistan-complete-guide-2026": {
    title: "MBBS in Uzbekistan 2026 — Complete Guide for Indian Students",
    category: "MBBS in Uzbekistan",
    date: "June 15, 2026",
    readTime: "8 min read",
    author: "Dr. Saniya",
    content: [
      { type: "intro", text: "Uzbekistan has emerged as one of the top destinations for Indian students seeking affordable MBBS education abroad. With NMC approved universities, English medium education and low cost of living, Uzbekistan offers an excellent opportunity for aspiring doctors." },
      { type: "heading", text: "Why Choose Uzbekistan for MBBS?" },
      { type: "points", items: ["NMC approved and WHO listed universities", "Total fees starting from just 20 Lakhs", "English medium education", "Large Indian student community", "Safe and student-friendly country", "Direct flights from India"] },
      { type: "heading", text: "Top Universities in Uzbekistan" },
      { type: "text", text: "Uzbekistan has several top-ranked medical universities recognized by NMC. Tashkent Medical Academy, established in 1919, is the oldest and most prestigious. Samarkand State Medical University is known for affordable fees and quality education." },
      { type: "heading", text: "Fee Structure 2026" },
      { type: "text", text: "The total cost of MBBS in Uzbekistan ranges from 20 to 25 Lakhs for the complete 6-year program. Annual fee is approximately 3.5 to 4.3 Lakhs per year including hostel." },
      { type: "heading", text: "Admission Process" },
      { type: "points", items: ["NEET qualification with minimum 150 marks", "10+2 with PCB and minimum 50% marks", "Age between 17-25 years", "Valid passport", "Apply through MediBuddy Global Education for hassle-free admission"] },
    ]
  }
}

const WHATSAPP = "919576368215"
const PHONE = "+919258966287"

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const blog = blogContent[slug]

  if (!blog) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center px-4">
          <div className="text-6xl mb-4">📝</div>
          <h1 className="text-2xl font-bold mb-2" style={{color:"#0A2E65"}}>Article Coming Soon</h1>
          <p className="text-gray-600 mb-6">This article is being prepared by our experts.</p>
          <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold" style={{backgroundColor:"#0A2E65"}}>
            <ArrowLeft size={18}/>Back to Blog
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main>
      <section className="py-16 px-4 text-white" style={{background:"linear-gradient(135deg, #0A2E65 0%, #1a4a8a 100%)"}}>
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 text-sm"><ArrowLeft size={16}/>Back to Blog</Link>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4" style={{backgroundColor:"#D4AF37", color:"#0A2E65"}}>{blog.category}</span>
          <h1 className="text-2xl md:text-4xl font-bold mb-4" style={{fontFamily:"Poppins, sans-serif"}}>{blog.title}</h1>
          <div className="flex items-center gap-4 text-white/70 text-sm">
            <span className="flex items-center gap-1"><User size={14}/>{blog.author}</span>
            <span className="flex items-center gap-1"><Clock size={14}/>{blog.readTime}</span>
            <span>{blog.date}</span>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-sm mb-8">
            {blog.content.map((block, i) => {
              if (block.type === "intro") return <p key={i} className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">{block.text}</p>
              if (block.type === "heading") return <h2 key={i} className="text-xl font-bold mt-8 mb-4" style={{color:"#0A2E65", fontFamily:"Poppins, sans-serif"}}>{block.text}</h2>
              if (block.type === "text") return <p key={i} className="text-gray-600 leading-relaxed mb-4">{block.text}</p>
              if (block.type === "points") return <ul key={i} className="flex flex-col gap-2 mb-6">{block.items?.map((item) => <li key={item} className="flex items-start gap-2 text-gray-600 text-sm"><span style={{color:"#D4AF37", flexShrink:0}}>✓</span>{item}</li>)}</ul>
              return null
            })}
          </div>
          <div className="rounded-3xl p-8" style={{background:"linear-gradient(135deg, #0A2E65 0%, #1a4a8a 100%)"}}>
            <h3 className="text-xl font-bold text-white mb-2" style={{fontFamily:"Poppins, sans-serif"}}>Interested in MBBS Abroad?</h3>
            <p className="text-white/70 mb-6">Get free counselling from our experts and secure your admission today</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/#contact" className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold" style={{backgroundColor:"#D4AF37", color:"#0A2E65", minHeight:"48px"}}><Phone size={18}/>Free Counselling</a>
              <a href={"https://wa.me/"+WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold border-2 text-white" style={{borderColor:"#D4AF37", minHeight:"48px"}}><MessageCircle size={18}/>WhatsApp Us</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}