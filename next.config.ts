/** @type {import('next').NextConfig} */
const nextConfig = {
  /* API routes are required for auth + email — do NOT use output: 'export' */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
