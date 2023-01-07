import {
    add,
    format,
    startOfWeek,
    endOfWeek,
    endOfMonth,
    eachDayOfInterval,
    isSameDay,
    isSameMonth
} from 'date-fns';

const today = new Date();
const datePickerBtn = document.querySelector('.date-picker-button');
const datePicker = document.querySelector('.date-picker');
const currentMonthHeader = document.querySelector('.current-month');
const prevMonthBtn = document.querySelector('.prev-month-button');
const nextMonthBtn = document.querySelector('.next-month-button');
const datePickerGrid = document.querySelector('.date-picker-grid-dates');

let currentMonth = getCalendar(today);
let selectedDate;

makeCalendar(today);

datePickerBtn.addEventListener('click', () => {
    datePicker.classList.toggle('show');
});

datePickerGrid.addEventListener('click', event => {
    if (!event.target.matches('.date')) return;

    const dateButtons = datePickerGrid.children;
    for (let d = 0; d < dateButtons.length; d++) {
        dateButtons[d].classList.remove('selected');
    }

    event.target.classList.add('selected');

    selectedDate = currentMonth[event.target.dataset.index];
    datePickerBtn.innerText = format(selectedDate, 'MMMM do yyyy');

    datePicker.classList.remove('show');
});

prevMonthBtn.addEventListener('click', () => {
    const previousMonthDate = add(selectedDate, {months: -1});
    makeCalendar(previousMonthDate);
});

nextMonthBtn.addEventListener('click', () => {
    const nextMonthDate = add(selectedDate, {months: 1});
    makeCalendar(nextMonthDate);
});

function makeCalendar(dateSelection) {
    selectedDate = dateSelection;
    datePickerBtn.innerText = format(dateSelection, 'MMMM do yyyy');
    currentMonthHeader.innerText = format(dateSelection, 'MMMM - yyyy');
    currentMonth = getCalendar(dateSelection);
    setCalendarPage(currentMonth);
}

function setCalendarPage(currentMonth) {
    datePickerGrid.innerHTML = '';

    currentMonth.forEach((date, index) => {
        const dateElement = document.createElement('button');
        dateElement.classList.add('date');
        dateElement.setAttribute('data-index', index);
        dateElement.innerText = date.getDate();

        if (!isSameMonth(date, selectedDate)) {
            dateElement.classList.add('date-picker-other-month-date');
        }

        if (isSameDay(date, selectedDate)) {
            dateElement.classList.add('selected');
        }

        datePickerGrid.appendChild(dateElement);
    });
}

function getCalendar(inputDate) {
    const first = new Date(inputDate.getFullYear(), inputDate.getMonth(), 1);
    const monthStart = startOfWeek(first);
    const monthEnd = endOfWeek(endOfMonth(inputDate));
    return eachDayOfInterval({start: monthStart, end: monthEnd});
}