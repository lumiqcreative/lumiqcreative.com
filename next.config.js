const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  future: {
    webpack5: true
  },
  async redirects() {
    return [
      {
        source: '/deliverables/overdrop-blocks',
        destination: '/posts/overdrop-mockups',
        permanent: true
      },
      {
        source: '/resources/device-frames',
        destination: '/posts/device-frames',
        permanent: true
      }
    ]
  }
})
