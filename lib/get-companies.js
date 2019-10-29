const getSchools = require('./get-schools')

module.exports = options => {
  const schools = getSchools(options).map(school => ({ type: 'school', ...school }))

  return [...schools]
}
