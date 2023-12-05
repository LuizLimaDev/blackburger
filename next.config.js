/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kaxldpcjxwaekolzjlsh.supabase.co",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
