/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // If enable, this can render element twice during development
  env: {
    MORALIS_API_KEY: process.env.MORALIS_API_KEY,
  },
};

module.exports = nextConfig;
