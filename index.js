import { list } from './shoplist.js';
import { renderList } from "./render.js";


const formElement = document.querySelector('.newitem-form');
formElement.addEventListener('submit', (e) => {
  e.preventDefault();

  const nameInput = document.querySelector('#input-name');
  const amountInput = document.querySelector('#input-amount');
  const newItem = {
    name: nameInput.value,
    amount: amountInput.value,
    bought: false,
  };
  list.push(newItem);
  renderList();

  nameInput.value = '';
  amountInput.value = '';
});

renderList();
