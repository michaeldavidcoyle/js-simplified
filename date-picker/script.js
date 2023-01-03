import { add } from 'date-fns';

const today = new Date();
console.log(add(today, {months: 1}));