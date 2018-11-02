# Queues

To create our queue data structure, we're going to use a factory function that returns our queue as a plain JavaScript object.

A queue is a collection of items that obey the principle of "first in, first out". When we place an item into the queue, we can only get it out after all items that have been added before it have been removed. This data structure is great for handling things that have to happen sequentially.

Our queue will have several methods and properties: add or enqueue, remove or dequeue, peek to look at what's next to be removed, length, and isEmpty.

We'll use an array held in closure to store our items.

Let's create our enqueue method. We want to keep our collection in the correct order, so we always want to add to the array from one side of it and remove from the other. We'll add items to the front of our array for enqueue with the Array.unshift() method.

We'll create our dequeue method using array.pop() to remove the final item from the array. This ensures we maintain order in our queue. Every good queue is orderly.

We'll create our peek method by returning the item in the end position of our array.

We'll then create a length property by using a getter on the array's length. If we don't use a getter, when our queue object is created, our queue's length will be set to the static value of 0, the queue's length, rather than stored as a reference to retrieve the current queue's length.

Lastly, we'll add the isEmpty() method to quickly tell if a queue has any items or not.

Now we can try our queue out. A great use for a queue is a plan. A plan is a collection of steps that need to happen in a particular order. Let's use a queue to make a plan.

We'll create a queue. Just for good measure, let's test out our isEmpty method right away. It works. Now, let's add a few items to our plan. "Make egghead lesson," "Help others learn," and "Be happy."

Now if we peek into our queue, we should see "Make egghead lesson". Yep, that works.

Now, I've made the lesson, you're watching it, so let's dequeue it. If we check the length, we see we have 2 items in our queue. Let's peek again. We're near the end of the lesson, so I think I've helped you learn, so we can dequeue that. We'll take a final peek, it says "be happy", and we've learned queues so we're happy. Let's dequeue that. Check that our queue isEmpty, it is!
