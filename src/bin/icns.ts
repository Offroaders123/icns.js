#!/usr/bin/env node

import * as icns from '../index.js'
import * as fs from 'node:fs'
const path = process.argv.slice(2)[0]
if (!path) throw new Error('path missing')

const data = fs.readFileSync(path)
const icon = new icns.Icon(data)
console.log(icon.getResources())
