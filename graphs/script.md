# Graphs

A graph is a collection made up of nodes, also known as vertices, that may or may not be connected to other nodes. These connections are called edges.

To build our graph, we're going to start by creating our node factory function.

When we create a node, we need to give it a value that we can use to identify it, we'll call it a key. We'll describe adjacent nodes in our graph as neighbors, as there is no hierarchy implied by the data structure. Lastly, we need a way to add neighbors to our node, so we'll add an addNeighbor method that pushes a node into our neighbors array.

Now, we can create our graph factory function. createGraph receives on argument, directed. A directed graph's edges point in one direction from a node to another. In order for two nodes to have symmetric edges, they must both point to each other.

In an undirected graph, we assume this symmetry of edges, that when one node points to the other, then the opposite is true as well.

We'll set directed to false by default, and we'll return in it the object created by our factory.

Now, a graph is a collection of nodes and a collection of edges, so we'll create arrays for both in closure. We'll pass these references to our returned object as well.

Now we'll start adding methods to our graph. The first will be the addNode method. Add node receives a key as an argument and uses our createNode function to add a node to the nodes array.

We also want to be able to get nodes from our graph, so we'll add a getNode method. getNode will search for a matching key and return the first one, so we'll use array's find method.

Next, we need to be able to add edges between nodes, so we'll create an addEdge method. addEdge receives two arguments, node1Key, and node2Key. We use our getNode function to get these two nodes. We then will add node2 as a neighbor to node1. This happens regardless of whether the graph is directed or undirected. The same goes for pushing our edge into the edges array. We'll simply pass a string of our two keys, adding a delimiter between them.

Now, If the graph is undirected, we also want to add node1 as a neighbor of node2. We don't worry about adding a second edge because we don't want the number of edges in our graph to be misrepresented. If we were to add an edge here, we'd have to implement a way of resolving both edges as one were we ever to count them and provide a edgesLength property.

Now that we can add nodes and edges, we'd probably like to be able to visualize our graph. We'll create a print method that will print out our nodes and neighbors in the console.

We want to return a string derived from our nodes. So I'm going to map over our nodes, gather some data about them and return a result.

I'll destructure the key and neighbors from each node. The string we'll return will begin with the key. Then if there are any neighbors, we want to concatenate that to our current result. We'll map over each neighbor and add its key. Lastly, we'll return the result and call a join with a newline on our array of strings.

Now, we can create a graph and try it out.

I'm going to create a directed graph of the Shevlin family, me my wife and our two cats Krios and Tali. This graph we'll describe who loves whom in this household.

Now, my wife and I love each other, so we can add an edge between us going in both directions.

And we love our cats, her a tad more than me, I'm a dog person, but we have no way of weighting our edges. So we'll add edges from me to both our cats and from Anna to both our cats.

Now, our cats have very little love for each other. They tolerate one another, but they do fight from time to time, no edges there, BUT Krios loves Anna, and Tali displays some affection towards me.

Now, if we call print on our graph, we'll get a read out of our relationships to each other.
