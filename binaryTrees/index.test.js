const {
  createBinaryNode,
  createBinaryTree,
  createTree,
  createNode
} = require('./index')

describe('Node', () => {
  let node
  beforeEach(() => {
    node = createNode('a')
  })

  test('existence', () => {
    expect(node).toBeDefined()
  })

  test('key', () => {
    expect(node.key).toEqual('a')
  })

  test('children', () => {
    expect(node.children).toBeDefined()
    expect(node.children.length).toEqual(0)
  })

  test('addChild', () => {
    node.addChild('b')

    expect(node.children.length).toEqual(1)
    expect(node.children.map(n => n.key).includes('b')).toBe(true)
  })
})

describe('BinaryNode', () => {
  let node
  beforeEach(() => {
    node = createBinaryNode('a')
  })

  test('existence', () => {
    expect(node).toBeDefined()
  })

  test('key', () => {
    expect(node.key).toEqual('a')
  })

  test('left', () => {
    expect(node.left).toBeNull()
  })

  test('right', () => {
    expect(node.right).toBeNull()
  })

  test('addLeft', () => {
    node.addLeft('b')

    expect(node.left).toBeDefined()
    expect(node.left.key).toEqual('b')
  })

  test('addRight', () => {
    node.addRight('c')

    expect(node.right).toBeDefined()
    expect(node.right.key).toEqual('c')
  })
})

describe('Tree', () => {
  let tree
  beforeEach(() => {
    tree = createTree('a')
  })

  test('existence', () => {
    expect(tree).toBeDefined()
  })

  test('root', () => {
    expect(tree.root).toBeDefined()
    expect(tree.root.key).toEqual('a')
  })

  test('print', () => {
    const b = tree.root.addChild('b')
    const c = tree.root.addChild('c')
    const d = b.addChild('d')
    const e = b.addChild('e')
    const f = c.addChild('f')
    const g = c.addChild('g')
    const h = f.addChild('h')

    expect(tree.print()).toEqual(`a => b => c => d => e => f => g => h`)
  })
})

describe('BinaryTree', () => {
  let binaryTree
  beforeEach(() => {
    binaryTree = createBinaryTree('a')
  })

  test('existence', () => {
    expect(binaryTree).toBeDefined()
  })

  test('root', () => {
    expect(binaryTree.root).toBeDefined()
    expect(binaryTree.root.key).toEqual('a')
  })

  describe('print', () => {
    test('IN_ORDER', () => {
      const b = binaryTree.root.addLeft('b')
      const c = binaryTree.root.addRight('c')
      const d = b.addLeft('d')
      const e = b.addRight('e')
      const f = c.addLeft('f')
      const g = c.addRight('g')
      const h = f.addLeft('h')

      expect(binaryTree.print()).toEqual(`d => b => e => a => h => f => c => g`)
    })

    test('PRE_ORDER', () => {
      const b = binaryTree.root.addLeft('b')
      const c = binaryTree.root.addRight('c')
      const d = b.addLeft('d')
      const e = b.addRight('e')
      const f = c.addLeft('f')
      const g = c.addRight('g')
      const h = f.addLeft('h')

      expect(binaryTree.print('PRE_ORDER')).toEqual(
        `a => b => d => e => c => f => h => g`
      )
    })

    test('POST_ORDER', () => {
      const b = binaryTree.root.addLeft('b')
      const c = binaryTree.root.addRight('c')
      const d = b.addLeft('d')
      const e = b.addRight('e')
      const f = c.addLeft('f')
      const g = c.addRight('g')
      const h = f.addLeft('h')

      expect(binaryTree.print('POST_ORDER')).toEqual(
        `d => e => b => h => f => g => c => a`
      )
    })
  })
})
