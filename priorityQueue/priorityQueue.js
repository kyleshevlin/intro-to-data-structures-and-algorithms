const { createQueue } = require('../queues/index')

function createPriorityQueue() {
  const highPriorityQueue = createQueue()
  const lowPriorityQueue = createQueue()

  return {
    enqueue(item, isHighPriority = false) {
      const queue = isHighPriority ? highPriorityQueue : lowPriorityQueue
      queue.enqueue(item)
    },
    dequeue() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.dequeue()
      }

      return lowPriorityQueue.dequeue()
    },
    peek() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.peek()
      }

      return lowPriorityQueue.peek()
    },
    get length() {
      return highPriorityQueue.length + lowPriorityQueue.length
    },
    isEmpty() {
      return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty()
    }
  }
}

const q = createPriorityQueue()

q.enqueue('A fix here')
q.enqueue('A bug there')
q.enqueue('A new feature')

q.dequeue()
q.enqueue('Emergency task!', true)
console.log(q.dequeue())
console.log(q.peek())

exports.createPriorityQueue = createPriorityQueue
