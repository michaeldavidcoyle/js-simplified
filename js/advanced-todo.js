'use strict';

const form = document.querySelector('#new-todo-form');
const todoInput = document.querySelector('#todo-input');
const list = document.querySelector('#list');
const template = document.querySelector('#list-item-template');
const LOCAL_STORAGE_PREFIX = 'ADVANCED_TODO_LIST';
const TODOS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-todos`;
let todos = loadTodos();
todos.forEach(renderTodo);

list.addEventListener('change', event => {
    if (!event.target.matches('[data-list-item-checkbox]')) return;

    // Get the todo that is clicked
    const parent = event.target.closest('.list-item');
    const todoId = parent.dataset.todoId;
    const todo = todos.find(t => t.id === todoId);
    // toggle the complete property to be equal to the checkbox value
    todo.complete = event.target.checked;
    // Save our update todo
    saveTodos();
});

list.addEventListener('click', event => {
   if (!event.target.matches('[data-button-delete]')) return;

    const parent = event.target.closest('.list-item');
    const todoId = parent.dataset.todoId;
    parent.remove();

    todos = todos.filter(todo => todo.id !== todoId);
    saveTodos();
});

// Add Todos
// User will type in todo and click add todo button.
form.addEventListener('submit', event => {
    event.preventDefault();

    const todoName = todoInput.value.trim();

    if (todoName === '') {
        todoInput.value = '';
        return;
    }

    const todo = {
        name: todoName,
        complete: false,
        id: Date.now().toString()
    }

    todos.push(todo);
    renderTodo(todo);
    saveTodos();
    todoInput.value = '';
});

function renderTodo(todo) {
    const templateClone = template.content.cloneNode(true);
    const listItem = templateClone.querySelector('.list-item');
    listItem.dataset.todoId = todo.id;
    // console.log(templateClone);
    const textElement = templateClone.querySelector('[data-list-item-text]');
    textElement.innerText = todo.name;
    const checkbox = templateClone.querySelector('[data-list-item-checkbox]');
    checkbox.checked = todo.complete;
    list.appendChild(templateClone);
}

// Save Todos
function saveTodos() {
    localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
}
// Delete Todos
// Load Todos
function loadTodos() {
    const todosString = localStorage.getItem(TODOS_STORAGE_KEY);
    return JSON.parse(todosString) || [];
}