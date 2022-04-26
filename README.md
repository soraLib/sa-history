# Sa History

Typescript history management lib.

## Todo

- [ ] history manager
- [ ] undo
- [ ] redo
- [ ] diff
- [ ] clean

## Basic example

```ts
import history from 'sa-history'

const _value = history({ a: 1 })
// => { a: 1 }

_value.a = 2
// => { a: 2 }

_value.undo()
// => { a: 1 }

_value.redo()
// => { a: 2 }
```
