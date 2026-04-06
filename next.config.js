/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGithubPages ? "/me" : "",
  assetPrefix: isGithubPages ? "/me/" : undefined,
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
