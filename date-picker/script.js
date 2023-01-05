import { add, format, getDaysInMonth } from 'date-fns';

const today = new Date();
const datePickerBtn = document.querySelector('.date-picker-button');
const currentMonthHeader = document.querySelector('.current-month');
const dateButtons = document.querySelectorAll('.date');
const prevMonthBtn = document.querySelector('.prev-month-button');
const nextMonthBtn = document.querySelector('.next-month-button');

datePickerBtn.innerText = format(today, 'MMMM do yyyy');
currentMonthHeader.innerText = format(today, 'MMMM - yyyy');

let month = new Month(today);
let weekStart = month.weekdayStart();
for (let d = weekStart; d < month.totalDays; d++) {
    dateButtons[d].innerText = d + 1;
    if (today.getDate() === d + 1) {
        dateButtons[d].classList.add('selected');
    } else {
        dateButtons[d].classList.remove('selected');
    }
}

datePickerBtn.addEventListener('click', event => {
    event.target
        .closest('.date-picker-container')
        .querySelector('.date-picker')
        .classList
        .toggle('show');
});

prevMonthBtn.addEventListener('click', event => {
    console.log('prevMonthBtn clicked');
});

nextMonthBtn.addEventListener('click', event => {
    console.log('nextMonthBtn clicked');
});

function Month(selectedDate) {
    this.year = selectedDate.getFullYear();
    this.month = selectedDate.getMonth();
    this.date = selectedDate.getDate();
    this.weekdayStart = function() {
        return new Date(this.year, this.month, 1).getDay();
    }
    this.totalDays = getDaysInMonth(selectedDate);
}