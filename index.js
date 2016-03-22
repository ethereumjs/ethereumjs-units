var BigNumber = require('bignumber.js')

var Units = {}

var units = require('./units.js')

Object.keys(units).map(function (unit) {
  units[unit] = new BigNumber(units[unit], 10)
})

Units.units = units

Units.convert = function (value, from, to) {
  from = from.toLowerCase()
  if (!units[from]) {
    throw new Error('Unsupported input unit')
  }

  to = to.toLowerCase()
  if (!units[to]) {
    throw new Error('Unsupported output unit')
  }

  return new BigNumber(value, 10).mul(units[from]).div(units[to]).toString(10)
}

Units.lazyConvert = function (value, to) {
  var tmp = value.split(' ')
  if (tmp.length !== 2) {
    throw new Error('Invalid input')
  }
  return Units.convert(tmp[0], tmp[1], to) + ' ' + to
}

module.exports = Units
