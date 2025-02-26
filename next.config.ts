/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {

    domains: ['imperialmobilegallery.b-cdn.net'], // ✅ Ensure lowercase
    remotePatterns: [

      {

        protocol: 'https',
        hostname: 'imperialmobilegallery.b-cdn.net',
        
      },
    ],
  },
};

module.exports = nextConfig;
