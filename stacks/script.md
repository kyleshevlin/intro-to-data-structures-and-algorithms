# Stacks

To create our stack data structure, we're going to use a factory function that returns our stack as a plain JavaScript object.

A stack is a collection of items that obey the principle of "last in, first out". When we place a new item onto the stack, we have to remove it first before we get any other item in the stack. This data structure is used for handling things like nested function calls in JavaScript, hence why it's called the call stack.

Our stack will have several methods and properties: push, pop, peek to look at what's next to be removed, length, and isEmpty.

We'll use an array held in closure to store our items.

Let's create our push method. We want to keep our collection in the correct order, so we always want to add and remove from the same side of the array. We'll use the end of our array to make this happen and thus, we'll use the array methods that match our stack methods, push and pop to do this. Using push, we place new items at the end of the array.

We'll create our pop method using array.pop() to remove the final item from the array. This ensures we maintain order in our stack.

We'll create our peek method by returning the item in the end position of our array.

We'll then create a length property by using a getter on the array's length. If we don't use a getter, when our stack object is created, our stack's length will be set to the static value of 0, the array's length at instantiation, rather than stored as a reference to retrieve the current stack's length.

Lastly, we'll add the isEmpty() method to quickly tell if a stack has any items or not.

Now we can try our stack out. A strange, but everyday example, of a stack is the act of getting dressed. We have to put clothing on in a particular order, and in order to change what we wear, we typically have to remove them in the reverse order.

Let's create a lowerBodyClothingStack. We could create another stack for our upper body, but we'll save that for another time. Don't know about you, but first thing I put on when getting dressed is some underwear, followed by socks, then I throw on my pants, followed by my shoes.

If we peek at the stack, the first thing I'll need to remove is my shoes. Let's say it's the end of the day, time to get ready for bed. I pop my shoes off, what's next? My pants. Great. There's more disrobing to do, but I'll save you the details. Looks like our stack is working as intended.
