const { createQueue } = require('./index')

describe('Queue', () => {
  let queue
  beforeEach(() => {
    queue = createQueue()
  })

  test('length', () => {
    expect(queue.length).toEqual(0)

    queue.add(1)
    expect(queue.length).toEqual(1)

    queue.add(2)
    expect(queue.length).toEqual(2)

    queue.add(3)
    expect(queue.length).toEqual(3)
  })

  test('add', () => {
    expect(queue.length).toEqual(0)

    const value = 'foo'
    queue.add(value)

    expect(queue.length).toEqual(1)
    expect(queue.peek()).toEqual(value)
  })

  test('remove', () => {
    queue.add(1)
    queue.add(2)
    queue.add(3)

    expect(queue.length).toEqual(3)

    const first = queue.remove()
    expect(first).toEqual(1)
    expect(queue.length).toEqual(2)

    const second = queue.remove()
    expect(second).toEqual(2)
    expect(queue.length).toEqual(1)

    const third = queue.remove()
    expect(third).toEqual(3)
    expect(queue.length).toEqual(0)

    const fourth = queue.remove()
    expect(fourth).toEqual(undefined)
  })

  test('peek', () => {
    queue.add(1)
    queue.add(2)

    expect(queue.peek()).toEqual(1)

    queue.remove()
    expect(queue.peek()).toEqual(2)

    queue.remove()
    expect(queue.peek()).toEqual(undefined)
  })
})
