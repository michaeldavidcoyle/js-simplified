// select grandparent div
const grandParent = document.querySelector('#grand-parent');
grandParent.style.color = 'red';

// select first child of grandParent
const parentOne = grandParent.children[0];
parentOne.style.color = 'blue';

// select parentOne sibling
const parent2 = parentOne.nextElementSibling;
parent2.style.color = 'hsl(222, 75%, 75%)';

// select starting with child element
// child by id
const childOne = document.querySelector('#child-one');
childOne.style.color = 'green';

// select parent of childOne
const parentUno = childOne.parentElement;
parentUno.style.background = '#eee';

// select next parent up
const grandParent2 = parentUno.parentElement;
grandParent2.style.fontStyle = 'italic';

// closest
const grandDaddy = childOne.closest('.outer-div');
grandDaddy.style.fontFamily = 'sans-serif';

// querySelectorAll may be used on any element, not just the document
const children = grandParent.querySelectorAll('.grandchildren');
children.forEach(child => {child.style.background = '#ddd'});