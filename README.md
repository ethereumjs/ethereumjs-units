# ethereumjs-units

[![NPM Package](https://img.shields.io/npm/v/ethereumjs-units.svg?style=flat-square)](https://www.npmjs.org/package/ethereumjs-units)
[![Build Status](https://img.shields.io/travis/ethereumjs/ethereumjs-units.svg?branch=master&style=flat-square)](https://travis-ci.org/ethereumjs/ethereumjs-units)
[![Coverage Status](https://img.shields.io/coveralls/ethereumjs/ethereumjs-units.svg?style=flat-square)](https://coveralls.io/r/ethereumjs/ethereumjs-units)
[![Gitter](https://img.shields.io/gitter/room/ethereum/ethereumjs-lib.svg?style=flat-square)](https://gitter.im/ethereum/ethereumjs-lib) or #ethereumjs on freenode

Unit conversion utility.

There are two methods:

- `convert(value, unitFrom, unitTo)` - convert a value between two units
- `lazyConvert(value, unitTo)` - include unit type in the input and the output

The `value` and the output in all cases is a string.

## Examples

```js
Units.convert('1', 'eth', 'wei') // '1000000000000000000'
Units.convert('1', 'wei', 'eth') // '0.000000000000000001'
Units.convert('1', 'finney', 'eth') // '0.001'

Units.lazyConvert('1 eth', 'wei') // '1000000000000000000 wei'
Units.lazyConvert('1 wei', 'eth') // '0.000000000000000001 eth'
Units.lazyConvert('1 finney', 'eth') // '0.001 eth'
```

## Units

Units are defined in `units.json`. It is compatible with [web3.js](https://github.com/ethereum/web3.js) and additionally includes `ETH`.
