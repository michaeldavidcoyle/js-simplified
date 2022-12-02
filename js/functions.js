function sayHi() {
    console.log('hi');
}

sayHi();

// Create a function that take no arguments and prints your name
function sayName() {
    console.log('Michael');
}

sayName();

function sum(a, b) {
    console.log(a + b);
}

sum(7, 5);

let x = 1974;
let y = 48;

sum(x, y);

// Create a function that takes on argument (a name) and prints that out
function printName(name) {
    console.log(name);
}

printName('Bob');
printName();

// Create a function that takes one argument (a name) and returns that name added to "Hello"
function sayHello(name) {
    return "Hello, " + name;
}

let greeting = sayHello('John');
console.log(greeting);

// Passing functions as arguments
function printVariable(variable) {
    console.log(variable);
}

function func(x) {
    x('hello world');
}

console.log(printVariable);

// Create a function that takes 2 parameters.
// 1. name
// 2. callback that prints out what's passed to it (printVariable)
// Take name and append "Hello" to the beginning
function helloPerson(name, callback) {
    callback("Hello, " + name);
}

helloPerson('Margaret', printVariable);

// This can also be done by passing an anonymous function, that is, defining
// the function directly as the second argument when calling helloPerson
helloPerson('Maggie', function(variable) {
    console.log(variable);
});

// arrow functions
let sumArrow = (a, b) => {
    return a + b;
}

// one-liner
let sumArrow1 = (a, b) => a + b;

console.log(sumArrow(2, 3));
console.log(sumArrow1(2, 3));

// sayHello as arrow function
let sayHelloArrow = (name) => "Hello, " + name;
console.log(sayHelloArrow('Bob'));

// arrow function w/o parameters
let hiArrow = () => {
    console.log('hi');
}