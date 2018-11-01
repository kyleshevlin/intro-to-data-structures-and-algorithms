function createNode(value) {
  return {
    value,
    next: null
  }
}

function createLinkedList() {
  return {
    head: null,
    size: 0,

    add(value) {
      const node = createNode(value)

      if (this.head === null) {
        this.head = node
        this.size++
        return node
      }

      let current = this.head
      while (current.next) {
        current = current.next
      }

      current.next = node
      this.size++

      return node
    },

    insertAt(value, index) {
      if (index > 0 && index > this.size) {
        return null
      }

      const node = createNode(value)

      if (index === 0) {
        node.next = this.head
        this.head = node
        this.size++

        return node
      }

      let current = this.head
      let previous
      let i = 0

      while (i < index) {
        i++
        previous = current
        current = current.next
      }

      previous.next = node
      node.next = current
      this.size++

      return node
    },

    get(index) {
      if (index > 0 && index > this.size) {
        return null
      }

      if (index === 0) {
        return this.head
      }

      let current = this.head
      let i = 0

      while (i < index) {
        i++
        current = current.next
      }

      return current
    },

    delete(index) {
      if (index > 0 && index > this.size) {
        return null
      }

      if (index === 0) {
        const deleted = this.head

        this.head = this.head.next
        this.size--

        return deleted
      }

      let current = this.head
      let previous
      let i = 0

      while (i < index) {
        i++
        previous = current
        current = current.next
      }

      const deleted = current
      previous.next = current.next
      this.size--

      return deleted
    },

    isEmpty() {
      return this.size === 0
    },

    print() {
      let values = []
      let current = this.head

      while (current && current.value) {
        values.push(current.value)
        current = current.next
      }

      return values.join(' => ')
    }
  }
}

exports.createNode = createNode
exports.createLinkedList = createLinkedList
