const axios = require('axios')
const cheerio = require('cheerio')
const errorHandler = require('../utils/errorHandler')

module.exports = async (req, res) => {
  try {
    const rawHtml = (
      await axios.get(
        'https://charity.gofundme.com/o/en/campaign/nyc-makes-ppe-covid-19'
      )
    ).data
    const raised = cheerio.load(rawHtml)('.inline.raised').first().text()
    const numberOfDonors = cheerio
      .load(rawHtml)(
        '#main-content > div > div.row > div.col-sm-7 > div > div.campaign-container.navFixedLoad-trigger > div.hidden-sm.hidden-md.hidden-lg > div > p'
      )
      .first()
      .text()
      .trim()
      .replace('  ', ' ')

    return res.status(200).json({ raised, numberOfDonors })
  } catch (e) {
    return errorHandler(req, res, e)
  }
}
