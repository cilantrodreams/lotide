const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// findKey takes an object and a callback
// scans object and returns first key for which callback returns a truthy value
// returns undefine if no key is found

const findKey = function(object, callback) {
  let result;
  for (const key in object) {
    if (callback(object[key])) {
      result = key;
      break;
    }
  }
  return result;
};

// testcase  
const restaurants = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

assertEqual(findKey(restaurants, x => x.stars === 2), 'noma');

const foodsHealth = {
  "candy": "unhealthy",
  "chips": "unhealthy",
  "vegetables": "healthy",
  "cola": "unhealthy"
};

assertEqual(findKey(foodsHealth, x => x === "healthy"), "vegetables");