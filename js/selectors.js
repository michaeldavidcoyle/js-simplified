// select element by id
const divWithId = document.getElementById('div-id');
divWithId.style.fontSize = '24px';

// select elements by class
const divsWithClass = document.getElementsByClassName('div-class');
const divsWithClassArray = Array.from(divsWithClass);
divsWithClassArray.forEach(div => div.style.color = 'red');

// querySelector returns single element
const dataAttrElement = document.querySelector('[data-test]');

const classyDiv = document.querySelector('.div-class'); // returns only first div with class
classyDiv.style.color = 'blue';

// querySelectorAll returns a node list of all matching elements
const classyDivs = document.querySelectorAll('.div-class');
console.log(classyDivs); // node list