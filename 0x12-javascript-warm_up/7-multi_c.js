#!/usr/bin/node
if (process.argv[2] === undefined) {
  console.log('Missing number of occurrences');
}
if (process.argv[2] !== undefined) {
  for (let i = 0; i < parseInt(process.argv[2]); i++) {
    console.log('C is fun');
  }
}
