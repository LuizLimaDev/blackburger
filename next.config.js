/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ebguudusffstngmlgunf.supabase.co",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
