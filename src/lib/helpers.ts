/**
 * @param {Buffer} buf
 * @param {number} offset
 * @returns {[string, number]}
 */
export function readHeader (buf, offset) {
  return [
    // type
    buf.toString('ascii', offset, offset + 4),
    // length
    buf.readUInt32BE(offset + 4)
  ]
}

/**
 * @param {Buffer} buffer
 * @param {number} offset
 * @param {number} length
 * @returns {[string, number][]}
 */
export function readTOC (buffer, offset, length) {
  buffer = buffer.slice(offset)
  offset = 0
  /** @type {[string, number][]} */
  var result = []
  while (offset < length) {
    result.push(readHeader(buffer, offset))
    offset += 8
  }
  return result
}
