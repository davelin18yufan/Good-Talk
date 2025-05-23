import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const createRemotePattern = (hostname) =>
  hostname
    ? [
        {
          protocol: "https",
          hostname,
          port: "",
          pathname: "/**",
        },
      ]
    : []

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: []
      .concat(createRemotePattern("res.cloudinary.com"))
      .concat(createRemotePattern("images.unsplash.com")),
  },
  turbopack: {
    resolveAlias: {
      yjs: `${__dirname}/node_modules/yjs`,
    },
  },
  experimental: {
    viewTransition: true
  },
}

export default nextConfig
