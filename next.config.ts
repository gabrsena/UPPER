
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
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
      }
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Remove Next.js built-in polyfills for methods already natively supported
      // in modern browsers (Chrome 110+, Safari 16+, Edge 110+, Firefox 110+)
      config.resolve.alias = {
        ...config.resolve.alias,
        // These are natively supported in all modern browsers
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
