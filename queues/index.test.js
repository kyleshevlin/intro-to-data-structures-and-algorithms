const { createQueue } = require('./index')

describe('Queue', () => {
  let queue
  beforeEach(() => {
    queue = createQueue()
  })

  test('length', () => {
    expect(queue.length).toEqual(0)

    queue.enqueue(1)
    expect(queue.length).toEqual(1)

    queue.enqueue(2)
    expect(queue.length).toEqual(2)

    queue.enqueue(3)
    expect(queue.length).toEqual(3)
  })

  test('isEmpty', () => {
    expect(queue.isEmpty()).toEqual(true)

    queue.enqueue(1)
    expect(queue.isEmpty()).toEqual(false)

    queue.dequeue()
    expect(queue.isEmpty()).toEqual(true)
  })

  test('enqueue', () => {
    expect(queue.length).toEqual(0)

    const value = 'foo'
    queue.enqueue(value)

    expect(queue.length).toEqual(1)
    expect(queue.peek()).toEqual(value)
  })

  test('dequeue', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)

    expect(queue.length).toEqual(3)

    const first = queue.dequeue()
    expect(first).toEqual(1)
    expect(queue.length).toEqual(2)

    const second = queue.dequeue()
    expect(second).toEqual(2)
    expect(queue.length).toEqual(1)

    const third = queue.dequeue()
    expect(third).toEqual(3)
    expect(queue.length).toEqual(0)

    const fourth = queue.dequeue()
    expect(fourth).toEqual(undefined)
  })

  test('peek', () => {
    queue.enqueue(1)
    queue.enqueue(2)

    expect(queue.peek()).toEqual(1)

    queue.dequeue()
    expect(queue.peek()).toEqual(2)

    queue.dequeue()
    expect(queue.peek()).toEqual(undefined)
  })
})
