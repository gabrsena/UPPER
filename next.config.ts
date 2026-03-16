
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // 1. Redirecionamentos 301 de rotas legadas /[servico]/[cidade] -> /cidade/[cidade]
      // Nota: Como a nova estrutura exige um Nicho, redirecionamos para a página da cidade 
      // para que o usuário escolha o nicho ou veja os serviços gerais.
      {
        source: '/seo-local/:city',
        destination: '/cidade/:city',
        permanent: true,
      },
      {
        source: '/geo-ia/:city',
        destination: '/cidade/:city',
        permanent: true,
      },
      {
        source: '/automacao-whatsapp/:city',
        destination: '/cidade/:city',
        permanent: true,
      },
      {
        source: '/landing-page/:city',
        destination: '/cidade/:city',
        permanent: true,
      },
      {
        source: '/site-institucional/:city',
        destination: '/cidade/:city',
        permanent: true,
      },
      {
        source: '/automacao-ia/:city',
        destination: '/cidade/:city',
        permanent: true,
      }
    ]
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
    // @ts-ignore - resolveAlias is a valid experimental key for Turbopack
    turbopack: {
      resolveAlias: {
        'core-js': false,
        'core-js/modules/es.array.at': false,
        'core-js/modules/es.array.flat': false,
        'core-js/modules/es.array.flat-map': false,
        'core-js/modules/es.object.from-entries': false,
        'core-js/modules/es.object.has-own': false,
        'core-js/modules/es.string.trim-end': false,
        'core-js/modules/es.string.trim-start': false,
        'core-js/modules/web.structured-clone': false,
      },
    },
  },
  // @ts-ignore - silencing build engine conflict as per Vercel log suggestions
  turbopack: {},
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'www.google.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'core-js': false,
        'core-js/modules/es.array.at': false,
        'core-js/modules/es.array.flat': false,
        'core-js/modules/es.array.flat-map': false,
        'core-js/modules/es.object.from-entries': false,
        'core-js/modules/es.object.has-own': false,
        'core-js/modules/es.string.trim-end': false,
        'core-js/modules/es.string.trim-start': false,
        'core-js/modules/web.structured-clone': false,
      };
    }
    return config;
  },
};

export default nextConfig;
