const textDecoder = new TextDecoder();

export function readHeader (buf: Uint8Array, offset: number): [string, number] {
  const view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
  return [
    // type
    textDecoder.decode(buf.subarray(offset, offset + 4)),
    // length
    view.getUint32(offset + 4)
  ]
}

export function readTOC (buffer: Uint8Array, offset: number, length: number): [string, number][] {
  buffer = buffer.subarray(offset)
  offset = 0
  var result: [string, number][] = []
  while (offset < length) {
    result.push(readHeader(buffer, offset))
    offset += 8
  }
  return result
}
