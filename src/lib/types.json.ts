export interface IcnsType {
  length: number;
  size: number;
  OS: string;
  modern?: true;
  description: string;
}

export default {
  "ICON": {
    "length": 128,
    "size": 32,
    "OS": "1.0",
    "description": "32×32 1-bit mono icon"
  },
  "ICN#": {
    "length": 256,
    "size": 32,
    "OS": "6.0",
    "description": "32×32 1-bit mono icon with 1-bit mask"
  },
  "icm#": {
    "length": 48,
    "size": 16,
    "OS": "6.0",
    "description": "16×12 1 bit mono icon with 1-bit mask"
  },
  "icm4": {
    "length": 96,
    "size": 16,
    "OS": "7.0",
    "description": "16×12 4 bit icon"
  },
  "icm8": {
    "length": 192,
    "size": 16,
    "OS": "7.0",
    "description": "16×12 8 bit icon"
  },
  "ics#": {
    "length": 64,
    "size": 16,
    "OS": "6.0",
    "description": "16×16 1-bit mask"
  },
  "ics4": {
    "length": 128,
    "size": 16,
    "OS": "7.0",
    "description": "16×16 4-bit icon"
  },
  "ics8": {
    "length": 256,
    "size": 16,
    "OS": "7.0",
    "description": "16x16 8 bit icon"
  },
  "is32": {
    "length": -768,
    "size": 16,
    "OS": "8.5",
    "description": "16×16 24-bit icon"
  },
  "s8mk": {
    "length": 256,
    "size": 16,
    "OS": "8.5",
    "description": "16x16 8-bit mask"
  },
  "icl4": {
    "length": 512,
    "size": 32,
    "OS": "7.0",
    "description": "32×32 4-bit icon"
  },
  "icl8": {
    "length": 1024,
    "size": 32,
    "OS": "7.0",
    "description": "32×32 8-bit icon"
  },
  "il32": {
    "length": -3072,
    "size": 32,
    "OS": "8.5",
    "description": "32x32 24-bit icon"
  },
  "l8mk": {
    "length": 1024,
    "size": 32,
    "OS": "8.5",
    "description": "32×32 8-bit mask"
  },
  "ich#": {
    "length": 288,
    "size": 48,
    "OS": "8.5",
    "description": "48×48 1-bit mask"
  },
  "ich4": {
    "length": 1152,
    "size": 48,
    "OS": "8.5",
    "description": "48×48 4-bit icon"
  },
  "ich8": {
    "length": 2304,
    "size": 48,
    "OS": "8.5",
    "description": "48×48 8-bit icon"
  },
  "ih32": {
    "length": -6912,
    "size": 48,
    "OS": "8.5",
    "description": "48×48 24-bit icon"
  },
  "h8mk": {
    "length": 2304,
    "size": 48,
    "OS": "8.5",
    "description": "48×48 8-bit mask"
  },
  "it32": {
    "length": -49152,
    "size": 128,
    "OS": "10.0",
    "description": "128×128 24-bit icon"
  },
  "t8mk": {
    "length": 16384,
    "size": 128,
    "OS": "10.0",
    "description": "128×128 8-bit mask"
  },
  "icp4": {
    "length": 0,
    "size": 16,
    "OS": "10.7",
    "modern": true,
    "description": "16x16 icon in JPEG 2000 or PNG format"
  },
  "icp5": {
    "length": 0,
    "size": 32,
    "OS": "10.7",
    "modern": true,
    "description": "32x32 icon in JPEG 2000 or PNG format"
  },
  "icp6": {
    "length": 0,
    "size": 64,
    "OS": "10.7",
    "modern": true,
    "description": "64x64 icon in JPEG 2000 or PNG format"
  },
  "ic07": {
    "length": 0,
    "size": 128,
    "OS": "10.7",
    "modern": true,
    "description": "128x128 icon in JPEG 2000 or PNG format"
  },
  "ic08": {
    "length": 0,
    "size": 256,
    "OS": "10.5",
    "modern": true,
    "description": "256×256 icon in JPEG 2000 or PNG format"
  },
  "ic09": {
    "length": 0,
    "size": 512,
    "OS": "10.5",
    "modern": true,
    "description": "512×512 icon in JPEG 2000 or PNG format"
  },
  "ic10": {
    "length": 0,
    "size": 1024,
    "OS": "10.7",
    "modern": true,
    "description": "1024×1024 in 10.7 (or 512x512@2x \"retina\" in 10.8) icon in JPEG 2000 or PNG format"
  },
  "ic11": {
    "length": 0,
    "size": 32,
    "OS": "10.8",
    "modern": true,
    "description": "16x16@2x \"retina\" icon in JPEG 2000 or PNG format"
  },
  "ic12": {
    "length": 0,
    "size": 64,
    "OS": "10.8",
    "modern": true,
    "description": "32x32@2x \"retina\" icon in JPEG 2000 or PNG format"
  },
  "ic13": {
    "length": 0,
    "size": 256,
    "OS": "10.8",
    "modern": true,
    "description": "128x128@2x \"retina\" icon in JPEG 2000 or PNG format"
  },
  "ic14": {
    "length": 0,
    "size": 512,
    "OS": "10.8",
    "modern": true,
    "description": "256x256@2x \"retina\" icon in JPEG 2000 or PNG format"
  }
} as Record<string, IcnsType>
