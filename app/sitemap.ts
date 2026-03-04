import { MetadataRoute } from 'next'
import { posts } from '@/lib/blog-data'
import { serviceData } from '@/lib/city-service-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.upperagency.com.br'

  const cities = [
    "sorocaba",
    "votorantim",
    "itu",
    "salto",
    "itapetininga",
    "boituva",
    "porto-feliz"
  ];
  const services = Object.keys(serviceData);

  // Rotas estáticas
  const staticRoutes = [
    '',
    '/cidades',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Rotas de cidades (/[city])
  const cityRoutes = cities.map((city) => ({
    url: `${baseUrl}/cidade/${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Rotas de serviços por cidade (/[service]/[city])
  const serviceCityRoutes = services.flatMap((service) =>
    cities.map((city) => ({
      url: `${baseUrl}/${service}/${city}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  )

  // Rotas do blog por cidade (/blog/[slug]-em-[city])
  const blogCityRoutes = posts.flatMap((post) =>
    cities.map((city) => ({
      url: `${baseUrl}/blog/${post.slug}-em-${city}`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    }))
  )

  return [...staticRoutes, ...cityRoutes, ...serviceCityRoutes, ...blogCityRoutes]
}
