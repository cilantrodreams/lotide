const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle(['one', 'two', 'three', 'four', 'five']), ['three']);
assertArraysEqual(middle(['one', 'two']), []);
assertArraysEqual(middle(['one']), []);
assertArraysEqual(middle(['one', 'two', 'three', 'four']), ['two', 'three']);
assertArraysEqual(middle(['one', 'two', 'three', 'four', 'five', 'six']), ['three', 'four']);
assertArraysEqual(middle([1, 2, 3, 'four', 'five', 'six']), [3, 'four']);
