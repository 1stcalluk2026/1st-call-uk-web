import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/about-us", permanent: false },
      { source: "/services", destination: "/our-services", permanent: false },
      { source: "/services/:path*", destination: "/our-services/:path*", permanent: false },
    ];
  },
};

export default nextConfig;
