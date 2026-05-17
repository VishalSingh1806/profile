/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  // Static export only for GitHub Pages; Cloudflare Workers uses standalone via OpenNext
  ...(isGithubPages && {
    output: "export",
    trailingSlash: true,
    basePath: "/me",
    assetPrefix: "/me/",
  }),
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
