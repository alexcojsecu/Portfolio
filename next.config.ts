/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['imperialmobilegallery.b-cdn.net'], // ✅ Allow BunnyCDN domain
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imperialmobilegallery.b-cdn.net', // ✅ Ensure it's lowercase
      },
    ],
  },
};

module.exports = nextConfig;
