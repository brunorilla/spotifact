const assert = require('assert').strict;

const Calculator = require('./src/classCalculator');

let calc = new Calculator();

calc.add(90)

console.log(calc.add(90))

console.log(calc.getResult());