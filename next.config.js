const images = require('remark-images')
const emoji = require('remark-emoji')
const toc = require('remark-toc')
const customblocks = require('remark-custom-blocks')
const headings = require('remark-autolink-headings')
const slug = require('remark-slug')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      images,
      emoji,
      slug,
      headings,
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
