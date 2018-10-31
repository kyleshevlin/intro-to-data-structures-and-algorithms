const { printArray } = require('../utils')

function insertionSort(array) {
  let i
  let j
  let count = 0

  for (i = 1; i < array.length; i++) {
    for (j = 0; j < i; j++) {
      printArray(array)
      count++

      if (array[i] < array[j]) {
        const [item] = array.splice(i, 1)
        array.splice(j, 0, item)
      }
    }
  }

  printArray(array)
  console.log(`Iterations: ${count}`)

  return array
}

exports.insertionSort = insertionSort
