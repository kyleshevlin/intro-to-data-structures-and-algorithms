# Trees

A tree is a graph without any cycles. A cycle is when three or more nodes are connected in a circuitous path.

Tree nodes, instead of having neighbors and no hierarchy, might be thought of having children and are hierarchical. Each node can contain many children, no children may have an edge between them and they may not be connected to any other parent node.

To write our tree data structure, we'll start by creating a function to make our nodes.

Each node receives a key as an argument. We'll return that key in the object returned by the factory. Next, a tree node can have many children, so we'll create an array and return that reference, lastly, we'll add a method called addChild so that we can add children to this node. Add child will receive a key as an argument, create the node, push it to children and return it.

Now we can create our tree. Trees must have a root node, so we'll expect the rootKey to be passed as an argument when the tree is created. We'll use this key to create a node we'll assign to root and return in our tree object.

This tiny object is all we need to begin to use our tree, since each node contains in it the ability to addNodes to it.

Perhaps the most common tree structure web developers deal with on a regular basis is the DOM tree. The HTML of every page on the web is a tree structure. We can create the basic layout of a page quickly with our tree.

The root of our tree is the 'html' element. The html element has two children, head and body. the head will have a child, title. The body may have many children, we'll give it a header, a main and a footer. Inside the header, we can give it an h1, our main can receive a paragraph of text, and our footer may have a copyright.

We have our tree structure, it might be nice to visualize it. Let's create a print method that traverses our graph and logs out the keys.

I want to return a string from our print method, and I will be concatenating on to this string with each level we traverse through our tree.

I'm going to create a traverse function that we'll call recursively on our nodes. Traverse will accept three arguments, the node it's operating on, a visitFn to fire on that node, and a depth argument I'm going to use for my output. Depth isn't necessary in this implementation and could be derived from the data, but this will be useful for the lesson.

Now, we start by visiting our current node. Then, if the node has any children, we want to traverse each one of those, passing the same visitFn, but increasing the depth by 1.

Now I'll create a function to pass as our visiting function. This function will mutate our result string. For the very first node key, I only want to return the key, for every subsequent key, I want to create a new line and add twice as many spaces as the depth before the node key. This will give a nice nested layout to our output.

Next, I want to traverse, starting from the root, passing our visiting function and a depth of 1.

Lastly, we return our result. We print it into the terminal, and we can see the output of our DOM tree.
