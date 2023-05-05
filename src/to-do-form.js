import toDo from "./to-do-factory";

const newToDoForm = document.querySelector('.new-to-do-form');
const titleInput = document.querySelector('.title-input');

function openToDoForm() {
    newToDoForm.style.display = 'flex';
}

function createToDo() {
    toDo();
   titleInput.innerText = toDo.title;
}

export  { openToDoForm, createToDo };