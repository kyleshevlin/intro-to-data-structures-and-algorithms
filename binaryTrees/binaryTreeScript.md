# Binary Trees and Tree Traversal

Binary trees are trees whose nodes can only have up to two children, hence binary. We store this data as the left and right of a node.

We'll use a function to create our binary node object. a binary node receives a key as an argument, has a left and right property set to null, as well as methods to addLeft and addRight.

addLeft and addRight receive a key, create a new node, update left and right respectively, and then return the new node.

Now we can create our binaryTree factory function. Since trees must have a root, our function receives a rootKey as an argument. We can then create the root node using our node factory function. We pass this to the object we return from the function.

Binary trees have three specific types of traversals: in order, pre order and post order. Let's create a traversals enum. Each item in our enum will be named after the type of traversal it is. The value of each will be a function that we can use when traversing our tree.

In order traversal always visits the left branch, then our current node, follwed by the right branch. Since these traversal functions are called recursively, we need to guard against a node that is null. So if the node is not null, we call our traversal down the left branch, then visit our current node, then traverse down the right branch.

Pre order traversal is very similar, but we change the order so that we visit our current node first, then followed by the left branch, then the right branch.

Post order traversal visits the left and right branches before visiting the current node.

Now, let's add a print method to our tree that accepts an orderType as an argument. The default will be inorder, as that's the most common traversal.

We'll keep our print function simple. As we visit each node, we'll add the key to the result and return a string. Using our enum, we can trigger the correct method call to start our traversal.

Let's create a simple binary tree, I have one to copy paste in here, We can call print on it several times and compare the results.
