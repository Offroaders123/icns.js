import types from './types.json.js'

const TYPES: Record<string, string> = Object.fromEntries(
  Object.keys(types)
    .map(type => [type.toUpperCase(), type])
)

TYPES.TOC = 'TOC '
TYPES.ICNV = 'icnV'

export default TYPES
