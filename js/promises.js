'use strict';

// setTimeout(() => {
//     console.log('1');
//     setTimeout(() => {
//         console.log('2');
//         setTimeout(() => {
//             console.log('3');
//         }, 1000);
//     }, 1000);
// }, 1000);
function setTimeoutPromise(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    });
}

setTimeoutPromise(1000).then(() => {
    console.log('promise 1');
    return setTimeoutPromise(1000);
}).then(() => {
    console.log('promise 2');
    return setTimeoutPromise(1000);
}).then(() => {
    console.log('promise 3');
});

// Create a promise version of addEventListener
const button = document.querySelector('button');

function addEventListenerPromise(element, method) {
    return new Promise((resolve, reject) => {
        element.addEventListener(method, resolve);
    });
}

addEventListenerPromise(button, 'click').then(e => {
    console.log('clicked');
    console.log(e)
});

// multiple promises
// .all only calls .then if everything succeeds
Promise.all([
    Promise.resolve('all 1'),
    Promise.resolve('all 2'),
    Promise.resolve('all 3')
]).then(messages => {
    console.log(messages);
}).catch(error => {
    console.error(error);
});

// .any calls .then on first successful promise
Promise.any([
    Promise.reject('Error on 1'),
    Promise.resolve('all 2'),
    Promise.resolve('all 3')
]).then(messages => {
    console.log(messages);
}).catch(error => {
    console.error(error);
});

// Promise.race gets first to finish, resolve or reject
// Promise.allSettled outputs and array of objects with reason and status (resolved or rejected) properties

// finally
const promise = Promise.resolve('here');

promise
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.error(error);
    })
    // executes regardless of success or failure
    .finally(() => {
        console.log("That's all folks.");
    });