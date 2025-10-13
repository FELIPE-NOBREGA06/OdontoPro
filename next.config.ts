import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
<<<<<<< HEAD
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
=======
    domains: ['avatars.githubusercontent.com'],
  },
  
>>>>>>> 6328a0a (att)
};

export default nextConfig;