# Breadth First Search

As the name implies, breadth first search is a graph search algorithm that starts at one node, explores as widely as it can first, before going further down adjacent nodes.

We'll add a breadthFirstSearch method to our graph object. We want to accept two arguments, a startingNodeKey to find which node in our graph to start from, and a visitFunction to call when we "visit" each node.

We'll start by getting our starting node using the this.getNode method.

Next, we need to keep track of which nodes we have visited and which ones we haven't. There are several ways to do this, but I'm going to do it through an object. I'm going to reduce our nodes down to an object where each key is the current node's key, and the value is set to false.

Next, we need to keep track, in order, which nodes we need to visit. We'll use a createQueue function I've imported from another lesson. The first node we need to visit is our startingNode.

Now, we want to start at our startingNode, so we will dequeue it from the queue and label it our current node. If we haven't visited this node before, we want to run the visiting function on it, and mark it as visited in our visited hash. Since this is our first node, we know that we'll hit this condition.

Next, if our currentNode has any neighbors, we want to add them to our queue. While the queue is not empty, we want to continue dequeueing items and performing this algorithm, so we'll use a while loop. The while loop stops when we've visited every node in our graph.

Now that we've implemented breadth first search, let's try it out on a graph.

I've premade a graph for us to use that looks like this that I'l copy paste into here. I want to use breadthFirstSearch to print out the node keys as we arrive at each one into the console.

If I bring the graph back onto the screen and compare it to the result in the terminal, we can see how we branched out from node A and visited all of its neighbors before proceeding down node B's neighbors.
