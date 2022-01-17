const assertEqual = require('./assertEqual');

// implement function for comparing two arrays
// arrays need to be a perfect match
// create variable to flag if there is a mismatch*
// check if the lengths of the arrays are identical, set result variable to false if not*
// loop through every element in expected array and compare with element at the same index in the actual array*
// returns true or false*
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
}

module.exports = eqArrays;