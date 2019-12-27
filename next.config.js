const withSass = require('@zeit/next-sass')

module.exports = withSass({
  webpack(config, option) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
})
