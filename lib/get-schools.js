const filter = require('@mcabreradev/filter')
const schools = require('./data/schools.json')

module.exports = options => {
  if (!options) {
    return schools
  } else {
    return filter(schools, options)
  }
}
