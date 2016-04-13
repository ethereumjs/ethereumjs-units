var Units = {}

var rawUnits = require('./units.json')
var units = {}

Object.keys(rawUnits).map(function (unit) {
  // drop the leading number 1
  units[unit] = rawUnits[unit].length - 1
})

Units.units = rawUnits

// add leading zeroes
// FIXME: improve
function zeroes (n) {
  var tmp = ''
  for (var i = 0; i < n; i++) {
    tmp += '0'
  }
  return tmp
}

// strip leading zeroes
// FIXME: improve
function strip (n) {
  return n.match(/^0*([0-9]+)$/)[1]
}

// strip trailing decimal zeroes
// FIXME: improve
function striptail (n) {
  var tmp = n.match(/(0*)$/)[1].length
  if (tmp > 0) {
    return n.slice(0, -tmp)
  } else {
    return n
  }
}

// this will always multiply to wei and thus no decimal point will be included
function mul (value, scale) {
  var tmp = value.split('.')
  value = tmp[0]
  var frac = tmp[1]

  if (tmp.length === 2) {
    frac = frac.slice(0, scale)
  } else {
    frac = ''
  }

  return strip(value + frac + zeroes(scale - frac.length))
}

function div (value, scale) {
  if (scale === 0 || value === '0') {
    return value
  } else if (value.length > scale) {
    return striptail(value.slice(0, -scale) + '.' + value.slice(scale))
  } else {
    return striptail('0.' + zeroes(scale - value.length) + value)
  }
}

var re = RegExp(/^[0-9]+\.?[0-9]*$/)

Units.convert = function (value, from, to) {
  if (!re.test(value)) {
    throw new Error('Unsupported value')
  }

  from = from.toLowerCase()
  if (typeof units[from] === 'undefined') {
    throw new Error('Unsupported input unit')
  }

  to = to.toLowerCase()
  if (typeof units[to] === 'undefined') {
    throw new Error('Unsupported output unit')
  }

  return div(mul(value, units[from]), units[to])
}

Units.lazyConvert = function (value, to) {
  var tmp = value.split(' ')
  if (tmp.length !== 2) {
    throw new Error('Invalid input')
  }
  return Units.convert(tmp[0], tmp[1], to) + ' ' + to
}

module.exports = Units
