const { createStack } = require('./index')

describe('Stacks', () => {
  let stack
  beforeEach(() => {
    stack = createStack()
  })

  test('length', () => {
    expect(stack.length).toEqual(0)

    stack.add(1)
    expect(stack.length).toEqual(1)

    stack.add(2)
    expect(stack.length).toEqual(2)

    stack.add(3)
    expect(stack.length).toEqual(3)
  })

  test('add', () => {
    expect(stack.length).toEqual(0)

    const value = 'foo'
    stack.add(value)

    expect(stack.length).toEqual(1)
    expect(stack.peek()).toEqual(value)
  })

  test('remove', () => {
    stack.add(1)
    stack.add(2)
    stack.add(3)

    expect(stack.length).toEqual(3)

    const first = stack.remove()
    expect(first).toEqual(3)
    expect(stack.length).toEqual(2)

    const second = stack.remove()
    expect(second).toEqual(2)
    expect(stack.length).toEqual(1)

    const third = stack.remove()
    expect(third).toEqual(1)
    expect(stack.length).toEqual(0)

    const fourth = stack.remove()
    expect(fourth).toEqual(undefined)
  })

  test('peek', () => {
    stack.add(1)
    stack.add(2)

    expect(stack.peek()).toEqual(2)

    stack.remove()
    expect(stack.peek()).toEqual(1)

    stack.remove()
    expect(stack.peek()).toEqual(undefined)
  })
})
