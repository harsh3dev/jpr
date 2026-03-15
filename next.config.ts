import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  experimental: {
    // @ts-ignore - This is a valid experimental option but might not be in the types yet
    turbopackUseSystemTlsCerts: true,
  },
};

export default nextConfig;
