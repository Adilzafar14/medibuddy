import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const countries = ['uzbekistan', 'russia', 'georgia', 'kyrgyzstan', 'kazakhstan', 'nepal', 'bangladesh']
  const baseUrl = 'https://medibuddyglobal.com'

  const countryPages = countries.map((country) => ({
    url: baseUrl + '/mbbs-in/' + country,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: baseUrl + '/about', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: baseUrl + '/universities', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: baseUrl + '/blog', lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.8 },
    ...countryPages,
  ]
}