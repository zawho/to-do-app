import { newToDoButton, newListButton, addToDoButton, addListButton, cancelToDoButton, cancelListButton, defaultListButton, otherListButton } from "./ui";
import createToDo from './to-dos';
import { createList, displayList} from './lists';
import { openToDoForm, cancelToDoForm, openListForm, cancelListForm } from './forms';

newToDoButton.addEventListener('click', openToDoForm);
newListButton.addEventListener('click', openListForm);
addToDoButton.addEventListener('click', createToDo);
addListButton.addEventListener('click', createList);
cancelToDoButton.addEventListener('click', cancelToDoForm);
cancelListButton.addEventListener('click', cancelListForm);
defaultListButton.addEventListener('click', displayList);
otherListButton.addEventListener('click', displayList);