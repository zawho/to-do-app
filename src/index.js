import toDo from "./to-do-factory";
import openToDoForm from "./to-do-form";

const newToDoButton = document.querySelector('.new-to-do-button');
const addToDoButton = document.querySelector('.add-to-do-button');
const titleInput = document.querySelector('.title-input');
newToDoButton.addEventListener('click', openToDoForm);

// Default list.
const defaultList = [];

function test(e) {
    if (!(titleInput.value === '')) {
        e.preventDefault();
        defaultList.push(toDo(titleInput.value));
        console.log(defaultList);
    }
}

addToDoButton.addEventListener('click', test);