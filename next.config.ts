import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  experimental: {
    mdxRs: true,
    viewTransition: true,
  },
  pageExtensions: ["md", "mdx", "ts", "tsx"],
  reactStrictMode: true,
  turbopack: {},
};

const withMDX = createMDX({});

export default withMDX(nextConfig);