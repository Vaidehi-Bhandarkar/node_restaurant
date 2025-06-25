const os = require('os');
const _ = require('lodash');

var calculateCircleArea = (r) => {
    return 3.14*r*r;
}

var ans = calculateCircleArea(5);
console.log("AREA OF CIRCLE: ", ans);

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

const performOperation = (a, b, opCallback) => {
    return opCallback(a, b);
}

console.log(performOperation(10, 5, add));
console.log(performOperation(10, 5, subtract));
console.log(performOperation(10, 5, multiply));
console.log(performOperation(10, 5, divide));

console.log("Total Memory: ", os.totalmem());
console.log("Free Memory: ", os.freemem());
console.log("OS Platform: ", os.platform());
console.log("Number of CPU cores: ", os.cpus().length);


var arr = [2, 3, 5, 7, 8, 4, 10, 22, 23, 20];
function arrSum(numbers){
    const evenNo = _.filter(numbers, num => num % 2 === 0);
    return _.sumBy(evenNo);
}

console.log(arrSum(arr));