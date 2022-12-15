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
    .finally(() => { // executes regardless of success or failure
        console.log("That's all folks.");
    });

// async / await
async function doStuff() {
    await setTimeoutPromise(4000);
    console.log('You just waited four seconds.')
}

doStuff();

// error handling
async function doMoreStuff() {
    try {
        await setTimeoutPromise(5000);
        console.log('After all this time, success.');
    } catch (error) {
        console.error('Oops, something went wrong.');
    }
}

doMoreStuff();

// Call the function getValueWithDelay twice and print out the returned value
// Then call getValueWithDelay and make sure that the error is properly caught.
function getValueWithDelay(value, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value);
        }, delay);
    });
}

function getValueWithDelayError(value, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Error');
        }, delay);
    });
}

async function logStuff() {
    try {
        const v1 = await getValueWithDelay('May the Force be with you.', 1000);
        console.log(v1);
        const v2 = await getValueWithDelay('Feliz Navidad', 2000);
        console.log(v2);
        const v3 = await getValueWithDelayError("I'm gonna make him an offer he can't refuse.", 3000);
        console.log(v3);
    } catch (error) {
        console.error('No dice.');
    } finally {
        console.log('The End');
    }
}

logStuff();
