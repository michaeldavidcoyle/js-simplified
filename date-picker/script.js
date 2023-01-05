import { add, format, getDaysInMonth } from 'date-fns';

const today = new Date();
const dateBtn = document.querySelector('.date-picker-button');
dateBtn.innerText = format(today, 'MMMM do yyyy');

const currentMonthHeader = document.querySelector('.current-month');
const dateButtons = document.querySelectorAll('.date');

dateBtn.addEventListener('click', event => {
    event.target.closest('.date-picker-container').querySelector('.date-picker').classList.toggle('show');
    currentMonthHeader.innerText = format(today, 'MMMM - yyyy');
    let month = new Month(today);
    const weekStart = month.weekdayStart();
    for (let d = weekStart; d < month.totalDays; d++) {
        dateButtons[d].innerText = d + 1;
        if (today.getDate() === d + 1) {
            dateButtons[d].classList.add('selected');
        } else {
            dateButtons[d].classList.remove('selected');
        }
    }
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