import { newToDoButton, newListButton, addToDoButton, addListButton, cancelToDoButton, 
    cancelListButton, editListButton, 
    deleteListButton } from "./ui";
import createToDo from './to-dos';
import { createList, openListEditor, deleteList } from './lists';
import { openToDoForm, cancelToDoForm, openListForm, cancelListForm } from './forms';

newToDoButton.addEventListener('click', openToDoForm);
newListButton.addEventListener('click', openListForm);
addToDoButton.addEventListener('click', createToDo);
addListButton.addEventListener('click', createList);
cancelToDoButton.addEventListener('click', cancelToDoForm);
cancelListButton.addEventListener('click', cancelListForm);
editListButton.addEventListener('click', openListEditor);
deleteListButton.addEventListener('click', deleteList);