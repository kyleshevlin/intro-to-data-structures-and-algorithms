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

  test('size', () => {
    expect(linkedList.size).toEqual(0)
  })

  test('head', () => {
    expect(linkedList.head).toBeNull()

    const a = linkedList.add('a')
    expect(linkedList.head).toEqual(a)
  })

  test('add', () => {
    const a = linkedList.add('a')
    const b = linkedList.add('b')

    expect(linkedList.head.next).toEqual(b)
    expect(linkedList.size).toEqual(2)
  })

  test('insertAt', () => {
    const values = ['a', 'b', 'c', 'd', 'e']
    const [a, b, ...otherNodes] = values.map(val => linkedList.add(val))

    const badIndex = linkedList.insertAt('f', 7)

    expect(badIndex).toBeNull()

    const f = linkedList.insertAt('f', 0)
    expect(f.next).toEqual(a)
    expect(linkedList.head).toEqual(f)
    expect(linkedList.size).toEqual(6)

    const g = linkedList.insertAt('g', 2)
    expect(g.next).toEqual(b)
    expect(linkedList.size).toEqual(7)
  })

  test('get', () => {
    const values = ['a', 'b', 'c', 'd', 'e']
    const nodes = values.map(val => linkedList.add(val))

    const badIndex = linkedList.get(7)
    expect(badIndex).toBeNull()

    const head = linkedList.get(0)
    expect(head).toEqual(nodes[0])

    const atIndexThree = linkedList.get(3)
    expect(atIndexThree).toEqual(nodes[3])
  })

  test('delete', () => {
    const values = ['a', 'b', 'c', 'd', 'e']
    const nodes = values.map(val => linkedList.add(val))

    const badIndex = linkedList.delete(7)
    expect(badIndex).toBeNull()

    const head = linkedList.delete(0)
    expect(head).toEqual(nodes[0])

    const d = linkedList.delete(2)

    expect(d).toEqual(nodes[3])
    expect(linkedList.size).toEqual(3)
    expect(linkedList.get(2)).toEqual(nodes[4])
  })

  test('isEmpty', () => {
    expect(linkedList.isEmpty()).toBe(true)
    linkedList.add('a')
    expect(linkedList.isEmpty()).toBe(false)
  })

  test('print', () => {
    const values = ['a', 'b', 'c', 'd', 'e']
    values.forEach(val => {
      linkedList.add(val)
    })

    expect(linkedList.print()).toEqual('a => b => c => d => e')
  })
})
