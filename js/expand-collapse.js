'use strict';

// TODO: add click listeners to expand/collapse buttons
document.addEventListener('click', event => {
    if (!event.target.matches('.expand-button')) return;

    console.log('expand/collapse clicked');
});
// TODO: add show class to cards when expand is clicked
// TODO: toggle button innerText when clicked
// TODO: remove show class when collapse is clicked