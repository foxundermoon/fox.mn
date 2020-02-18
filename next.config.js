const withSass = require('@zeit/next-sass')
const rehypePrism = require('@mapbox/rehype-prism')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypePrism],
    hastPlugins: [rehypePrism], // <-----------  now effect
  },
})

module.exports = withMDX(
  withSass({
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'tsx'],
    webpack(config, option) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })
      return config
    },
  })
)
