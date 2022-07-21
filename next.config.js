const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "imgix",
    path: 'https://sites.trady.com/',
  }
}

module.exports = nextConfig
