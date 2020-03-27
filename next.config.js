const images = require('remark-images')
const emoji = require('remark-emoji')
const toc = require('remark-toc')
const customblocks = require('remark-custom-blocks')

const options = {
  alert: {
    classes: 'alert'
  },
  danger: {
    classes: 'danger'
  },
  info: {
    classes: 'info'
  }
}

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      images,
      emoji,
      toc,
      [
        customblocks,
        {
          alert: {
            classes: 'alert'
          },
          danger: {
            classes: 'danger'
          },
          info: {
            classes: 'info'
          }
        }
      ]
    ]
  }
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
})
