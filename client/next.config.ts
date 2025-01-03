import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "pm-s-images.s3.ap-south-1.amazonaws.com",
          port: "",
          pathname: "/**",
        }
      ]
    }
};

export default nextConfig;
