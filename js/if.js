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