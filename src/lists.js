import { newToDoButton, newListButton, newListForm, listNameInput } from "./ui";

// List object.
const allLists = {
    default: [],
}

// Create new list.
function createList(e) {
    e.preventDefault();
    allLists[listNameInput.value] = [];
    newListForm.style.display = 'none';
    newToDoButton.style.display = 'flex';
    newListButton.style.display = 'flex';
    console.log(allLists);
}


export { allLists, createList };