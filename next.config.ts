import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "media2.dev.to" }],
  },
  async redirects() {
    return [{ source: "/blog-posts", destination: "/writing", permanent: true }];
  },
};

export default nextConfig;
