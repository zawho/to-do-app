import toDo from "./to-do-factory";
import { openToDoForm , createToDo } from "./to-do-form";

const newToDoButton = document.querySelector('.new-to-do-button');
const addToDoButton = document.querySelector('.add-to-do-button');
newToDoButton.addEventListener('click', openToDoForm);

// Default list.
const defaultList = [];

function test(e) {
    createToDo();
    defaultList.push(toDo);
    e.preventDefault();
    console.log(defaultList);
}

addToDoButton.addEventListener('click', test);