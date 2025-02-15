/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['images.unsplash.com'], // Add any other domains you're loading images from
    minimumCacheTTL: 60,
  },
  experimental: {
    optimizeCss: true, // Keep this as it's valid
  },
}

module.exports = nextConfig