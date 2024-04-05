import * as icns from './icns.js'

export default class Icon {

/**
 * @param {Buffer} buffer
 */
constructor(buffer) {
  this.buffer = buffer
}

readResources() {
  return icns.readResources(this.buffer)
}

getTOC() {
  return icns.getTOC(this.buffer)
}

// getBest() {
//   return icns.getBest(this.buffer)
// }

getResources() {
  return icns.getResources(this.buffer)
}

getData() {
  return icns.getData(this.buffer)
}

getImages() {
  return icns.getImages(this.buffer)
}

getModernImages() {
  return icns.getModernImages(this.buffer)
}

getBestModernImage() {
  return icns.getBestModernImage(this.buffer)
}

}
