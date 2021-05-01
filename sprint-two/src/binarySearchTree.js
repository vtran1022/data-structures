var BinarySearchTree = function(value) {
  var newBinaryTree = {};
  newBinaryTree.value = value;
  newBinaryTree.left = null;
  newBinaryTree.right = null;

  _.extend(newBinaryTree, binaryTreeMethods);

  return newBinaryTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) {
  var currentNode = {};
  var currentTree = this;
  currentNode.value = value;
  currentNode.left = null;
  currentNode.right = null;
  _.extend(currentNode, binaryTreeMethods);

  var checkProperties = function(node) {
    if (value < node.value) {
      if (node.left === null) {
        node.left = currentNode;
      } else {
        checkProperties(node.left);
      }
    } else {
      if (node.right === null) {
        node.right = currentNode;
      } else {
        checkProperties(node.right);
      }
    }
  };
  checkProperties(currentTree);
};

binaryTreeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else if (target < this.value) {
    if (this.left === null) {
      return false;
    } else if (this.left.contains(target)) {
      return true;
    }
  } else if (target > this.value) {
    if (this.right === null) {
      return false;
    } else if (this.right.contains(target)) {
      return true;
    }
  }
  return false;
};

binaryTreeMethods.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
  insert: O(log n)
  contains: O(log n)
  depthFirstLog: O(n)
 */
