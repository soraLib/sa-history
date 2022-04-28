import { getDiffPath, getPatch } from '../src/patch'

describe('Patch', () => {
  it('find diff path', () => {
    expect(getDiffPath({ a: { b: 'newVal' } })).toEqual(['a', 'b'])
    expect(getDiffPath({ a: { b: [] } })).toEqual(['a', 'b'])
    expect(getDiffPath({ a: { b: 'newVal 1', c: 'newVal 2' } })).toBe(null)
  })

  it('get updated diff patch', () => {
    expect(
      getPatch(
        {
          a: {
            b: 'oldVal',
          },
        },
        {
          a: {
            b: 'newVal',
          },
        }
      )
    ).toEqual({ path: ['a', 'b'], newValue: 'newVal', oldValue: 'oldVal' })

    expect(
      getPatch(
        {
          a: {
            b: 'oldVal',
            c: 'oldVal2',
          },
        },
        {
          a: {
            b: 'newVal',
            c: 'newVal2',
          },
        }
      )
    ).toBe(null)
  })
})
