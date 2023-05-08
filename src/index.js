import { newToDoButton, addToDoButton } from "./ui";
import createToDo from "./to-do-factory";
import openToDoForm from "./to-do-form";

newToDoButton.addEventListener('click', openToDoForm);
addToDoButton.addEventListener('click', createToDo);