import { newToDoButton, newListButton, listMenu, newListForm, listNameInput, projectDiv } from "./ui";

// List object.
const allLists = {
    default: [],
    other: [],
}

// Create new list.
function createList(e) {
    e.preventDefault();
    allLists[listNameInput.value] = [];
    const newListOption = document.createElement('option');
    newListOption.value = listNameInput.value;
    newListOption.innerText = listNameInput.value;
    listMenu.appendChild(newListOption);
    newListForm.style.display = 'none';
    newToDoButton.style.display = 'flex';
    newListButton.style.display = 'flex';
    console.log(allLists);
}

// Check for list name from array and menu.
function checkForList() {
    const keys = Object.keys(allLists);
    let y = '';
    keys.forEach(x => {
        if (x === listMenu.value) {
            y = x;
        }
    });
    return y;
}

// Display list.
function displayList() {
    projectDiv.id = this.className;
}

export { allLists, createList, checkForList, displayList };