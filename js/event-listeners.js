const btn = document.querySelector('[data-btn]');
const input = document.querySelector('[data-input-text]');

function clickHandler(event) {
    let h = Math.floor(Math.random() * 360),
        s = Math.floor(Math.random() * 100),
        l = Math.floor(Math.random() * 100)
    document.body.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
    console.log('button clicked');
    console.log(event);
    // event.target.removeEventListener('click', clickHandler);
}

btn.addEventListener('click', clickHandler);

input.addEventListener('input', event => {
    console.log(event.target.value);
});

const form = document.querySelector('[data-form]');
form.addEventListener('submit', event => {
    event.preventDefault();
    console.log('submitted form');
});

// Add an anchor tag to the HTML, prevent default when it is clicked and log something to the console
const anchor = document.querySelector('[data-anchor]');
anchor.addEventListener('click', event => {
    event.preventDefault();
    console.log('No dice!');
});

// a difference between arrow functions and normal functions
const btn2 = document.querySelector('[data-btn-2]');
btn2.addEventListener('click', event => {
    console.log('Arrow This:');
    console.log(this); // window
});

btn2.addEventListener('click', function(event) {
    console.log('Function This:');
    console.log(this); // button
});