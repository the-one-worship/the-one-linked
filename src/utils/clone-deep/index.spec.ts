import cloneDeep from '.'

const source = {
  a: [1, 2, 3, { b: '13' }],
  b: {
    c: '123',
  },
  d: {
    e: {
      f: {
        a: [1, 23],
      },
    },
  },
}

describe('cloneDeep', () => {
  it('is correct', () => {
    expect(cloneDeep(source)).toEqual(source)
  })
})
