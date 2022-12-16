'use strict';

const URL = 'https://jsonplaceholder.typicode.com/users';
// fetch(URL)
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         // Log the name of each of the users
//         data.forEach(user => console.log(user.name));
//     });

// Convert to async await
async function getUserNames() {
    const response = await fetch(URL);
    const users = await response.json();
    users.forEach(user => console.log(user.name));
}

getUserNames();

// Error handling
const URL2 = 'https://jsonplaceholder.typicode.com/users/42';
async function getUser() {
    try {
        const response = await fetch(URL2);
        if (response.ok) {
            const user = await response.json();
            console.log(user);
        } else {
            console.log('Failure');
        }
    } catch (error) {
        console.error(error);
    }
}

getUser();

async function getComments() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
    if (response.ok) {
        const comment = await response.json();
        console.log(comment);
    } else {
        console.error('Oops, something went wrong.');
    }
}

getComments();