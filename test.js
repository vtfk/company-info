const { getSchools } = require('./index')
const options = {
  name: {
    short: 'RJUVS'
  }
}

// console.log(getSchools())

console.log(getSchools(options)[0])
