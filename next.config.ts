import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    quietDeps: true,
  },
  images: {
    domains: ['fakestoreapi.com'],
  }
};

export default nextConfig;
