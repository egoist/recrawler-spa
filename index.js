'use strict'
const Nightmare = require('nightmare')
const cheerio = require('cheerio')
const recrawler = require('recrawler')

module.exports = function (url, opts) {
  opts = opts || {}

  const cheerioOpts = Object.assign({
    // keep the original unicode chars
    decodeEntities: false
  }, opts.cheerio)

  const next = () => {
    const nightmare = Nightmare(opts.nightmare) // eslint-disable-line new-cap
    return nightmare.goto(url)
      .evaluate(() => document.documentElement.outerHTML)
      .end()
      .then(res => cheerio.load(res, cheerioOpts))
  }

  return recrawler(url, {htmlOnly: true}).then(next)
}
