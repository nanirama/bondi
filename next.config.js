const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  assetPrefix: process.env.NEXT_PUBLIC_FRONTEND_URL,
  reactStrictMode: false,
  swcMinify: true,
  images: {
    loader: "imgix",
    path: '',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

module.exports = nextConfig