//Node constructor
function Node(value) {
  //a node has a value and a pointer to the next node, initialized as null
  this.data = value;
  this.next = null;
}

//List constructor
function singlyLinkedList() {
  //initialize length as 0
  this.length = 0;
  //create head
  this.head = null;
}

//add node to the end of a singly linked list
singlyLinkedList.prototype.addNode = function(node) {
  //instantiate the node
  var node = new Node(node);
  //create variable currentNode to keep track of where you are (a pointer)
  //initialize as the head, since you have to start at the head, that's the only one you have access to
  var currentNode = this.head;

  //if the list is empty, put node as head;
  if (!currentNode) {
    this.currentNode = node;
    this.length++;
    return node;
  }

  //while there are still more nodes, keep moving along
  while (currentNode.next) {
    //set the current node to what was the next node
    currentNode = currentNode.next;
    this.length++;
  }
  //when there isn't a currentNode.next, then stick the node on to the end by setting the next node to the node passed in
  currentNode.next = node;
  this.length++;
  return node;
};

//Find the node at a certain position (e.g. at position 3)

singlyLinkedList.prototype.findNodeAtPosition = function(position) {
  var currentNode = this.head;
  var length = this.length;
  //initialize variable count as 1, this will keep track of the position of each node (starts at 1 cuz.....first node)
  var count = 1;

  if (length === 0 || position < 1 || position > length) {
    throw new Error('invalid position');
  }

  //while the count is still behind the position (e.g. if you're counting and are only at 2, and the position is 3, keep going)
  while (count < position) {
    currentNode = currentNode.next;
    count++;
  }
  //once count = position, then you've found the node at that position, so return the currentNode
  return currentNode;
};

//Remove the node at a certain position (e.g. at position 47)

//8 9 47 93 76

singlyLinkedList.prototype.removeNodeAtPosition = function(position) {
  //find the node at the specified position
  var currentNode = this.head;
  var length = this.length;
  var count = 0;
  var beforeNodeToDelete = null;
  var nodeToDelete = null;
  var deletedNode = null;

//if the position is greater than the length or less than 1, or if the length is 0, throw an error
  if (position > length || length === 0 || position < 1) {
    throw new Error('invalid position');
  }

  if (position === 1) {
    //set the new head to the be the next node
    this.head = currentNode.next;
    //decrement the length
    this.length--;
    //set the deletedNode to be the currentNode
    deletedNode = currentNode;
    //reassign the currentNode to be null
    currentNode = null;

    return deletedNode;
  }

  //otherwise, start going through the linked list to find the node at the specified position
  //this while loop will run until you reach the one before the one you want to delete
  while (count < position) {
    //once you reach the last condition on which the while loop will run, you are at the beforeNodeToDelete node
    beforeNodeToDelete = currentNode;
    //so the next one is going to be the one you're going to want to deletedNode
    currentNode.next = nodeToDelete;
    count++;
  }

  //when the while loop exits, you're on the node right before the one that needs to be deleted
  //set the next property of the node youre on (aka the beforeNodeToDelete) to the one after the one being deletedNode
  beforeNodeToDelete.next = nodeToDelete.next;
  nodeToDelete = deletedNode;
  this.length--;

  return deletedNode;

};


//8      9       add node here       47      93      76

function addNodeToPosition(list, node, position) {
  var currentNode = this.head;
  var length = this.length;
  var count = 1;
  var beforeNodeToAdd = null;

  var node = new Node(node);
  console.log(node);

  if (position < 1) {
    throw new Error('invalid position');
  }

  else if (position === (length + 1)) {
    this.addNode();
  }

  //if there's only one node in the list
  else if (position === 1 || length === 0) {
    this.head = node;
    length++;
  }

  //if there's more than one node
  while (count < position) {
    beforeNodeToAdd = currentNode;
    count++;
  }

  //once the count is equal to the position
  //set the new node's next value equal to what was the beforeNodeToAdd's next value
  node.next = beforeNodeToAdd.next;
  //then reassign the beforeNodeToAdd.next property to the node
  beforeNodeToAdd.next = node;
  length++;

  return node;
}

var list ={ data: 1, next: {
                            data: 2, next: {
                                             data: 3, next: null }}};

console.log(addNodeToPosition(list, {data: 8}, 2));
console.log('new list', list);































//end
