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
      // --- 1. Önceki Özel Yönlendirmeleriniz (Çift Yönlendirmeyi Önlemek İçin Güncellendi) ---
      {
        source: '/tr/projects/qurbani',
        destination: '/tr/gazze-bagis/kurban-bagisi',
        permanent: true,
      },
      {
        source: '/tr/projects/zekat-dagitimi',
        destination: '/tr/gazze-bagis/gazze-zekat-bagisi',
        permanent: true,
      },

      // --- 2. Ana Dizin Yönlendirmesi (/tr/projects -> /tr/gazze-bagis) ---
      {
        source: '/tr/projects',
        destination: '/tr/gazze-bagis',
        permanent: true,
      },

      // --- 3. Tüm Alt Sayfaları Otomatik Yönlendiren Wildcard Kuralı ---
      // (Örn: /tr/projects/icme-suyu -> /tr/gazze-bagis/icme-suyu)
      {
        source: '/tr/projects/:path*',
        destination: '/tr/gazze-bagis/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;