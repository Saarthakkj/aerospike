/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Only if you want to completely disable ESLint during builds
  },
  // Existing config options...
  
  webpack: (config, { isServer }) => {
    // Add fallback for punycode
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "punycode": false,
    };
    
    return config;
  },
}

export default nextConfig; 