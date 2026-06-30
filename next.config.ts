import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/tr/projects/qurbani',
        destination: '/tr/projects/kurban-bagisi',
        permanent: true,
      },
      {
        source: '/tr/projects/zekat-dagitimi',
        destination: '/tr/projects/gazze-zekat-bagisi',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;