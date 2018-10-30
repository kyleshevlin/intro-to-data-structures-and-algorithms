const { createLinkedList } = require('./index')

describe('Linked List', () => {
  let linkedList
  beforeEach(() => {
    linkedList = createLinkedList()
  })

  test('appeaseJestForNow', () => {
    expect(true).toBe(true)
  })
})
