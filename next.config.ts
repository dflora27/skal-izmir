import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/tr',
        permanent: false,
      },
      {
        source: '/:path((?!tr|en|es|_next|api|.*\\.).*)',
        destination: '/tr/:path',
        permanent: false,
      }
    ];
  },
};

export default nextConfig;
