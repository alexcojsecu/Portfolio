/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['imperialmobilegallery.b-cdn.net'], // ✅ Ensure it's lowercase
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imperialmobilegallery.b-cdn.net', // ✅ Ensure it's lowercase
      },
    ],
  },
};

module.exports = nextConfig;
