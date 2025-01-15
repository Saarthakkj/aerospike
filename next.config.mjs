/** @type {import('next').NextConfig} */
const nextConfig = {
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