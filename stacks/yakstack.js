// Yak Shaving Stack

const { createStack } = require('./index')

const yakStack = createStack()

yakStack.push('small bug')
yakStack.push('fix models')
yakStack.push(
  'fork framework, fix, make pull request'
)
yakStack.push(
  'fundamental problem in your programming language'
)
yakStack.pop()
yakStack.pop()
yakStack.pop()

console.log(yakStack.peek())
