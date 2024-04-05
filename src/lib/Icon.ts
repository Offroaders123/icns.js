import * as icns from './icns.js'

export default class Icon {

constructor(public buffer: Uint8Array) {}

readResources(): icns.Section[] {
  return icns.readResources(this.buffer)
}

getTOC(): icns.Data[] | null {
  return icns.getTOC(this.buffer)
}

// getBest() {
//   return icns.getBest(this.buffer)
// }

getResources(): icns.Data[] {
  return icns.getResources(this.buffer)
}

getData(): icns.Data[] {
  return icns.getData(this.buffer)
}

getImages(): icns.Data[] {
  return icns.getImages(this.buffer)
}

getModernImages(): icns.Data[] {
  return icns.getModernImages(this.buffer)
}

getBestModernImage(): icns.Data | null {
  return icns.getBestModernImage(this.buffer)
}

}
