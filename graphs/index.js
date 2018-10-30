function createGraph() {
  const graph = new Map()

  return {
    get nodes() {
      return Array.from(graph.keys())
    },
    getNode(node) {
      return graph.get(node)
    },
    addNode(node) {
      graph.set(node, [])
    },
    addEdge(node1, node2) {
      if (graph.has(node1) && graph.has(node2)) {
        graph.get(node1).push(node2)
        graph.get(node2).push(node1)
      }
    },
    print() {
      return Array.from(graph.entries())
        .map(([key, values]) => `${key} -> ${values.join(' ')}`)
        .join('\n')
    }
  }
}

exports.createGraph = createGraph
