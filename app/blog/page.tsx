import Link from "next/link"
import { Clock, User, ArrowRight } from "lucide-react"

export const metadata = {
  title: "MBBS Abroad Blog 2026 | MediBuddy Global Education",
  description: "Latest updates on MBBS abroad admissions, NMC guidelines, FMGE, NExT exam, visa updates and student life abroad.",
}

interface Blog {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  author: string
  featured: boolean
  color: string
}

const blogs: Blog[] = [
  { slug: "mbbs-in-uzbekistan-complete-guide-2026", title: "MBBS in Uzbekistan 2026 — Complete Guide for Indian Students", excerpt: "Everything you need to know about studying MBBS in Uzbekistan — fees, universities, admission process, visa and student life.", category: "MBBS in Uzbekistan", date: "June 15, 2026", readTime: "8 min read", author: "Dr. Saniya", featured: true, color: "#1a6b3a" },
  { slug: "nmc-approved-universities-russia-2026", title: "Top NMC Approved Universities in Russia for MBBS 2026", excerpt: "Complete list of NMC approved medical universities in Russia with fees, rankings and admission requirements.", category: "MBBS in Russia", date: "June 10, 2026", readTime: "6 min read", author: "Tarique Aman", featured: false, color: "#8B0000" },
  { slug: "fmge-next-exam-preparation-guide", title: "FMGE vs NExT Exam 2026 — Complete Preparation Guide", excerpt: "Understand the difference between FMGE and NExT exam, eligibility criteria and how to prepare while studying MBBS abroad.", category: "NExT Updates", date: "June 5, 2026", readTime: "10 min read", author: "Dr. Nilesh Anand", featured: false, color: "#0A2E65" },
  { slug: "mbbs-in-georgia-fees-universities-2026", title: "MBBS in Georgia 2026 — Fees, Universities and Admission Process", excerpt: "Georgia is emerging as a top destination for MBBS abroad. Know why Indian students prefer Georgia for medical education.", category: "MBBS in Georgia", date: "May 28, 2026", readTime: "7 min read", author: "Adil Zafar", featured: false, color: "#c8102e" },
  { slug: "student-life-uzbekistan-indian-students", title: "Student Life in Uzbekistan — What Indian Students Should Know", excerpt: "Food, accommodation, culture, safety and everything Indian students need to know before going to Uzbekistan for MBBS.", category: "Student Life Abroad", date: "May 20, 2026", readTime: "5 min read", author: "Dr. Saniya", featured: false, color: "#2d6a4f" },
  { slug: "nmc-guidelines-mbbs-abroad-2026", title: "NMC Guidelines for MBBS Abroad Students 2026 — Latest Updates", excerpt: "Latest NMC guidelines for Indian students studying MBBS abroad. Eligibility, screening test and registration requirements.", category: "NMC Guidelines", date: "May 15, 2026", readTime: "9 min read", author: "Dr. Nilesh Anand", featured: false, color: "#b8941e" },
  { slug: "mbbs-in-kyrgyzstan-complete-guide", title: "MBBS in Kyrgyzstan 2026 — Most Affordable MBBS Abroad", excerpt: "Why Kyrgyzstan is the most affordable MBBS abroad destination. Complete guide on fees, universities and visa process.", category: "MBBS in Kyrgyzstan", date: "May 10, 2026", readTime: "6 min read", author: "Tarique Aman", featured: false, color: "#e8112d" },
  { slug: "visa-process-mbbs-russia-2026", title: "Student Visa Process for Russia MBBS 2026 — Step by Step Guide", excerpt: "Complete step-by-step guide for getting student visa for Russia to study MBBS. Documents required and timeline.", category: "Visa Updates", date: "May 5, 2026", readTime: "7 min read", author: "Adil Zafar", featured: false, color: "#1a4a8a" },
]

const categories = ["All", "MBBS in Uzbekistan", "MBBS in Russia", "MBBS in Georgia", "MBBS in Kyrgyzstan", "NExT Updates", "NMC Guidelines", "Visa Updates", "Student Life Abroad"]

export default function BlogPage() {
  const featuredBlog = blogs.find((b) => b.featured)
  const regularBlogs = blogs.filter((b) => !b.featured)
  return (
    <main>
      <section className="py-16 px-4 text-white" style={{background:"linear-gradient(135deg, #0A2E65 0%, #1a4a8a 100%)"}}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{fontFamily:"Poppins, sans-serif"}}>MBBS Abroad Blog</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">Latest updates, guides and tips for Indian students planning MBBS abroad</p>
        </div>
      </section>
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex overflow-x-auto gap-3 pb-4 mb-10">
            {categories.map((cat) => (
              <button key={cat} className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium border transition-all" style={{backgroundColor: cat === "All" ? "#0A2E65" : "white", color: cat === "All" ? "white" : "#0A2E65", borderColor:"#0A2E65", minHeight:"40px"}}>
                {cat}
              </button>
            ))}
          </div>
          {featuredBlog && (
            <div className="mb-10">
              <h2 className="text-lg font-bold mb-4" style={{color:"#0A2E65"}}>Featured Article</h2>
              <Link href={"/blog/"+featuredBlog.slug} className="block bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="h-48 md:h-64 flex items-center justify-center" style={{background:"linear-gradient(135deg, #0A2E65 0%, #1a4a8a 100%)"}}>
                  <div className="text-center text-white p-8">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4" style={{backgroundColor:"#D4AF37", color:"#0A2E65"}}>{featuredBlog.category}</span>
                    <h3 className="text-xl md:text-3xl font-bold" style={{fontFamily:"Poppins, sans-serif"}}>{featuredBlog.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{featuredBlog.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><User size={14}/>{featuredBlog.author}</span>
                      <span className="flex items-center gap-1"><Clock size={14}/>{featuredBlog.readTime}</span>
                      <span>{featuredBlog.date}</span>
                    </div>
                    <span className="flex items-center gap-1 font-semibold text-sm" style={{color:"#0A2E65"}}>Read More <ArrowRight size={16}/></span>
                  </div>
                </div>
              </Link>
            </div>
          )}
          <h2 className="text-lg font-bold mb-6" style={{color:"#0A2E65"}}>Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularBlogs.map((blog) => (
              <Link key={blog.slug} href={"/blog/"+blog.slug} className="block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-32 flex items-center justify-center px-6" style={{backgroundColor: blog.color}}>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-white/20">{blog.category}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-base mb-2 leading-snug" style={{color:"#0A2E65", fontFamily:"Poppins, sans-serif"}}>{blog.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{blog.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1"><User size={12}/>{blog.author}</span>
                      <span className="flex items-center gap-1"><Clock size={12}/>{blog.readTime}</span>
                    </div>
                    <span className="font-semibold" style={{color:"#D4AF37"}}>Read →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}