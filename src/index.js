import { newToDoButton, addToDoButton, cancelToDoButton } from "./ui";
import createToDo from "./to-do-factory";
import { openToDoForm, cancelToDoForm } from "./to-do-form";

newToDoButton.addEventListener('click', openToDoForm);
addToDoButton.addEventListener('click', createToDo);
cancelToDoButton.addEventListener('click', cancelToDoForm)