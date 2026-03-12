import { MetadataRoute } from 'next'
import { posts } from '@/lib/blog-data'
import { serviceData } from '@/lib/city-service-data'
import { nicheData } from '@/lib/niche-service-data'

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
  const niches = Object.keys(nicheData);

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

  // Rotas de serviços por cidade (/[service]/[city]) - Legado
  const serviceCityRoutes = services.flatMap((service) =>
    cities.map((city) => ({
      url: `${baseUrl}/${service}/${city}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))
  )

  // Novas Rotas de nichos por cidade (/[city]/[niche])
  const nicheRoutes = cities.flatMap((city) =>
    niches.map((niche) => ({
      url: `${baseUrl}/${city}/${niche}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))
  )

  // Novas Rotas de sub-serviços por nicho (/[city]/[niche]/[service])
  const subServiceRoutes = cities.flatMap((city) =>
    niches.flatMap((niche) =>
      Object.keys(nicheData[niche].services).map((service) => ({
        url: `${baseUrl}/${city}/${niche}/${service}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }))
    )
  )

  // Rotas de cidades (/cidade/[city])
  const cityRoutes = cities.map((city) => ({
    url: `${baseUrl}/cidade/${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Rotas principais do blog (/blog/[slug])
  const blogRoutes = posts.flatMap((post) => {
    const routes = [
      {
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }
    ];

    // Add city-specific variants
    cities.forEach(city => {
      routes.push({
        url: `${baseUrl}/blog/${post.slug}-em-${city}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      });
    });

    return routes;
  })

  return [
    ...staticRoutes, 
    ...cityRoutes, 
    ...serviceCityRoutes, 
    ...blogRoutes, 
    ...nicheRoutes, 
    ...subServiceRoutes
  ]
}
