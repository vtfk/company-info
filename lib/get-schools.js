const schools = require('./data/schools.json')
const filter = require('@mcabreradev/filter')

module.exports = options => {
  if (!options) {
    return schools
  } else {
    return filter(schools, options)
  }
}
