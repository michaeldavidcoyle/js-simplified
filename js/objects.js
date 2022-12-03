// Create an object called car with the properties:
// 1. make
// 2. model
// 3. isUsed (boolean)
// Add a function called makeNoise with log out "Vroom"

const car = {
    make: 'Honda',
    model: 'Accord',
    isUsed: true,
    makeNoise() {
        console.log('Vroom')
    }
}

console.log(car.make);
console.log(car.model);
console.log('Is my ' + car.make + ' ' + car.model + ' used? ' + car.isUsed)
car.makeNoise();

// Create an object called book with the following properties
// 1. title - string
// 2. author - object with the properties name and age
const book = {
    title: 'The Pragmatic Programmer',
    author: {
        name: 'Andrew Hunt',
        age: 42
    }
}

console.log(book.title); // The Pragmatic Programmer
console.log(book.year) // undefined