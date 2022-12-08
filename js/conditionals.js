// Create a variable that contains an array.
// Using an if statement with else if, check the length of the array.
// If it is empty, print out "empty".
// If it has less than 5 elements, print out "small".
// If it has less than 10 elements. print out "medium".
// Otherwise, print out "large".

const originalStates = [
    'Virginia',
    'Massachusetts',
    'Rhode Island',
    'Connecticut',
    'Delaware',
    'New Hampshire',
    'New York',
    'New Jersey',
    'Pennsylvania',
    'Maryland',
    'North Carolina',
    'South Carolina',
    'Georgia'
];

if (originalStates.length === 0) {
    console.log('empty');
} else if (originalStates.length < 5) {
    console.log('small');
} else if (originalStates.length < 10) {
    console.log('medium');
} else {
    console.log('large');
}

// ternary operator
const userLoggedIn = false;

// let messge = '';
// if (userLoggedIn) {
//     message = 'Welcome';
// } else {
//     message = 'Please log in'
// }

const message = userLoggedIn ? 'Welcome' : 'Please log in';

console.log(message);

// switch statement
const number = Math.floor(Math.random() * 6);
// Create a switch that checks the value of the number variable
// If the number is 0 print "it is zero"
// If the number is 1 or 2 print "it is small"
// If the number is 3 or 4 print "it is medium"
// If the number is 5 print "it is large"
// If the number is none of these print "try again"
console.log(number);

switch (number) {
    case 0:
        console.log('it is zero');
        break;
    case 1:
    case 2:
        console.log('it is small');
        break;
    case 3:
    case 4:
        console.log('it is medium');
        break;
    case 5:
        console.log('it is large');
        break;
    default:
        console.log('try again')
        break;
}