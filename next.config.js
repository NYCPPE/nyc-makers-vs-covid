const images = require('remark-images')
const emoji = require('remark-emoji')
const toc = require('remark-toc')
const customblocks = require('remark-custom-blocks')

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
          warning: {
            classes: 'warning'
          },
          info: {
            classes: 'info'
          },
          success: {
            classes: 'success'
          }
        }
      ]
    ]
  }
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  exportPathMap: function(defaultPathMap) {
    const pathMap = Object.assign({}, defaultPathMap)
    delete pathMap['/index']
    return pathMap
  }
})
