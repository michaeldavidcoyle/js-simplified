// Create an array of the first five letters of the alphabet and print
// out the middle element of the array (c)

// const letters = ['a', 'b', 'c', 'd', 'e'];
// console.log(letters[2]);
// // could also do it this way
// console.log(letters[Math.floor(letters.length / 2)]);
//
// // Print out 4, 8 and 11 from the following array
// const a = [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15]
// ];
// console.log(a[0][3]);
// console.log(a[1][2]);
// console.log(a[2][0]);

// array methods
const array = [1, 2, 3, 4, 5];

// forEach loops through the array and does something for each element
array.forEach(item => console.log(item));

// map returns a new array with a value for each member of the original array
const array2 = array.map(number => number * 2);
console.log(array2);

// filter returns a new array with only values that meet a given condition
const filteredArray = array.filter(n => n > 3);
console.log(filteredArray);

// find returns the first element in an array that meets the given condition
const foundValue = array.find(n => n > 2);
console.log(foundValue);

// the some method returns a boolean indicating whether at least one element of the array meet the criteria
const isFour = array.some(n => n === 4);
console.log(isFour);

// reduce takes all the elements of an array and reduces them down to one value based on the callback definition
const total = array.reduce((sum, number) => sum + number, 0);
console.log(total);

// Use reduce to return the total price of all the array elements below
const items = [
    { price: 10 },
    { price: 20 },
    { price: 14 },
    { price: 1 },
    { price: 6 }
];

const totalPrice = items.reduce((total, item) => total + item.price, 0);
console.log(totalPrice);

// includes returns a boolean that tells whether the array includes a given value
const hasFive = array.includes(5);
console.log(hasFive);