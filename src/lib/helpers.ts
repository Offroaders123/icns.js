export function readHeader (buf: Buffer, offset: number): [string, number] {
  return [
    // type
    buf.toString('ascii', offset, offset + 4),
    // length
    buf.readUInt32BE(offset + 4)
  ]
}

export function readTOC (buffer: Buffer, offset: number, length: number): [string, number][] {
  buffer = buffer.slice(offset)
  offset = 0
  var result: [string, number][] = []
  while (offset < length) {
    result.push(readHeader(buffer, offset))
    offset += 8
  }
  return result
}
