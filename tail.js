const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1, array.length);
};

// TEST CODE
const words = ["Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 2);
assertEqual(tail([34]).length, 0);
assertEqual(tail([]).length, 0);
assertEqual(tail(["Hello", "World", "Lighthouse Labs"])[0], "World");
assertEqual(tail(["Hello", "World", "Lighthouse Labs"])[1], "Lighthouse Labs");

