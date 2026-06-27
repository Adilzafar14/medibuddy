interface FeeStructure {
  year: string
  tuition: string
  hostel: string
  total: string
}

interface FAQ {
  q: string
  a: string
}

interface CountryData {
  name: string
  emoji: string
  heroTitle: string
  heroDesc: string
  totalFee: string
  duration: string
  language: string
  climate: string
  capital: string
  currency: string
  highlights: string[]
  fees: FeeStructure[]
  universities: string[]
  faqs: FAQ[]
}

export const countriesData: Record<string, CountryData> = {
  uzbekistan: {
    name: "Uzbekistan", emoji: "🇺🇿", heroTitle: "MBBS in Uzbekistan 2026", heroDesc: "Study MBBS in Uzbekistan at NMC approved universities with lowest fees starting from 20 Lakhs. Direct admission, no donation.", totalFee: "20-25 Lakhs", duration: "6 Years", language: "English", climate: "Continental", capital: "Tashkent", currency: "UZS",
    highlights: ["NMC Approved", "WHO Listed", "No Donation", "English Medium", "Safe Country", "Indian Food Available"],
    fees: [
      { year: "1st Year", tuition: "3.5 Lakhs", hostel: "0.8 Lakhs", total: "4.3 Lakhs" },
      { year: "2nd Year", tuition: "3.5 Lakhs", hostel: "0.8 Lakhs", total: "4.3 Lakhs" },
      { year: "3rd Year", tuition: "3.5 Lakhs", hostel: "0.8 Lakhs", total: "4.3 Lakhs" },
      { year: "4th Year", tuition: "3.5 Lakhs", hostel: "0.8 Lakhs", total: "4.3 Lakhs" },
      { year: "5th Year", tuition: "3.5 Lakhs", hostel: "0.8 Lakhs", total: "4.3 Lakhs" },
      { year: "6th Year", tuition: "3.5 Lakhs", hostel: "0.8 Lakhs", total: "4.3 Lakhs" },
    ],
    universities: ["Tashkent Medical Academy", "Samarkand State Medical University", "Bukhara State Medical Institute", "Andijan State Medical Institute"],
    faqs: [
      { q: "Is MBBS in Uzbekistan valid in India?", a: "Yes, all universities are NMC approved and WHO listed, so the degree is valid for FMGE/NExT exam in India." },
      { q: "What is the NEET requirement?", a: "Minimum 150 marks in NEET is required for MBBS admission in Uzbekistan." },
      { q: "Is the medium of instruction English?", a: "Yes, MBBS in Uzbekistan is taught completely in English medium." },
      { q: "Is Uzbekistan safe for Indian students?", a: "Yes, Uzbekistan is one of the safest countries for Indian students with a large Indian student community." },
    ]
  },
  russia: {
    name: "Russia", emoji: "🇷🇺", heroTitle: "MBBS in Russia 2026", heroDesc: "Study MBBS in Russia at top ranked NMC approved universities. World class medical education at affordable fees.", totalFee: "25-35 Lakhs", duration: "6 Years", language: "English", climate: "Cold Continental", capital: "Moscow", currency: "RUB",
    highlights: ["NMC Approved", "WHO Listed", "Top Rankings", "English Medium", "Research Focused", "Global Recognition"],
    fees: [
      { year: "1st Year", tuition: "4.5 Lakhs", hostel: "1.0 Lakhs", total: "5.5 Lakhs" },
      { year: "2nd Year", tuition: "4.5 Lakhs", hostel: "1.0 Lakhs", total: "5.5 Lakhs" },
      { year: "3rd Year", tuition: "4.5 Lakhs", hostel: "1.0 Lakhs", total: "5.5 Lakhs" },
      { year: "4th Year", tuition: "4.5 Lakhs", hostel: "1.0 Lakhs", total: "5.5 Lakhs" },
      { year: "5th Year", tuition: "4.5 Lakhs", hostel: "1.0 Lakhs", total: "5.5 Lakhs" },
      { year: "6th Year", tuition: "4.5 Lakhs", hostel: "1.0 Lakhs", total: "5.5 Lakhs" },
    ],
    universities: ["Kazan Federal University", "Peoples Friendship University", "Crimea Federal University", "Bashkir State Medical University"],
    faqs: [
      { q: "Is MBBS in Russia valid in India?", a: "Yes, all our partner universities are NMC approved and ECFMG recognized." },
      { q: "What is the NEET requirement?", a: "Minimum 150 marks in NEET is required for MBBS admission in Russia." },
      { q: "Is Russian language required?", a: "No, MBBS is taught in English medium. Basic Russian is taught as a subject." },
      { q: "How is the weather in Russia?", a: "Russia has cold winters. Students are provided warm hostels with all facilities." },
    ]
  },
  georgia: {
    name: "Georgia", emoji: "🇬🇪", heroTitle: "MBBS in Georgia 2026", heroDesc: "Study MBBS in Georgia with European standard education at affordable fees. NMC approved universities in Tbilisi.", totalFee: "30-40 Lakhs", duration: "6 Years", language: "English", climate: "Mild", capital: "Tbilisi", currency: "GEL",
    highlights: ["NMC Approved", "European Standard", "WHO Listed", "English Medium", "Safe Country", "Modern Universities"],
    fees: [
      { year: "1st Year", tuition: "5.5 Lakhs", hostel: "1.2 Lakhs", total: "6.7 Lakhs" },
      { year: "2nd Year", tuition: "5.5 Lakhs", hostel: "1.2 Lakhs", total: "6.7 Lakhs" },
      { year: "3rd Year", tuition: "5.5 Lakhs", hostel: "1.2 Lakhs", total: "6.7 Lakhs" },
      { year: "4th Year", tuition: "5.5 Lakhs", hostel: "1.2 Lakhs", total: "6.7 Lakhs" },
      { year: "5th Year", tuition: "5.5 Lakhs", hostel: "1.2 Lakhs", total: "6.7 Lakhs" },
      { year: "6th Year", tuition: "5.5 Lakhs", hostel: "1.2 Lakhs", total: "6.7 Lakhs" },
    ],
    universities: ["Tbilisi State Medical University", "David Tvildiani Medical University", "New Vision University", "Caucasus International University"],
    faqs: [
      { q: "Is MBBS in Georgia valid in India?", a: "Yes, Georgian medical universities are NMC approved and WHO listed." },
      { q: "What is the NEET requirement?", a: "Minimum 150 marks in NEET is required for MBBS admission in Georgia." },
      { q: "Is Georgia safe for Indian students?", a: "Yes, Georgia is one of the safest countries in Europe with very low crime rate." },
      { q: "What is the climate like in Georgia?", a: "Georgia has a mild climate, similar to North India with warm summers and mild winters." },
    ]
  },
  kyrgyzstan: {
    name: "Kyrgyzstan", emoji: "🇰🇬", heroTitle: "MBBS in Kyrgyzstan 2026", heroDesc: "Most affordable MBBS abroad destination. Study in NMC approved universities in Bishkek starting from 18 Lakhs.", totalFee: "18-22 Lakhs", duration: "6 Years", language: "English", climate: "Continental", capital: "Bishkek", currency: "KGS",
    highlights: ["NMC Approved", "Most Affordable", "WHO Listed", "English Medium", "Indian Community", "Easy Admission"],
    fees: [
      { year: "1st Year", tuition: "2.8 Lakhs", hostel: "0.6 Lakhs", total: "3.4 Lakhs" },
      { year: "2nd Year", tuition: "2.8 Lakhs", hostel: "0.6 Lakhs", total: "3.4 Lakhs" },
      { year: "3rd Year", tuition: "2.8 Lakhs", hostel: "0.6 Lakhs", total: "3.4 Lakhs" },
      { year: "4th Year", tuition: "2.8 Lakhs", hostel: "0.6 Lakhs", total: "3.4 Lakhs" },
      { year: "5th Year", tuition: "2.8 Lakhs", hostel: "0.6 Lakhs", total: "3.4 Lakhs" },
      { year: "6th Year", tuition: "2.8 Lakhs", hostel: "0.6 Lakhs", total: "3.4 Lakhs" },
    ],
    universities: ["Kyrgyz State Medical Academy", "International School of Medicine", "Asian Medical Institute", "Osh State University"],
    faqs: [
      { q: "Is MBBS in Kyrgyzstan valid in India?", a: "Yes, all our partner universities are NMC approved and WHO listed." },
      { q: "What is the NEET requirement?", a: "Minimum 150 marks in NEET is required for MBBS admission in Kyrgyzstan." },
      { q: "Why is Kyrgyzstan cheapest for MBBS?", a: "Low cost of living and government subsidized education makes it most affordable." },
      { q: "Is there Indian food available?", a: "Yes, there is a large Indian community and Indian restaurants are available in Bishkek." },
    ]
  },
  kazakhstan: {
    name: "Kazakhstan", emoji: "🇰🇿", heroTitle: "MBBS in Kazakhstan 2026", heroDesc: "Study MBBS in Kazakhstan at WHO listed NMC approved universities. Modern facilities and English medium education.", totalFee: "22-30 Lakhs", duration: "6 Years", language: "English", climate: "Continental", capital: "Almaty", currency: "KZT",
    highlights: ["NMC Approved", "WHO Listed", "Modern Facilities", "English Medium", "Safe Country", "Good Infrastructure"],
    fees: [
      { year: "1st Year", tuition: "3.8 Lakhs", hostel: "0.9 Lakhs", total: "4.7 Lakhs" },
      { year: "2nd Year", tuition: "3.8 Lakhs", hostel: "0.9 Lakhs", total: "4.7 Lakhs" },
      { year: "3rd Year", tuition: "3.8 Lakhs", hostel: "0.9 Lakhs", total: "4.7 Lakhs" },
      { year: "4th Year", tuition: "3.8 Lakhs", hostel: "0.9 Lakhs", total: "4.7 Lakhs" },
      { year: "5th Year", tuition: "3.8 Lakhs", hostel: "0.9 Lakhs", total: "4.7 Lakhs" },
      { year: "6th Year", tuition: "3.8 Lakhs", hostel: "0.9 Lakhs", total: "4.7 Lakhs" },
    ],
    universities: ["Kazakh National Medical University", "Astana Medical University", "South Kazakhstan Medical Academy", "West Kazakhstan Medical University"],
    faqs: [
      { q: "Is MBBS in Kazakhstan valid in India?", a: "Yes, all our partner universities are NMC approved and WHO listed." },
      { q: "What is the NEET requirement?", a: "Minimum 150 marks in NEET is required for MBBS admission in Kazakhstan." },
      { q: "Is Kazakhstan safe for Indian students?", a: "Yes, Kazakhstan is a very safe and stable country with good law and order." },
      { q: "What language is used for teaching?", a: "MBBS is taught in English medium with basic Kazakh/Russian as additional subjects." },
    ]
  },
  nepal: {
    name: "Nepal", emoji: "🇳🇵", heroTitle: "MBBS in Nepal 2026", heroDesc: "Study MBBS in Nepal — nearest abroad destination for Indian students. Same culture, same food, NMC approved universities.", totalFee: "35-45 Lakhs", duration: "5.5 Years", language: "English", climate: "Similar to India", capital: "Kathmandu", currency: "NPR",
    highlights: ["NMC Approved", "Nearest Abroad", "Same Culture", "English Medium", "No Visa Required", "Indian Food"],
    fees: [
      { year: "1st Year", tuition: "6.5 Lakhs", hostel: "1.2 Lakhs", total: "7.7 Lakhs" },
      { year: "2nd Year", tuition: "6.5 Lakhs", hostel: "1.2 Lakhs", total: "7.7 Lakhs" },
      { year: "3rd Year", tuition: "6.5 Lakhs", hostel: "1.2 Lakhs", total: "7.7 Lakhs" },
      { year: "4th Year", tuition: "6.5 Lakhs", hostel: "1.2 Lakhs", total: "7.7 Lakhs" },
      { year: "5th Year", tuition: "6.5 Lakhs", hostel: "1.2 Lakhs", total: "7.7 Lakhs" },
    ],
    universities: ["Kathmandu University", "BP Koirala Institute", "Manipal College of Medical Sciences", "Nobel Medical College"],
    faqs: [
      { q: "Do Indian students need visa for Nepal?", a: "No, Indian students do not need a visa to study in Nepal. Just a valid ID is enough." },
      { q: "Is MBBS in Nepal valid in India?", a: "Yes, all our partner universities are NMC approved." },
      { q: "Is Nepal safe for Indian students?", a: "Yes, Nepal is very safe and culturally similar to India." },
      { q: "What is the NEET requirement?", a: "Minimum 150 marks in NEET is required for MBBS admission in Nepal." },
    ]
  },
  bangladesh: {
    name: "Bangladesh", emoji: "🇧🇩", heroTitle: "MBBS in Bangladesh 2026", heroDesc: "Study MBBS in Bangladesh at NMC approved medical colleges. Same culture, Bengali speaking country, affordable fees.", totalFee: "30-40 Lakhs", duration: "5 Years", language: "English", climate: "Tropical", capital: "Dhaka", currency: "BDT",
    highlights: ["NMC Approved", "Same Culture", "WHO Listed", "English Medium", "Affordable", "5 Year Course"],
    fees: [
      { year: "1st Year", tuition: "5.5 Lakhs", hostel: "1.0 Lakhs", total: "6.5 Lakhs" },
      { year: "2nd Year", tuition: "5.5 Lakhs", hostel: "1.0 Lakhs", total: "6.5 Lakhs" },
      { year: "3rd Year", tuition: "5.5 Lakhs", hostel: "1.0 Lakhs", total: "6.5 Lakhs" },
      { year: "4th Year", tuition: "5.5 Lakhs", hostel: "1.0 Lakhs", total: "6.5 Lakhs" },
      { year: "5th Year", tuition: "5.5 Lakhs", hostel: "1.0 Lakhs", total: "6.5 Lakhs" },
    ],
    universities: ["Dhaka Medical College", "Sir Salimullah Medical College", "Chittagong Medical College", "Rajshahi Medical College"],
    faqs: [
      { q: "Is MBBS in Bangladesh valid in India?", a: "Yes, all our partner universities are NMC approved and WHO listed." },
      { q: "What is the NEET requirement?", a: "Minimum 150 marks in NEET is required for MBBS admission in Bangladesh." },
      { q: "Is Bangladesh safe for Indian students?", a: "Yes, Bangladesh is safe and culturally very similar to India." },
      { q: "What is the duration of MBBS in Bangladesh?", a: "MBBS in Bangladesh is 5 years plus 1 year internship." },
    ]
  }
}