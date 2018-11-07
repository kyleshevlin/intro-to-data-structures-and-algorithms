# Quick Sort

Quick Sort is a recursive sorting algorithm. We take our original array, breaking it down into smaller arrays to sort. In particular, quick sort uses the concept of a "pivot". We pick one item, it could be at the head or the tail of the array, so long as it's consistent. We then compare each item to that pivot, if it's less than the pivot, we push it to a left array, if it's more we push it to the right array. We then return the array that is the quick sort called on the left, the pivot, and quick sort called on the right.

We'll make a function to create our algorithm. Our function takes an array as an argument and will return an array. In this case, we'll return a new array of sorted items, so for now we'll return an empty array.

Next, since we know we will call quickSort recursively, we need to establish our base case to prevent a stack overflow. If the array length is less than two, we want to return that array.

Now, we want to establish our pivot, we'll use the last item in the array as our pivot. Since I'll need the pivot index later in the algorithm, I'm going to store that as a variable and derive the pivot from that.

Now, I'll create empty arrays for what will be our left and right arrays.

Now, we want to loop through every item in the array up to the pivot, hence why we stored the pivotIndex. We'll store the current item in a variable. Now, if the currentItem is less than the pivot, push it into the left array, otherwise into the right array.

When our loop is done, we now want to call quick sort recursively on our left and right arrays, placing our pivot in the middle.
