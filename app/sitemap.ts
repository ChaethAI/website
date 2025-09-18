import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://chaeth.com'

  // Define all available routes
  const routes = [
    '',
    '/contact',
    '/privacy',
    '/terms'
  ]

  // Generate sitemap entries for both languages
  const sitemapEntries: MetadataRoute.Sitemap = []

  routes.forEach(route => {
    // English version
    sitemapEntries.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1.0 : 0.8,
      alternates: {
        languages: {
          'en-US': `${baseUrl}${route}`,
          'th-TH': `${baseUrl}/th${route}`,
        },
      },
    })

    // Thai version
    sitemapEntries.push({
      url: `${baseUrl}/th${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1.0 : 0.8,
      alternates: {
        languages: {
          'en-US': `${baseUrl}${route}`,
          'th-TH': `${baseUrl}/th${route}`,
        },
      },
    })
  })

  return sitemapEntries
}
