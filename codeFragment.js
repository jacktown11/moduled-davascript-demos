// example.js
var x = 5;
var addX = function(value) {
    return value + x;
};
module.exports.x = x;
module.exports.addX = addX;

// main.js
var example = require('./example.js');

console.log(example.x); // 5
console.log(example.addX(1));   //6

