'use strict';

// const buttons = document.querySelectorAll('button');
//
// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         console.log('Button clicked');
//     });
// });
//
// // Above works as expected, but if we add a new button:
// const newButton = document.createElement('button');
// newButton.innerText = 'Button 5';
// document.body.appendChild(newButton); // This new button does not work because it didn't exist when we called querySelectorAll

// Using event delegation to get around this:
document.addEventListener('click', event => {
    if (event.target.matches('button')) {
        console.log('Button clicked');
    }
})

const nextButton = document.createElement('button');
nextButton.innerText = 'Button 5';
document.body.appendChild(nextButton); // This new button works just like all the others