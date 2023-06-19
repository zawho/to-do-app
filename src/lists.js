import { newToDoButton, newListButton, listMenu, newListForm, listNameInput, listButtonDiv, projectDiv } from "./ui";

// List object.
const allLists = {
    default: [],
    other: [],
}

// Highlight selected list.
function highlightList() {
    const listButtonArr = Array.from(listButtonDiv.childNodes);
    for (let i = 0; i < listButtonArr.length; i++) {
        if (listButtonArr[i].className === projectDiv.id) {
            listButtonArr[i].style.border = '2px solid red';
        } else {
            listButtonArr[i].style.border = '2px solid black';
        }
    }
}

// Display List.
function displayList() {
    projectDiv.id = this.className.replaceAll(' ', '-');
    const listArr = Array.from(projectDiv.childNodes);
    for (let i = 0; i < listArr.length; i++) {
        if (listArr[i].className === projectDiv.id) {
            listArr[i].style.display = 'flex';
        } else {
            listArr[i].style.display = 'none';
        }
    }
    highlightList();
}

// Create new list.
function createList(e) {
    e.preventDefault();
    allLists[listNameInput.value] = [];
    const newListOption = document.createElement('option');
    newListOption.value = listNameInput.value;
    newListOption.innerText = listNameInput.value;
    listMenu.appendChild(newListOption);
    const newList = document.createElement('button');
    newList.className = `${listNameInput.value}`.replaceAll(' ', '-');
    newList.id = `${listNameInput.value}-list`.replaceAll(' ', '-');
    newList.innerText = listNameInput.value;
    listButtonDiv.appendChild(newList);
    newList.addEventListener('click', displayList);
    newListForm.style.display = 'none';
    newToDoButton.style.display = 'flex';
    newListButton.style.display = 'flex';
}

// Check for list name from array and menu.
function checkListMenu() {
    const keys = Object.keys(allLists);
    let selectedList = '';
    keys.forEach(x => {
        if (x === listMenu.value) {
            selectedList = x;
        }
    });
    return selectedList;
}

// Check for currently selected list from list button array.
function checkCurrentList() {
    let currentList;
    const listButtonArr = Array.from(listButtonDiv.childNodes);
    for (let i = 0; i < listButtonArr.length; i++) {
        const listStyles = window.getComputedStyle(listButtonArr[i]);
        if (listStyles.border === '2px solid rgb(255, 0, 0)') {
            currentList = listButtonArr[i].className.replaceAll('-', ' ');
        }
    }
    return currentList;
}

export { allLists, createList, checkListMenu, displayList, checkCurrentList };