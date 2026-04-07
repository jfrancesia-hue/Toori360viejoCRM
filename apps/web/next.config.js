/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@toori360/shared'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '*.supabase.co' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: [],
  },
  output: 'standalone',
};

module.exports = nextConfig;
