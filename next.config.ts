import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The Work page was removed; send old links and search results home.
      { source: "/work", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
