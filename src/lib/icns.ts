// references
// * https://en.wikipedia.org/wiki/Apple_Icon_Image_format
// * http://www.ezix.org/project/wiki/MacOSXIcons
// * http://www.macdisk.com/maciconen.php
// * http://icns.sourceforge.net/

import TYPES from './TYPES.js'
import types from './types.json.js'
import { readHeader, readTOC } from './helpers.js'

const MAGIC = 'icns'

// function parseIcon (buf, offset) {
//   const icon = buf.slice(offset)
//   const length = buf.readUInt32BE(4)
//   const type = ''
//   if (icon.toString('hex', 0, 8) === '89504e470d0a1a0a') type = 'png'
//   else if (icon.toString('hex', 0, 3) === 'ffd8ff') type = 'jpeg'
//   return {type: type, length: length}
// }

export interface Section {
  type: string;
  length: number;
  offset: number;
}

function parseFoo (buf: Uint8Array, offset: number): Section {
  const [type, length] = readHeader(buf, offset)
  return {
    type,
    length,
    offset: offset + 8
  }
}

function readData (buf: Uint8Array): Section[] {
  const result: Section[] = []
  let offset = 8
  while (offset < buf.length) {
    const icon = parseFoo(buf, offset)
    offset += icon.length
    result.push(icon)
  }
  return result
}

export function readResources (buf: Uint8Array): Section[] {
  const result: Section[] = []
  let offset = 8
  while (offset < buf.length) {
    const icon = parseFoo(buf, offset)
    offset += icon.length
    result.push(icon)
  }
  return result
}

export type Data = [type: string, offset: number, length: number];

export function getData (buf: Uint8Array): Data[] {
  const result: Data[] = []
  let offset = 8
  while (offset < buf.length) {
    const [type, length] = readHeader(buf, offset)
    result.push([type, offset + 8, length])
    offset += length
  }
  return result
}

export function getTOC (buf: Uint8Array): Data[] | null {
  const [type, length] = readHeader(buf, 8)
  if (type !== TYPES.TOC) return null
  const TOC = readTOC(buf, 16, length - 8)
  // calculate offset for each resource
  let p = 16 + length
  return TOC.map(([type, length]) => {
    // type, offset, length
    const t: Data = [type, p, length]
    p += length
    return t
  })
}

export function isIcns (buf: Uint8Array): boolean {
  return readHeader(buf, 0)[0] === MAGIC
}

/**
 * Returns the list of resources within the icon.
 * Use the table of content if available,
 * reads and parse the all buffer otherwise
 */
export function getResources (buf: Uint8Array): Data[] {
  return getTOC(buf) || getData(buf)
}

/**
 * Returns the list of images within the icon, that is the
 * list of resources with TOC and icnV resources filtered.
 */
export function getImages (buf: Uint8Array): Data[] {
  return getResources(buf).filter(([type]): boolean => {
    switch (type) {
      case TYPES.TOC:
      case TYPES.ICNV:
        return false
      default:
        return true
    }
  })
}

export function getModernImages (buf: Uint8Array): Data[] {
  return getImages(buf)
    .filter(([type]): boolean => types[type].modern === true)
}

export function getBestModernImage (buf: Uint8Array): Data | null {
  let best: Data | null = null
  const resources = getImages(buf)
  for (const resource of resources){
    const type = types[resource[0]]
    if (!type.modern) continue
    if (!best) best = resource
    else if (type.size > types[best[0]].size) best = resource
  }
  return best
}

// function getImage (type) {
//
// }

// /**
//  * Returns the data as a buffer for the passed resource array argument
//  * @param {{ type: string; length: number; offset: number; }[]} resource array
//  * @returns {Buffer} the data
//  */
// function getData() {
//
// }
// export function getBest (buf) {
//   // const TOC = getTOC(buf) || readResources(buf)
//   const TOC = readResources(buf)
//   // if (!TOC) {
//
//   // }
//   return TOC
// }

export interface Result {
  icns: boolean;
  length: number;
  data: {
    type: string;
    length: number;
    offset: number;
    value?: [string, number][];
  }[];
}

export function parse (buffer: Uint8Array): Result {
  const result = {} as Result
  const [type, length] = readHeader(buffer, 0)

  result.icns = type === MAGIC
  result.length = length

  result.data = readData(buffer)
  for (const data of result.data){
    if (data.type === 'TOC ') {
      data.value = readTOC(buffer, data.offset, data.length)
    }
  }
  return result
}
