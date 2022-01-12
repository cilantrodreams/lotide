const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// returns true if both objects have identical keys with identical values
// objects are equal when they have the same number of keys
// and the value of each key in one object is the same as the value for that same key in the other
// if the values of the keys are arrays, compare the contents of the arrays
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

// test cases
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);