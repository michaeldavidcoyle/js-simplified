import { add, format } from 'date-fns';

const today = new Date();
const dateBtn = document.querySelector('.date-picker-button');
dateBtn.innerText = format(today, 'MMMM do yyyy');

dateBtn.addEventListener('click', event => {
    event.target.closest('.date-picker-container').querySelector('.date-picker').classList.toggle('show');
})