const images = require('remark-images')
const emoji = require('remark-emoji')
const toc = require('remark-toc')
const customblocks = require('remark-custom-blocks')
const headings = require('remark-autolink-headings')
const slug = require('remark-slug')
const path = require('path')

const mergeJSON = require('./plugins/merge-json')
const withPlugins = require('next-compose-plugins')

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

const mdx = withMDX({
  target: 'serverless',
  pageExtensions: ['js', 'jsx', 'json', 'mdx'],
  exportPathMap: function (defaultPathMap) {
    const pathMap = Object.assign({}, defaultPathMap)
    delete pathMap['/index']
    return pathMap
  }
})

module.exports = withPlugins([
  mdx,
  mergeJSON(),
  {
    future: {
      webpack5: true
    }
  }
])
