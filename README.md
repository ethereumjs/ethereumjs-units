# ethereumjs-units

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
