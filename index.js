const add = require('./add');
const fs = require('fs');

let val = add(1,3);
let x =5;
let y =7;
let name = 'Sam';
var age = 42;

console.log(`hello my name is ${name}, and I am ${age} years old`);
console.log(`x = ${x},  y = ${y} total value =`, x+y+val);
console.log(__dirname);
