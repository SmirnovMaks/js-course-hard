const num = 266219;

let array = ("" + num).split("").map(Number);
console.log(array);

const multiplyNum = array.reduce((multiply, index) => multiply * index);

console.log(multiplyNum);

const cube = multiplyNum ** 3;
console.log(cube);
let twoSymbol = String(cube);
let twoNumber = twoSymbol[0] + twoSymbol[1];
let num2 = Number(twoNumber);

console.log(num2);