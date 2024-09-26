import type { NextConfig } from 'next'

// Definiera ett mönster för tillåtna externa bilder
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        pathname: '/**', // Tillåt alla vägar under denna domän
      },
    ],
  },
}

export default nextConfig
