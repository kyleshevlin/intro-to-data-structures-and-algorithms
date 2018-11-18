const { createLinkedList, createNode } = require('./index')

describe('Node', () => {
  let node
  beforeEach(() => {
    node = createNode('a')
  })

  test('instantiation', () => {
    expect(node).toBeDefined()
    expect(node.value).toEqual('a')
  })
})

describe('Linked List', () => {
  let linkedList
  beforeEach(() => {
    linkedList = createLinkedList()
  })

  test('existence', () => {
    expect(linkedList).toBeDefined()
  })

  test('length', () => {
    expect(linkedList.length).toEqual(0)
  })

  test('head', () => {
    expect(linkedList.head).toBeNull()

    const a = linkedList.push('a')
    expect(linkedList.head).toEqual(a)
  })

  test('tail', () => {
    expect(linkedList.tail).toBeNull()

    const a = linkedList.push('a')
    expect(linkedList.tail).toEqual(a)
  })

  test('push', () => {
    const a = linkedList.push('a')
    expect(linkedList.head.value).toEqual('a')
    expect(linkedList.tail.value).toEqual('a')
    expect(linkedList.length).toEqual(1)

    const b = linkedList.push('b')

    expect(linkedList.head.next).toEqual(b)
    expect(linkedList.tail).toEqual(b)
    expect(linkedList.length).toEqual(2)
  })

  test('pop', () => {
    // empty list
    expect(linkedList.pop()).toEqual(null)
    expect(linkedList.length).toEqual(0)

    // List of length 1
    linkedList.push(1)
    expect(linkedList.length).toEqual(1)
    const node = linkedList.pop()
    expect(node.value).toEqual(1)
    expect(linkedList.head).toEqual(null)
    expect(linkedList.tail).toEqual(null)
    expect(linkedList.length).toEqual(0)

    // List of length < 1
    const values = ['a', 'b', 'c', 'd', 'e']
    const nodes = values.map(val => linkedList.push(val))

    expect(linkedList.pop().value).toEqual('e')
    expect(linkedList.tail.value).toEqual('d')
    expect(linkedList.length).toEqual(4)
  })

  test('get', () => {
    const values = ['a', 'b', 'c', 'd', 'e']
    const nodes = values.map(val => linkedList.push(val))

    const badIndex = linkedList.get(7)
    expect(badIndex).toBeNull()

    const head = linkedList.get(0)
    expect(head).toEqual(nodes[0])

    const atIndexThree = linkedList.get(3)
    expect(atIndexThree).toEqual(nodes[3])
  })

  test('delete', () => {
    const values = ['a', 'b', 'c', 'd', 'e']
    const nodes = values.map(val => linkedList.push(val))

    const badIndex = linkedList.delete(7)
    expect(badIndex).toBeNull()

    const head = linkedList.delete(0)
    expect(head).toEqual(nodes[0])

    const d = linkedList.delete(2)

    expect(d).toEqual(nodes[3])
    expect(linkedList.length).toEqual(3)
    expect(linkedList.get(2)).toEqual(nodes[4])
  })

  test('isEmpty', () => {
    expect(linkedList.isEmpty()).toBe(true)
    linkedList.push('a')
    expect(linkedList.isEmpty()).toBe(false)
  })

  test('print', () => {
    const values = ['a', 'b', 'c', 'd', 'e']
    values.forEach(val => {
      linkedList.push(val)
    })

    expect(linkedList.print()).toEqual('a => b => c => d => e')
  })
})
