/** @type {import('next').NextConfig} */

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
      },
      {
        protocol: 'https',
        hostname: 'downloads.ctfassets.net',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'videos.ctfassets.net',
        pathname: '/**'
      }
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    unoptimized: true
  }
}

module.exports = nextConfig

// /** @type {import('next').NextConfig} */

// const nextConfig = {
//   reactStrictMode: true,
//   compiler: {
//     styledComponents: true
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'images.ctfassets.net',
//         pathname: '/**'
//       }
//     ],
//     domains: ['downloads.ctfassets.net', 'videos.ctfassets.net'],
//     formats: ['image/avif', 'image/webp']
//   }
// }

// module.exports = nextConfig
