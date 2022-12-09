// short circuit evaluation
// evaluates to true w/o error because JS never reads the right side
// true or anything-else is always true
let shortCircuitOr = true || floobsnarb;
console.log(shortCircuitOr);

// evaluates to false w/o error, again because JS doesn't bother with the right side
let shortCircuitAnd = false && gooneyGooGoo;
console.log(shortCircuitAnd);

// another example
function printTrue() {
    console.log('true');
    return true;
}

function printFalse() {
    console.log('false');
    return false;
}

printTrue() || printFalse(); // logs only true, printFalse is never called
printFalse() && printTrue(); // logs only false, printTrue is not called

// assigning default value using logical or
function sayHello(name) {
    // if (name == null) {
    //     name = 'World';
    // }
    name = name || 'World';
    console.log('Hello, ' + name);
}

sayHello(); // Hello, World
sayHello('Bob'); // Hello, Bob

// checking for null valuse using logical and
const person1 = {
    address: {
        street: 'Main St'
    }
}

console.log(person1 && person1.address && person1.address.street); // Main St

const person2 = {
    address: null
}

console.log(person2.address.street); // TypeError: Cannot read properties of null
console.log(person2 && person2.address && person2.address.street); // null (no error)
