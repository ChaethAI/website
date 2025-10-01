import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://chaeth.com'

  // Define all available routes
  const routes = [
    '',
    '/ai-readiness',
    '/thai-readiness',
    '/contact',
    '/privacy',
    '/terms'
  ]

  // Generate sitemap entries
  const sitemapEntries: MetadataRoute.Sitemap = []

  routes.forEach(route => {
    sitemapEntries.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1.0 : 0.8,
    })
  })

  return sitemapEntries
}
