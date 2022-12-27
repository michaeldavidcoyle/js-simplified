'use strict';

document.addEventListener('click', event => {
    if (!event.target.matches('.expand-button')) return;

    // console.log('expand/collapse clicked');
    const button = event.target;
    const cardBody = button.closest('.card').querySelector('.card-body');
    cardBody.classList.toggle('show');
    button.innerText = button.innerText === 'Expand' ? 'Collapse' : 'Expand';
});
