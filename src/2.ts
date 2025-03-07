// Generate a random math problem
const min = 1;
const max = 10;
const operator = ["+", "-", "*", "/"];

let result = Math.floor(Math.random() * (max - min + 1)) + min;
let op = operator[Math.floor(Math.random() * operator.length)];

console.log(`${result} ${op}`);
