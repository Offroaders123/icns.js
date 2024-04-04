'use strict'

var types = require('./types.json')

/** @type {Record<string, string>} */
module.exports = Object.fromEntries(
  Object.keys(types)
    .map(type => [type.toUpperCase(), type])
)

module.exports.TOC = 'TOC '
module.exports.ICNV = 'icnV'
