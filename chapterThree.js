//Stack implementation

//storage = {
//0: 47,
//1: 8,
//2: 4,
//}

var Stack = function() {
  this.count = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function() {
  if (this.count === 0) {
    throw new Error ('storage is empty');
  }
  //decrement the count
  this.count--;
  //save item you want to pop off into a variable to later return
  var itemToPop = this.storage[this.count];
  //delete the item from storage
  delete this.storage[this.count];
  return itemToPop;
};


//Exercise 3.2: How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element?

//O(n) SOLUTION
Stack.prototype.findMin = function() {
  var array = [];
  for (var i = 0; i < this.count; i++) {
    array.push(this.storage[i]);
  }
  array.sort(function(a,b) {
    return a - b;
  });
  return array[0];
};


//O(1) SOLUTION

//sample stack
// storage = {
//   0: {value: 47, min: 47},
//   1: {value: 88, min:47},
// }

var Stack = function() {
  this.count = 0;
  this.storage = {};
};

Stack.prototype.findMin = function() {
  return this.storage[this.count-1].min;
};

Stack.prototype.push = function(value) {
  this.storage[this.count] = {};
  this.storage[this.count].value = value;
  this.storage[this.count].min;

  //if the value pushed in is less than the minimum of the count -1, then set this value's minimum to itself
  if (this.count===0|| value < this.storage[this.count-1].min || value === this.storage[this.count-1].min) {
    this.storage[this.count].min = value;
    //if the vaue pushed in is greater than the minimum of the count -1, then set this value's minimum to the count-1's minimum
  } else if (value > this.storage[this.count-1].min) {
    this.storage[this.count].min = this.storage[this.count-1].min;
  }
  this.count++;
};


Stack.prototype.pop = function() {
  if (this.count === 0) {
    throw new Error('empty stack');
  }
  this.count--;
  var itemToPop = this.storage[this.count];
  delete this.storage[this.count];

  return itemToPop;
};

var stack = new Stack();
stack.push(47);
stack.push(8);
stack.push(2);
stack.pop();
stack.pop();
stack.push(100);
stack.findMin();
