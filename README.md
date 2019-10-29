[![Build Status](https://travis-ci.org/vtfk/company-info.svg?branch=master)](https://travis-ci.org/vtfk/company-info)
[![Coverage Status](https://coveralls.io/repos/vtfk/company-info/badge.svg?branch=master&service=github)](https://coveralls.io/github/vtfk/company-info?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# company-info

Information regarding our different locations

Includes information about our:
- 22 Upper Secondary Schools
- 25 Dentists Offices

## Installation

```bash
$ npm i @vtfk/company-info
```

## Usage

Call the module with no options to list all different companies. The ``type`` property will reflect what  the object is (school / dentist). See more available methods below

In every call you can pass an object to filter out items from your search result. All properties can be used as a filtered.

---

### Get all companies
```javascript
const getCompanies = require('@vtfk/company-info')

console.log(getCompanies()) //=> All companies with 'type'
```

### Schools
```javascript
const { getSchools } = require('@vtfk/company-info')

const options = {
  name: {
    short: 'SKIVS'
  }
}

console.log(getSchools()) //=> All schools

console.log(getSchools(options)) //=> Schools with shortName SKIVS
```

### Dentist offices
```javascript
const { getDentists } = require('@vtfk/company-info')

const options = {
  address: {
    city: 'HORTEN'
  }
}

console.log(getDentists()) //=> All dentist offices

console.log(getDentists(options)) //=> All dentist offices within HORTEN.
```


## License

[MIT](LICENSE)
