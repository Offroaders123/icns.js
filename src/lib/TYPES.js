import types from './types.json.js'

/** @type {Record<string, string>} */
const TYPES = Object.fromEntries(
  Object.keys(types)
    .map(type => [type.toUpperCase(), type])
)

TYPES.TOC = 'TOC '
TYPES.ICNV = 'icnV'

export default TYPES
