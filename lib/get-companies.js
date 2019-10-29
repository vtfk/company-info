const filter = require('@mcabreradev/filter')
const getSchools = require('./get-schools')
const getDentists = require('./get-dentists')

module.exports = options => {
  const schools = getSchools().map(school => ({ type: 'school', ...school }))
  const dentists = getDentists().map(dentist => ({ type: 'dentist', ...dentist }))
  const companies = [...schools, ...dentists]

  if (!options) {
    return companies
  } else {
    return filter(companies, options)
  }
}
