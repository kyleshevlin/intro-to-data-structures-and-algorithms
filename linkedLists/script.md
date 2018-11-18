# Linked Lists

A linked list is a collection of items where each item has a connection to the next item in the list, hence the word "linked" in the name.

To make our linked list, we first want to create a Node object for each item in our list. Our node has two properties, the value stored at this node, and a "next" property which gets pointed to the next item in our list.

Next, we want to make our list data structure. Our list will have several properties we want to keep track of, a head, a tail, and a length. We'll also create several methods for our list: push, pop, get, delete, and isEmpty.

Our head and tail will both start as null and our length is 0. And we can add the isEmpty method. It's simple to implement as it returns whether our length is 0 or not.

Now, we want to add our push method. When we want to push a value onto our list, we need to first turn that value into a node using our factory function. Push places a new node at the end of our list, so we can use logic to determine the actions necessary to place the node in the correct spot.

No matter what state our list is in, we know that eventually we need to update our tail property to this node. We also know that we will need to increment our length property. So let's write that, but I'm going to add some whitespace above it for the other steps we need to take first.

If our list does not have a head, then we can also deduce it doesn't have a tail because our list is empty. The opposite is also true, if our list has a head, then we know that we have a tail as well. So, if we don't currently have a head, our list's head property is set to our new node. However, if we do have a head, then we know we have a current tail, we need to set our current tail's next property to our new node.

Moving on to the pop method, things get a bit more complicated. We need to reason out a few scenarios, how do we pop items when our list is empty, when our list has a length of 1, and when our list has many items. An empty list is easy, there is nothing to pop, so we will return null. Our check could be against our length or if we do not have a head for our list.

Now, for our remaining scenarios, we're always going to return the tail node, so let's store that in a variable.

A list of length 1 means that our head and our tail are the same node, so we set both our head and tail back to null. Our length will need to be reset to 0 or decremented, either way gets us to a length of 0. Then we return the node we stored.

Now, for all other scenarios, we need to set the item before our tail, the penultimate item, as our new tail with a next value of null. How do we do this? We have to start at the head and search each item one by one until we get to our item. This is very inefficient and is one of the tradeoffs made with linked lists.

We'll set a current variable to our head, and a penultimate variable undefined. While current exists, check if the current next property equals our tail, if it does, we can set our penultimate value and break our loop. Otherwise, set current to current.next and continue

Now we can assume we have our penultimate, what we want to do is set penultimate's next property to null, then our tail to the penultimate node. Finally, we decrement the length and return the node we stored long ago.

Now we can move on to get. The get method receives an index as an argument. If the index given is less than 0 or greater than our length, we want to return null, as the request is out of the bounds of our list. Otherwise, in order to return that node, we will loop through each item, incrementing an iterator and when our iterator matches our passed in index, we'll return that item.

Lastly, we can implement delete. The delete method receives an index as an argument. Similar to get, if the index is less than 0 or greater than our length, we return null because such an item does not exist in our list.

Now, if the index is 0, we need to handle this situation uniquely. We need to return the head node, while setting the head's next node as the new head.

Now, in any other scenario, we're going to loop through each item, incrementing an iterator with each loop. However, we'll want to store our previous node on each iteration as well. When we get to our matching item, we'll simply set our previous node's next property to equal our current node's next property, effectively slicing out and returning that current node.

I want to quickly make one more method, a print method, so we can visualize our list. We'll create an array of values, and a current variable. While we have a current node, push it's value into the values array. When we're done. We'll print out the to console our values joined by an arrow symbol.

Now we have our list, let's try it out. We'll create a new list, we can check that it's indeed empty.

Now, let's push some values on to it. If I pop off the last one, we can see that our value was the last one we pushed, and that the tail of our list is now the penultimate item.

Let's try get out and get the item at index 1, great that worked. Now let's delete it and see that our head's next node was previously our third item.
