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
}

export default nextConfig
