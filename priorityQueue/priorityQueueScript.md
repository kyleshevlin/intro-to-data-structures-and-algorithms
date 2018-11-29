# Priority Queue

We can easily make a priority queue by using two queues, a high priority queue and a low priority queue.

Our API will be the same as a normal queue: enqueue, dequeue, peek, length, isEmpty, but we'll make some modifications.

To start, our enqueue method receives a second argument to indicate an item as high priority. If an item is deemed high priority, we'll put it the high priority queue, otherwise in the low priority queue.

Next, our dequeue method will make sure that the high priority queue is empty before it dequeues from the low priority queue. This ensures that all high priority items are dequeued first.

Next, our peek method receives a small change. Since we dequeue from the high priority queue first, we need to also peek from there first. If the high priority queue has items, peek there, otherwise peek the low priority queue.

Next, our length method is just the addition of the two queues lengths.

Lastly, our isEmpty method is the conjunction of the two queues isEmpty property.

Now that we've built our priority queue, let's try it out. Let's imagine your manager has given you a few tasks. A fix here, a bug there, a new feature to build. Now, seemingly out of nowhere, a new bug has been added to your queue that's high priority. Company is losing money, systems are failing. We can insert that new bug in as high priority, and now if we peek() it's the next thing to come out of our queue, we have to get it done before we can continue with our other tasks.
