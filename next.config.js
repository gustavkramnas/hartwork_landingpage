module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        pathname: '/**' // Tillåt alla vägar under denna domän
      }
    ]
  }
}
