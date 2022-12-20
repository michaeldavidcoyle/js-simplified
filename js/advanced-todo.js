'use strict';

const form = document.querySelector('#new-todo-form');
const todoInput = document.querySelector('#todo-input');
const list = document.querySelector('#list');
const template = document.querySelector('#list-item-template');
const todos = [];
const LOCAL_STORAGE_PREFIX = 'ADVANCED_TODO_LIST';
const TODOS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-todos`;

// Add Todos
// User will type in todo and click add todo button.
form.addEventListener('submit', event => {
    event.preventDefault();

    const todoName = todoInput.value;

    if (todoName === '') return;

    todos.push(todoName);
    renderTodo(todoName);
    saveTodos();
    todoInput.value = '';
});

function renderTodo(todoName) {
    const templateClone = template.content.cloneNode(true);
    // console.log(templateClone);
    const textElement = templateClone.querySelector('[data-list-item-text]');
// Add the todo to the list above.
    textElement.innerText = todoName;
    list.appendChild(templateClone);
}

// Save Todos
function saveTodos() {
    localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
}
// Delete Todos
// Load Todos