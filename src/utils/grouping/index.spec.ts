import grouping from '.'

vi.mock('nanoid', () => ({ nanoid: () => 'nanoid' }))

const source = [1, 2, 3, 4, 5]

const expectResult: Record<number, unknown> = {
  1: [{ key: 'nanoid', value: [1, 2, 3, 4, 5] }],
  2: [
    { key: 'nanoid', value: [1, 3, 5] },
    { key: 'nanoid', value: [2, 4] },
  ],
  3: [
    { key: 'nanoid', value: [1, 4] },
    { key: 'nanoid', value: [2, 5] },
    { key: 'nanoid', value: [3] },
  ],
  4: [
    { key: 'nanoid', value: [1, 5] },
    { key: 'nanoid', value: [2] },
    { key: 'nanoid', value: [3] },
    { key: 'nanoid', value: [4] },
  ],
  5: [
    { key: 'nanoid', value: [1] },
    { key: 'nanoid', value: [2] },
    { key: 'nanoid', value: [3] },
    { key: 'nanoid', value: [4] },
    { key: 'nanoid', value: [5] },
  ],
}

describe('grouping', () => {
  beforeAll(() => {
    vi.clearAllMocks()
  })
  source.forEach(item => {
    describe(`${item} groups`, () => {
      it('is correct', () => {
        expect(grouping(source, item)).toEqual(expectResult[item])
      })
    })
  })
})
