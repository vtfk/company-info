'use strict'

const tap = require('tap')
const schools = require('../../lib/data/schools.json')

tap.equal(29, schools.length, 'There are 29 schools')
