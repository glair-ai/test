/** @type {import('next').NextConfig} */
const repoName = "gdplabs-exploration"; // <-- CHANGE this to your repo name
const isGithubPages = process.env.NODE_ENV === "production";

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
  output: "export", // For Next.js 13+. Remove if your Next.js doesn't support this.
  trailingSlash: true,
};

export default nextConfig;
