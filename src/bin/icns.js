#!/usr/bin/env node

import * as icns from '../index'
import * as fs from 'fs'
var path = process.argv.slice(2)[0]
if (!path) throw new Error('path missing')

var data = fs.readFileSync(path)
var icon = new icns.Icon(data)
console.log(icon.getResources())
