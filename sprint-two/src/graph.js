// Instantiate a new graph
var Graph = function() {
  this.newGraph = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = {};
  newNode.value = node;
  newNode.edge = [];
  this.newGraph[node] = newNode;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var k in this.newGraph) {
    if (this.newGraph[k].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var a in this.newGraph) {
    var edgeValus = this.newGraph[a].edge;
    for (var i = 0; i < edgeValus.length; i++) {
      if (edgeValus[i] === node) {
        edgeValus.splice(i, 1);
      }
    }
    if (this.newGraph[a].value === node) {
      delete this.newGraph[a];
    }
  }
};


// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var edgeValus = this.newGraph[fromNode].edge;
  for (var i = 0; i < edgeValus.length; i++) {
    if (edgeValus[i] === toNode) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.newGraph[fromNode].edge.push(toNode);
  this.newGraph[toNode].edge.push(fromNode);

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromEdgeValues = this.newGraph[fromNode].edge;
  var toEdgeValues = this.newGraph[toNode].edge;

  for (var i = 0; i < fromEdgeValues.length; i++) {
    if (fromEdgeValues[i] === toNode) {
      fromEdgeValues.splice(i, 1);
    }
  }

  for (var i = 0; i < toEdgeValues.length; i++) {
    if (toEdgeValues[i] === fromNode) {
      toEdgeValues.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var k in this.newGraph) {
    cb(k);
  }
};




/*
 * Complexity: What is the time complexity of the above functions?
 */