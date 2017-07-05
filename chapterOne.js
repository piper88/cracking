'use strict';

//CHAPTER ONE

//Exercise 1.1
//Implement an algorithm to determine if a string has all unqiue characters
function unique(string) {
  var poop = {};

  for (var i = 0; i < string.length; i++) {
    if (!poop[string[i]]) {
      poop[string[i]] = 1;
    } else {
      poop[string[i]] += 1;
    }
  }
  for (var prop in poop) {
    if (poop[prop] > 1) {
      return false;
    }
    return true;
  }
}

console.log(unique('dog'));
console.log(unique('piper'));

//Exercise 1.2
//Given two strings, write a method to decide if one is a permutation of the other
//determine if they have the same characters, in any order

function permute(string1, string2) {
  return string1.split('').sort().join() === string2.split('').sort().join();
}

console.log(permute('*&sp!', 'sp*&'));

//Exercise 1.3
//Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold teh additional characters, and that you are given the 'true' length of the string.'

//Example
//Input: 'Mr John Smith', 13 (13 being how long string is)
//Output: 'Mr%20John%20Smith'


function replace(string) {
  return string.replace(/ /g, '%20');
}

console.log(replace('hello sarah dear, how are you?'));

//Exercise 1.4
//Given a string, write a function to see if it is a permutation of a palindrome. Basically, can you rearrange the string into a palindrome.

//how can we define a palindrome? an even number of each letter, only one letter can occur an odd number of times

function palindrome(string) {
  var count = {};
  string.split('').forEach(letter => {
    if (letter.match(/[^ ]/g)) {
      if (!count[letter]) {
        count[letter] = 1;
      }
      count[letter] += 1;
    }
  });

  for (var prop in count) {
    console.log(count);
    if ((count[prop]%2 !== 0) > 1) {
      return false;
    }
    return true;
  }
}

console.log(palindrome('poop po'));

//Exercise 1.5
//There are three types of edits that can be performed on strings: insert, remove, or replace. Given two strings, write a function to check if they are one edit (or zero edits) away

//Example:
//pale, ple => true
//pale, bake => false

//taken from solutions
function isOneOrLessAway(str1, str2) {
  // if lengths differ by more than 1 then can't be true
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  let isEdited = false;
  for (let i = 0, j = 0; i < str1.length && j < str2.length; ++i, ++j) {
    if (str1[i] !== str2[j]) {
      if (isEdited) {
        // second edit
        return false;
      }

      if (str1.length > str2.length) {
        --i; // decrease j, we are deleting char from str1
        console.log('str1 after --j', str1);
      }
      else if (str1.length < str2.length) {
        --j; // decrease i, we are deleting char from str2
        console.log('str2 after --i', str2);
      }
      isEdited = true;
    }
  }

  return true;
}

console.log(isOneOrLessAway('piper', 'pipe'));
console.log(isOneOrLessAway('dog', 'piper'));

//Exercise 1.6
//string aabcccccaaa would become a2b1c5a3
//if compressed string wouldn't become smaller, return original string
//string only has upper and lowercase letters (a-z)

function compress(string) {
  //count all letters, put in object

  let obj = {};
  let newString = '';

  for (var i = 0; i < string.length; i++) {
    if (!obj[string[i]]) {
      obj[string[i]] = 1;
    } else {
      obj[string[i]] += 1;
    }
  }

  for (var prop in obj) {
    newString += prop + obj[prop];
  }

  if (newString.length >= string.length) {
    return string;
  }
  return newString;
}

console.log(compress('aabbccc'));
console.log(compress('abc'));



































console.log('stay here');
