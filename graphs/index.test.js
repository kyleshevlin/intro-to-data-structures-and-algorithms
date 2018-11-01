const { createGraph, createNode } = require('./index')

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
    expect(Array.isArray(node.children))
  })

  test('addChild', () => {
    node.addChild('b')

    expect(node.children.length).toEqual(1)
    expect(node.children.includes('b')).toBe(true)
  })
})

describe('Graph', () => {
  let graph
  beforeEach(() => {
    graph = createGraph()
  })

  test('existence', () => {
    expect(graph).toBeDefined()
  })

  test('directed', () => {
    expect(graph.directed).toBe(false)

    graph = createGraph(true)
    expect(graph.directed).toBe(true)
  })

  test('addNode', () => {
    graph.addNode('a')

    expect(graph.nodes.map(n => n.key).includes('a')).toBe(true)
  })

  test('getNode', () => {
    graph.addNode('a')

    expect(graph.getNode('a')).toBeDefined()
  })

  describe('addEdge', () => {
    test('undirected', () => {
      graph.addNode('a')
      graph.addNode('b')
      graph.addEdge('a', 'b')

      expect(
        graph
          .getNode('a')
          .children.map(node => node.key)
          .includes('b')
      ).toBe(true)
      expect(
        graph
          .getNode('b')
          .children.map(node => node.key)
          .includes('a')
      ).toBe(true)
    })

    test('directed', () => {
      graph = createGraph(true)
      graph.addNode('a')
      graph.addNode('b')
      graph.addEdge('a', 'b')

      expect(
        graph
          .getNode('a')
          .children.map(node => node.key)
          .includes('b')
      ).toBe(true)
      expect(
        graph
          .getNode('b')
          .children.map(node => node.key)
          .includes('a')
      ).toBe(false)
    })
  })

  test('nodes', () => {
    graph.addNode('a')
    graph.addNode('b')

    expect(graph.nodes).toBeDefined()
    expect(graph.nodes.length).toEqual(2)
  })

  test('edges', () => {
    graph.addNode('a')
    graph.addNode('b')
    graph.addNode('c')

    graph.addEdge('a', 'b')
    graph.addEdge('a', 'c')
    graph.addEdge('b', 'c')

    expect(graph.edges).toBeDefined()
    expect(graph.edges.length).toEqual(3)
  })

  describe('print', () => {
    test('undirected', () => {
      const nodes = ['a', 'b', 'c', 'd', 'e']
      nodes.forEach(node => {
        graph.addNode(node)
      })

      const edges = [['a', 'b'], ['a', 'c'], ['a', 'e'], ['b', 'd'], ['c', 'd']]
      edges.forEach(edge => {
        graph.addEdge(...edge)
      })

      expect(graph.print()).toEqual(
        `a => b c e
b => a d
c => a d
d => b c
e => a`
      )
    })

    test('directed', () => {
      graph = createGraph(true)

      const nodes = ['a', 'b', 'c', 'd', 'e']
      nodes.forEach(node => {
        graph.addNode(node)
      })

      const edges = [['a', 'b'], ['a', 'c'], ['a', 'e'], ['b', 'd'], ['c', 'd']]
      edges.forEach(edge => {
        graph.addEdge(...edge)
      })

      expect(graph.print()).toEqual(
        `a => b c e
b => d
c => d
d
e`
      )
    })
  })

  test('bfs', () => {
    const nodes = ['a', 'b', 'c', 'd', 'e']
    nodes.forEach(node => {
      graph.addNode(node)
    })

    const edges = [['a', 'b'], ['a', 'c'], ['a', 'e'], ['b', 'd'], ['c', 'd']]
    edges.forEach(edge => {
      graph.addEdge(...edge)
    })

    let result = ''

    function visit(node) {
      result += result.length === 0 ? node.key : ` => ${node.key}`
    }

    graph.bfs('a', visit)

    expect(result).toEqual('a => b => c => e => d')
  })

  test('dfs', () => {
    const nodes = ['a', 'b', 'c', 'd', 'e']
    nodes.forEach(node => {
      graph.addNode(node)
    })

    const edges = [['a', 'b'], ['a', 'c'], ['a', 'e'], ['b', 'd'], ['c', 'd']]
    edges.forEach(edge => {
      graph.addEdge(...edge)
    })

    let result = ''

    function visit(node) {
      result += result.length === 0 ? node.key : ` => ${node.key}`
    }

    graph.dfs('a', visit)

    expect(result).toEqual('a => b => d => c => e')
  })
})
