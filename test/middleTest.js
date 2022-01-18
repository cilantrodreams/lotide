const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it("should return ['three'] for ['one', 'two', 'three', 'four', 'five']", () => {
    const actual = middle(['one', 'two', 'three', 'four', 'five']);
    assert.deepEqual(actual, ['three']);
  });
  it("should return [] for ['one', 'two']", () => {
    const actual = middle(['one', 'two']);
    assert.deepEqual(actual, []);
  });
  it("should return [] for ['one']", () => {
    const actual = middle(['one']);
    assert.deepEqual(actual, []);
  });
  it("should return ['two', 'three'] for ['one', 'two', 'three', 'four']", () => {
    const actual = middle(['one', 'two', 'three', 'four']);
    assert.deepEqual(actual, ['two', 'three']);
  });
  it("should return [3, 'four'] for [1, 2, 3, 'four', 'five', 'six']", () => {
    const actual = middle([1, 2, 3, 'four', 'five', 'six']);
    assert.deepEqual(actual, [3, 'four']);
  });
});
