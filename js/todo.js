// 1. Select all elements
const form = document.querySelector('#new-item-form');
const list = document.querySelector('#list');
const input = document.querySelector('#item-input');

// 2. Add new item to list on form submission
form.addEventListener('submit', event => {
    event.preventDefault();
    // console.log(input.value)

    // 1. Create a new item
    const item = document.createElement('div');
    item.innerText = input.value;
    item.classList.add('list-item');
    // console.log(item);

    // 2. Add that item to the list
    list.appendChild(item);

    // 3. Clear input
    input.value = '';

    // 4. Setup event listener to delete item when clicked
    item.addEventListener('click', () => {
        list.removeChild(item);
    })
});