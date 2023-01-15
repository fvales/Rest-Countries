/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['restcountries.com', 'flagcdn.com', 'upload.wikimedia.org']
  }
}

module.exports = nextConfig
