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

  const two = require('../src/days/two');

  describe('Day 2', function () {
    it('it tallies the occurences', function () {
      assert.deepEqual(two.tally(two.occurences('abcdef')), { 2: false, 3: false });
      assert.deepEqual(two.tally(two.occurences('bababc')), { 2: true, 3: true });
      assert.deepEqual(two.tally(two.occurences('abbcde')), { 2: true, 3: false });
      assert.deepEqual(two.tally(two.occurences('abcccd')), { 2: false, 3: true });
      assert.deepEqual(two.tally(two.occurences('aabcdd')), { 2: true, 3: false });
      assert.deepEqual(two.tally(two.occurences('abcdee')), { 2: true, 3: false });
      assert.deepEqual(two.tally(two.occurences('ababab')), { 2: false, 3: true });
    });

    it('provides the correct checksum', function () {
      const ids = [
        'abcdef',
        'bababc',
        'abbcde',
        'abcccd',
        'aabcdd',
        'abcdee',
        'ababab'
      ];
      assert.equal(two.checksum(ids), 12);
    });
  });

});