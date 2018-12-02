const commander = require('commander');

commander
  .option('-d --day', 'Day to execute')
  .option('-e --extra', 'Use the extra star mode')
  .parse(process.argv);

if (commander.day == 1) {
  const result = require('./days/one').solve(commander.extra);
  console.log(`Day 1: ${result}`);
}