import { NextConfig } from 'next'; // Import NextConfig type

const nextConfig: NextConfig = {
  images: {
    // Define allowed image domains
    domains: ['imperialmobilegallery.b-cdn.net'], // ✅ Ensure lowercase

    // Define remote image patterns
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imperialmobilegallery.b-cdn.net',
      },
    ],
  },
};

export default nextConfig;
