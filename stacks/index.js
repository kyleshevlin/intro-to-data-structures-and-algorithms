function createStack() {
  const stack = []

  return {
    add(x) {
      stack.push(x)
    },
    remove() {
      if (stack.length === 0) {
        return undefined
      }
      return stack.pop()
    },
    peek() {
      if (stack.length === 0) {
        return undefined
      }
      return stack[stack.length - 1]
    },
    get length() {
      return stack.length
    }
  }
}

exports.createStack = createStack
