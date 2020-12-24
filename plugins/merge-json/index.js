const { readJSON, writeJSON} = require('fs-extra')
const {merge } = require('merge-json')
module.exports = (pluginOptions = {}) => (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      config.plugins.push(async () => {
        let current = await readJSON('./data/current.json')
        let historical = await readJSON('./data/historical.json', 'ascii')
        totals = merge(current, historical)
        try {
          combined = await writeJSON('./data/totals.json', totals)
          console.log(combined)
        }catch(err) {
          throw err
        }
      })
      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    }
  })
}
