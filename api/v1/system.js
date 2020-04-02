const axios = require('axios');
const cheerio = require('cheerio');
const errorHandler = require('../utils/errorHandler');

module.exports = async (req, res) => {
  try {
    const rawHtml = (await axios.get('https://charity.gofundme.com/o/en/campaign/nyc-makes-ppe-covid-19')).data;
    const raised = cheerio.load(rawHtml)('.inline.raised').first().text();
    return res.status(200).json({ raised });
  } catch (e) {
    return errorHandler(req, res, e);
  }
}
