/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["assets-global.website-files.com"]
  }
}

module.exports = nextConfig
