# Insertion Sort

To create our insertion sort algorithm, we'll create a function that accepts the array, sorts it, and returns it.

Insertion sort works by using a nested loop. We'll take the first item in the list and assume we have a sorted list of length 1. We'll then compare the next item to it and place it before or after it depending on which item is greater.

Our first loop will use the iterator i and starts at the 2nd element in the array, index 1.

Our inner loop starts at the first item in the list, and only iterates up to the current iteration of our outer loop. Thus, in the first pass, it will only compare the first item with the second. In the second outer loop, it'll compare the first item with the 3rd, and the second item with the third. So on and so forth. If the item in the outer loop is less than our item in the inner loop, we'll remove the item from the array, and splice it in the location of the item at index j.
