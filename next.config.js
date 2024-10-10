/** @type {import('next').NextConfig} */

// Definiera ett mönster för tillåtna externa bilder
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        pathname: '/**'
      }
    ],
    domains: ['downloads.ctfassets.net', 'videos.ctfassets.net']
  }
}

module.exports = nextConfig
