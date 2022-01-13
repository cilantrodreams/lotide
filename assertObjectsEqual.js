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

const eqObjects = function(object1, object2) {
  let objectsEqual = true;
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    objectsEqual = false;
    return objectsEqual;
  }

  for (let i = 0; i < object1Keys.length; i++) {
    if (Array.isArray(object1[object1Keys[i]]) && Array.isArray(object2[object1Keys[i]])) { // if both values are arrays
      if (eqArrays(object1[object1Keys[i]], object2[object1Keys[i]]) === false) { // if the arrays are not identical
        objectsEqual = false;
        break;
      }
    } else if (object1[object1Keys[i]] !== object2[object1Keys[i]]) { // regular comparison if values are primatives
      objectsEqual = false;
      break;
    }
  }
  return objectsEqual;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);