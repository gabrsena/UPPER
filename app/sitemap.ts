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

  // Rotas de serviços por cidade (/[service]/[city])
  // Estas são as landing pages específicas que ajudam a ranquear para buscas como 'SEO Local em Sorocaba'
  const serviceCityRoutes = services.flatMap((service) =>
    cities.map((city) => ({
      url: `${baseUrl}/${service}/${city}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))
  )

  // Rotas de cidades (/cidade/[city])
  const cityRoutes = cities.map((city) => ({
    url: `${baseUrl}/cidade/${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Rotas principais do blog (/blog/[slug])
  // Mantemos apenas a versão principal para evitar conteúdo duplicado no Google
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticRoutes, ...cityRoutes, ...serviceCityRoutes, ...blogRoutes]
}
