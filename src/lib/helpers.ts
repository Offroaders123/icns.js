const textDecoder = new TextDecoder();

export type Header = [type: string, length: number];

export function readHeader (buf: Uint8Array, offset: number): Header {
  const view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
  return [
    // type
    textDecoder.decode(buf.subarray(offset, offset + 4)),
    // length
    view.getUint32(offset + 4)
  ]
}

export function readTOC (buffer: Uint8Array, offset: number, length: number): Header[] {
  buffer = buffer.subarray(offset)
  offset = 0
  var result: Header[] = []
  while (offset < length) {
    result.push(readHeader(buffer, offset))
    offset += 8
  }
  return result
}
