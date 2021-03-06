const tap = require('tap')
const schools = require('../../lib/data/schools.json')
const getSchools = require('../../lib/get-schools')
const options = {
  name: {
    short: 'vtv'
  }
}

tap.equal(schools.length, getSchools().length, 'It returns all schools on empty')
tap.equal(2, getSchools(options).length, 'It returns 2 schools for vtv')
