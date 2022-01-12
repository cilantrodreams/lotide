const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// function takes a sentence and returns a count of each letter in that sentence.
// function should store results in object with key value pairs representing count of letters
// loop through every letter in sentence and add update count of letter

const countLetters = function(sentence) {
  const result = {};
  for (const letter of sentence) {
    if (letter !== ' ') {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};

const countResult = countLetters("lighthouse labs");

assertEqual(countResult['l'], 2);
assertEqual(countResult['i'], 1);
assertEqual(countResult['c'], undefined);
assertEqual(countResult[' '], undefined);