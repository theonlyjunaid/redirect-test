import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/vntg',
        destination: 'https://vntgrobots.com/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
