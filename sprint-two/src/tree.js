var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = {};
  child.value = value;
  child.children = [];
  _.extend(child, treeMethods);
  this.children.push(child);
};


treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else {
    if (this.children) {
      for (var i = 0; i < this.children.length; i++) {
        if (this.children[i].contains(target)) {
          return true;
        }
      }
    }
  }
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
  addChild : constant O(1)
  contains: liner O(n)
 */
