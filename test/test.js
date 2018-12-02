var assert = require('assert');

describe('Advent of Code \'18', function () {

  const one = require('../src/days/one');

  describe('Day 1', function () {

    it('should read the inputs provided via the text file', function () {
      assert.equal(one.inputs().length, 1025);
    });

    it('should sum an array of numbers properly', function () {
      assert.equal(one.sum([1, 1, 1]), 3);
      assert.equal(one.sum([1, 1, -2]), 0);
      assert.equal(one.sum([-1, -2, -3]), -6);
    });

    it('should calculate dupes for the extra star', function () {
      assert.equal(one.extra([1, -1]), 0);
      assert.equal(one.extra([+3, +3, +4, -2, -4]), 10);
      assert.equal(one.extra([-6, +3, +8, +5, -6]), 5);
      assert.equal(one.extra([+7, +7, -2, -7, -4]), 14);
    });
  });

});