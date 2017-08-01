'use strict';

//Exercise 2.1
//Remove Dups: write code to remove duplicates from an unsorted linked list.

function removeDups(head) {
  var currentNode = head;
  var hash = {};
  var prev = null;

  if (!head) {
    throw new Error('linked list does not exist');
  }

//while there is a currentNode, add it to a hash table
  while (currentNode) {

    //if the hash table doesn't already contain the current node, add it to it
    if (!hash[currentNode]) {
      hash[currentNode] = 1;

    } else if (hash[currentNode]) {
      //if the hash already contains the current node, remove the currentNode
      prev.next = currentNode.next;
    }
    //set the previous to the current node
    prev = currentNode;
    //increment the current node, move it along the linked list
    currentNode = currentNode.next;
  }

  return currentNode;
}

//      1      2      3       1       7

//first pass
//before logic
//currentNode = 1
//hash = {}
//prev = null

//after logic
//hash[1] = 1
//currentNode = 2
//prev = 1

//second pass
//currentNode = 2
//hash[1] = 1
//prev = 1

//after logic
//hash[1] = 1
//hash[2] = 1
//currentNode = 3
//prev = 2

//third pass
//before logic
//currentNode = 3
//hash[1] = 1
//hash[2] = 1
//prev = 2

//after logic
//hash[1] = 1
//hash[2] = 1
//hash[3] = 1
//currentNode = 1
//prev = 3

//fourth pass
//before logic
//currentNode = 1
//hash[1] = 1
//hash[2] = 1
//hash[3] = 1
//prev = 3

//after logic
//3.next = 1.next (7)
//currentNode = 7
//prev = 3

//fifth pass
//before logic
//currentNode = 7
//prev = 3


//Exercise 2.2 Return Kth to last: Implement an algorith to find the kth to last element of a singly linked list

//return 2nd to last node

//    1    2    3    4    5
//if you want 2nd to last, want node at position (length - k)

function returnNodeAtKthFromLast(k, head) {
  var length = 1;
  var currentNode = head;
  var position;
  var count = 1;



  while (currentNode) {
    currentNode = currentNode.next;
    //increment count to get the length
    length ++;
  }

  //calculate the position of the node you want to return
  //if wanting second to last node, then position = 5 - 2 + 1 = 4
  position = (length - k) + 1;


  //count = 0, position = 4
  while (count < position) {
    //increment the currentNode
    currentNode = currentNode.next;
    //increment the count
    count++;
  }
  return currentNode;
}


//Exercise 2.6 Palindrome: Implement a function to check if a linked list is a palindrome

//    1     2     3     2     1

function isPalindrome(head) {

  var currentNode = head;
  var backward = [];


  while (currentNode) {
    //shift currentNode into the backward array
    backward.shift(currentNode);
    currentNode = currentNode.next;
  }

  currentNode = head;

  //backward = [1,2,3,2,1];

  while (currentNode) {
    var index = 0;
    if (currentNode !== backward[index]) {
      return false;
    }
    index++;
    currentNode = currentNode.next;
  }
  return true;
}






//Reversing a linked list
function reverse(head) {
  var currentNode = head;
  var previous = null;

  while (currentNode) {
    //save the next one or you lose it when you reverse pointer
    var save = currentNode.next;
    //the one I forgot...
    currentNode.next = previous;
    //increment previous
    previous = currentNode;
    //increment currentNode
    currentNode = save;
  }
  //which will be the new head
  return previous;
}














































console.log('bleib');
