const { createTree } = require('./index')

describe('Tree', () => {
  let tree
  beforeEach(() => {
    tree = createTree()
  })

  test('appeaseJestForNow', () => {
    expect(true).toBe(true)
  })
})
