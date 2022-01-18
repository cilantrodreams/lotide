const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

// implement a function which will take an array and return the middle-most elements of the given array
// *get middle index of array by dividing array length by 2, and round down. eg 5/2 is 2.5 rounded down to be index 2
// *function returns an array
// *if array has one or two element there is no middle. return an empty array
// if the array has an even number of elements, the two middle elements should be returned in an array

const middle = function(array) {
  // console.log('array:', array);
  const middleArray = [];
  const middleIndex = array.length / 2;
  // console.log('middle index:', middleIndex);

  if (middleIndex > 1 && !Number.isInteger(middleIndex)) { // array has odd number of elements
    const middleElement = array[Math.floor(middleIndex)];
    middleArray.push(middleElement);
  }
  if (Number.isInteger(middleIndex) && middleIndex > 1) { // array has even number of elements
    middleArray.push(array[middleIndex - 1]);
    middleArray.push(array[middleIndex]);
  }

  // console.log('middle element:', middleElement);
  return middleArray;

}

module.exports = middle;