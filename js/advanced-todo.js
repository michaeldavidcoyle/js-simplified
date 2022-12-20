'use strict';

const form = document.querySelector('#new-todo-form');
const todoInput = document.querySelector('#todo-input');
const list = document.querySelector('#list');
const template = document.querySelector('#list-item-template');

// Add Todos
// User will type in todo and click add todo button.
form.addEventListener('submit', event => {
    event.preventDefault();

    const todoName = todoInput.value;
    if (todoName === '') return;

    renderTodo(todoName);
    todoInput.value = '';
});

function renderTodo(todoName) {
    const templateClone = template.content.cloneNode(true);
    // console.log(templateClone);
    const textElement = templateClone.querySelector('[data-list-item-text]');
    textElement.innerText = todoName;
    list.appendChild(templateClone);
}
// This should then add the todo to the list above.
// Delete Todos
// Save Todos
// Load Todos