/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Optimize images — add remote domains here if you use external images
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Enable experimental features as needed
  // experimental: {},
};

export default nextConfig;
