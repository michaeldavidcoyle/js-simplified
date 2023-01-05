import {add, format, getDaysInMonth} from 'date-fns';

const today = new Date();
const datePickerBtn = document.querySelector('.date-picker-button');
const currentMonthHeader = document.querySelector('.current-month');
const dateButtons = document.querySelectorAll('.date');
const prevMonthBtn = document.querySelector('.prev-month-button');
const nextMonthBtn = document.querySelector('.next-month-button');
const datePickerGrid = document.querySelector('.date-picker-grid-dates');

let currentMonth;
let selectedDate = today;

datePickerBtn.innerText = format(today, 'MMMM do yyyy');
currentMonthHeader.innerText = format(today, 'MMMM - yyyy');

function makeCalendar(selectedDate) {
    currentMonth = new Month(selectedDate);
    currentMonth.setCalendar();

    for (let d = 0; d < dateButtons.length; d++) {
        let currentDate = currentMonth.calendar[d];
        dateButtons[d].innerText = currentDate.getDate();

        if (currentDate.getMonth() === currentMonth.month) {
            dateButtons[d].classList.remove('date-picker-other-month-date');
        } else {
            dateButtons[d].classList.add('date-picker-other-month-date');
        }

        if (today.getDate() === currentDate.getDate()) {
            dateButtons[d].classList.add('selected');
        } else {
            dateButtons[d].classList.remove('selected');
        }
    }
}

makeCalendar(today);

datePickerBtn.addEventListener('click', event => {
    event.target
        .closest('.date-picker-container')
        .querySelector('.date-picker')
        .classList
        .toggle('show');
});

datePickerGrid.addEventListener('click', event => {
    if (!event.target.matches('.date')) return;

    for (let d = 0; d < dateButtons.length; d++) {
        dateButtons[d].classList.remove('selected');
    }
    event.target.classList.add('selected');

    selectedDate = currentMonth.calendar[event.target.dataset.index];
    datePickerBtn.innerText = format(selectedDate, 'MMMM do yyyy');
});

prevMonthBtn.addEventListener('click', event => {
});

nextMonthBtn.addEventListener('click', event => {
    console.log('nextMonthBtn clicked');
});

function Month(selectedDate) {
    this.year = selectedDate.getFullYear();
    this.month = selectedDate.getMonth();
    this.date = selectedDate;
    this.totalDays = getDaysInMonth(selectedDate);
    this.calendar = [];
    this.prevMonth = add(selectedDate, {months: -1});
    this.nextMonth = add(selectedDate, {months: 1});
    this.weekdayStart = function () {
        return new Date(this.year, this.month, 1).getDay();
    }
    this.setCalendar = function () {
        let offset = -this.weekdayStart();
        const startDate = add(this.date, {days: -this.date.getDate() - offset++});
        while (this.calendar.length < dateButtons.length) {
            let date = add(startDate, {days: offset++});
            this.calendar.push(date);
        }
    }
}