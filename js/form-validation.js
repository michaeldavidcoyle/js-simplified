'use strict';

// TODO: Select all elements needed
//    Use the HTML to figure out what classes/ids will work best for selecting each element
const form = document.querySelector('#form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#password-confirmation');
const terms = document.querySelector('#terms');
const errorsBox = document.querySelector('.errors');
const errorsList = document.querySelector('.errors-list');
// console.log(terms);

// TODO: Create an event listener for when the form is submitted and do the following inside of it.
form.addEventListener('submit', event => {
//    TODO: Create an array to store all error messages and clear any old error messages
    const errors = [];
    clearErrors();
//    TODO: Define the following validation checks with appropriate error messages
//      1. Ensure the username is at least 6 characters long
    if (username.value.length < 6) {
        errors.push('Usernames must be at least 6 characters.');
    }
//      2. Ensure the password is at least 10 characters long
    if (password.value.length < 10) {
        errors.push('Passwords must be at least 10 characters.')
    }
//      3. Ensure the password and confirmation password match
    if (passwordConfirmation.value !== password.value) {
        errors.push('Passwords must match.')
    }
//      4. Ensure the terms checkbox is checked
    if (!terms.checked) {
        errors.push('You must accept the terms.');
    }

//    TODO: If there are any errors then prevent the form from submitting and show the error messages
    if (errors.length > 0) {
        event.preventDefault();
        showErrors(errors);
    }
});

// TODO: Define this function
function clearErrors() {
    // Loop through all the children of the error-list element and remove them
    // IMPORTANT: This cannot be done with a forEach loop or a normal for loop since as you remove children it will modify the list you are looping over which will not work
    // I recommend using a while loop to accomplish this task
    // This is the trickiest part of this exercise so if you get stuck and are unable to progress you can also set the innerHTML property of the error-list to an empty string and that will also clear the children. I recommend trying to accomplish this with a while loop, though, for practice.
    const errorListItems = errorsList.children;
    while (errorListItems.length > 0) {
        errorsList.removeChild(errorsList.firstChild);
    }
    // Also, make sure you remove the show class to the errors container
    errorsBox.classList.remove('show');
}

// TODO: Define this function
function showErrors(errorMessages) {
    // Add each error to the error-list element
    errorMessages.forEach(error => {
    // Make sure to use a li as the element for each error
        const message = document.createElement('li');
        message.innerText = error;
        errorsList.appendChild(message);
    });
    // Also, make sure you add the show class to the errors container
    errorsBox.classList.add('show');
}