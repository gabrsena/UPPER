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

  // Rotas de índices de blog por cidade (/cidade/[city]/blog)
  const cityBlogRoutes = cities.map((city) => ({
    url: `${baseUrl}/cidade/${city}/blog`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Rotas principais e regionais do blog (/blog/[slug], /blog/[slug]-em-[city])
  // Incluímos as versões regionais pois têm metadados e conteúdo adaptado para SEO Local
  const blogRoutes = posts.flatMap((post) => {
    const mainRoute = {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    };

    const regionalRoutes = cities.map((city) => ({
      url: `${baseUrl}/blog/${post.slug}-em-${city}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));

    return [mainRoute, ...regionalRoutes];
  })

  return [
    ...staticRoutes, 
    ...cityRoutes, 
    ...serviceCityRoutes, 
    ...cityBlogRoutes,
    ...blogRoutes
  ]
}
