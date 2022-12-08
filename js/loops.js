// for loop
// Create a for loop that loops from 0 to 10 and prints out all values from 0 to 10
console.log('for loop 0 to 10');
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// Modify this loop and exit the loop when the value is equal to 5 by using break
console.log('for loop 0 to 10 w/ break at 5');
for (let i = 0; i <= 10; i++) {
    if (i === 5) break;
    console.log(i);
}

// while loop
console.log('while loop like for loop')
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// example use case
console.log('while loop use case: nested objects')
const person = {
    name: 'Kyle',
    friend: {
        name: 'Joe',
        friend: {
            name: 'Sally'
        }
    }
}

let currentPerson = person;
while (currentPerson != null) {
    console.log(currentPerson.name);
    currentPerson = currentPerson.friend;
}

// recursion
console.log('recursive counting');
function printNumber(number) {
    if (number > 10) return;
    console.log(number);
    printNumber(number + 1)
}

printNumber(1);


function sumNumbersBelow(number) {
    if (number <= 0) return 0;
    return number + sumNumbersBelow(number - 1);
}

console.log('recursive sum')
console.log(sumNumbersBelow(10));

// Convert the while loop with the nested objects into a recursive function
function printName(person) {
    if (person == null) return;
    console.log(person.name);
    printName(person.friend);
}

printName(person);