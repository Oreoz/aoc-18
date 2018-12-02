const path = require('path'), fs = require('fs');

exports.inputs = inputs;
exports.sum = sum;
exports.solve = solve;
exports.extra = extra;

function inputs() {
  // Read the inputs given via the file.
  const p = path.join(__dirname, '../../inputs/one.txt');
  return fs.readFileSync(p).toString().split('\n').map(t => Number(t));
}

function sum(array) {
  return array.reduce((a, b) => a + b);
}

function solve(hardmode = false) {
  if (hardmode) {
    return extra(inputs());
  }
  return sum(inputs());
}

function extra(array) {
  let tally = 0, i = 0, history = new Set();

  history.add(tally);

  while (true) {
    const value = array[i];
    const size = history.size;

    tally += value;
    history.add(tally);

    if (i === array.length -1) {
      i = 0;
    } else {
      i++;
    }

    if (history.size === size) {
      return tally;
    }
  }
}