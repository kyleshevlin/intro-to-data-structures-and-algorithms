function createNode(key) {
  const children = []

  return {
    key,
    children,
    addChild(childKey) {
      const childNode = createNode(childKey)
      children.push(childNode)
      return childNode
    }
  }
}

function createBinaryNode(key) {
  return {
    key,
    left: null,
    right: null,
    addLeft(leftKey) {
      const newLeft = createBinaryNode(leftKey)
      this.left = newLeft
      return newLeft
    },
    addRight(rightKey) {
      const newRight = createBinaryNode(rightKey)
      this.right = newRight
      return newRight
    }
  }
}

function createTree(rootKey) {
  const root = createNode(rootKey)

  return {
    root,
    print() {
      let result = root.key

      function traverse(node, visitFn) {
        if (node.children.length) {
          node.children.forEach(visitFn)
          node.children.forEach(n => traverse(n, visitFn))
        }
      }

      function addKeyToResult(node) {
        result += ` => ${node.key}`
      }

      traverse(root, addKeyToResult)

      return result
    }
  }
}

function createBinaryTree(rootKey) {
  const root = createBinaryNode(rootKey)

  const TRAVERSALS = {
    IN_ORDER: (node, visitFn) => {
      if (node !== null) {
        TRAVERSALS.IN_ORDER(node.left, visitFn)
        visitFn(node)
        TRAVERSALS.IN_ORDER(node.right, visitFn)
      }
    },

    PRE_ORDER: (node, visitFn) => {
      if (node !== null) {
        visitFn(node)
        TRAVERSALS.PRE_ORDER(node.left, visitFn)
        TRAVERSALS.PRE_ORDER(node.right, visitFn)
      }
    },

    POST_ORDER: (node, visitFn) => {
      if (node !== null) {
        TRAVERSALS.POST_ORDER(node.left, visitFn)
        TRAVERSALS.POST_ORDER(node.right, visitFn)
        visitFn(node)
      }
    }
  }

  return {
    root,
    print(orderType = 'IN_ORDER') {
      let result = ''

      const visitFn = node => {
        result += result.length === 0 ? node.key : ` => ${node.key}`
      }

      TRAVERSALS[orderType](this.root, visitFn)

      return result
    }
  }
}

const tree = createBinaryTree('a')
const b = tree.root.addLeft('b')
const c = tree.root.addRight('c')
const d = b.addLeft('d')
const e = b.addRight('e')
const f = c.addLeft('f')
const g = c.addRight('g')
const h = d.addLeft('h')
const i = d.addRight('i')

console.log("IN_ORDER: ", tree.print())

console.log("PRE_ORDER: ", tree.print('PRE_ORDER'))

console.log("POST_ORDER: ", tree.print('POST_ORDER'))

exports.createBinaryNode = createBinaryNode
exports.createBinaryTree = createBinaryTree
exports.createNode = createNode
exports.createTree = createTree
