import {add, format, getDaysInMonth, isSameDay} from 'date-fns';

const today = new Date();
const datePickerBtn = document.querySelector('.date-picker-button');
const currentMonthHeader = document.querySelector('.current-month');
const dateButtons = document.querySelectorAll('.date');
const prevMonthBtn = document.querySelector('.prev-month-button');
const nextMonthBtn = document.querySelector('.next-month-button');
const datePickerGrid = document.querySelector('.date-picker-grid-dates');

let currentMonth;
let selectedDate;

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
    const previousMonthDate = add(selectedDate, {months: -1});
    makeCalendar(previousMonthDate);
});

nextMonthBtn.addEventListener('click', event => {
    const nextMonthDate = add(selectedDate, {months: 1});
    makeCalendar(nextMonthDate);
});

function makeCalendar(dateSelection) {
    selectedDate = dateSelection;
    datePickerBtn.innerText = format(dateSelection, 'MMMM do yyyy');
    currentMonthHeader.innerText = format(dateSelection, 'MMMM - yyyy');

    currentMonth = new Month(dateSelection);
    setCalendarPage(currentMonth);
}

function setCalendarPage(currentMonth) {
    currentMonth.setCalendar();

    for (let d = 0; d < dateButtons.length; d++) {
        let currentDate = currentMonth.calendar[d];
        dateButtons[d].innerText = currentDate.getDate();

        if (currentDate.getMonth() === currentMonth.month) {
            dateButtons[d].classList.remove('date-picker-other-month-date');
        } else {
            dateButtons[d].classList.add('date-picker-other-month-date');
        }

        if (isSameDay(selectedDate, currentDate)) {
            dateButtons[d].classList.add('selected');
        } else {
            dateButtons[d].classList.remove('selected');
        }
    }

    if (dateButtons[35].classList.contains('date-picker-other-month-date')) {
        for (let d = 35; d < dateButtons.length; d++) {
            dateButtons[d].classList.add('extra-week');
        }
    } else {
        for (let d = 35; d < dateButtons.length; d++) {
            dateButtons[d].classList.remove('extra-week');
        }
    }
}

function Month(inputDate) {
    this.year = inputDate.getFullYear();
    this.month = inputDate.getMonth();
    this.date = inputDate;
    this.first = new Date(this.year, this.month, 1);
    this.totalDays = getDaysInMonth(inputDate);
    this.calendar = [];

    this.setCalendar = function () {
        let offset = -this.first.getDay();
        while (this.calendar.length < dateButtons.length) {
            let date = add(this.first, {days: offset++});
            this.calendar.push(date);
        }
    }
}