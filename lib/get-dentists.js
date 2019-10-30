const filter = require('@mcabreradev/filter')
const dentists = require('./data/dentists.json')

module.exports = options => {
  if (!options) {
    return dentists
  } else {
    return filter(dentists, options)
  }
}
