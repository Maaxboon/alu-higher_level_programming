#!/usr/bin/node
const dict = require('./101-data').dict;

const newDict = {};
for (const [user, occurrence] of Object.entries(dict)) {
  if (!newDict[occurrence]) {
    newDict[occurrence] = [];
  }
  newDict[occurrence].push(user);
}

console.log(newDict);
