const { createStack } = require('./index')

describe('Stacks', () => {
  let stack
  beforeEach(() => {
    stack = createStack()
  })

  test('length', () => {
    expect(stack.length).toEqual(0)

    stack.push(1)
    expect(stack.length).toEqual(1)

    stack.push(2)
    expect(stack.length).toEqual(2)

    stack.push(3)
    expect(stack.length).toEqual(3)
  })

  test('isEmpty', () => {})

  test('push', () => {
    expect(stack.length).toEqual(0)

    const value = 'foo'
    stack.push(value)

    expect(stack.length).toEqual(1)
    expect(stack.peek()).toEqual(value)
  })

  test('pop', () => {
    stack.push(1)
    stack.push(2)
    stack.push(3)

    expect(stack.length).toEqual(3)

    const first = stack.pop()
    expect(first).toEqual(3)
    expect(stack.length).toEqual(2)

    const second = stack.pop()
    expect(second).toEqual(2)
    expect(stack.length).toEqual(1)

    const third = stack.pop()
    expect(third).toEqual(1)
    expect(stack.length).toEqual(0)

    const fourth = stack.pop()
    expect(fourth).toEqual(undefined)
  })

  test('peek', () => {
    stack.push(1)
    stack.push(2)

    expect(stack.peek()).toEqual(2)

    stack.pop()
    expect(stack.peek()).toEqual(1)

    stack.pop()
    expect(stack.peek()).toEqual(undefined)
  })
})
