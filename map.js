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

const words = ["ground", "control", "to", "major", "tom"];

// create a higher order map function
// function takes two arguments an array to map and a callback function
// return a new array based on result of callback

const map = function(array, callback) {

  const result = [];
  for (let item of array) {
    result.push(callback(item));
  }
  return result;
}

const results1 = map(words, word => word[0]);
console.log(results1);

// test cases
const moreWords = ['Mama', 'I', 'just', 'killed', 'a', 'man'];
assertArraysEqual(map(moreWords, word => word.length), [4, 1, 4, 6, 1, 3]);
assertArraysEqual(map(moreWords, word => word.toUpperCase()), ['MAMA', 'I', 'JUST', 'KILLED', 'A', 'MAN']);
const numbers = [2, 4, 5];
assertArraysEqual(map(numbers, num => num += 2), [4, 6, 7]);