# Merge Sort

Merge sort is a recursive sorting algorithm. If you don't understand recursion, I recommend finding a resource to learn it, but in brief, recursion is the act of a function calling itself. Thus, mergeSort is accomplished by the algorithm calling itself to provide a solution.

Merge sort divides the given array into two halves, a left and right array, and calls merge sort on these sub arrays. We continue to split our sub arrays until we get arrays whose length is less than two. We then begin to stitch our small arrays back together, sorting them on the way up. This is an efficient algorithm because we start by sorting very small arrays, and by the time we reach our larger ones, they are already mostly sorted, saving us the need for expensive loops.

To create our algorithm, we'll actually need two functions: our `mergeSort` function, and our `merge` function that actually combines the sub arrays back together.

We'll create a function mergeSort which receives an array. Since this will be called recursively, we want to start with our base case scenario, a guard statement that prevents us from causing stack overflows. In this case, if the array's length is less than two, return the array. There is no further splitting that we need to do.

Otherwise, we continue on by dividing the array into left and right halves, and we return the merging of calling mergeSort on both halves.

Next, we write our merge function. This function receives two arrays as arguments and sorts them. We create an array to place our sorted items into. Now, we compare the items in our array and proceed to push them onto our sorted array until we run out of items in one of the arrays. Using the length property of these arrays to coerce booleans is very helpful. Once one array is empty, the other array can be spread onto the end of the array. The ES6 spread operator makes this very easy to do.
