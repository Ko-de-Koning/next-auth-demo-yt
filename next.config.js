/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    PROVIDER_CLIENT_ID: 'PROVIDER_CLIENT_ID',
    PROVIDER_CLIENT_SECRET: 'PROVIDER_CLIENT_SECRET',
    NEXTAUTH_SECRET: 'NEXTAUTH_SECRET',
    NEXTAUTH_URL: 'hNEXTAUTH_URL',
    NEXTAUTH_URL_INTERNAL: 'NEXTAUTH_URL_INTERNAL'
  }
}

module.exports = nextConfig
