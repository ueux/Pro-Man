import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {protocol: "https",
        hostname: "ap-south-1.console.aws.amazon.com/s3/object/pm--s3--images0?region=ap-south-1&bucketType=general&prefix=public",
        port: "",
        pathname:"/**"
      }
    ]
  }
};

export default nextConfig;
