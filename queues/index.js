function createQueue() {
  const queue = []

  return {
    add(x) {
      queue.unshift(x)
    },
    remove() {
      if (queue.length === 0) {
        return undefined
      }
      return queue.pop()
    },
    peek() {
      if (queue.length === 0) {
        return undefined
      }
      return queue[queue.length - 1]
    },
    get length() {
      return queue.length
    }
  }
}

exports.createQueue = createQueue
