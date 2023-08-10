const newToDoButton = document.querySelector('.new-to-do-button');
const newListButton = document.querySelector('.new-list-button');
const newToDoForm = document.querySelector('.new-to-do-form');
const titleInput = document.querySelector('.title-input');
const descriptionInput = document.querySelector('.description-input');
const dueDateInput = document.querySelector('.due-date-input');
const priorityInput = document.querySelector('.priority-input');
const listMenu = document.querySelector('.list-menu');
const addToDoButton = document.querySelector('.add-to-do-button');
const cancelToDoButton = document.querySelector('.cancel-to-do-button');
const newListForm = document.querySelector('.new-list-form');
const listNameInput = document.querySelector('.list-name-input');
const addListButton = document.querySelector('.add-list-button');
const cancelListButton = document.querySelector('.cancel-list-button');
const listButtonDiv = document.querySelector('.list-button-div');
const defaultListButton = document.getElementById('0-default-list');
const otherListButton = document.getElementById('1-other-list');
const projectDiv = document.querySelector('.project-div');
const listEditDiv = document.querySelector('.list-edit-div');
const editListButton = document.querySelector('.edit-list-button');
const deleteListButton = document.querySelector('.delete-list-button');

export { 
    newToDoButton,
    newListButton, 
    newToDoForm,
    newListForm, 
    titleInput, 
    descriptionInput, 
    dueDateInput, 
    priorityInput,
    listMenu, 
    addToDoButton,
    cancelToDoButton,
    listNameInput,
    addListButton,
    cancelListButton,
    listButtonDiv,
    defaultListButton,
    otherListButton, 
    projectDiv,
    listEditDiv,
    editListButton,
    deleteListButton
};