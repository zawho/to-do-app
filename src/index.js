import { newToDoButton, newListButton, addToDoButton, cancelToDoButton, cancelListButton } from "./ui";
import createToDo from "./to-dos";
import { openToDoForm, cancelToDoForm, openListForm, cancelListForm } from "./forms";

newToDoButton.addEventListener('click', openToDoForm);
newListButton.addEventListener('click', openListForm);
addToDoButton.addEventListener('click', createToDo);
cancelToDoButton.addEventListener('click', cancelToDoForm);
cancelListButton.addEventListener('click', cancelListForm);