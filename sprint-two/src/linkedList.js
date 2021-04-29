var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.head.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    if (!list.head) {
      return;
    }

    var firstHead = list.head.value;
    delete list.head;

    if (list.tail) {
      list.head = list.tail;
    }

    return firstHead;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    if (currentNode === null) {
      return false;
    }

    var innerFunction = function(currentNode) {
      if (currentNode.value === target) {
        return true;
      } else {
        if (currentNode.next === null) {
          return false;
        } else {
          currentNode = currentNode.next;
          return innerFunction(currentNode);
        }
      }
    };

    return innerFunction(currentNode);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
