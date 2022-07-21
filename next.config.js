const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProd ? 'https://sites.trady.com' : '',
  images: {
    loader: "imgix",
    path: isProd ? '' : process.env.NEXT_PUBLIC_FRONTEND_URL,
  }
}

module.exports = nextConfig
