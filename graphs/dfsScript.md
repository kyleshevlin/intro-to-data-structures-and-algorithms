# Depth First Search

As the name implies, depth first search is a graph search algorithm that explores as far as it can down a particular path before climbing back up working down another one.

we'll add a depthFirstSearch method to our graph object. This method will receive two arguments, a startingNodeKey to find which node in the graph to start the search from, and a visiting function to be called as we visit each node for the first time.

First, we need to get the starting node by using the getNode method

Next, we need to keep track of which nodes we have visited and which ones we havent. There are several ways to do this, but I'm going to do it by keeping a visited object, where each key corresponds with a node's key, and the value starts as false.

Now, depth first search involves a recursive algorithm, essentially if there's another level to go, explore that one, until we reach a dead end.

I'm going to create an explore function that we will call on nodes. If we've visited this node, then return from the function immediately. Otherwise, call the visiting function on the node, mark it as visited, and then for each of its neighbors we need to explore deeper. Because we have our guard statement at the start of our function, we can safely call it on each node, knowing that if we've visited it, nothing will be returned.

We then start our algorithm by calling explore on our starting node.

Now that we've created our depth first search algorithm, let's use it.

I've premade a graph that I will copy paste into the file that looks like this.

I want to call depthFirstSearch on our graph, starting at node 'a' and logging out each key as we go. If I bring the graph back onto the screen and we call our searchin the terminal, we can see that went as far as we could down the path of A before coming back up and following another path.
