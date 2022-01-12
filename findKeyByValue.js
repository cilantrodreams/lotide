const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// *function takes and object and a value
// look through the object to see if it has a key with the given value
// *return the first key which contains given value
// subsequent keys with identical values are to be ignored

const findKeyByValue = function(object, value) {
  let firstKey;
  for (const key in object) {
    if (object[key] === value) {
      firstKey = key;
      break;
    }
  }
  return firstKey;
};

// test cases
const bestTVShowsByGenre = {
  sciFi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire'
};

assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const person = {
  name: "Thomas",
  hasHands: true,
  hasFeet: true
};

assertEqual(findKeyByValue(person, true), 'hasHands'); // should skip hasFeet property