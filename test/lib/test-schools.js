'use strict'

const tap = require('tap')
const schools = require('../../lib/data/schools.json')

tap.equal(30, schools.length, 'There are 30 schools')
