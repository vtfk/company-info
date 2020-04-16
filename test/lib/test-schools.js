'use strict'

const tap = require('tap')
const schools = require('../../lib/data/schools.json')

tap.equal(31, schools.length, 'There are 31 schools')
