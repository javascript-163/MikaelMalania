sayHello();

function sayHello() {
    console.log("Hello, World!");
};

console.log(x); // ? undefined
var x = 5;
console.log(x); // ? 5

sayHi(); // ? result <= error
var sayHi = function() {
    console.log("Hi here!");
}

console.log(y); // ? undefined <= error
let y = 10;