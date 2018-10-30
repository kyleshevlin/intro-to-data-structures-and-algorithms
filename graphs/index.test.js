const { createGraph } = require('./index')

describe('Graph', () => {
  let graph
  beforeEach(() => {
    graph = createGraph()
  })

  test('addNode', () => {
    expect(graph.nodes.includes('A')).toEqual(false)
    graph.addNode('A')
    expect(graph.nodes.includes('A')).toEqual(true)
  })

  test('addEdge', () => {
    graph.addNode('a')
    graph.addNode('b')
    graph.addEdge('a', 'b')

    expect(graph.getNode('a').includes('b')).toEqual(true)
    expect(graph.getNode('b').includes('a')).toEqual(true)
  })

  test('getNode', () => {
    graph.addNode('a')
    graph.addNode('b')
    graph.addNode('c')
    graph.addEdge('a', 'b')
    graph.addEdge('a', 'c')

    const nodeA = graph.getNode('a')
    expect(nodeA.includes('b')).toEqual(true)
    expect(nodeA.includes('c')).toEqual(true)
  })

  test('print', () => {
    const nodes = ['a', 'b', 'c', 'd', 'e']
    nodes.forEach(node => {
      graph.addNode(node)
    })
    graph.addEdge('a', 'b')
    graph.addEdge('a', 'c')
    graph.addEdge('a', 'e')
    graph.addEdge('b', 'c')
    graph.addEdge('b', 'd')

    expect(graph.print()).toEqual(
      `a -> b c e
b -> a c d
c -> a b
d -> b
e -> a`
    )
  })
})
