const { printArray } = require('../utils')

function bubbleSort(array) {
  let swapped = false
  let i
  let count = 0

  do {
    swapped = false

    array.forEach((item, index) => {
      printArray(array)
      count++

      if (item > array[index + 1]) {
        const temporary = item

        array[index] = array[index + 1]
        array[index + 1] = temporary

        swapped = true
      }
    })
  } while (swapped)

  printArray(array)
  console.log(`Iterations: ${count}`)

  return array
}

exports.bubbleSort = bubbleSort
