const eqArrays = function(actualArray, expectedArray) {
  let arrayMatch = true;
  if (actualArray.length !== expectedArray.length) {
    arrayMatch = false;
  }
  for (let i = 0; i < expectedArray.length; i++) {
    if (expectedArray[i] !== actualArray[i]) {
      arrayMatch = false;
    }
  }
  return arrayMatch;
};
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// implement function which will return a subset of a given array, removing unwanted elements
// function should take an array that is the source and an array with the items to be removed from the source*
// loop through every item in the source array and check it against every item *
// build a new array with items that don't match the items to be removed *
// return a new array that excludes the items we don't want *
const without = function(source, itemsToRemove) {
  withoutArray = []
  for (const sourceItem of source) {
    let itemToAdd = sourceItem;
    for (const removeItem of itemsToRemove) {
      if (removeItem === sourceItem) {
        itemToAdd = '';
      }
    }
    if (itemToAdd) {
      withoutArray.push(itemToAdd);
    }
  }
  return withoutArray;
};

// TEST CASES
assertArraysEqual(without([1, 2, 3], [1, 2]), [3]);
assertArraysEqual(without([1, 2, 3], [1, 2, 3]), []);
assertArraysEqual(without([1, 2, '3'], [1, '2']), [2, '3']);
assertArraysEqual(without([], [1, 2]), []);
// testing if the original array is modified
const words = ["hello", "world"];
without(words, ["world"]);
assertArraysEqual(words, ["hello", "world"]);