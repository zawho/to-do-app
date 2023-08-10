import { newToDoButton, newListButton, addToDoButton, addListButton, cancelToDoButton, 
    cancelListButton, defaultListButton, otherListButton, editListButton, 
    deleteListButton } from "./ui";
import createToDo from './to-dos';
import { createList, displayList, openListEditor, deleteList } from './lists';
import { openToDoForm, cancelToDoForm, openListForm, cancelListForm } from './forms';

newToDoButton.addEventListener('click', openToDoForm);
newListButton.addEventListener('click', openListForm);
addToDoButton.addEventListener('click', createToDo);
addListButton.addEventListener('click', createList);
cancelToDoButton.addEventListener('click', cancelToDoForm);
cancelListButton.addEventListener('click', cancelListForm);
defaultListButton.addEventListener('click', displayList);
otherListButton.addEventListener('click', displayList);
editListButton.addEventListener('click', openListEditor);
deleteListButton.addEventListener('click', deleteList);