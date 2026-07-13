import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/404', '/500'],
    },
    sitemap: 'https://mjinidigital.co.ke/sitemap.xml',
  }
}
