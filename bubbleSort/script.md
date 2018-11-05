To write the bubble sort algorithm, let's create a function that accepts an array and returns that array. We'll be making mutations to this array in our algorithm.

Bubble sort works by looping over the array many times. Each time we iterate over the array, we check if the current item is greater than the next item. If it is, we swap it in place and we indicate that we have made a swap in this loop. Then, if we've made a swap, we loop through the array again. We continue looping until we make a pass where no items have been swapped.

In order for this algorithm to work, we need to always do at least 1 pass through the array, so we will use a do while loop.

We need to maintain some mutable state in our function, so let's setup variables for swapped.

We want to loop through our array so long as it was swapped, so we can setup our while condition right away.

Now, when we start our do block, we want to reset swapped to false.

Then, for each item, we want to compare it to the next item in the array. If the item is greater than the next one, store it temporarily, and mutate their indices in the array. If we swap them, update the swapped variable.

To help us visualize this algorithm, I want to do two things. First, I want to keep track of how many times we looped through the array, so I'll set up a count variable and we'll increment each time we run the do block. Second, i'm going to pull in a utility function that can print an array. We'll place this next to our count incrememnt so we can visually see the swapping in the terminal as it loops through.

Now, let's create an unsorted array of numbers and pass it to our function to see our algorithm in action.
