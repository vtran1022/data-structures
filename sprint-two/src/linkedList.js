var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === undefined) {
      list.head = Node(value);
      list.tail = Node(value);
    } else {
      list.head = list.tail;
      list.tail = Node(value);
    }

  };

  list.removeHead = function() {
    if (!list.head) {
      return;
    }
    if (list.head === undefined) {
      return;
    }
    // assign the tail value to a variable
    var firstHead = list.head.value;
    var container = [];
    container.push(firstHead);
    // delete head value
    delete list.head;
    if (list.tail) {
      list.head = list.tail;
    }
    // return the variable
    // debugger;

    return container[0];
  };

  list.contains = function(target) {
    // to check if both properties has the target value
    if (list.head === target || list.tail === target) {
    // if either has the target value
      // return true
      return true;
    } else {
      return false;
    }
    // return false
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
