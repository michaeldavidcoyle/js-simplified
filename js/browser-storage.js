'use strict';

// browser storage
// _______________________________________________________
// local storage | cookies           | session storage
// 10MB          | 4KB               | 5MB
// never expires | manual expiration | expire on tab close
// client        | client/server     | client
// easy          | hard              | easy

// local storage
// persists across all tabs in the browser
localStorage.setItem('Name', 'Michael');
console.log(localStorage.getItem('Name'));
localStorage.removeItem('Name');

// session storage
// is deleted on tab close
sessionStorage.setItem('Age', '48');

// cookies
const date = new Date(9999, 0, 1).toUTCString();
document.cookie = `name=Michael; expires=${date}`;
document.cookie =  `age=48; expires=${date}`;
console.log(document.cookie);

// to delete a cookie just set key = empty value and expires to a past date
const pastDate = new Date(1999, 0, 1).toUTCString();
document.cookie = `name=; expires=${pastDate}`;
console.log(document.cookie);