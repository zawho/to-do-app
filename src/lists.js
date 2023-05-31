import { newToDoButton, newListButton, listMenu, newListForm, listNameInput, listButtonDiv, projectDiv } from "./ui";

// List object.
const allLists = {
    default: [],
    other: [],
}

// Display List.
function displayList() {
    projectDiv.id = this.className;
    const listArr = Array.from(projectDiv.childNodes);
    for (let i = 0; i < listArr.length; i++) {
        if (listArr[i].className === projectDiv.id) {
            listArr[i].style.display = 'flex';
        } else {
            listArr[i].style.display = 'none';
        }
    }
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
    newList.className = `${listNameInput.value}`;
    newList.id = `${listNameInput.value}-list`.replaceAll(' ', '-');
    newList.innerText = listNameInput.value;
    listButtonDiv.appendChild(newList);
    newList.addEventListener('click', displayList);
    newListForm.style.display = 'none';
    newToDoButton.style.display = 'flex';
    newListButton.style.display = 'flex';
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

export { allLists, createList, checkForList, displayList };