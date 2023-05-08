import toDo from "./to-do-factory";
import openToDoForm from "./to-do-form";

const newToDoButton = document.querySelector('.new-to-do-button');
const newToDoForm = document.querySelector('.new-to-do-form');
const titleInput = document.querySelector('.title-input');
const descriptionInput = document.querySelector('.description-input');
const dueDateInput = document.querySelector('.due-date-input');
const priorityInput = document.querySelector('.priority-input');
const addToDoButton = document.querySelector('.add-to-do-button');
newToDoButton.addEventListener('click', openToDoForm);

// Default list.
const defaultList = [];

function createToDo(e) {
    if (!(titleInput.value === '')) {
        e.preventDefault();
        defaultList.push(toDo(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.checked));
        newToDoForm.style.display = 'none';
        newToDoButton.style.display = 'flex';
        console.log(defaultList);
    }
}

addToDoButton.addEventListener('click', createToDo);