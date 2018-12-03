const path = require('path'), fs = require('fs');

exports.occurences = occurences;
exports.tally = tally;
exports.checksum = checksum;
exports.solve = solve;

function occurences(input) {
  const array = input.split('');
  const occurences = {};

  array.forEach(item => {
    const current = occurences[item] || 0;
    occurences[item] = current + 1;
  });

  return occurences;
}

function tally(occurences) {
  let two = false, three = false;

  Object.values(occurences).forEach(v => {
    if (v === 2)
      two = true;
    if (v === 3)
      three = true;
  });

  return { 2: two, 3: three };
}

function checksum(ids) {
  let two = 0, three = 0;

  ids
    .map(id => occurences(id))
    .map(o => tally(o))
    .forEach(t => {
      if (t['2'])
        two++;
      if (t['3'])
        three++;
    });

  return two * three;
}

function inputs() {
  // Read the inputs given via the file.
  const p = path.join(__dirname, '../../inputs/two.txt');
  return fs.readFileSync(p).toString().split('\n');
}

function solve(extra) {
  return checksum(inputs());
}