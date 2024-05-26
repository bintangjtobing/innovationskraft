/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Static Export
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  optimizeFonts: false,
  distDir: "dist",
};

module.exports = nextConfig;
