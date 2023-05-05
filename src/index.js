import toDo from "./to-do-factory";
import openToDoForm from "./to-do-form";

const newToDoButton = document.querySelector('.new-to-do-button');
newToDoButton.addEventListener('click', openToDoForm);

// Default list.
const defaultList = [];
