const { printArray } = require('../utils')

function quickSort(array) {
  printArray(array)

  if (array.length < 2) {
    return array
  }

  const pivotIndex = array.length - 1
  const pivot = array[pivotIndex]
  const left = []
  const right = []

  for (let i = 0; i < pivotIndex; i++) {
    const item = array[i]
    item < pivot ? left.push(item) : right.push(item)
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}

exports.quickSort = quickSort
