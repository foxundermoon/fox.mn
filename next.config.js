const withSass = require('@zeit/next-sass')
const rehypePrism = require('@mapbox/rehype-prism')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypePrism],
    // header: `import sss from 'aaa'\nimport bb from 'bbb`,
    footer: `export const bb= 12456`

  },
})

module.exports = withMDX(
  withSass({
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'tsx'],
    exportTrailingSlash: true,
    env: {
      TEL: process.env.TEL
    },
    webpack(config, option) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })
      return config
    },
  })
)
