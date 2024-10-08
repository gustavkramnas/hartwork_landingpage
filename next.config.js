/** @type {import('next').NextConfig} */

// Definiera ett mönster för tillåtna externa bilder
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        pathname: "/**", // Tillåt alla vägar under denna domän
      },
    ],
    domains: ["downloads.ctfassets.net"],
  },
};

module.exports = nextConfig;
