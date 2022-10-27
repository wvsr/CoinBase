/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['assets.coingecko.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
