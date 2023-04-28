/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dashboard.api-football.com',
        port: '',
        pathname: '/public/img/small/*',
      }
    ]
  }
}
