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

//Exercise 3.1: Describe how you could use a single array to implement three stacks

//Exercise 3.2: How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element?

//O(n)....question asked for O(1)
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

//each time you push into the stack, check the value and if it's greater than prevous, save in variable min

//each time you pop, if that value was the min......do something to find new min
