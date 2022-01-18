const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it("doesn't modify original array", () => {
    const arr = ['hello', 'world', 'lighthouse', 'labs'];
    tail(arr);
    assert.deepEqual(arr, ['hello', 'world', 'lighthouse', 'labs']);
  });
  it("should return [] for [34]", () => {
    assert.deepEqual(tail([34]), []);
  });
  it("should return [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
  it("should return ['lighthouse', 'labs'] for ['hello', 'lighthouse', 'labs']", () => {
    const actual = tail(['hello', 'lighthouse', 'labs']);
    assert.deepEqual(actual, ['lighthouse', 'labs']);
  });
});
// const tail = require('../tail');
// const assertEqual = require('../assertEqual');

// const words = ["Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 2);
// assertEqual(tail([34]).length, 0);
// assertEqual(tail([]).length, 0);
// assertEqual(tail(["Hello", "World", "Lighthouse Labs"])[0], "World");
// assertEqual(tail(["Hello", "World", "Lighthouse Labs"])[1], "Lighthouse Labs");