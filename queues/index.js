function createQueue() {
  const queue = []

  return {
    enqueue(x) {
      queue.unshift(x)
    },
    dequeue() {
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
    },
    isEmpty() {
      return queue.length === 0
    }
  }
}

exports.createQueue = createQueue
