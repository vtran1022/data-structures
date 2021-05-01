

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var tuple = [];
  tuple[0] = k;
  tuple[1] = v;

  if (this._storage[index]) {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        this._storage[index][i][1] = v;
      } else {
        this._storage[index].push(tuple);
      }
    }
  } else {
    this._storage[index] = [];
    this._storage[index].push(tuple);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var currentArr = this._storage[index];
  for (var i = 0; i < currentArr.length; i++) {
    if (currentArr[i][0] === k) {
      return currentArr[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var currentArr = this._storage[index];
  for (var i = 0; i < currentArr.length; i++) {
    if (currentArr[i][0] === k) {
      currentArr.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


