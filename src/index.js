const commander = require('commander');

commander
  .option('-d --day [int]', 'Day to execute')
  .option('-e --extra', 'Use the extra star mode')
  .parse(process.argv);

if (commander.day == 1) {
  const result = require('./days/one').solve(commander.extra);
  console.log(`Day 1: ${result}`);
}

if (commander.day == 2) {
  const result = require('./days/two').solve(commander.extra);
  console.log(`Day 2: ${result}`);
}